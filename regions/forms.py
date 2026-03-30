from django import forms
from .models import Subjects_RF

class SubjectSearchForm(forms.Form):
    reg = forms.CharField(label="Введите регион", widget=forms.TextInput(attrs={'oninput': 'showSuggestions()', 'id':'regionSearchInput'}))

class UploadFileForm(forms.Form):
    file = forms.FileField()