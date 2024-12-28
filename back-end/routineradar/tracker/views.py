from django.utils.dateparse import parse_date
from rest_framework.pagination import PageNumberPagination
from rest_framework.generics import ListAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Technology, Activity
from .serializers import TechnologySerializer, ActivitySerializer

class TechnologyList(APIView):
    def get(self, request):
        technologies = Technology.objects.all()
        serializer = TechnologySerializer(technologies, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = TechnologySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ActivityList(ListAPIView):
    queryset = Activity.objects.all()
    serializer_class = ActivitySerializer
    pagination_class = PageNumberPagination

    def get(self, request, *args, **kwargs):
        technology_name = request.query_params.get('technology', None)
        start_date = request.query_params.get('start_date', None)
        end_date = request.query_params.get('end_date', None)

        activities = self.get_queryset()

        if technology_name:
            activities = activities.filter(technology__name=technology_name)

        if start_date:
            start_date = parse_date(start_date)
            activities = activities.filter(date__gte=start_date)

        if end_date:
            end_date = parse_date(end_date)
            activities = activities.filter(date__lte=end_date)

        page = self.paginate_queryset(activities)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)

        serializer = self.get_serializer(activities, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = ActivitySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response({"error": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

