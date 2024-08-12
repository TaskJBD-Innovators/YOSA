from django.contrib import admin
from .models import *

    
# Register your models here.
admin.site.register(Volunteer, VolunteerAdmin)
admin.site.register(News, NewsAdmin)
admin.site.register(ContactUs)
