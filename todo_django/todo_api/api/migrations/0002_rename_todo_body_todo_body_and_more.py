# Generated by Django 4.0 on 2021-12-09 12:25

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='todo',
            old_name='todo_body',
            new_name='body',
        ),
        migrations.RenameField(
            model_name='todo',
            old_name='todo_done',
            new_name='done',
        ),
        migrations.RemoveField(
            model_name='todo',
            name='todo_id',
        ),
    ]