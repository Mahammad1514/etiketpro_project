from django.db import models
from django.contrib.admin import display
# Create your models here.

class Product(models.Model):
    title=models.CharField(max_length=50)
    price=models.FloatField()
    description=models.TextField()
    created=models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return self.title
    


class ProductImage(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='images')
    image = models.ImageField(upload_to='product_images') 

    @display(description="Movcud sekil")
    def get_image_display(self):
        return self.image.url 

    