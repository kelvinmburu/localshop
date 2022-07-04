from rest_framework import serializers
from localapp.models import *

class AddProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

class UpdateProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

class RequestOrderSerializer(serializers.ModelSerializer):
    class Meta:
        model =Product
        fields = ['name','quantity','category']


class DefectiveGoodsSerializer(serializers.ModelSerializer):
    class Meta:
        model =Product
        fields = ['name','quantity','category']
