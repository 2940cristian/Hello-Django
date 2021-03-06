from django.conf import settings
from graphene_django import DjangoObjectType
import graphene
from .models import Note as NoteModel

class Note(DjangoObjectType):
    """Describe which model we want to expose through GraphQL."""
    class Meta:
        model = NoteModel

        # Describing the data as a node in a graph for GraphQL
        interfaces = (graphene.relay.Node, )

class Query(graphene.ObjectType):
    """Describe which records we want to show."""
    notes = graphene.List(Note)

    def resolve_notes(self, info):
        """Decide what notes to return."""
        user = info.context.user  # Find this with the debugger

        if user.is_anonymous:
            return NoteModel.objects.none()
        else:
            return NoteModel.objects.filter(user=user)

# Add a schema and attach to the query
schema = graphene.Schema(query=Query)