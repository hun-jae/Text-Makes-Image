#파파고 api를 활용한 번역
import urllib.request
import json
    
def papago(encText):
    client_id = "Ipj5HqGmcI3YgHfeiliQ" # 개발자센터에서 발급받은 Client ID 값
    client_secret = "vQSQ2peRk6" # 개발자센터에서 발급받은 Client Secret 값
    
    data = "source=ko&target=en&text=" + encText
    url = "https://openapi.naver.com/v1/papago/n2mt"
    request = urllib.request.Request(url)
    request.add_header("X-Naver-Client-Id",client_id)
    request.add_header("X-Naver-Client-Secret",client_secret)
    response = urllib.request.urlopen(request, data=data.encode("utf-8"))
    rescode = response.getcode()
    if(rescode==200):
        response_body = response.read().decode('utf-8')
        response_json = json.loads(response_body)   # json 파일을 파이썬의 dict로 변환
        return response_json['message']['result']['translatedText']
    else:
        print("Error Code:" + rescode)
        return None
