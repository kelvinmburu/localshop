from django.shortcuts import render
from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.utils import json
from rest_framework import serializers
from rest_framework import viewsets

# Create your views here.
def HomePageView(request):
    if request.method == 'GET':
        return render(request, 'index.html', context=None)
 

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