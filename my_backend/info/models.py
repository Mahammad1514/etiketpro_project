from django.db import models


# Create your models here.

class Contact(models.Model):
    name=models.CharField(max_length=30)
    email=models.EmailField(max_length=50)
    phone=models.CharField(max_length=25, null=False)
    message=models.TextField()

    def __str__(self):
        return self.name 
    

    
