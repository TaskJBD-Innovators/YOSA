from django.shortcuts import render, redirect
from django.http import HttpResponse, JsonResponse
from .models import Volunteer

# Create your views here.
def check_email_exists(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        if Volunteer.objects.filter(email_address=email).exists():
            return JsonResponse({'exists': True})
        else:
            return JsonResponse({'exists': False})
    else:
        return JsonResponse({'error': 'Invalid request'}, status=400)