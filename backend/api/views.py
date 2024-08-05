from django.shortcuts import render, redirect
from django.http import HttpResponse, JsonResponse
from .models import *
from django.core.mail import send_mail
from django.views.decorators.csrf import csrf_exempt
import re
from rest_framework.views import APIView
from rest_framework.response import Response
from django.conf import settings
from paystackapi.transaction import Transaction
from .serializers import *
from rest_framework import generics
from . import models
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


@csrf_exempt  # Use CSRF protection in production
def contactus(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        phone = request.POST.get('phone')
        message = request.POST.get('message')

        # Basic validation
        if not name or not email or not phone or not message:
            return JsonResponse({'error': 'All fields are required.'}, status=400)

        # Simple regex validation for email and phone
        email_regex = r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b'
        phone_regex = r'^\+?1?\d{9,15}$'

        if not re.match(email_regex, email):
            return JsonResponse({'error': 'Invalid email format.'}, status=400)
        if not re.match(phone_regex, phone):
            return JsonResponse({'error': 'Invalid phone number format.'}, status=400)

        # Constructing the message body
        message_body = f'''
        From: {name}
        Message: {message}
        Email: {email}
        Phone: {phone}
        '''

        try:
            send_mail(
                'New Contact Form Submission',
                message_body,
                'noreply@example.com',  # Sender's email
                ['sedcoat@gmail.com'],  # Recipient's email
                fail_silently=False,
            )
            return JsonResponse({'success': 'Message sent successfully!'})
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=405)
    
    
class InitiatePaymentView(APIView):
    def post(self, request, *args, **kwargs):
        serializer = DonationSerializer(data=request.data)
        if serializer.is_valid():
            donation = serializer.save()
            transaction = Transaction.initialize(reference=donation.reference, amount=int(donation.amount * 100), email=donation.email)
            return Response(transaction, status=201)
        return Response(serializer.errors, status=400)

class VerifyPaymentView(APIView):
    def get(self, request, *args, **kwargs):
        reference = request.query_params.get('reference')
        transaction = Transaction.verify(reference=reference)
        if transaction['status'] == 'success':
            donation = Donation.objects.get(reference=reference)
            donation.paid = True
            donation.save()
            return Response({'status': 'success', 'data': transaction}, status=200)
        return Response({'status': 'failed', 'data': transaction}, status=400)


class ContactList(generics.ListAPIView):
    queryset = models.ContactUs.objects.all()
    serializer_class = ContactUsSerializer