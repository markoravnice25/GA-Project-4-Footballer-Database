# rest_framework imports
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import NotFound, ValidationError
from rest_framework.permissions import IsAuthenticatedOrReadOnly

# custom imports
from .models import Footballer
from .serializers.common import FootballerSerializer
from .serializers.populated import PopulatedFootballerSerializer


# List View
class FootballerListView(APIView):
  # authentication required for all requests except 'get all'
  permission_classes = (IsAuthenticatedOrReadOnly, )

  # Get all
  def get(self, request):
    footballers = Footballer.objects.all()
    serialized_footballers = FootballerSerializer(footballers, many=True)
    print('serialized_footballers ---> ', serialized_footballers.data)
    return Response(serialized_footballers.data, status=status.HTTP_200_OK)

  # Post one
  def post(self, request):
      deserialized_footballer = FootballerSerializer(data=request.data)
      try:
        deserialized_footballer.is_valid(True)
        print('check deserialized -> ', deserialized_footballer.errors)
        # if we get to this point, validation has passed. If is_valid() fails, it will throw an exception
        deserialized_footballer.save()
        # if we get to this point, the record has been saved
        # when saving, a data key is added to the Album instance that contains a python copy of the record that has just been created
        return Response(deserialized_footballer.data, status.HTTP_201_CREATED)
      except ValidationError:
        print(deserialized_footballer.errors)
        return Response(deserialized_footballer.errors, status.HTTP_422_UNPROCESSABLE_ENTITY)
      except Exception as e:
        print(type(e))
        print(e)
        return Response({ 'detail': str(e) }, status.HTTP_422_UNPROCESSABLE_ENTITY)

# Detail View
class FootballerDetailView(APIView):
  # custom function
  def get_footballer(self, pk):
    try:
      return Footballer.objects.get(pk=pk)
    except Footballer.DoesNotExist as e:
      print(e)
      raise NotFound({ 'detail': str(e) }, status.HTTP_404_NOT_FOUND)

  # get one
  def get(self, request, pk):
      footballer = self.get_footballer(pk)
      print('footballer -> ', footballer)
      serialized_footballer = PopulatedFootballerSerializer(footballer)
      return Response(serialized_footballer.data, status.HTTP_200_OK)
  
  # delete
  def delete(self, request, pk):
    footballer_to_delete = self.get_footballer(pk)
    footballer_to_delete.delete()
    return Response(status.HTTP_204_NO_CONTENT)

  # update footballer
  def put(self, request, pk):
    footballer_to_update = self.get_footballer(pk=pk)
    print(type(footballer_to_update))
    deserialized_footballer = FootballerSerializer(footballer_to_update, request.data)
    try:
      deserialized_footballer.is_valid(True)
      deserialized_footballer.save()
      return Response(deserialized_footballer.data, status.HTTP_202_ACCEPTED)
    except ValidationError:
      print(deserialized_footballer.errors)
      return Response(deserialized_footballer.errors, status.HTTP_422_UNPROCESSABLE_ENTITY)
    except Exception as e:
      print(e)
      return Response({ 'detail': str(e) }, status.HTTP_422_UNPROCESSABLE_ENTITY)
