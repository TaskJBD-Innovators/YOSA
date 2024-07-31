from django.contrib import admin
from .models import *
from .models import User, Event, VolunteerOpportunity, Donation, Program, Application


    
# Register your models here.
admin.site.register(Volunteer)
admin.site.register(Article, ArticleAdmin)
admin.site.register(User)
admin.site.register(Event)
admin.site.register(VolunteerOpportunity)
admin.site.register(Donation)
admin.site.register(Program)
admin.site.register(Application)