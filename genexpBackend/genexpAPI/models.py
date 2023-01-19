from django.db import models
from django.contrib.auth import get_user_model
# Create your models here.

User=get_user_model()

class Profile(models.Model):
    user= models.ForeignKey(User,on_delete=models.CASCADE)
    username=models.CharField(max_length=40,default="")
    email=models.CharField(max_length=80,default="")
    token=models.CharField(max_length=100,default="")
    fullname=models.CharField(max_length=100,default="Your Name")
    cgp=models.FloatField(default=0.0)
    bio=models.TextField(default="")
    def __str__(self):
        return self.user.username