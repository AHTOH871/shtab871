from django.shortcuts import render
from rest_framework import viewsets
from rest_framework import permissions
from regions.serializers import *
from django.views.generic import UpdateView, CreateView, ListView, TemplateView
from .models import *
from itertools import islice
from django.shortcuts import render, redirect, get_object_or_404
from django.urls import reverse
from .forms import SubjectSearchForm
from rest_framework.response import Response
from itertools import chain


def chunk(it, size):
    it = iter(it)
    return iter(lambda: tuple(islice(it, size)), ())

def search_item(request):
    if request.method == 'POST':
        form = SubjectSearchForm(request.POST)
        if form.is_valid():
            region_ff = form.cleaned_data['reg']
            # Retrieve the item or raise a 404 if not found
            item = get_object_or_404(Subjects_RF, pk=Subjects_RF.objects.get(region = region_ff).id)
            # Redirect to the detail view of the found item
            return redirect(reverse('item_detail', args=[item.pk]))
    else:
        form = SubjectSearchForm()
    return render(request, 'page2.html', {'form': form})


def item_detail(request, pk):
    tech = get_object_or_404(Tech, pk=pk)
    cont_places = get_object_or_404(ContPlaces, pk=pk)
    containers = get_object_or_404(Containers, pk=pk)

    tech_4_page = {
        'region':tech.rf_subject_tech.region.title(),
        'fact': int(tech.fact),
        'lack': int(tech.lack),
        'plan':int(tech.fact) + int(tech.lack),
        'lack_in_per':int(float(tech.lack_per)*100),
        'all_rf_tech': round(float(get_object_or_404(Tech, pk=1).lack_per)*100,1)
        }
    
    cont_places_4_page = {
        'fgis': round(cont_places.container_places_fgis_fill*100),
        'fgis_div':100-round(cont_places.container_places_fgis_fill*100),
        'fact': int(cont_places.fact_fgis_kp),
        'lack': int(cont_places.lack_kp),
        'plan': int(cont_places.fact_fgis_kp)+int(cont_places.lack_kp),
        'lack_in_per': int(float(cont_places.lack_in_per)*100),
        'container_places_per_1k':round(float(cont_places.container_places_per_1k), 1),
        'all_rf_places_lack': round(float(get_object_or_404(ContPlaces, pk=1).lack_in_per)*100,1),
        'all_rf_places_per_1k': round(float(get_object_or_404(ContPlaces, pk=1).container_places_per_1k),1),
        'div_per_1k': round((float(get_object_or_404(ContPlaces, pk=1).container_places_per_1k)-float(cont_places.container_places_per_1k)), 1),
        'div_per_1k_in_per':round(((round(float(get_object_or_404(ContPlaces, pk=1).container_places_per_1k),1)-round(float(cont_places.container_places_per_1k), 1))/round(float(get_object_or_404(ContPlaces, pk=1).container_places_per_1k),1))*100),
    }
    containers_4_page = {
        'fgis': round(containers.containers_fgis_fill*100),
        'fgis_div':100-round(containers.containers_fgis_fill*100),
        'fact': int(containers.cont_fact_fgis),
        'lack': int(containers.lack_containers),
        'plan': int(containers.cont_fact_fgis)+int(containers.lack_containers),
        'lack_in_per': int(float(containers.containers_lack_in_per)*100),
        'containers_per_1k':round(float(containers.containers_per_1k), 1),
        'all_rf_containers_lack': round(float(get_object_or_404(Containers, pk=1).containers_lack_in_per)*100,1),
        'all_rf_containers_per_1k': round(float(get_object_or_404(Containers, pk=1).containers_per_1k),1),
        'div_per_1k': round((float(get_object_or_404(Containers, pk=1).containers_per_1k)-float(containers.containers_per_1k)), 1),
        'div_per_1k_in_per':round(((round(float(get_object_or_404(Containers, pk=1).containers_per_1k),1)-round(float(containers.containers_per_1k), 1))/round(float(get_object_or_404(Containers, pk=1).containers_per_1k),1))*100),

    }
    return render(request, 'region-info.html', {'tech': tech_4_page, 'places':cont_places_4_page,'containers':containers_4_page})

    
class SubjectsViewset(viewsets.ModelViewSet):
    queryset = Subjects_RF.objects.all()
    serializer_class = SubjectSerializer


