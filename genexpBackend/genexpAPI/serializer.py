from rest_framework import serializers
from .models import *

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model=Profile
        fields='__all__'

class JobSerializer(serializers.ModelSerializer):
    class Meta:
        model=Job
        fields='__all__'