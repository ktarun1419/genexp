from rest_framework.views import APIView
from django.contrib.auth.models import User
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate
from .models import Profile
from .serializer import *
from rest_framework.generics import ListAPIView



# Create your views here.
class SignupView(APIView):
    def post(self,request):
        username=request.data.get('username')
        email=request.data.get('email')
        password=request.data.get('password')
        password2=request.data.get('password2')

        if(password==password2):
            if User.objects.filter(email=email).exists():
                return Response({'emailExist':'Email taken'})
            elif User.objects.filter(username=username).exists():
                return Response({'usernameExist':'Username taken'})
            else:
                user=User.objects.create_user(username=username,email=email,password=password)
                user.save()
                token, _ = Token.objects.get_or_create(user=user)
                profile=Profile.objects.create(user=user,token=str(token),username=username,email=email)
                profile.save()
                return Response({'token': token.key})
        else:
            return Response({'error':'Passwords not matching'})

        
class LoginView(APIView):
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        user = authenticate(request, username=username, password=password)

        if user is not None:
            # token=Token.objects.get(user=user)
            # user_out=Token.objects.get(key=str(token))
            token, _ = Token.objects.get_or_create(user=user)
            # return Response({'token':str(token)},status=200)
            return Response({'token':token.key},status=200)
        else:
            return Response({'error': 'Invalid username or password'}, status=401)

class ProfileView(APIView):
    
    def get(self,request,tk):
        profile=Profile.objects.get(token=tk)
        serializer=ProfileSerializer(profile)
        return Response(serializer.data)
   
    def post(self,request,tk):
        profile=Profile.objects.get(token=tk)
        fullname=request.data.get('fullname')
        cgp=float(request.data.get('cgp'))
        bio=request.data.get('bio')
        profile=Profile.objects.get(token=tk)
        profile.fullname=fullname
        profile.cgp=cgp
        profile.bio=bio
        profile.save(update_fields=['fullname','cgp','bio'])
        serializer=ProfileSerializer(profile)
        return Response(serializer.data)

class JobListView(APIView):
    def get(self,request):
        queryset=Job.objects.all()
        # serializer_class=JobSerializer
        serializer=JobSerializer(queryset, many=True)
        return Response(serializer.data)