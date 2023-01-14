from django.urls import re_path, include
from rest_framework import routers
from main import views
from rest_framework.authtoken.views import ObtainAuthToken


router = routers.DefaultRouter()

urlpatterns = [
    # url(r'^', include(router.urls)),
    re_path(r'^search_courses/', views.search_courses),
    # url(r'^get_description_page/', views.get_description_page),
    # url(r'^save_call_request/', views.save_call_request),
    # url(r'^download_data/', views.download_data),
    # url(r'^get_customer_requests/', views.get_customer_requests),
    # url(r'^approve_download_rights/', views.approve_download_rights),
    # url(r'^upload_data/', views.upload_data)
]
