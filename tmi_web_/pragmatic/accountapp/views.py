from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render

# Create your views here.
#pragmatic의 settings.py 의 installed app에 추가 해줘야 함
from django.urls import reverse

from accountapp.models import HelloWorld
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
'''def hello_world(request):
    return HttpResponse('Hello world!') #직접 넘겨줌'''

#pragmatic의 settings.py의 templates에         'DIRS': [os.path.join(BASE_DIR, 'templates')],
#이런식으로 templates을 추가해줘야 함
def cos_similarity(temp):
    sentences_list = ["Tell me the recipe for this dish.", "Tell me how to make this dish",
                      "Tell me how to make this dish", "This dish looks delicious.", "This duck meat is cool",
                      "Is this friend funny?"]
    sentences_list = temp
    text_list = sentences_list[:]
    for i in range(len(sentences_list) - 1):
        for j in range(i + 1, len(sentences_list)):
            sentences = (sentences_list[i], sentences_list[j])
            tfidf_vectorizer = TfidfVectorizer()

            tfidf_matrix = tfidf_vectorizer.fit_transform(sentences)

            cos_similar = cosine_similarity(tfidf_matrix[0:1], tfidf_matrix[1:2])
            cos_similar = float(cos_similar)
            if cos_similar > 0.4:
                if sentences_list[j] in text_list:
                    text_list.remove(sentences_list[j])
            #print(sentences_list[i], "&", sentences_list[j], end=" ")
            #print("코사인 유사도 : ", float(cos_similar))
    #print(text_list)
    return text_list

def hello_world(request):
    if request.method == "POST":
        temp = request.POST.get('text_input')
        #번역
        #print("temp : ", temp)
        temp = str(temp)
        text_list = cos_similarity(temp.split('.'))
        return render(request, 'accountapp/hello_world.html', context={'text_list': text_list})  # html을 넘겨줌
        # return HttpResponseRedirect(reverse('polls:index')) #새로고침하면 계속 post추가되는 현상 없애줌
    else:
        temp = ""
        # index_list = Index.objects.all()
        return render(request, 'accountapp/hello_world.html', context={'text_list': temp})  # html을 넘겨줌