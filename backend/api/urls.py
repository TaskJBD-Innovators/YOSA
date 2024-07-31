from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    UserViewSet, EventViewSet, VolunteerOpportunityViewSet,
    DonationViewSet, ProgramViewSet, ApplicationViewSet
)

router = DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'events', EventViewSet)
router.register(r'volunteer-opportunities', VolunteerOpportunityViewSet)
router.register(r'donations', DonationViewSet)
router.register(r'programs', ProgramViewSet)
router.register(r'applications', ApplicationViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
