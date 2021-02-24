from django.db import models

# Create your models here.
class Character(models.Model):
    name = models.CharField(max_length=100)
    franchise = models.CharField(max_length=100)
    artist = models.CharField(max_length=100)
    source_url = models.TextField()
    image_url = models.TextField()

    def __str__(self):
        return self.name