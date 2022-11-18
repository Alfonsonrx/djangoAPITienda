from django.urls import path
from . import views

app_name = 'api'
urlpatterns = [
    path('v1/product/', views.Product_APIView.as_view(), name='Products'), 
    path('v1/product/<int:pk>/', views.Product_APIView_Detail.as_view(), name='Detail'),
    
    path('v1/user/', views.Usuario_APIView.as_view(), name='Usuarios'), 
    path('v1/user/<int:pk>/', views.Usuario_APIView_Detail.as_view(), name='Detail'),
    
    path('v1/comment/', views.Comment_APIView.as_view(), name='Comments'), 
    path('v1/comment/<int:pk>/', views.Comment_APIView_Detail.as_view(), name='Detail'),
]
