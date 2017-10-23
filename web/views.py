# coding=utf-8
from django.shortcuts import render
from django.contrib.auth.decorators import permission_required
from django.http import HttpResponse
# Create your views here.
from django.contrib.auth.decorators import login_required, permission_required
from django.utils.decorators import method_decorator
from django.contrib.auth import login, authenticate
from django.contrib.auth.forms import UserCreationForm
from django.shortcuts import redirect
from kiwitech import util
from django.conf import settings
from django.utils import timezone
from django.contrib.auth import get_user_model
User = get_user_model()


@login_required(login_url="/web/login/")
def dashboard(request):
    return render(request, 'web/index.html',
                  {'roles': ''})
@login_required(login_url="/web/login/")
def admin_under_construction(request):
    page = request.GET.get('page', '')
    if page == '1':
        return render(request, 'under_construction/admin_under_construction.html', {'menu_page': 'dashboard'})
    elif page == '2':
        return render(request, 'under_construction/admin_under_construction.html', {'menu_page': 'users'})
    else:
        return render(request, 'under_construction/admin_under_construction.html', {'menu_page': 'other'})