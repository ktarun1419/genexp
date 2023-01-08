

from django.db import models

# Create your models here.
class Job(models.Model):
    category=models.CharField(max_length=30)
    position=models.CharField(max_length=30)
    description=models.TextField(max_length=1000)
    location=models.CharField(max_length=60)
    package=models.CharField(max_length=20)
    def __str__(self):
        return self.__class__.__name__

