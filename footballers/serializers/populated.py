from .common import FootballerSerializer
from reviews.serializers.common import ReviewSerializer

class PopulatedFootballerSerializer(FootballerSerializer):
  reviews = ReviewSerializer(many=True)