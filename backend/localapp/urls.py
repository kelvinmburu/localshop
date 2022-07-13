from django.urls import path, include

from localapp import views
from rest_framework import routers
router = routers.DefaultRouter()
# router.register('customers/', views.CustViewSet, basename='customers')

urlpatterns = [
    path('', views.HomePageView, name='home'),

    path('newadmin/',views.adminapi,name='admin'), # for REST API
    path('newadmin/<int:id>',views.adminapi,name='admin'), # for REST API

    path('products/',views.productapi,name="products"),
    path('products/<int:id>',views.productapi,name="products"),

    path('clerks/',views.clerkapi,name="clerks"),
    path('clerks/<int:id>',views.clerkapi,name="clerks"),

    path('orders/',views.orderapi,name="orders"),
    path('orders/<int:id>',views.orderapi,name="orders"),

    path('defective/',views.defectivegoodsapi,name="defective"),
    path('defective/<int:id>',views.defectivegoodsapi,name="defective"),
]
