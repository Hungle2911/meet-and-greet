from rest_framework import serializers
from .models import Room

class RoomSerializer(serializers.ModelSerializer):
  class Meta:
    model = Room
    fields = ('id', 'code', 'host', 'guest_can_pause', 'guest_can_skip', 'created_at')
    
class CreateRoomSerializer(serializers.ModelSerializer):
  class Meta:
    model = Room
    fields = ('guest_can_pause', 'guest_can_skip')