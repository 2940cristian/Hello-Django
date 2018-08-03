from rest_framework import serializers, viewsets
from .models import PersonalNote

class PersonalNoteSerializer(serializers.HyperlinkedModelSerializer):
    
    def create(self, validated_data):
        # import pdb; pdb.set_trace()
        user = self.context["request"].user
        note = PersonalNote.objects.create(user=user, **validated_data)
        return note

    class Meta:
        """Descrive model and fields we want"""
        model = PersonalNote
        fields = ('title', 'content', "url")

class PersonalNoteViewSet(viewsets.ModelViewSet):
    """"Descrive rows from Db"""
    serializer_class = PersonalNoteSerializer
    queryset = PersonalNote.objects.none()

    def get_queryset(self):
        user = self.request.user

        if user.is_anonymous:
            return PersonalNote.objects.none()

        else:
            return PersonalNote.objects.filter(user = user)