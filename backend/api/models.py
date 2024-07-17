from django.db import models

# Create your models here.
class Event(models.Model):
    name = models.CharField(max_length=30, null=False)
    location = models.CharField(max_length=100, null=False)
    details = models.CharField(max_length= 200, null=False, default="No details provided")
    created_at = models.DateTimeField(auto_now_add=True)  

    def __str__(self):
        return self.name