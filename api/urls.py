from django.urls import path
from api.views import NoteViewSet

urlpatterns = [
    path("notes/", NoteViewSet.as_view({"get": "get_note_list", "post": "create_note"}), name='note_list'),
    path("notes/<int:pk>/",
         NoteViewSet.as_view({"get": "get_define_note", "delete": "delete_note", "put": "update_note"}))
]