class SvodViewset(viewsets.ModelViewSet):
    queryset = Svod.objects.all().order_by("risks_zones")
    serializer_class = SvodSerializer

    def svod_converter(self, entry, request):
        return {'id': entry.id,
                'region':entry.rf_subject_svod.region.title(),
                'risks_zones':entry.risks_zones,
                'road_map_ro':entry.road_map_ro,
                'url': request.build_absolute_uri(entry.get_absolute_url()),}

    def list(self, request, *args, **kwargs):

        queryset = self.get_queryset()

        risk_zones = OrderedDict()

        for obj in queryset:
            try:
                if 'не подлежит оценке' in obj.risks_zones:
                    key = 'gray_zone'
                    risk_zones.setdefault(key, []).append(self.svod_converter(obj, request))
                else:
                    danger_level = obj.risks_zones.split('/')

                    if int(danger_level[0])>0 and int(danger_level[1])<2:
                        key = 'low_stability'
                        risk_zones.setdefault(key, []).append(self.svod_converter(obj, request))

                    if int(danger_level[1])>0 and int(danger_level[0])==0:
                        key = 'medium_stability'
                        risk_zones.setdefault(key, []).append(self.svod_converter(obj, request))

                    if int(danger_level[2].strip(' ')[0])>0 and int(danger_level[1])==0 and int(danger_level[0])==0:
                        key = 'high_stability'
                        risk_zones.setdefault(key, []).append(self.svod_converter(obj, request))

            except ValueError:
                continue

        return Response(risk_zones)
        

class WeightControlFgisViewset(viewsets.ModelViewSet):

    queryset = WeightControlFGIS.objects.all()
    serializer_class = WeightControlFGISSerializer

    def weight_control_converter(self, entry, request):
        return {'id': entry.id, 
                'region': entry.rf_subject_weight.region.title(), 
                'url': request.build_absolute_uri(entry.get_absolute_url()),
                'weight': entry.weight_fgis_fill}

    def list(self, request, *args, **kwargs):

        queryset = self.get_queryset().order_by('weight_fgis_fill')


        weight_control = OrderedDict()

        for obj in queryset:
            try:
                if obj.not_mesuared:
                    key = 'gary_zone'
                    weight_control.setdefault(key, []).append(self.weight_control_converter(obj, request))
                else:
                    if obj.weight_fgis_fill < 0.01:
                        key = 'red_zone'
                        weight_control.setdefault(key, []).append(self.weight_control_converter(obj, request))

                    if obj.weight_fgis_fill > 0.01 and obj.weight_fgis_fill <= 0.2:
                        key = 'mid_red_zone'
                        weight_control.setdefault(key, []).append(self.weight_control_converter(obj, request))

                    if obj.weight_fgis_fill > 0.2 and obj.weight_fgis_fill <= 0.5: 
                        key = 'mid_zone'
                        weight_control.setdefault(key, []).append(self.weight_control_converter(obj, request))

                    if obj.weight_fgis_fill > 0.5: 
                        key = 'green_zone'
                        weight_control.setdefault(key, []).append(self.weight_control_converter(obj, request))

            except ValueError:
                continue

        return Response(weight_control)


class PhotoFixationViewset(viewsets.ModelViewSet):

    queryset = ContainerPlacesPhotofixation.objects.all()
    serializer_class = PhotoFixationSerializer

    def photo_fix_converter(self, entry, request):
        return {'id': entry.id, 
                'region': entry.rf_subject_photo.region.title(), 
                'url': request.build_absolute_uri(entry.get_absolute_url()),
                'weight': entry.photo_fixation_fill}

    def list(self, request, *args, **kwargs):

        queryset = self.get_queryset().order_by('photo_fixation_fill')
        

        photo_fixation = OrderedDict()

        for obj in queryset:
            try:
                if obj.photo_fixation_fill < 0.1:
                    key = 'red_zone'
                    photo_fixation.setdefault(key, []).append(self.photo_fix_converter(obj, request))

                if obj.photo_fixation_fill > 0.1 and obj.photo_fixation_fill < 30: 
                    key = 'mid_red_zone'
                    photo_fixation.setdefault(key, []).append(self.photo_fix_converter(obj, request))

                if obj.photo_fixation_fill > 30: 
                    key = 'mid_zone'
                    photo_fixation.setdefault(key, []).append(self.photo_fix_converter(obj, request))

            except ValueError:
                continue
        
        return Response(photo_fixation)

