from django import forms
from django.contrib.auth.models import User

class RegisterForm(forms.Form):
    first_name=forms.CharField()
    last_name=forms.CharField()
    username=forms.CharField()
    email=forms.EmailField()
    password=forms.CharField(widget=forms.PasswordInput)
    password_again=forms.CharField(widget=forms.PasswordInput) 
    def save(self):
        first_name=self.cleaned_data.get("first_name")
        last_name=self.cleaned_data.get("last_name")
        username=self.cleaned_data.get("username")
        email=self.cleaned_data.get("email")
        password=self.cleaned_data.get("password") 
        user=User.objects.create_user(
                first_name=first_name,
                last_name=last_name,
                username=username,
                email=email,
                password=password
        )
        return user
    
    def clean(self):
        cleaned_data = super().clean()
        password = cleaned_data.get('password')
        password2 = cleaned_data.get('password2')
        
        if password and password2 and password != password2:
            raise forms.ValidationError('Sifreler eyni deyil!')
        
    def clean_email(self):
        email = self.cleaned_data.get('email')
        if email and User.objects.filter(email=email).exists():
            raise forms.ValidationError('Bu email movcuddur!')
        return email
    
    def clean_username(self):
        username = self.cleaned_data.get('username')
        if username and User.objects.filter(username=username).exists():
            raise forms.ValidationError('Bu username movcuddur!')
        return username 
    
class LoginForm(forms.Form):
    username = forms.CharField()
    password = forms.CharField(widget=forms.PasswordInput)
    def clean(self):
     super().clean() 