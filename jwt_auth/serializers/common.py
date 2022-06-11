# django imports
from rest_framework import serializers
from django.contrib.auth import get_user_model, password_validation
from django.contrib.auth.hashers import make_password
from django.core.exceptions import ValidationError

# User model
User = get_user_model()

# inherit model serializer
class UserSerializer(serializers.ModelSerializer):
  # password fields are write_only to ensure they are not returned when converting query set to JSON
  password = serializers.CharField(write_only=True)
  password_confirmation = serializers.CharField(write_only=True)
  
  # validate that passwords match or throw error
  def validate(self, data):
    # remove passwords from data dict, but save to variables for use later
    password = data.pop('password')
    password_confirmation = data.pop('password_confirmation')

    #TODO step 1) check password fields match
    if password != password_confirmation:
      raise ValidationError({
        'password_confirmation': 'Does not match password'
      })

    # validate password by Django default ocondition
    try:
      password_validation.validate_password(password)
    except ValidationError as e:
      print(e)
      raise ValidationError({
        'password': e.messages
      })

      # password validation has been passed
      # TODO Step 2) Hash password - only required for deserialization
    data['password'] = make_password(password)


    return data

  class Meta:
    model = User
    fields = '__all__'