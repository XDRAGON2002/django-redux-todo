from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Todo
from .serializers import TodoSerializer

@api_view(["GET"])
def todos(request) :

    todos = Todo.objects.all()
    serializer = TodoSerializer(todos,many = True)
    return Response(serializer.data)

@api_view(["GET"])
def todo(request,pk) :

    todos = Todo.objects.get(id = pk)
    serializer = TodoSerializer(todos,many = False)
    return Response(serializer.data)

@api_view(["POST"])
def makeTodo(request) :

    serializer = TodoSerializer(data = request.data)
    if serializer.is_valid() :
        serializer.save()
    return Response(serializer.data)

@api_view(["POST"])
def updateTodo(request,pk) :

    todo = Todo.objects.get(id = pk)
    serializer = TodoSerializer(instance = todo,data = request.data)
    if serializer.is_valid() :
        serializer.save()
    return Response(serializer.data)

@api_view(["DELETE"])
def deleteTodo(request,pk) :

    todo = Todo.objects.get(id = pk)
    todo.delete()
    return Response("DELETED TODO")