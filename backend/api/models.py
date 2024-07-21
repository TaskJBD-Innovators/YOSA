from django.db import models
from django.contrib import admin

# Create your models here.
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
    body = models.TextField(max_length=100, null=False)
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
