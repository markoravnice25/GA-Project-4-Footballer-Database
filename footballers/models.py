from django.db import models

# Create your models here.
class Footballer(models.Model):
  number = models.CharField(max_length=10, default=None)
  fullName = models.CharField(max_length=50, default=None)
  age = models.PositiveIntegerField(default=None)
  profileImage = models.CharField(max_length=300, default=None)
  dateOfBirth = models.CharField(max_length=30, default=None)
  placeOfBirth = models.CharField(max_length=30, default=None)
  citizenship = models.CharField(max_length=30, default=None)
  height = models.PositiveIntegerField(default=None)
  position = models.CharField(max_length=30, default=None)
  currentInternational = models.CharField(max_length=30, default=None)
  caps = models.PositiveIntegerField(default=None)
  goals = models.PositiveIntegerField(default=None)
  club = models.CharField(max_length=50, default=None)
  league = models.CharField(max_length=30, default=None)
  leagueLevel = models.CharField(max_length=30, default=None)
  joinedClub = models.CharField(max_length=30, default=None)
  contractExpires = models.CharField(max_length=30, default=None)
  marketValue = models.CharField(max_length=50, default=None)
  continent = models.CharField(max_length=30, default=None)
  owner = models.ForeignKey(
    'jwt_auth.User',
    related_name='footballers',
    on_delete=models.CASCADE,
  )
  styles = models.ManyToManyField(
    'styles.Style',
    related_name='footballers'
  )

  def __str__(self):
    return f"Name: {self.fullName} - Age: {self.age}"