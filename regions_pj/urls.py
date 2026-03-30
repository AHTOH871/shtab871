"""
URL configuration for regions_pj project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from rest_framework import routers
from django.urls import path, include
from regions.views import *
from django.contrib.auth import views as auth_views

router = routers.DefaultRouter()

router.register(r'subjects_rf',SubjectsViewset)
router.register(r'risk_zones', SvodViewset)
router.register(r'weight_control_fgis', WeightControlFgisViewset)
router.register(r'container_places_photofixation', PhotoFixationViewset)
router.register(r'glonass_data', GlonassDataViewset)
router.register(r'video_fixation', VideoFixationViewset)
router.register(r'cont_places_purchases', ContainersPlacesPurchasesViewset)
router.register(r'tech', TechViewset)
router.register(r'cont_places', ContPlacesViewset)
router.register(r'containers', ContainersViewset)
router.register(r'region_data', RegionDataViewset, basename='region_data')

urlpatterns = [
    # path('', auth_views.LoginView.as_view(template_name='registration/login.html'), name='login'),
    path('admin/', admin.site.urls),
    path('api/', include(router.urls), name = 'api'),
    path("accounts/", include("django.contrib.auth.urls")),
    path("accounts/", include("accounts.urls")),
    path('pages/', include('django.contrib.flatpages.urls')),
    path('regions/', include('regions.urls')),
]