class GlonassDataViewset(viewsets.ModelViewSet):

    queryset = GlonassData.objects.all()
    serializer_class = GlonassDataSerializer

    def glonass_data_converter(self, entry, request):
        return {'id': entry.id, 
                'region': entry.rf_subject_glonass.region.title(), 
                'url': request.build_absolute_uri(entry.get_absolute_url()),
                'tech_data': entry.tech_data,
                'transducer':entry.transducer,
                'glonass_data_fill': entry.glonass_data_fill}

    def list(self, request, *args, **kwargs):

        queryset = self.get_queryset()
        

        glonass_data = OrderedDict()

        for obj in queryset:
            try:
                if obj.glonass_data_fill < 0.1: #уточнить условие
                    key = 'red_zone'
                    glonass_data.setdefault(key, []).append(self.glonass_data_converter(obj, request))

                if obj.glonass_data_fill < 0.5 and obj.glonass_data_fill > 0.1: 
                    key = 'mid_zone'
                    glonass_data.setdefault(key, []).append(self.glonass_data_converter(obj, request))

                if obj.glonass_data_fill > 0.5: 
                    key = 'green_zone'
                    glonass_data.setdefault(key, []).append(self.glonass_data_converter(obj, request))

            except ValueError:
                continue
        
        return Response(glonass_data)
    

class VideoFixationViewset(viewsets.ModelViewSet):

    queryset = VideoFixation.objects.all()
    serializer_class = VideoFixationSerializer

    def videofix_converter(self, entry, request):
        return {'id': entry.id, 
                'region': entry.rf_subject_videofixation.region.title(), 
                'url': request.build_absolute_uri(entry.get_absolute_url()),
                'cameras_exist': entry.cameras_exist,
                'integration_in_process':entry.integration_in_process,
                'actually_transmitting': entry.actually_transmitting}

    def list(self, request, *args, **kwargs):

        queryset = self.get_queryset()
        

        video_fixation = OrderedDict()

        for obj in queryset:
            try:
                if not obj.cameras_exist: 
                    key = 'gray_zone'
                    video_fixation.setdefault(key, []).append(self.videofix_converter(obj, request))

                if obj.cameras_exist and obj.integration_in_process: 
                    key = 'mid_zone'
                    video_fixation.setdefault(key, []).append(self.videofix_converter(obj, request))

                if obj.cameras_exist and obj.actually_transmitting: 
                    key = 'green_zone'
                    video_fixation.setdefault(key, []).append(self.videofix_converter(obj, request))

            except ValueError:
                continue
        
        return Response(video_fixation)


class ContainersPlacesPurchasesViewset(viewsets.ModelViewSet):

    queryset = ContainersPlacesPurchases.objects.all()
    serializer_class = ContainersPlacesPurchasesSerializer

    def contplacespurchases_converter(self, entry, request):
        return {'id': entry.id, 
                'region': entry.rf_subject_contplaces_purchase.region.title(), 
                'url': request.build_absolute_uri(entry.get_absolute_url()),
                'budget': entry.budget,
                'cont_places_additional':f'{entry.cont_places_fact} из {entry.cont_places_plan}',
                'cont_places_additional_per': round(entry.cont_places_additional_per, 2),
                'containers_additional': f'{entry.containers_fact} из {entry.containers_plan}',
                'containers_additional_per':round(entry.containers_additional_per, 2)}

    def list(self, request, *args, **kwargs):

        queryset = self.get_queryset()
        

        contplacespurchases = OrderedDict()

        for obj in queryset:
            try:
                if obj.cont_places_additional_per == 0 and obj.containers_additional_per == 0: 
                    key = 'red_zone'
                    contplacespurchases.setdefault(key, []).append(self.contplacespurchases_converter(obj, request))

                elif obj.cont_places_additional_per > 0 and obj.cont_places_additional_per < 0.2 and obj.containers_additional_per > 0.2 and obj.containers_additional_per < 0.5: 
                    key = 'mid_zone'
                    contplacespurchases.setdefault(key, []).append(self.contplacespurchases_converter(obj, request))

                else:
                    key = 'green_zone'
                    contplacespurchases.setdefault(key, []).append(self.contplacespurchases_converter(obj, request))

            except ValueError:
                continue
        
        return Response(contplacespurchases)
    
class TechViewset(viewsets.ModelViewSet):
    queryset = Tech.objects.all()
    serializer_class = TechToRegionSerializer

class ContPlacesViewset(viewsets.ModelViewSet):

    queryset = ContPlaces.objects.all()
    serializer_class = ContPlacesToRegionSerializer

class ContainersViewset(viewsets.ModelViewSet):

    queryset = Containers.objects.all()
    serializer_class = ContainersToRegionSerializer 

