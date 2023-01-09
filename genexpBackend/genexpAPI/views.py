from django.shortcuts import render
from rest_framework.views import APIView
from django.contrib.auth.models import User
from rest_framework.response import Response



# Create your views here.
class SignupView(APIView):
    def post(self,request):
        username=request.data.get('username')
        email=request.data.get('email')
        password=request.data.get('password')
        password2=request.data.get('password2')

        if(password==password2):
            if User.objects.filter(email=email).exists():
                return Response({'error':'Email taken'})
            elif User.objects.filter(username=username).exists():
                return Response({'error':'Username taken'})
            else:
                user=User.objects.create_user(username=username,email=email,password=password)
                user.save()
                return Response({'token':'abc123'})
        else:
            return Response({'error':'Passwords not matching'})
        