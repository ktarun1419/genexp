from django.urls import path
from genexpAPI.views import *

urlpatterns = [
    path('signup/',SignupView.as_view(),name='signup'),
    path('login/',LoginView.as_view(),name='login'),
]
