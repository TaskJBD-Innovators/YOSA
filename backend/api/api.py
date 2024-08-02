from api.models import *
from rest_framework import viewsets, permissions
from .serializers import *

#Volunteer Viewset
class VolunteerViewSet(viewsets.ModelViewSet):
    queryset = Volunteer.objects.all()
    permission_classes =[
        permissions.AllowAny
    ]
    serializer_class = VolunteerSerializer
    
#Article Viewset    
class ArticleViewSet(viewsets.ModelViewSet):
    queryset = Article.objects.all()
    permission_classes =[
        permissions.AllowAny
    ]
    serializer_class = ArticleSerializer
    
#Contact Us Viewset    
class ContactUsViewSet(viewsets.ModelViewSet):
    queryset = ContactUs.objects.all()
    permission_classes =[
        permissions.AllowAny
    ]
    serializer_class = ContactUsSerializer
    serializer_class = ArticleSerializer
