from django.contrib import admin
from .models import Usuario, Comment, Product

# Register your models here.
admin.site.register([Usuario, Comment, Product])