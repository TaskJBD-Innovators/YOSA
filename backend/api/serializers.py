from rest_framework import serializers
from api.models import Volunteer

#Event Serializer
class VolunteerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Volunteer
        fields = '__all__'
        
class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Volunteer
        fields = '__all__'
