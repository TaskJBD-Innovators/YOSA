from rest_framework import routers
from .api import EventViewSet

router = routers.DefaultRouter()
router.register('api/events',EventViewSet, 'Event')

urlpatterns = router.urls 
