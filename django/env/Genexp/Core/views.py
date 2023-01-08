from django.shortcuts import render
from django.contrib.auth.models import User,Group
from rest_framework import viewsets
from rest_framework import permissions
from .serializer import *
from django.contrib.auth import authenticate, login
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView
from.models import *
# Create your views here.

class UserViewSet (viewsets.ModelViewSet):
    #Api endpoint that allows user to be viewed or edited

    queryset=User.objects.all().order_by('-date_joined')
    serializer_class=UserSerializer
    permission_classes=[permissions.IsAuthenticated]


class GroupViewSet(viewsets.ModelViewSet):
    '''
    API endpoint that allows groups to be viewed or edited
    '''
    queryset=Group.objects.all()
    serializer_class=GroupSerializer
    permission_classes=[permissions.IsAuthenticated]

class LoginView(APIView):
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return Response({'token':user.email},status=200)
        else:
            return Response({'error': 'Invalid username or password'}, status=401)

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
        
class JobListView(ListAPIView):
    queryset=Job.objects.all()
    serializer_class=JobSerializer
# Create your views here.
