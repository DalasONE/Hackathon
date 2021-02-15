"""BestApp URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from pull import views
from django.urls import path,include
from django.conf import settings
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.conf.urls.static import static
urlpatterns = [
    path('api/register',views.Authc),
    path('api/get-user-info',views.GetUser),
    path('api/start-quest',views.start_quest),
    path('api/get-country-info',views.StranaR),
    path('api/check-quest',views.check_quest),
    path('api/get-leaders-list/',views.LeaderBoard),
    path('api/get-contacts-list',views.Contacts),
    path('apt/add-contact',views.GetContact),
    path('api/checkAuth',views.checkAuth),
    path('api/login',views.login),
    path('app/',views.app),
    path('auth/',views.auth),
    path('',views.intro),
    path('help/',views.help),
    path('admin/', admin.site.urls),
]

