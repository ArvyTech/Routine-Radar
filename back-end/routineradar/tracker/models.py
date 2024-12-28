from django.db import models

# Create your models here.
class Technology(models.Model):
    name = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.name
    
class Activity(models.Model):
    technology = models.ForeignKey(Technology, on_delete=models.CASCADE, related_name='activities')
    description = models.TextField()
    date = models.DateField(auto_now_add=True)

    def __str__(self):
        return f"{self.technology.name} - {self.date}"