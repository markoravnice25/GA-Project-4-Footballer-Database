from django.db import models

# Create your models here.
class Footballer(models.Model):
  full_name = models.CharField(max_length=50, default=None)
  age = models.PositiveIntegerField(default=None)
  #profile_image = models.CharField(max_length=300, default=None)
  #date_of_birth = models.CharField(max_length=30, default=None)
  #place_of_birth = models.CharField(max_length=30, default=None)
  #citizenship = models.CharField(max_length=30, default=None)
  #height = models.PositiveIntegerField(default=None)
  #position = models.CharField(max_length=30, default=None)
  #current_international = models.CharField(max_length=30, default=None)
  #caps = models.PositiveIntegerField(default=None)
  #goals = models.PositiveIntegerField(default=None)
  #club = models.CharField(max_length=50, default=None)
  #joined_club = models.CharField(max_length=30, default=None)
  #contract_expires = models.CharField(max_length=30, default=None)
  styles = models.ManyToManyField(
    'styles.Style',
    related_name='footballers'
  )

  def __str__(self):
    return f"Name: {self.full_name} - Age: {self.age}"