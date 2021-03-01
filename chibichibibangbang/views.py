from django.shortcuts import render, redirect
from .models import Character
from .forms import CharacterForm
from .serializers import CharacterSerializer
from rest_framework import generics
from django.views.generic import TemplateView
from django.views.decorators.cache import never_cache

# Create your views here.
class CharacterList(generics.ListCreateAPIView):
    queryset = Character.objects.all()
    serializer_class = CharacterSerializer

class CharacterDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Character.objects.all()
    serializer_class = CharacterSerializer

# Serve Single Page Application
index = never_cache(TemplateView.as_view(template_name='index.html'))