from rest_framework import serializers
from .models import Blog, Comment


class Comment_seri(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = '__all__'


class Blod_seri(serializers.ModelSerializer):
    comments=Comment_seri(many=True,read_only=True) #nesting the serializer
    class Meta:
        model = Blog
        fields = '__all__'
