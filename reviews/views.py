# rest_framework imports
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import NotFound, ValidationError, PermissionDenied
from rest_framework.permissions import IsAuthenticated

# custom imports
from .serializers.common import ReviewSerializer
from .models import Review

# List View
class ReviewListView(APIView):
  permission_classes  = (IsAuthenticated, )
  
  # Add review
  def post(self, request):
    request.data['owner'] = request.user.id
    print('request -> ', request.data)
    review_to_add = ReviewSerializer(data=request.data)
    try:
      review_to_add.is_valid(True)
      review_to_add.save()
      return Response(review_to_add.data, status.HTTP_201_CREATED)
    except ValidationError:
      return Response(review_to_add.errors, status.HTTP_422_UNPROCESSABLE_ENTITY)
    except Exception as e:
      print(e)
      return Response({ 'detail': str(e) }, status.HTTP_422_UNPROCESSABLE_ENTITY)

# Detail View
class ReviewDetailView(APIView):
  permission_classes = (IsAuthenticated, )

  # custom function
  def get_review(self, pk):
    try:
      return Review.objects.get(pk=pk)
    except Review.DoesNotExist:
      raise NotFound("review not found")

  # remove review
  def delete(self, request, pk):
    print('PK -> ', pk)
    review_to_delete = self.get_review(pk)
    print('review owner -> ', review_to_delete.owner)
    print('review user -> ', request.user)
    if review_to_delete.owner != request.user:
      print('Can\'t delete record.')
      raise PermissionDenied
    print('We can delete record')
    review_to_delete.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)