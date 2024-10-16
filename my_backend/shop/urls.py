from django.urls import path
from . import views

app_name = 'shop'

urlpatterns = [
    path('', views.index, name='index'),
    path('home/', views.index, name='home'),
    path('products/', views.products, name='products'),
    path('products/<int:pk>/', views.product_detail, name='product-detail'),
]
