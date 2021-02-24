from rest_framework import serializers
from .models import Character

class CharacterSerializer(serializers.ModelSerializer):
    character_url = serializers.ModelSerializer.serializer_url_field(
        view_name='character_detail'
    )

    class Meta:
        model = Character
        fields = ('id','name', 'character_url', 'franchise', 'artist', 'source_url', 'image_url')