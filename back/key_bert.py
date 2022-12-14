from keybert import KeyBERT
kw_model = KeyBERT()

def get_keywords(sentences):
  #문장에서 키워드 추출해주는 모듈
  keywords = kw_model.extract_keywords(sentences)
  temp = ""
  sen_list = sentences.split(" ")
  for key in sen_list:
    for i, j in keywords:
      if key == i:
        temp = temp + i + " "
  #print(temp)
  return temp