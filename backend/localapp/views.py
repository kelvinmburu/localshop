from django.shortcuts import render
from django.shortcuts import render
from pydantic import Json
from django.views.decorators.csrf import csrf_exempt
from .models import *
from .serializers import *
from django.http import HttpResponse, JsonResponse
from rest_framework import status
from rest_framework.parsers import JSONParser
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.utils import json
from rest_framework import serializers
from rest_framework import viewsets


# Create your views here.
def HomePageView(request):
    if request.method == 'GET':
        return render(request, 'index.html', context=None)
 
# admin api,products,orders,defectivegoods,

# 

@csrf_exempt
def adminapi(request,id=0):
    if request.method == 'GET':
        admin = Admin.objects.all()
        admin_serializer = AdminSerializer(admin,many=True)
        return JsonResponse(admin_serializer.data,safe=False)

    elif request.method == 'POST':
        admin_data = JSONParser().parse(request)
        admin_serializer = AdminSerializer(data=admin_data)
        if admin_serializer.is_valid():
            admin_serializer.save()
            return JsonResponse("Admin added successfully",safe=False)
        return JsonResponse("Admin not added,try again",safe=False)

    elif request.method == 'PUT':
        admin_data = JSONParser().parse(request)
        admin = Admin.objects.get(AdminId=admin_data['AdminId'])
        admin_serializer = AdminSerializer(admin,data=admin_data)
        if admin_serializer.is_valid():
            admin_serializer.save()
            return JsonResponse("Admin updated successfully",safe=False)
        return JsonResponse("Admin not updated",safe=False)

    elif request.method == 'DELETE':
       admin = Admin.objects.get(AdminId=id)
       admin.delete()
       return JsonResponse("admin deleted successfully",safe=False)



# productsapi

@csrf_exempt
def productapi(request,id=0):
    if request.method == 'GET':
        product = Product.objects.all()
        
        product_serializer = ProductSerializer(product,many=True)
        return JsonResponse(product_serializer.data,safe=False)

    elif request.method == 'POST':
        product_data = JSONParser().parse(request)
        product_serializer = ProductSerializer(data=product_data)
        if product_serializer.is_valid():
            product_serializer.save()
            return JsonResponse("Product added successfully",safe=False)
        return JsonResponse("product not added,try again",safe=False)

    elif request.method == 'PUT':
        product_data= JSONParser().parse(request)
        product = Product.objects.get(product_name=product_data['product_name'])
        product_serializer = ProductSerializer(product,data=product_data)
        if product_serializer.is_valid():
            product_serializer.save()
            return JsonResponse("Product updated successfully",safe=False)
        return JsonResponse("Product not updated",safe=False)

    elif request.method == 'DELETE':
       product = Product.objects.get(id=id)
       product.delete()
       return JsonResponse("product deleted successfully",safe=False)


# clerkapi
@csrf_exempt
def clerkapi(request,id=0):
    if request.method == 'GET':
        my_clerk = Clerk.objects.all()
        clerk_serializer = ClerkSerializer(my_clerk,many=True)
        return JsonResponse(clerk_serializer.data,safe=False)

    elif request.method == 'POST':
        clerk_data = JSONParser().parse(request)
        clerk_serializer = ClerkSerializer(data=clerk_data)
        if clerk_serializer.is_valid():
            clerk_serializer.save()
            return JsonResponse("Clerk  added successfully",safe=False)
        return JsonResponse("Clerk not added,try again",safe=False)

    elif request.method == 'PUT':
        clerk_data= JSONParser().parse(request)
        clerk = Clerk.objects.get(name=clerk_data['name'])
        clerk_serializer = ClerkSerializer(clerk,data=clerk_data)
        if clerk_serializer.is_valid():
            clerk_serializer.save()
            return JsonResponse("clerk updated successfully",safe=False)
        return JsonResponse("clerk not updated",safe=False)

    elif request.method == 'DELETE':
        clerk = Clerk.objects.get(id=id)
        clerk.delete()
        return JsonResponse("clerk deleted successfully",safe=False)

# orderapi
@csrf_exempt
def orderapi(request,id=0):
    if request.method == 'GET':
        order = Order.objects.all()
        order_serializer = OrderSerializer(order,many=True)
        return JsonResponse(order_serializer.data,safe=False)

    elif request.method == 'POST':
        order_data = JSONParser().parse(request)
        order_serializer = OrderSerializer(data=order_data)
        if order_serializer.is_valid():
            order_serializer.save()
            return JsonResponse("order  added successfully",safe=False)
        return JsonResponse("order not added,try again",safe=False)

    elif request.method == 'PUT':
        order_data= JSONParser().parse(request)
        order = Order.objects.get(ordered_product=order_data['ordered_product'])
        order_serializer = OrderSerializer(order,data=order_data)
        if order_serializer.is_valid():
            order_serializer.save()
            return JsonResponse("order updated successfully",safe=False)
        return JsonResponse("order  not updated",safe=False)

    elif request.method == 'DELETE':
        order = Order.objects.get(id=id)
        order.delete()
        return JsonResponse("order deleted successfully",safe=False)

# defective goodsapi


@csrf_exempt
def defectivegoodsapi(request,id=0):
    if request.method == 'GET':
        defective = Defectivegood.objects.all()
        defective_serializer = DefectiveGoodsSerializer(defective,many=True)
        return JsonResponse(defective_serializer.data,safe=False)

    elif request.method == 'POST':
        defective_data = JSONParser().parse(request)
        defective_serializer = DefectiveGoodsSerializer(data=defective_data)
        if defective_serializer.is_valid():
            defective_serializer.save()
            return JsonResponse("Defective good added successfully",safe=False)
        return JsonResponse("Defective good not added,try again",safe=False)

    elif request.method == 'PUT':
        defective_data= JSONParser().parse(request)
        defective = Defectivegood.objects.get(name=defective_data['name'])
        defective_serializer = DefectiveGoodsSerializer(defective,data=defective_data)
        if defective_serializer.is_valid():
            defective_serializer.save()
            return JsonResponse("Defective good updated successfully",safe=False)
        return JsonResponse("Defective good  not updated",safe=False)

    elif request.method == 'DELETE':
        defective = Defectivegood.objects.get(id=id)
        defective.delete()
        return JsonResponse("Defective good deleted successfully",safe=False)

















def LinksPageView(request):
    if request.method == 'GET':
        return render(request, 'links.html', context=None)


def Customers(request):
        name='liran'
        if request.method == 'GET':
            return HttpResponse('{ "name":"' + name + '", "age":31, "city":"New York" }')

@api_view(["POST"])
def CalcTest(x1):
    try:
        x=json.loads(x1.body)
        y=str(x*100)
        return JsonResponse("Result:"+y,safe=False)
    except ValueError as e:
        return Response(e.args[0],status.HTTP_400_BAD_REQUEST)
def CustViewSet(request):
    ctx = {}
    return render(request, '', ctx)