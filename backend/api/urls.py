from django.urls import path
from accounts import views as UseView

urlpatterns = [
    path('register/', UseView.UserRegisterView.as_view()),
]