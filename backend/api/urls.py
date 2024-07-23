from rest_framework import routers

from .api import *

router = routers.DefaultRouter()
router.register('api/volunteers',VolunteerViewSet, 'Volunteer')
router.register('api/articles',ArticleViewSet, 'Article')
router.register('api/contactus',ArticleViewSet, 'ContactUs')

urlpatterns = router.urls 
