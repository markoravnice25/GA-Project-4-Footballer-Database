# rest_framework imports
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import PermissionDenied, ValidationError

# python imports
from datetime import datetime, timedelta

# import jwt
import jwt

# django imports
from django.conf import settings
from django.contrib.auth import get_user_model
User = get_user_model()

# serializer import
from .serializers.common import UserSerializer

class RegisterView(APIView):

  def post(self, request):
    user_to_add = UserSerializer(data=request.data)
    try:
      user_to_add.is_valid(True)
      print(user_to_add.errors)
      user_to_add.save()
      return Response({ 'message': 'Registration Successful' }, status.HTTP_202_ACCEPTED)
    except ValidationError:
      return Response(user_to_add.errors, status.HTTP_422_UNPROCESSABLE_ENTITY)
    except Exception as e:
      print(e)
      return Response({ 'detail': str(e) }, status.HTTP_422_UNPROCESSABLE_ENTITY)

class LoginView(APIView):

  def post(self, request):
    email = request.data.get('email')
    password = request.data.get('password')
    try:
      user_to_validate = User.objects.get(email=email)
    except User.DoesNotExist:
      raise PermissionDenied('Invalid Credentials')

    # use check_password() method to check password vs hashed password
    if not user_to_validate.check_password(password):
      raise PermissionDenied('Invalid credentials')

    # user is now validated - create expiry for login
    dt = datetime.now() + timedelta(hours=3)

    #TODO - creare token
    token = jwt.encode(
      # 1st argument is 'sub' and expiry.
      {
        'sub': user_to_validate.id,
        'exp': int(dt.strftime('%s'))
      },
      # 2nd argument - secret key
      settings.SECRET_KEY,
      # 3rd argument - algorithim
      algorithm='HS256'
    )

    return Response({ 'message': f"Welcome back, {user_to_validate.username}", 'token': token }, status.HTTP_202_ACCEPTED)