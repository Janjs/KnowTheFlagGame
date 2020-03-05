from django.db import models
from rest_framework import serializers


class Player(models.Model):
    name = models.CharField(max_length=200)
    score = models.IntegerField()


class PlayerSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Player
        fields = ('url', 'name', 'score', 'pk')
