from django.urls import path
from rest_framework import routers
from .views import InitiatePaymentView, VerifyPaymentView
from .api import *
from . import views

router = routers.DefaultRouter()
router.register('api/volunteers',VolunteerViewSet, 'Volunteer')
router.register('api/news',NewsViewSet, 'News')
router.register('api/contactus',ContactUsViewSet, 'ContactUs')


urlpatterns = [
   path('initiate-payment/', InitiatePaymentView.as_view(), name='initiate_payment'),
    path('verify-payment/', VerifyPaymentView.as_view(), name='verify_payment'),
    ] + router.urls 
