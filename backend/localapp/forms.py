# add product, update, request product, add user
from .models import * 
from django.forms import ModelForm
from django.contrib.auth.forms import UserCreationForm
from django import forms
from django.contrib.auth.models import User

# merchant sign up form
class MerchantSignupForm(UserCreationForm):
    class Meta:
        model = User
        fields = ['username','email' ,'password1', 'password2']


class AddProduct(forms.Model):
    class Meta:
        model = Product
        fields = '__all__'


class UpdateProduct(forms.Model):
    class Meta:
        model = Product
        fields = '__all__'

class RequestProduct(forms.Model):
    class Meta:
        model =Product
        fields = ['name','quantity']