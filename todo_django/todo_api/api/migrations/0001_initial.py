# Generated by Django 4.0 on 2021-12-09 12:05

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Todo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('todo_id', models.CharField(max_length=100)),
                ('todo_body', models.CharField(max_length=100)),
                ('todo_done', models.BooleanField()),
            ],
        ),
    ]
