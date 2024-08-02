from rest_framework import serializers
from api.models import *
from .models import *

#Event Serializer
class VolunteerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Volunteer
        fields = '__all__' 
        
        
class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = '__all__'
        
class ContactUsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactUs
        fields = '__all__'



class DonationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Donation
        fields = ['amount', 'email', 'name', 'reference']
        read_only_fields = ['reference']

    def create(self, validated_data):
        validated_data['reference'] = self.generate_reference()
        return super().create(validated_data)

    def generate_reference(self):
        # Implement reference generation logic here
        import uuid
        return str(uuid.uuid4())