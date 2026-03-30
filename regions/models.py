from django.db import models
from django.urls import reverse


class Subjects_RF(models.Model):
    region = models.CharField(max_length=255, null=True, unique=True)

    def get_absolute_url(self):
        return reverse('subjects_rf-detail', args=[str(self.id)])

    def __str__(self):
        return self.region.title()


class Svod(models.Model):

    abbr = models.CharField(max_length=10, null=True)
    rf_subject_svod = models.ForeignKey('Subjects_RF', on_delete=models.CASCADE, null=True)
    risks_zones = models.CharField(max_length=255, null=True)
    mobile_app = models.CharField(max_length=255, null=True)
    road_map_ro = models.CharField(max_length=255, null=True)
    tech_data = models.ForeignKey('Tech', on_delete=models.CASCADE)
    container_places_data = models.ForeignKey('ContPlaces', on_delete=models.CASCADE)
    containers_data = models.ForeignKey('Containers',  on_delete=models.CASCADE)

    def get_absolute_url(self):
        return reverse('svod-detail', args=[str(self.id)])

    def __str__(self):
        return self.rf_subject_svod.region.title()

class ContPlaces(models.Model):

    rf_subject_cont_places = models.OneToOneField('Subjects_RF', on_delete=models.CASCADE, null=True)
    svetofor = models.IntegerField(null=True)
    population = models.IntegerField(null=True)
    fact_mno = models.IntegerField(null=True)
    fact_fgis_kp = models.IntegerField(null=True)
    fact_mno_ts = models.IntegerField(null=True)
    lack_kp = models.IntegerField(null=True)
    container_places_per_1k = models.FloatField(null=True)
    container_places_plan = models.IntegerField(null=True)
    lack_in_per = models.FloatField(null=True)
    container_places_fgis_fill= models.FloatField(null=True)

    def save(self, *args, **kwargs):
        self.container_places_plan = self.fact_fgis_kp + self.lack_kp
        if self.container_places_plan == 0:
            self.lack_per = 0
        else:
            self.lack_per = self.lack_kp/self.container_places_plan
        
        return super().save(*args, **kwargs)

    def get_absolute_url(self):
        return reverse('contplaces-detail', args=[str(self.id)])

    def __str__(self):
        return self.rf_subject_cont_places.region.title()
    

class Containers(models.Model):

    rf_subject_containers = models.ForeignKey('Subjects_RF', on_delete=models.CASCADE, null=True)
    svetofor = models.IntegerField(null=True)
    population = models.IntegerField(null=True)
    cont_fact_fgis = models.IntegerField(null=True)
    cont_fact_ts = models.IntegerField(null=True)
    lack_containers = models.IntegerField(null=True)
    containers_per_1k = models.FloatField(null=True)
    containers_plan = models.IntegerField(null=True)
    containers_lack_in_per = models.FloatField(null=True)
    containers_fgis_fill= models.FloatField(null=True)

    def get_absolute_url(self):
        return reverse('containers-detail', args=[str(self.id)])

    def __str__(self):
        return self.rf_subject_containers.region.title()

class Tech(models.Model):
    abbr = models.CharField(max_length=10, null=True)
    rf_subject_tech = models.OneToOneField('Subjects_RF', on_delete=models.CASCADE, null=True)
    svetofor = models.IntegerField(null=True)
    svet_index = models.IntegerField(null=True)
    plan = models.IntegerField(null=True)
    fact = models.IntegerField(null=True)
    lack = models.IntegerField(null=True)
    lack_per = models.FloatField(null=True)
    lack_text = models.CharField(max_length=255, null=True)
    text_to_dash = models.CharField(max_length=255, null=True)

    def save(self, *args, **kwargs):
        self.plan = self.fact + self.lack
        if self.plan == 0:
            self.lack_per = 0
        else:
            self.lack_per = self.lack/self.plan
        
        return super().save(*args, **kwargs)
    
    def get_absolute_url(self):
        return reverse('tech-detail', args=[str(self.id)])

    def __str__(self):
        return self.rf_subject_tech.region.title()

    
