# Generated by Django 4.0.5 on 2022-06-13 10:48

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('styles', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Footballer',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('number', models.CharField(default=None, max_length=10)),
                ('fullName', models.CharField(default=None, max_length=50)),
                ('age', models.PositiveIntegerField(default=None)),
                ('profileImage', models.CharField(default=None, max_length=300)),
                ('dateOfBirth', models.CharField(default=None, max_length=30)),
                ('placeOfBirth', models.CharField(default=None, max_length=30)),
                ('citizenship', models.CharField(default=None, max_length=30)),
                ('height', models.PositiveIntegerField(default=None)),
                ('position', models.CharField(default=None, max_length=30)),
                ('currentInternational', models.CharField(default=None, max_length=30)),
                ('caps', models.PositiveIntegerField(default=None)),
                ('goals', models.PositiveIntegerField(default=None)),
                ('club', models.CharField(default=None, max_length=50)),
                ('league', models.CharField(default=None, max_length=30)),
                ('leagueLevel', models.CharField(default=None, max_length=30)),
                ('joinedClub', models.CharField(default=None, max_length=30)),
                ('contractExpires', models.CharField(default=None, max_length=30)),
                ('marketValue', models.CharField(default=None, max_length=50)),
                ('continent', models.CharField(default=None, max_length=30)),
                ('styles', models.ManyToManyField(related_name='footballers', to='styles.style')),
            ],
        ),
    ]
