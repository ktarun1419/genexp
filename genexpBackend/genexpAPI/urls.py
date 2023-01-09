from django.urls import path
from genexpAPI.views import *

urlpatterns = [
    path('genexp/signup/',SignupView.as_view(),name='signup'),

]
