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