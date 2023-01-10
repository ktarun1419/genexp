from rest_framework.views import APIView
from django.contrib.auth.models import User
from rest_framework.response import Response
from rest_framework.authtoken.models import Token



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
                print(token)
                return Response({'token': token.key})
        else:
            return Response({'error':'Passwords not matching'})
        