# URLconf
from django.conf.urls import url
from django.contrib.auth import views as auth_views
from Administrator import views,users,properties
from . import views,authentication
from Administrator.forms import LoginAdminForm

urlpatterns = [
    url(r'^$', auth_views.login,
        {'template_name': 'web/login.html', 'redirect_authenticated_user': True,
         'authentication_form': LoginForm}, name='front_login'),
    url(r'^dashboard', views.dashboard, name='dashboard')
]
