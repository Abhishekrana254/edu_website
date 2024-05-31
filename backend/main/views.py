from django.shortcuts import render

from rest_framework import viewsets
from django.contrib.auth.models import User
from .models import *

from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.views import ObtainAuthToken

from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view, renderer_classes
from rest_framework.renderers import JSONRenderer
from django.http import HttpResponse

from django.contrib.auth import authenticate

import json
import copy
import os

from django.forms.models import model_to_dict
from django.db.models import Q


PROJECT_PATH = os.path.abspath(os.path.dirname(__name__))

# search in data
@api_view(('GET', 'POST'))
@csrf_exempt
def search_courses(request):
    '''
    For Getting list of Courses matching the query
    '''
    # req = request.query_params
    body_unicode = request.body.decode('utf-8')
    req = json.loads(body_unicode)


    print('req', req)
    query = req['query']
    # query = ''
    # try:
    # print('a'+ query + 'a')
    if query != '':
        lookups= Q(title__icontains=query) | Q(description__icontains=query) | Q(category__icontains=query)
        data_list= Course.objects.filter(lookups) # .distinct()
        data_list = [ model_to_dict(ele) for ele in data_list]
    else:
        data_list = []
    # except:
    #     data_list = []

    print('data', data_list)

    return Response({
        'message': 'success',
        'data_list': data_list
    })
