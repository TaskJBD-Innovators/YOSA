from django.db import models
from django.contrib import admin, messages
from django.utils.translation import ngettext

# Create your models here.

class User(models.Model):
    user_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=100)
    role = models.CharField(max_length=50)

class Event(models.Model):
    event_id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=200)
    description = models.TextField(null=True, blank=True)
    location = models.CharField(max_length=200)
    date = models.DateField()

class VolunteerOpportunity(models.Model):
    opportunity_id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=200)
    description = models.TextField(null=True, blank=True)
    date = models.DateField()
    location = models.CharField(max_length=200)

class Donation(models.Model):
    donation_id = models.AutoField(primary_key=True)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    date = models.DateField()

class Program(models.Model):
    program_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=200)
    description = models.TextField(null=True, blank=True)

class Application(models.Model):
    application_id = models.AutoField(primary_key=True)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    program_id = models.ForeignKey(Program, on_delete=models.CASCADE)
    status = models.CharField(max_length=50)

class Volunteer(models.Model):
    first_name = models.CharField(max_length=30, null=False)
    last_name = models.CharField(max_length=100, null=False)
    email_address = models.EmailField(max_length= 200, null=False, default="No details provided")
    created_at = models.DateTimeField(auto_now_add=True)  

    def __str__(self):
        return self.email_address

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