from rest_framework import viewsets
from .models import User, Event, VolunteerOpportunity, Donation, Program, Application
from .serializers import UserSerializer, EventSerializer, VolunteerOpportunitySerializer, DonationSerializer, ProgramSerializer, ApplicationSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer

class VolunteerOpportunityViewSet(viewsets.ModelViewSet):
    queryset = VolunteerOpportunity.objects.all()
    serializer_class = VolunteerOpportunitySerializer

class DonationViewSet(viewsets.ModelViewSet):
    queryset = Donation.objects.all()
    serializer_class = DonationSerializer

class ProgramViewSet(viewsets.ModelViewSet):
    queryset = Program.objects.all()
    serializer_class = ProgramSerializer

class ApplicationViewSet(viewsets.ModelViewSet):
    queryset = Application.objects.all()
    serializer_class = ApplicationSerializer

def register(request):
    if request.method == "POST":
        first_name = request.POST['first_name']
        last_name = request.POST['last_name']
        email = request.POST['email']