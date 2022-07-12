from rest_framework import serializers
from localapp.models import *
# ProductSerializer
# OrderSerializer
# ClerkSerializer
# AdminSerializer
class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

class ClerkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Clerk
        fields = '__all__'

class AdminSerializer(serializers.ModelSerializer):
    class Meta:
        model = Admin
        fields = '__all__'

class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = '__all__'


class DefectiveGoodsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Defectivegood
        fields = '__all__'
