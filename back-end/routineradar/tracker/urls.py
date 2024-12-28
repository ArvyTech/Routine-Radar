from django.urls import path
from .views import TechnologyList, ActivityList

urlpatterns = [
    path('technologies/', TechnologyList.as_view(), name='technology-list'),
    path('activities/', ActivityList.as_view(), name='activity-list'),
]
