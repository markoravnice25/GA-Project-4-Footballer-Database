# Generated by Django 4.0.5 on 2022-06-12 21:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('footballers', '0007_remove_footballer_profile_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='footballer',
            name='profile_image',
            field=models.CharField(default='https://image.shutterstock.com/image-photo/head-shot-portrait-close-smiling-260nw-1714666150.jpg', max_length=300),
        ),
    ]