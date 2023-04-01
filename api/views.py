from rest_framework import viewsets
from rest_framework.decorators import action
from api.models import Note
from api.serializers import NoteSerializer
from rest_framework.response import Response



class NoteViewSet(viewsets.ViewSet):
    @action(methods=['get'], detail=True)
    def get_note_list(self, *args, **kwargs):
        notes = Note.objects.all()
        notes_response = NoteSerializer(notes, many=True)
        return Response(notes_response.data)

    @action(methods=['post'], detail=True)
    def create_note(self, *args, **kwargs):
        data = self.request.data
        note = Note.objects.create(body=data['body'])
        note_response = NoteSerializer(note, many=False)
        return Response(note_response.data)

    @action(methods=['get'], detail=False)
    def get_define_note(self, request, pk):
        note = Note.objects.get(pk=pk)
        note_response = NoteSerializer(note, many=False)
        return Response(note_response.data)

    @action(methods=['delete'], detail=False)
    def delete_note(self, request, pk):
        note = Note.objects.get(pk=pk)
        note.delete()
        return Response(f"Note with id {pk} was deleted")

    @action(methods=['put'], detail=False)
    def update_note(self, request, pk):
        data = self.request.data
        note = Note.objects.get(pk=pk)
        note_response = NoteSerializer(instance=note, data=data)
        if note_response.is_valid():
            note_response.save()
        return Response(note_response.data)
