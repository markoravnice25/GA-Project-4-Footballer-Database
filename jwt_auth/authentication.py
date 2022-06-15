# import and inherit basic authentication
from rest_framework.authentication import BasicAuthentication
from rest_framework.exceptions import PermissionDenied
from django.contrib.auth import get_user_model
User = get_user_model()

# import jwt
import jwt

# import settings
from django.conf import settings

# JWT authentication
class JWTAuthentication(BasicAuthentication):

  # override BasicAuthentication default by using authenticate method
  def authenticate(self, request):
    # 1st create variable to store 'Authorization' header from the request
    header = request.headers.get('Authorization')

    # check that header exists
    if not header:
      return None

    # check token starts with 'Bearer' (which is the correct format)
    print(request.headers)
    if not header.startswith('Bearer'):
      raise PermissionDenied(detail="Auth token is invalid")

    # there is a valid token, create variable which removes 'Bearer ' from it to get token and decode it
    token = header.replace('Bearer ', '')

    try:
      # decode the token passed by user: arguments = 1) token 2) secret 3) algorithm
      payload = jwt.decode(token, settings.SECRET_KEY, algorithms=['HS256'])

      # token is valid, payload variable = payload information
      # create 'user' variable which stores the 'sub'
      user = User.objects.get(pk=payload.get('sub'))

    # 1st exception - token invalid
    except jwt.exceptions.InvalidTokenError:
      raise PermissionDenied(detail="Invalid token")

    # 2nd exception - 'sub' != pk
    except User.DoesNotExist:
      raise PermissionDenied(detail="User not found")

    # authenticate method requires return of two-tuple (user, auth)
    # user variable = 'user'; token variable = 'auth'
    return (user, token)