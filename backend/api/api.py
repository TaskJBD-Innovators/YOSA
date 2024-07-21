from api.models import *
from rest_framework import viewsets, permissions
from .serializers import *

#Event Viewset
class VolunteerViewSet(viewsets.ModelViewSet):
    queryset = Volunteer.objects.all()
    permission_classes =[
        permissions.AllowAny
    ]
    serializer_class = VolunteerSerializer
    
class ArticleViewSet(viewsets.ModelViewSet):
    queryset = Article.objects.all()
    permission_classes =[
        permissions.AllowAny
    ]
    serializer_class = ArticleSerializer
