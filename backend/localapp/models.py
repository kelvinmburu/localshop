from django.db import models
from django.contrib.auth.models import User


STATUS = (
    ('1','Paid'),
    ('2','Unpaid'),
)


class Admin(models.Model):
    name = models.CharField(max_length=20)
    email = models.EmailField(max_length=20)
    password = models.CharField(max_length=20)
    
    class Meta:
        ordering = ('name',)

    def __str__(self):
        return self.name



class Clerk(models.Model): 
    name = models.CharField(max_length=20)
    email = models.EmailField(max_length=20)
    password = models.CharField(max_length=20)

    class Meta:
        ordering = ('name',)

    def __str__(self):
        return self.name



class Product(models.Model):
    CATEGORY = (
    ('Electronics','Electronics'),('Foods','Foods'),('Detergents','Detergents'),('Kitchen-ware','Kitchen-ware'),('Toys','Toys')
)
    product_name = models.CharField(max_length=20)
    category = models.CharField(max_length=20,choices=CATEGORY,null=True)
    quantity = models.IntegerField()
    status = models.CharField(max_length=20,choices=STATUS,null=True)
    buying_price = models.IntegerField()
    selling_price = models.IntegerField()
    expiry_date = models.DateTimeField()
    date_received = models.DateTimeField(auto_now_add=True) 

    class Meta:
        ordering = ['-date_received'] 

    def __str__(self):
        return self.product_name 
    


class Order(models.Model):
    CATEGORY = (
    ('Electronics','Electronics'),('Foods','Foods'),('Detergents','Detergents'),('Kitchen-ware','Kitchen-ware'),('Toys','Toys')
)

    ordered_product = models.CharField(max_length=20) 
    category = models.CharField(max_length=20,choices=CATEGORY,null=True)
    quantity = models.IntegerField() 
    date = models.DateField(auto_now_add=True)

    class Meta:
        ordering = ['ordered_product'] 

    def __str__(self):
        return self.ordered_product  



class Defectivegood(models.Model):
    CATEGORY = (
    ('Electronics','Electronics'),('Foods','Foods'),('Detergents','Detergents'),('Kitchen-ware','Kitchen-ware'),('Toys','Toys')
)
    goodname = models.CharField(max_length=20)
    quantity = models.IntegerField()
    category = models.CharField(max_length=20,choices=CATEGORY,null=True) 

    class Meta:
        ordering = ['goodname'] 

    def __str__(self):
        return self.goodname  
