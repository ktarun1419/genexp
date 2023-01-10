from django.urls import path
from genexpAPI.views import *

urlpatterns = [
    path('signup/',SignupView.as_view(),name='signup'),

]
