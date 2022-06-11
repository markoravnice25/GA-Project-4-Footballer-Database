from rest_framework import serializers
from ..models import Footballer

class FootballerSerializer(serializers.ModelSerializer):
  class Meta:
    model = Footballer
    fields = '__all__'