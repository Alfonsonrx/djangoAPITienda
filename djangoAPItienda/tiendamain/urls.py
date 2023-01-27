from django.urls import path
from . import views

app_name = 'tiendamain'
urlpatterns = [
    path("", views.IndexView.as_view(), name="Index"), 
    # path("editar_prod/<int:pk>/", views.editar_product, name="Editar"), 
]
