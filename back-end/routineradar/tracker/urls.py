from django.urls import path
from .views import TechnologyList, ActivityList
from .views import get_feedback

urlpatterns = [
    path('technologies/', TechnologyList.as_view(), name='technology-list'),
    path('activities/', ActivityList.as_view(), name='activity-list'),
    path('api/feedback/', get_feedback, name='get_feedback'),
]
