from django import forms
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm,SetPasswordForm
from django.contrib.auth.models import User
from django.contrib.auth import get_user_model, authenticate
from django.http import HttpResponseRedirect
from django.core.exceptions import ValidationError
from kiwitech import util
from django.conf import settings
import requests
from django.db.models import Q
from django.core.validators import RegexValidator
import re
from django.contrib.auth import password_validation

User = get_user_model()

class LoginForm(AuthenticationForm):
    username = forms.CharField(max_length=256, required=False, widget=forms.TextInput(attrs={'class': 'validate','autocomplete':'off'}))
    password = forms.CharField(required=False, widget=forms.PasswordInput(attrs={'class': 'validate','autocomplete':'off'}))
    remember_me = forms.CharField(required=False,
                                  widget=forms.CheckboxInput(attrs={'class': 'filled-in', 'id': 'filled-in-box'}))

    class Meta:
        model = User
        fields = ('__all__')

    error_messages = {
        'invalid_login': "Password didn't match."
    }

    def clean_username(self):
        username = self.cleaned_data['username']
        check_user_name = User.objects.filter((Q(email=username) | Q(mobile_no=username)) & Q(is_staff=1)).first()
        if not check_user_name :
            raise ValidationError("Invalid username or password.")
        elif(check_user_name.is_active ==0):
            raise ValidationError("Your account is deactivate.")
        else:
           return username

    def clean_password(self):
        password = self.cleaned_data['password']
        if (len(password) < 6):
            raise ValidationError("Password needs to be atleast 6 characters long.")
        return password

    def clean(self):

        username = self.cleaned_data.get('username')
        password = self.cleaned_data.get('password')

        if username and password:
            self.user_cache = authenticate(username=username, password=password)
            if self.user_cache is None:
                self.add_error("password", "Password doesn't match.")
            else:
                self.confirm_login_allowed(self.user_cache)
        return self.cleaned_data

    def clean_remember_me(self):

        remember_me1 = self.cleaned_data.get('remember_me')
        remember_me = str(remember_me1)
        if remember_me == 'False':
            settings.SESSION_EXPIRE_AT_BROWSER_CLOSE = True
        else:
            self.request.session.set_expiry(99560000)
            settings.SESSION_EXPIRE_AT_BROWSER_CLOSE = False
        return remember_me

class ForgotPasswordAdminForm(forms.Form):
    username = forms.CharField(max_length=254, label='', widget=forms.TextInput(attrs={'class': 'validate','autocomplete':'off'}),
                               required=False)

    class Meta:
        model = User
        fields = ('username')

    def clean_username(self):
        username = self.cleaned_data.get('username')

        checkEmail = self.validEmail(username)
        checkPhone = self.validPhone(username)
        checkNumber = self.all_numbers(username)
        checkNumber
        if not (checkEmail | checkPhone):
            if checkNumber:
                raise ValidationError("Email/Phone no. doesn't exist.")
            else:
                raise ValidationError("Email/Phone no. doesn't exist.")
            raise ValidationError("Email/Phone no. doesn't exist.")
        try:
            user_found = User.objects.get((Q(email=username) | Q(mobile_no=username)) & Q(is_superuser=1))
        except:
            user_found = None
        if not user_found:
            raise ValidationError("Email/Phone no. doesn't exist.")
        return username

    def validEmail(self, st):
        pattern = re.compile("(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)")
        check = re.match(pattern, st)
        if check == None:
            return 0
        else:
            return 1

    def validPhone(self, st):
        pattern = re.compile("^[0-9]{10,10}$")
        check = re.match(pattern, st)
        if check == None:
            return 0
        else:
            return 1

    def all_numbers(self, st):
        pattern = re.compile("^[0-9]+$")
        check = re.match(pattern, st)
        if check == None:
            return 0
        else:
            return 1

class AdminSetPasswordForm(SetPasswordForm):
    new_password1 = forms.CharField(
        widget=forms.PasswordInput(attrs={'class':'validate strongPasswordAdmin','id':'new_password1'}),
        strip=False,
        help_text=password_validation.password_validators_help_text_html(),
    )
    new_password2 = forms.CharField(
        strip=False,
        widget=forms.PasswordInput(attrs={'class':'validate'}),
    )
