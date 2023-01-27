from django.shortcuts import render
from django.views import generic
import requests
from api.models import Usuario, Comment, Product

# Create your views here.
class IndexView(generic.ListView):
    template_name = 'tiendaMain/index.html'
    context_object_name = "latest_product_list"
    
    def get_queryset(self):
        products = requests.get("http://127.0.0.1:8000/api/v1/product/")
        return products.json()
        
# def editar_product(request, pk):
#     template_name = 'tienaMain/editar.html'
#     producto = requests.get("http://127.0.0.1:8000/api/v1/product/{}".format(pk)).json()
#     context = {
#         'producto': producto
#     }
#     return render(request, template_name, context)