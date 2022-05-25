from django.urls import path
import sys, ossaudiodev
sys.path.append('/content/drive/MyDrive/Colab_Notebooks/mysite')
from polls.views import index

app_name = "polls"

urlpatterns = [
    path('index/', index, name='index'),
]
