from api.models import *
from .serializers import *
from rest_framework import viewsets, permissions, status
from rest_framework.response import Response
from django.db import IntegrityError
    
#News Viewset
class NewsViewSet(viewsets.ModelViewSet):
    queryset = News.objects.all()
    permission_classes =[
        permissions.AllowAny
    ]
    serializer_class = NewsSerializer
    
#Contact Us Viewset
class ContactUsViewSet(viewsets.ModelViewSet):
    queryset = ContactUs.objects.all()
    permission_classes =[
        permissions.AllowAny
    ]
    serializer_class = ContactUsSerializer
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            try:
                self.perform_create(serializer)
                headers = self.get_success_headers(serializer.data)
                # Return a success message
                return Response({
                    "success": True,
                    "message": "Thank you for contacting us. We'll get back to you shortly."
                }, status=status.HTTP_201_CREATED, headers=headers)
            except IntegrityError:
                return Response({
                    "success": False,
                    "message": "Email already in use."
                }, status=status.HTTP_400_BAD_REQUEST)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
#Donation Viewset
class DonationViewset(viewsets.ModelViewSet):
    queryset = Donation.objects.all()
    permission_classes =[
        permissions.AllowAny
    ]
    serializer_class = DonationSerializer
    
#Volunteer Viewset
class VolunteerViewSet(viewsets.ModelViewSet):
    queryset = Volunteer.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = VolunteerSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            try:
                self.perform_create(serializer)
                headers = self.get_success_headers(serializer.data)
                return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
            except IntegrityError:
                return Response({"detail": "Email already in use."}, status=status.HTTP_400_BAD_REQUEST)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    
    
