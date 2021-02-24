from django.shortcuts import render, redirect
from .models import Character
from .forms import CharacterForm
from .serializers import CharacterSerializer
from rest_framework import generics

# Create your views here.
class CharacterList(generics.ListCreateAPIView):
    queryset = Character.objects.all()
    serializer_class = CharacterSerializer

class CharacterDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Character.objects.all()
    serializer_class = CharacterSerializer