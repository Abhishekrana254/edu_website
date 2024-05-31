from django.db import models

# Create your models here.

# from django.contrib.auth.models import User


class Course(models.Model):
    id = models.CharField(max_length=32, primary_key=True)
    title = models.CharField(max_length=256, blank=True)
    category = models.CharField(max_length=256, blank=True)
    description = models.CharField(max_length=256, blank=True)
    provider = models.CharField(max_length=256, blank=True)
    duration = models.CharField(max_length=32, blank=True)
    price = models.CharField(max_length=32, blank=True)
    rating = models.CharField(max_length=32, blank=True)