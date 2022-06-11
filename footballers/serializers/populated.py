from .common import FootballerSerializer
from reviews.serializers.common import ReviewSerializer
from styles.serializers.common import StyleSerializer

class PopulatedFootballerSerializer(FootballerSerializer):
  reviews = ReviewSerializer(many=True)
  styles = StyleSerializer(many=True)