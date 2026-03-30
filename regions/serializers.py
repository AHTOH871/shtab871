from .models import *
from collections import OrderedDict
from rest_framework import serializers
from itertools import islice


class SvodSerializer(serializers.ModelSerializer):
    class Meta:
        model = Svod
        fields = ['id', 'risks_zones', 'road_map_ro', ]

class SubjectSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Subjects_RF
        fields = '__all__'
        
class WeightControlFGISSerializer(serializers.ModelSerializer):
    class Meta:
        model = WeightControlFGIS
        fields = ['id', 'weight_fgis_fill', 'rf_subject_weight']

class PhotoFixationSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContainerPlacesPhotofixation
        fields = ['id', 'rf_subject_photo', 'photo_fixation_fill']

class GlonassDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = GlonassData
        fields = ['id', 'rf_subject_glonass', 'tech_data', 'transducer', 'glonass_data_fill']

class VideoFixationSerializer(serializers.ModelSerializer):
    class Meta:
        model = VideoFixation
        fields = ['id', 
                  'rf_subject_videofixation', 
                  'cameras_exist', 
                  'integration_in_process', 
                  'actually_transmitting',
                  ]

class ContainersPlacesPurchasesSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContainersPlacesPurchases
        fields = ['id', 
                  'rf_subject_contplaces_purchase', 
                  'budget', 
                  'cont_places_plan',
                  'cont_places_fact', 
                  'containers_plan', 
                  'containers_fact',
                  ]
        read_only_fields = ['cont_places_additional_per', 'containers_additional_per']
        
# class TechBuySerializer(serializers.ModelSerializer):
#     class Meta:
#         model = TechBuy
#         fields = ['id',
#                   'rf_subject_tech_buy',
#                   'current_lack',
#                   'is_plan',
#                   'plan_buy',
#                   'fact_buy',
#                   'percent',
#                   'leasing',
#                 ]
class TechToRegionSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Tech
        fields = '__all__'
        read_only_fields = ['lack_per', 'rf_subject_tech']

class ContPlacesToRegionSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = ContPlaces
        fields = ['container_places_plan', 'fact_fgis_kp', 'lack_kp', 'lack_in_per']
        read_only_fields = ['lack_in_per', 'rf_subject_cont_places']

class ContainersToRegionSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Containers
        fields = '__all__'
        # read_only_fields = ['lack_per', 'rf_subject_tech']

class RegionDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = Svod
        fields = ["rf_subject_svod", "tech_data", "container_places_data", "containers_data"]
