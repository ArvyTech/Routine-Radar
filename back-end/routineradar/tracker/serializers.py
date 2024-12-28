from rest_framework import serializers
from .models import Technology, Activity

class TechnologySerializer(serializers.ModelSerializer):
    class Meta:
        model = Technology
        fields = '__all__'

class ActivitySerializer(serializers.ModelSerializer):
    technology = serializers.CharField()

    class Meta:
        model = Activity
        fields = '__all__'

    def create(self, validated_data):
        technolgy_name = validated_data.pop('technology')
        technology, created = Technology.objects.get_or_create(name=technolgy_name)
        return Activity.objects.create(technology=technology, **validated_data)
