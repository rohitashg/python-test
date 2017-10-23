from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.hashers import make_password
from django.shortcuts import render, redirect, render_to_response
from django.http import HttpResponse
from django.utils import timezone
from django.contrib.auth.models import User
import json
# from Api import common, users
from web.forms import ForgotPasswordAdminForm,AdminSetPasswordForm
from django.conf import settings
from kiwitech import util
#import datetime
from datetime import datetime
from django.contrib.auth.decorators import login_required
import base64
import random, string
from django.contrib import messages
from django.db.models import Q
# from Web import send_mail_template
import re
from django.contrib.auth import get_user_model
# from Api.models import States, Group, PropertyType, UserAdmins
# from Api.users import email_confirm_admin
from django.http import JsonResponse
#from django.utils.datastructures import MultiValueDictKeyError
User = get_user_model()

def randomword(length):
    return ''.join(random.choice(string.lowercase) for i in range(length))



def admin_forgot_password(request):
    validated = 0
    is_phone = 0;
    if request.user.is_authenticated():
        return redirect('/web/user_dashboard')
    elif request.method == 'POST':
        form = ForgotPasswordAdminForm(request.POST)
        if form.is_valid():
            username = request.POST['username']
            user_object = User.objects.get(Q(email=username) | Q(mobile_no=username))
            to_email = user_object.email
            to_phone = str(user_object.country_code) + str(user_object.mobile_no)

            user_object = User.objects.filter(Q(email=username) | Q(mobile_no=username))
            code = generate_code()
            # logic to update DB
            update_data = dict()
            update_data['expire_time'] = timezone.now() + timezone.timedelta(minutes=30)
            update_data['forgot_code'] = code  # its means email is verfied
            user_object.update(**update_data)
            # send mail if email provided or send sms
            checkNumber = all_numbers(form, username)
            if checkNumber:
                set_phone = to_phone;
                message = util.message_key[18] + str(code)
                obj = common.phone_sms(set_phone, message)
                is_phone = 1;
            else:
                email_data = {'subject': util.email_subject[2], 'to_email': to_email,
                              'body_content': " ",
                              'code': code,
                              }
                send_mail_template.common_email_send(email_data, 'email/forgot.html')
            validated = 1
    else:
        form = ForgotPasswordAdminForm()
        validated = 0
    return render(request, 'admin_authentication/forgot_password.html', {'form': form, 'validated': validated,'is_phone':is_phone})

@csrf_exempt
def admin_resend_forgot_code(request):
    validated = 0
    is_phone = 0;
    if request.user.is_authenticated():
        return redirect('/administrator/user_dashboard')
    elif request.method == 'GET':
            username = request.GET.get('email')
            user_object = User.objects.get(Q(email=username) | Q(mobile_no=username))
            to_email = user_object.email
            to_phone = str(user_object.country_code) + str(user_object.mobile_no)
            code = generate_code()
            User.objects.filter(id=int(user_object.id)).update(
                expire_time=timezone.now() + timezone.timedelta(minutes=30),
                forgot_code = code
            )
            #send mail if email provided or send sms
            checkNumber = resend_all_numbers(username)
            if checkNumber:
                set_phone = to_phone;
                message = util.message_key[18] + str(code)
                obj = common.phone_sms(set_phone, message)
                is_phone = 1;
            else:
                email_data = {'subject': util.email_subject[2], 'to_email': to_email,
                              'body_content': " ",
                              'code': code,
                              }
                send_mail_template.common_email_send(email_data, 'email/forgot.html')
            validated = 1
    return HttpResponse(validated)


def admin_new_password(request,mobile_code):
    curr_time = timezone.now()
    user_object = User.objects.get(Q(expire_time__gt=curr_time) & Q(forgot_code=mobile_code))
    validated = 0
    if request.method == 'POST':
        form = AdminSetPasswordForm(user_object, request.POST)
        if form.is_valid():
            user = form.save()
            user_up = User.objects.filter(id=user_object.id)
            # logic to update DB
            update_data = dict()
            update_data['expire_time'] = None
            update_data['forgot_code'] = None  # its means email is verfied
            user_up.update(**update_data)
            return redirect('/administrator/#password_changed=1')
            validated = 1
        else:
            messages.error(request, 'Please correct the error below.')
            validated = 0
    else:
        form = AdminSetPasswordForm(user_object)
    return render(request, 'admin_authentication/admin_new_password.html', {
        'form': form, 'validated': validated
    })
def generate_code():
    code = random.randint(1000, 9999);
    code_found = User.objects.filter(mobile_code=code)
    if code_found:
        generate_code()
    else:
        return code

def all_numbers(self, st):
    pattern = re.compile("^[0-9]+$")
    check = re.match(pattern, st)
    if check == None:
        return 0
    else:
        return 1

def resend_all_numbers(st):
    pattern = re.compile("^[0-9]+$")
    check = re.match(pattern, st)
    if check == None:
        return 0
    else:
        return 1

def check_email(request):
    if request.method == 'GET':
        email = request.GET.get('email')
        check_email = User.objects.filter(email=email).count()
        if check_email > 0:
            res = 'false'
        else:
            res = 'true'

        return HttpResponse(res)

def check_admin_email(request):
    if request.method == 'GET':
        email = request.GET.get('email_admin')
        check_email = User.objects.filter(email=email).count()
        if check_email > 0:
            res = 'false'
        else:
            res = 'true'

        return HttpResponse(res)


def resend_email(request):
    if request.method == 'GET':
        email = request.GET.get('email')
        user_id = request.GET.get('user_id')
        template = 'email/confirm_web.html'
        #res = email_confirm(email, user_id,template)
        res = 'pass'
        return HttpResponse(res)

def check_admin_mobile_code(request):
    if request.method == 'GET':

        mobile_code = request.GET.get('mobile_code')
        if (mobile_code.isdigit()):
            res = 'true'
        else:
            res = 'false'
            return HttpResponse(res)

        curr_time = timezone.now()
        code_exist = User.objects.filter(expire_time__gt = curr_time, forgot_code = mobile_code).count()
        if not code_exist :
            res= 'false'
        else :
            user_object = User.objects.get(expire_time__gt = curr_time, forgot_code = mobile_code)
            # logic to login using current object
            # login(request, user_object)
            res = 'true'
    return HttpResponse(res)