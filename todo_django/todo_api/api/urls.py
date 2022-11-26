from django.urls import path

from . import views

urlpatterns = [

    path("todos",views.todos),
    path("todo/<int:pk>",views.todo),
    path("maketodo",views.makeTodo),
    path("updatetodo/<int:pk>",views.updateTodo),
    path("deletetodo/<int:pk>",views.deleteTodo)
]