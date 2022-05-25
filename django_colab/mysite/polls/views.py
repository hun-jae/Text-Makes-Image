from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
import sys,os
from django.urls import reverse
sys.path.append('/content/drive/MyDrive/Colab_Notebooks/mysite')
from polls.models import Index
from django.views.decorators.csrf import csrf_exempt
import save_image
@csrf_exempt 

#import mysite


#def index(request):
#    return render(request, 'base.html')
# Create your views here.

def index(request):

    if request.method == "POST":
        temp = request.POST.get('index_input')

        #new_index = Index()
        #new_index.text = temp
        #new_index.save()
        save_image.save_img(temp)
        #index_list = Index.objects.all()
        return render(request, 'polls/index.html', context={'text': temp})  #html을 넘겨줌
        #return HttpResponseRedirect(reverse('polls:index')) #새로고침하면 계속 post추가되는 현상 없애줌
    else:
        temp = "None"
        #index_list = Index.objects.all()
        return render(request, 'polls/index.html', context={'text': temp})  #html을 넘겨줌
