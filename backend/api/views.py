# views.py
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from django.views import View
from .models import Volunteer

@method_decorator(csrf_exempt, name='dispatch')
class CheckEmailExistsView(View):
    def post(self, request, *args, **kwargs):
        email = request.POST.get('email')
        if Volunteer.objects.filter(email_address=email).exists():
            return JsonResponse({'email_exists': True}, safe=False)
        else:
            return JsonResponse({'email_exists': False}, safe=False)