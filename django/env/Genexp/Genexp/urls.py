"""Genexp URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
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
from django.urls import include,path
from rest_framework import routers
from Core import views

router=routers.DefaultRouter()
router.register(r'users',views.UserViewSet)
router.register(r'groups',views.GroupViewSet)
# router.register(r'Login',views.LoginView)
# router.register(r'signup',views.SignupView)



urlpatterns = [
    path('',include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('admin/', admin.site.urls),
    path('api/login',views.LoginView.as_view(),name='login'),
    path('api/signup',views.SignupView.as_view(),name='signup'),
    path('api/jobs',views.JobListView.as_view(),name="Jobs")
]