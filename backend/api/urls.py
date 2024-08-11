from django.urls import path
from rest_framework import routers
from .views import check_email_exists, InitiatePaymentView, VerifyPaymentView
from .api import *
from . import views

router = routers.DefaultRouter()
router.register('api/volunteers',VolunteerViewSet, 'Volunteer')
router.register('api/articles',ArticleViewSet, 'Article')
router.register('api/contactus',ContactUsViewSet, 'ContactUs')


urlpatterns = [
   path('check-email/', views.check_email_exists, name='check_email_exists'),
   path('initiate-payment/', InitiatePaymentView.as_view(), name='initiate_payment'),
    path('verify-payment/', VerifyPaymentView.as_view(), name='verify_payment'),
    ] + router.urls 
