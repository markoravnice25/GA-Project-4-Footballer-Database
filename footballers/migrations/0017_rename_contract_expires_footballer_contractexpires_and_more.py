# Generated by Django 4.0.5 on 2022-06-12 22:40

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('footballers', '0016_rename_date_of_birth_footballer_dateofbirth'),
    ]

    operations = [
        migrations.RenameField(
            model_name='footballer',
            old_name='contract_expires',
            new_name='contractExpires',
        ),
        migrations.RenameField(
            model_name='footballer',
            old_name='current_international',
            new_name='currentInternational',
        ),
        migrations.RenameField(
            model_name='footballer',
            old_name='joined_club',
            new_name='joinedClub',
        ),
        migrations.RenameField(
            model_name='footballer',
            old_name='place_of_birth',
            new_name='placeOfBirth',
        ),
    ]