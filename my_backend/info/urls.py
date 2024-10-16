from django.urls import path
from . import views

app_name='info'

urlpatterns = [
    path('about/',views.about,name='about'),
    path('contact/',views.contact,name='contact'),
    path('confirm-contact/',views.confirm_contact,name='confirm-contact'), 
]


