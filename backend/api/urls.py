from rest_framework import routers

from .api import *

router = routers.DefaultRouter()
router.register('api/volunteers',VolunteerViewSet, 'Volunteer')
router.register('api/articles',ArticleViewSet, 'Article')

urlpatterns = router.urls 
