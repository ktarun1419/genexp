from django.urls import path
from genexpAPI.views import *

urlpatterns = [
    path('signup/',SignupView.as_view(),name='signup'),
    path('login/',LoginView.as_view(),name='login'),
    path('profile/',ProfileView.as_view(),name='profile'),
    path('profile/<str:tk>',ProfileView.as_view(),name='profile'),
]
