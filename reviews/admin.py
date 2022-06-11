# django imports
from django.contrib import admin

# custom imoports
from .models import Review

# register on site
admin.site.register(Review)