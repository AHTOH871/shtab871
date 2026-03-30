from django.urls import path
# Импортируем созданное нами представление
from .views import *


urlpatterns = [
   path('stats/', TemplateView.as_view(template_name='stats.html'), name='risks'),
   path('regions/', search_item, name='search_item'),
   path('regions/<int:pk>/', item_detail, name='item_detail'),  
]
