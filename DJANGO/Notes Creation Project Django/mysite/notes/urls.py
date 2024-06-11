from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('add_category/', views.add_category, name='add_category'),
    path('category/<int:pk>/', views.category_detail, name='category_detail'),
    path('category/<int:pk>/add_question/', views.add_question, name='add_question'),
]
