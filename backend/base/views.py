from django.shortcuts import render
from rest_framework import serializers
from .models import Product
# Create your views here.
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .serializers import ProductSerializer


@api_view(['GET'])
def getRoutes(request):
    return Response('Hello')


@api_view(["GET"])
def getProducts(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)


@api_view(["GET"])
def getProduct(request, pk):
    product = Product.objects.get(_id=pk)
    serializer = ProductSerializer(product, many=False)
    return Response(serializer.data)
