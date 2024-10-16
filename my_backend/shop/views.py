from django.shortcuts import render, get_object_or_404
from .models import Product

def index(request):
    return render(request, 'index.html')

def products(request):
    products_list = Product.objects.all()
    context = {
        'products': products_list,
    }
    return render(request, 'products.html', context)

def product_detail(request, pk):
    product = get_object_or_404(Product, pk=pk)
    other_products = Product.objects.exclude(pk=product.pk).order_by('?')[:5]
    context = {
        'product': product,
        'other_products': other_products,
    }
    return render(request, 'product-detail.html', context)