# django imports
from django.urls import path

# custom imports
from .views import StyleListView

urlpatterns = [
  path('', StyleListView.as_view()),
]