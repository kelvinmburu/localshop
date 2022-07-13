from django.contrib import admin
from .models import *  
from rest_framework.authtoken.admin import TokenAdmin

# Register your models here.
admin.site.register(Product)
admin.site.register(Clerk)
admin.site.register(Admin)
admin.site.register(Order)
# admin.site.register(Store)
admin.site.register(Defectivegood)

TokenAdmin.raw_id_fields = ['user']
