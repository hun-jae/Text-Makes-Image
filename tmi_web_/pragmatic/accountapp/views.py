from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render

# Create your views here.
#pragmatic의 settings.py 의 installed app에 추가 해줘야 함
from django.urls import reverse

from accountapp.models import HelloWorld

'''def hello_world(request):
    return HttpResponse('Hello world!') #직접 넘겨줌'''

#pragmatic의 settings.py의 templates에         'DIRS': [os.path.join(BASE_DIR, 'templates')],
#이런식으로 templates을 추가해줘야 함
def hello_world(request):

    if request.method == "POST":


        temp = request.POST.get('hello_world_input')

        new_hello_world = HelloWorld()
        new_hello_world.text = temp
        new_hello_world.save()

        hello_world_list = HelloWorld.objects.all()
        return HttpResponseRedirect(reverse('accountapp:hello_world')) #새로고침하면 계속 post추가되는 현상 없애줌
    else:
        hello_world_list = HelloWorld.objects.all()
        return render(request, 'accountapp/hello_world.html', context={'hello_world_list': hello_world_list})  #html을 넘겨줌