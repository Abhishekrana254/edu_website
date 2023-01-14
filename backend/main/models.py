from django.db import models

# Create your models here.

# from django.contrib.auth.models import User


class Course(models.Model):
    id = models.CharField(max_length=32, primary_key=True)
    category = models.CharField(max_length=32)
    name = models.CharField(max_length=32)
    description = models.CharField(max_length=32)
