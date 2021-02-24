from django import forms
from .models import Character

class CharacterForm(forms.ModelForm):
    class Meta:
        model = Character
        fields = ('name', 'franchise', 'artist', 'source_url', 'image_url')