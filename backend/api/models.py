from django.db import models
from django.contrib import admin, messages
from django.utils.translation import ngettext
from phonenumber_field.modelfields import PhoneNumberField

# Create your models here.
class Volunteer(models.Model):
    first_name = models.CharField(max_length=30, null=False)
    last_name = models.CharField(max_length=100, null=False)
    email_address = models.EmailField(max_length= 200, null=False, default="No details provided")
    created_at = models.DateTimeField(auto_now_add=True)  

    def __str__(self):
        return self.email_address


class ContactUs(models.Model):
    first_name = models.CharField(max_length=30, null=False)
    last_name = models.CharField(max_length=30, null=True)
    email = models.EmailField(max_length=200, null=False)
    phone_number = PhoneNumberField(blank=True)
    message = models.TextField(null=False)
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.first_name


STATUS_CHOICES ={
    "d": "Draft",
    "p": "Published",
    "w": "Withdrawn"
}
    
class Article(models.Model):
    title = models.CharField(max_length=30, null=False)
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

    def make_published(self, request, queryset):
        updated = queryset.update(status="p")
        self.message_user(
            request,
            ngettext(
                "%d story was successfully marked as published.",
                "%d stories were successfully marked as published.",
                updated,
            )
            % updated,
            messages.SUCCESS,
        )