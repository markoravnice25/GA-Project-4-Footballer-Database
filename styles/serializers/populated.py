from .common import StyleSerializer
from footballers.serializers.common import FootballerSerializer

class PopulatedStyleSerializer(StyleSerializer):
  footballers = FootballerSerializer(many=True)