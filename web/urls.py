# URLconf
from django.conf.urls import url
from django.contrib.auth import views as auth_views
from web import views
from . import views,authentication
from web.forms import LoginForm

urlpatterns = [
    url(r'^$', auth_views.login,
        {'template_name': 'web/login.html', 'redirect_authenticated_user': True,
         'authentication_form': LoginForm}, name='login'),
    url(r'^dashboard', views.dashboard, name='dashboard')
]