class RegionDataViewset(viewsets.ModelViewSet):

    queryset = Svod.objects.all()
    serializer_class = RegionDataSerializer

    def regiondata_converter(self, entry, request):
        return {'id': entry.id, 
                'tech_data': {'url': request.build_absolute_uri(entry.tech_data.get_absolute_url()), 
                              'plan': entry.tech_data.plan, 
                              'fact': entry.tech_data.fact, 
                              'lack': entry.tech_data.lack,
                              'lack_per':round(entry.tech_data.lack_per,2),
                              'all_rf_tech': round(float(get_object_or_404(Tech, pk=1).lack_per)*100,1)
                },
                'cont_places':{'url': request.build_absolute_uri(entry.container_places_data.get_absolute_url()),
                               'plan': entry.container_places_data.container_places_plan,
                               'fact': entry.container_places_data.fact_fgis_kp,
                               'lack': entry.container_places_data.lack_kp,
                               'lack_per':round(entry.container_places_data.lack_in_per, 2),
                               'all_rf_cont_places': round(float(get_object_or_404(ContPlaces, pk=1).lack_in_per)*100,1),

                },
                'containers':{'url': request.build_absolute_uri(entry.containers_data.get_absolute_url()),
                              'plan':entry.containers_data.containers_plan,
                              'fact': entry.containers_data.cont_fact_fgis,
                              'lack': entry.containers_data.lack_containers,
                              'lack_in_per': round(entry.containers_data.containers_lack_in_per, 2),
                              'all_rf_containers': round(float(get_object_or_404(Containers, pk=1).containers_lack_in_per)*100,1),
                }
                }

    def list(self, request, *args, **kwargs):

        queryset = self.get_queryset()

        region_data = OrderedDict()
        for obj in queryset:
            try:
                key = obj.rf_subject_svod.region.title()
                region_data.setdefault(key, self.regiondata_converter(obj, request))

            except ValueError:
                continue
        
        return Response(region_data)



# class TechBuyViewset(viewsets.ModelViewSet):

#     queryset = TechBuy.objects.all()
#     serializer_class = TechBuySerializer

#     def techbuy_converter(self, entry, request):
#         return {'id': entry.id, 
#                 'region': entry.rf_subject_tech_buy.region.title(), 
#                 'url': request.build_absolute_uri(entry.get_absolute_url()),
#                 'is_plan': entry.is_plan,
#                 'plan_buy':entry.plan_buy,
#                 'fact_buy': entry.fact_buy,
#                 'percent': entry.percent,
#                 'leasing':entry.leasing}

#     def list(self, request, *args, **kwargs):

#         queryset = self.get_queryset().group_by('fact_buy')
        

#         techbuy = OrderedDict()

#         for obj in queryset:
#             try:
#                 if not obj.is_plan: 
#                     key = 'green_zone'
#                     techbuy.setdefault(key, []).append(self.techbuy_converter(obj, request))
#                 else:

#                     if obj.fact_buy == 0: 
#                         key = 'red_zone'
#                         techbuy.setdefault(key, []).append(self.techbuy_converter(obj, request))

#                     if obj.fact_buy != 0 and obj.plan_buy > obj.fact_buy:
#                         key = 'mid_zone'
#                         techbuy.setdefault(key, []).append(self.techbuy_converter(obj, request))
                    
#                     if 

#             except ValueError:
#                 continue
        
#         return Response(contplacespurchases)


# class SvodRisks(ListView):
#     model = Svod
#     ordering = '-rf_subject_svod'
#     template_name = 'stats.html'
    
#     def get_context_data(self, **kwargs):
#         context = super().get_context_data(**kwargs)

#         data = Svod.objects.all()

#         red_zone = []
#         mid_zone = []
#         green_zone = []
#         gray_zone = []

#         for obj in data:
#             try:

#                 if 'не подлежит оценке' in obj.risks_zones:
#                     gray_zone.append(obj)

#                 danger_level = obj.risks_zones.split('/')
#                 if int(danger_level[0])>0 and int(danger_level[1])<2:
#                     red_zone.append(obj)

#                 if int(danger_level[1])>0 and int(danger_level[0])==0:
#                     mid_zone.append(obj)

#                 if int(danger_level[2].strip(' ')[0])>0 and int(danger_level[1])==0 and int(danger_level[0])==0:
#                     green_zone.append(obj)

#             except ValueError:
#                 continue
        
#         context = {
#             'low_stability':list(chunk(red_zone, 4)),
#             'medium_stability':list(chunk(mid_zone, 4)),
#             'high_stability':list(chunk(green_zone,4)),
#             'red_zone_count':len(red_zone),
#             'mid_zone_count':len(mid_zone),
#             'green_zone_count':len(green_zone),
#             'gray_zone_count':len(gray_zone),
#             'gray_zone':list(chunk(gray_zone, 4)),

#         }

#         return context