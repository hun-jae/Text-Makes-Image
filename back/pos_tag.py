from nltk.tag import pos_tag
from nltk.tokenize import word_tokenize
import nltk
nltk.download('averaged_perceptron_tagger')
nltk.download('punkt')

import os
import sys
import urllib.request

#네이버 사전에 나오는지 확인(네이버 search api 사용)
def search(word):
  client_id = "etta_pmM5rH2coWI1w5s"
  client_secret = "ojW_9ybyNR"
  encText = urllib.parse.quote(word)
  url = "https://openapi.naver.com/v1/search/encyc?query=" + encText
  request = urllib.request.Request(url)
  request.add_header("X-Naver-Client-Id",client_id)
  request.add_header("X-Naver-Client-Secret",client_secret)
  response = urllib.request.urlopen(request)
  rescode = response.getcode()

  if(rescode==200):
      response_body = response.read()
      #결과를 dict화
      results = eval(response_body.decode('utf-8'))
      
      #결과dict중에서 결과 list를 뽑음
      result_items = results['items']

      #결과 리스트에서 각 결과별로 for문
      for result in result_items:
        #검색 결과가 title로 존재(사전에서 내용이 아닌 제목으로 존재해야 사람 혹은 동물의 이름이 아니라고 판단)
        if word in result['title']:
          return True
        
        #검색 결과가 title로 존재하지 않음
        else:
          continue
  else:
      print("Error Code:" + rescode)

def pos_tagging(trs_temp_list):
  people = ["I", "my", "me", "mine", "she", "She", "he", "He", "person", "people", "guy", "boy", "girl", "men", "women", "baby", "brother", "sister", "mother", "father", "family", "friend", "you", "your", "yours", "her", "hers", "his", "him","we","We","our","us", "ours"]
  for i in range(len(trs_temp_list)):
    tagged_list = pos_tag(word_tokenize(trs_temp_list[i]))
    temp = ""
    #각 단어별로 판단
    for tag_list in tagged_list:

      #고유명사이면
      if tag_list[1] == "NNP":

        #사전에 존재하는지 여부 판단

        if search(tag_list[0]): #사전에 존재하면
          temp = temp+tag_list[0]+" "
        else: #사전에 존재하지 않으면
          #print("사전 존재 x")
          temp = temp+"corgi "

      #사람을 뜻하는 명사이면
      elif tag_list[0] in people:
        temp = temp+"corgi "
      
      #일반 단어이면
      else:
        temp = temp+tag_list[0] + " "
    trs_temp_list[i] = temp
  return trs_temp_list