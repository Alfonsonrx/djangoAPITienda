from rest_framework import serializers
from .models import Usuario, Comment, Product

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        exclude = ['mod_date']
class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        exclude = ['mod_date']
class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        exclude = ['mod_date']
        # exclude = ['is_removed', 'created', 'modified']
