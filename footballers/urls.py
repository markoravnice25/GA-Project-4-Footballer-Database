# django imports
from django.urls import path

# custom imports
from .views import FootballerListView, FootballerDetailView

urlpatterns = [
  path('', FootballerListView.as_view()),
  path('<int:pk>', FootballerDetailView.as_view())
]