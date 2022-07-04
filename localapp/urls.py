from django.urls import path, include
 
from localapp import views
from rest_framework import routers
router = routers.DefaultRouter()
router.register('customers/', views.CustViewSet, basename='customers')

urlpatterns = [
    path('', views.HomePageView, name='home'),
    path('links/', views.LinksPageView, name='links'), # simple view
    path('getcust/',views.Customers, name='customers'), # simple view
    path('apitest/',views.CalcTest), # for REST API test
]