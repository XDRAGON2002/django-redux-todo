from django.db import models

# Create your models here.
class Todo(models.Model) :

    body = models.CharField(max_length = 100)
    done = models.BooleanField()