class WeightControlFGIS(models.Model):

    rf_subject_weight = models.OneToOneField('Subjects_RF', on_delete=models.CASCADE, null=True)
    weight_fgis_fill = models.FloatField(null=True, db_comment='формат 0.0')
    not_mesuared = models.BooleanField(default=False)

    def get_absolute_url(self):
        return reverse('weightcontrolfgis-detail', args=[str(self.id)])

    def __str__(self):
        return self.rf_subject_weight.region.title()
    

class ContainerPlacesPhotofixation(models.Model):
    rf_subject_photo = models.OneToOneField('Subjects_RF', on_delete=models.CASCADE, null=True)
    photo_fixation_fill = models.FloatField(null=True, db_comment='формат 0.0, уже проценты')

    def get_absolute_url(self):
        return reverse('containerplacesphotofixation-detail', args=[str(self.id)])
    
    def __str__(self):
        return self.rf_subject_photo.region.title()

class GlonassData(models.Model):
    rf_subject_glonass = models.OneToOneField('Subjects_RF', on_delete=models.CASCADE, null=True)
    tech_data = models.IntegerField(null=True)
    transducer = models.IntegerField(null=True)
    glonass_data_fill = models.FloatField(null=True, db_comment='формат 0.0')

    def get_absolute_url(self):
        return reverse('glonassdata-detail', args=[str(self.id)])
    
    def __str__(self):
        return self.rf_subject_glonass.region.title()
    

class VideoFixation(models.Model):
    rf_subject_videofixation = models.OneToOneField('Subjects_RF', on_delete=models.CASCADE, null=True)
    cameras_exist = models.BooleanField(default=False)
    integration_in_process = models.BooleanField(default=False)
    actually_transmitting = models.BooleanField(default=False)

    def get_absolute_url(self):
        return reverse('videofixation-detail', args=[str(self.id)])
    
    def __str__(self):
        return self.rf_subject_videofixation.region.title()
    
class ContainersPlacesPurchases(models.Model):

    rf_subject_contplaces_purchase = models.OneToOneField('Subjects_RF', on_delete=models.CASCADE, null=True)
    budget = models.FloatField(null=True, db_comment='млн руб')
    cont_places_fact = models.IntegerField(null=True)
    cont_places_plan = models.IntegerField(null=True)
    containers_fact = models.IntegerField(null=True)
    containers_plan = models.IntegerField(null=True)
    cont_places_additional_per = models.FloatField(null=True, db_comment='проценты формат 0.0')
    containers_additional_per = models.FloatField(null=True, db_comment='проценты формат 0.0')

    def save(self, *args, **kwargs):
        if self.cont_places_plan == 0:
            self.cont_places_additional_per = 1
        else: 
            self.cont_places_additional_per = self.cont_places_fact/self.cont_places_plan
        if self.containers_plan == 0:
            self.containers_additional_per = 1
        else:
            self.containers_additional_per = self.containers_fact/self.containers_plan

        return super().save(*args, **kwargs)

    def get_absolute_url(self):
        return reverse('containersplacespurchases-detail', args=[str(self.id)])
    
    def __str__(self):
        return self.rf_subject_contplaces_purchase.region.title()

# class TechBuy(models.Model):
    
#     rf_subject_tech_buy = models.OneToOneField('Subjects_RF', on_delete=models.CASCADE, null=True)
#     current_lack = models.IntegerField(null=True)
#     is_plan = models.BooleanField(default=True)
#     plan_buy = models.IntegerField(null=True)
#     fact_buy = models.IntegerField(null=True)
#     percent = models.FloatField(null=True, db_comment='проценты формат 0.0')
#     leasing = models.IntegerField(null=True)

#     def get_absolute_url(self):
#         return reverse('techbuy-detail', args=[str(self.id)])
    
#     def __str__(self):
#         return self.rf_subject_tech_buy.region.title()


# class File(models.Model):
#     file = models.FileField(upload_to="excel")