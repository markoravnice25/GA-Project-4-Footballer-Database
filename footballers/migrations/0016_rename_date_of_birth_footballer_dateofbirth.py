# Generated by Django 4.0.5 on 2022-06-12 22:18

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('footballers', '0015_footballer_continent'),
    ]

    operations = [
        migrations.RenameField(
            model_name='footballer',
            old_name='date_of_birth',
            new_name='dateOfBirth',
        ),
    ]