# django imports
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

# custom imports
from .models import Style
from .serializers.populated import PopulatedStyleSerializer

# List View
class StyleListView(APIView):

  # Get all
  def get(self, request):
    styles = Style.objects.all()
    serialized_styles = PopulatedStyleSerializer(styles, many=True)
    print('serialized_styles ---> ', serialized_styles.data)
    return Response(serialized_styles.data, status=status.HTTP_200_OK)