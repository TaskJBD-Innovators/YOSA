from django.db import models
from django.contrib import admin, messages
from django.utils.translation import ngettext
from phonenumber_field.modelfields import PhoneNumberField


# Create your models here.
class Volunteer(models.Model):
    first_name = models.CharField(max_length=30, null=False)
    last_name = models.CharField(max_length=100, null=False)
    email_address = models.EmailField(max_length= 200, null=False, unique=True)
    gender = models.CharField(max_length=6, default="Other", choices=[
        ("M", "Male"),
        ("F", "Female"),
        ("O", "Other"),
    ])
    created_at = models.DateTimeField(auto_now_add=True)  

    def __str__(self):
        return self.email_address
    

class ContactUs(models.Model):
    first_name = models.CharField(max_length=30, null=False)
    last_name = models.CharField(max_length=30, null=False)
    email = models.EmailField(max_length=200, null=False)
    phone_number =PhoneNumberField(blank=True)
    message = models.TextField(max_length=500, null=False)
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.email

class Donation(models.Model):
    first_name = models.CharField(max_length=30, null=False)
    last_name = models.CharField(max_length=30, null=False)
    email_address = models.EmailField(max_length=30, null=False)
    
    

STATUS_CHOICES ={
    "d": "Draft",
    "p": "Published",
    "w": "Withdrawn"
}

    
class Article(models.Model):
    title = models.CharField(max_length=50, null=False)
    body = models.TextField(null=False)
    status =models.CharField(max_length= 1, choices=STATUS_CHOICES)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
    
    
@admin.action(description="Mark selected stories as published")
def make_published(modeladmin, request, queryset):
    queryset.update(status="p")


class ArticleAdmin(admin.ModelAdmin):
    list_display = ["title", "status"]
    ordering = ["title"]
    actions = [make_published]

    def message_user(self, request, message):
        messages.info(request, message)
        
