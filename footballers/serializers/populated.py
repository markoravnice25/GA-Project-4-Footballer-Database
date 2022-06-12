from .common import FootballerSerializer
from reviews.serializers.populated import PopulatedReviewSerializer
from styles.serializers.common import StyleSerializer

class PopulatedFootballerSerializer(FootballerSerializer):
  reviews = PopulatedReviewSerializer(many=True)
  styles = StyleSerializer(many=True)