from django.contrib import admin
from .models import *

    
# Register your models here.
admin.site.register(Volunteer)
admin.site.register(Article, ArticleAdmin)
admin.site.register(ContactUs)
