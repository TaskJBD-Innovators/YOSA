from django.shortcuts import render
from django.views.generic import ListView, DetailView, CreateView, UpdateView, DeleteView
from .models import User, Event, VolunteerOpportunity, Donation, Program, Application


# Create your views here.
class UserListView(ListView):
    model = User
    template_name = 'user_list.html'
    context_object_name = 'users'

class UserDetailView(DetailView):
    model = User
    template_name = 'user_detail.html'
    context_object_name = 'user'

class EventListView(ListView):
    model = Event
    template_name = 'event_list.html'
    context_object_name = 'events'

class EventDetailView(DetailView):
    model = Event
    template_name = 'event_detail.html'
    context_object_name = 'event'

class VolunteerOpportunityListView(ListView):
    model = VolunteerOpportunity
    template_name = 'volunteer_opportunity_list.html'
    context_object_name = 'volunteer_opportunities'

class VolunteerOpportunityDetailView(DetailView):
    model = VolunteerOpportunity
    template_name = 'volunteer_opportunity_detail.html'
    context_object_name = 'volunteer_opportunity'

class DonationListView(ListView):
    model = Donation
    template_name = 'donation_list.html'
    context_object_name = 'donations'

class DonationDetailView(DetailView):
    model = Donation
    template_name = 'donation_detail.html'
    context_object_name = 'donation'

class ProgramListView(ListView):
    model = Program
    template_name = 'program_list.html'
    context_object_name = 'programs'

class ProgramDetailView(DetailView):
    model = Program
    template_name = 'program_detail.html'
    context_object_name = 'program'

class ApplicationListView(ListView):
    model = Application
    template_name = 'application_list.html'
    context_object_name = 'applications'

class ApplicationDetailView(DetailView):
    model = Application
    template_name = 'application_detail.html'
    context_object_name = 'application'
