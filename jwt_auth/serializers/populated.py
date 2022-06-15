from .common import UserSerializer
from footballers.serializers.populated import PopulatedFootballerSerializer
from ..models import User

class PopulatedUserSerializer(UserSerializer):
  footballers = PopulatedFootballerSerializer(many=True)
  class Meta:
    model = User
    fields = '__all__'
  