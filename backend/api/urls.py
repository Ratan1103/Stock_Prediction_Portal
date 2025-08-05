from django.urls import path
from accounts import views as UseView
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.views import TokenRefreshView
from .views import StockPredictionsAPIView

urlpatterns = [
    path('register/', UseView.UserRegisterView.as_view()),

    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    path('protected-view/', UseView.ProtectedView.as_view()),

    path('predict/', StockPredictionsAPIView.as_view(),name='Stock Prediction')
]