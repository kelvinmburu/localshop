from django.urls import path, include
from rest_framework.authtoken.views import obtain_auth_token
from localapp import views
from rest_framework import routers
router = routers.DefaultRouter()
router.register('customers/', views.CustViewSet, basename='customers')

urlpatterns = [
    path('', views.HomePageView, name='home'),
    path('apitest/',views.CalcTest), # for REST API test

    path('newadmin/',views.adminapi,name='admin'), # for REST API
    path('newadmin/<int:id>',views.adminapi,name='admin'), # for REST API

    path('product/',views.productapi,name="product"),
    path('product/<int:id>',views.productapi,name="product"),

    path('clerk/',views.clerkapi,name="clerk"),
    path('clerk/<int:id>',views.clerkapi,name="clerk"),
    
    path('order/',views.orderapi,name="order"),
    path('order/<int:id>',views.orderapi,name="order"),

    path('defective/',views.defectivegoodsapi,name="defective"),
    path('defective/<int:id>',views.defectivegoodsapi,name="defective"),

    path('api-token-auth/', obtain_auth_token, name='api_token_auth'),
]