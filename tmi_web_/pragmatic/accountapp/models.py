from django.db import models

# Create your models here.
#동적인걸 db랑 연동시키는 부분

class HelloWorld(models.Model):
    text = models.CharField(max_length=255, null=False) #null 은 해당 데이터가 꼭 있어야 하는지