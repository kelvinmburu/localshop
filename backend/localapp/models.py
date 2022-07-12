from django.db import models
from django.contrib.auth.models import User


STATUS = (
    ('Paid','Paid'),
    ('Unpaid','Unpaid'),

)


class Admin(models.Model):
    name = models.CharField(max_length=20)
    email = models.EmailField(max_length=20)
    password = models.CharField(max_length=20)
    

class Clerk(models.Model):
    name = models.CharField(max_length=20)
    email = models.EmailField(max_length=20)
    password = models.CharField(max_length=20)



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

class Order(models.Model):
    CATEGORY = (
    ('Electronics','Electronics'),('Foods','Foods'),('Detergents','Detergents'),('Kitchen-ware','Kitchen-ware'),('Toys','Toys')
)

    category = models.CharField(max_length=20,choices=CATEGORY,null=True)
    date = models.DateField(auto_now_add=True)
    ordered_product = models.CharField(max_length=20)
    quantity = models.IntegerField()

class Defectivegood(models.Model):
    CATEGORY = (
    ('Electronics','Electronics'),('Foods','Foods'),('Detergents','Detergents'),('Kitchen-ware','Kitchen-ware'),('Toys','Toys')
)

    category = models.CharField(max_length=20,choices=CATEGORY,null=True)
    goodname = models.CharField(max_length=20)
    quantity = models.IntegerField()
