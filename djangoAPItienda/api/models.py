from django.db import models

# Create your models here.
class Usuario(models.Model):
    email = models.EmailField(max_length=40)
    nickname = models.CharField(max_length=100)
    realname = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    
    def __str__(self):
        return self.nickname
class Product(models.Model):
    name = models.CharField(max_length=100)
    img_url = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    pub_date = models.DateTimeField(auto_now_add=True)
    mod_date = models.DateTimeField(auto_now_add=True)
    serial_num = models.IntegerField()
    price = models.DecimalField(max_digits=20, decimal_places=2)
    # rating = models.DecimalField(max_digits=3, decimal_places=1)
    
    def __str__(self):
        return self.name
class Comment(models.Model):
    prod_rating = models.DecimalField(max_digits=3, decimal_places=1)
    prod_num = models.IntegerField()
    pub_date = models.DateTimeField(auto_now_add=True)
    user_mail = models.EmailField()
    text_comment = models.TextField()
    
    def __str__(self):
        return self.text_comment