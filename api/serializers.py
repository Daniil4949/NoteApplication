from rest_framework.serializers import ModelSerializer
from api.models import Note


class NoteSerializer(ModelSerializer):
    class Meta:
        model = Note
        fields = ("id", "body", "updated", "created")
        read_only_fields = ("updated", "created")
