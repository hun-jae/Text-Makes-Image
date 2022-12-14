from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

def cos_similarity(temp):
    sentences_list = temp
    
    text_list = sentences_list[:]
    if len(text_list) < 2:
      return [], text_list
    index_list = []
    #모든 문장들중 2개씩 뽑아서 비교
    for i in range(len(sentences_list) - 1):
        for j in range(i + 1, len(sentences_list)):
            sentences = (sentences_list[i], sentences_list[j])
            #문장들을 벡터화 시킴
            tfidf_vectorizer = TfidfVectorizer()

            tfidf_matrix = tfidf_vectorizer.fit_transform(sentences)

            #코사인 유사도 계산
            cos_similar = cosine_similarity(tfidf_matrix[0:1], tfidf_matrix[1:2])
            cos_similar = float(cos_similar)

            #코사인 유사도가 0.4를 초과하면 뒤의 문장을 제거
            if cos_similar > 0.4:
                if sentences_list[j] in text_list:
                    text_list.remove(sentences_list[j])
                    #한글 문장에서도 제거해주기 위해 index를 구함
                    index_list.append(j)

    return index_list, text_list