from flask_ngrok import run_with_ngrok
from flask import Flask, render_template, jsonify, request
import json
import sys, os
import random
sys.path.append('/content/drive/MyDrive/TMI_flask')
app = Flask(__name__)
run_with_ngrok(app)
import save_image, cos_sim, translate, pos_tag, key_bert, s3_inout, mongo_connect

from flask_cors import CORS
CORS(app)

s3 = s3_inout.s3_connection()

bucket = "tmi-s3"
@app.route('/signin', methods=['POST'])
def sign():
  params = json.loads(request.get_data(), encoding='utf-8')
  #print(params)
  if len(params) == 0:
    return 'No params'
  uid = params['uid']
  email = params['email']
  password = params['password']
  nickname = params['nickname']
  #이미 동일한 아이디 있으면 안됨
  result = mongo_connect.new_user(uid, password, email, nickname)
  if result == False:
    return 'There is same id'
  return 'success'

@app.route('/login', methods=['POST'])
def login():
  params = json.loads(request.get_data(), encoding='utf-8')
  #print(params)
  if len(params) == 0:
    return 'No params'
  uid = params['uid']
  password = params['password']
  result = mongo_connect.login(uid, password)
  if result == False:
    return 'id or password is incorrect'
  return 'success'

@app.route('/changeUserInfo', methods=['POST'])
def change_user_info():
  params = json.loads(request.get_data(), encoding='utf-8')
  #print(params)
  if len(params) == 0:
    return 'No params'
  uid = params['uid']
  change_type = params['change_type']
  change_data = params['change_data']
  mongo_connect.change_user_info(change_type, change_data, uid)
  return 'success'

@app.route('/history', methods=['POST'])
def get_history():
  params = json.loads(request.get_data(), encoding='utf-8')
  print(params)
  if len(params) == 0:
    return 'No params'
  uid = params['uid']
  #text_list, url_list = mongo_connect.get_history(uid)
  url_list, pid_list = mongo_connect.get_history(uid)

  data = []
  #for i in range(len(text_list)):
  #  tmp_data = {"text" : text_list[i], "url" : url_list[i]}
  #  data.append(tmp_data)
  for i in range(len(url_list)):
    tmp_data = {"url" : url_list[i], "pid" : pid_list[i]}
    data.append(tmp_data)
  return jsonify(data)

@app.route('/posts', methods=['POST'])
def get_post():
  params = json.loads(request.get_data(), encoding='utf-8')
  print(params)
  if len(params) == 0:
    return 'No params'
  pid = params['pid']
  text_list, url_list = mongo_connect.get_post(pid)

  data = []
  for i in range(len(text_list)):
    tmp_data = {"text" : text_list[i], "url" : url_list[i]}
    data.append(tmp_data)
  return jsonify(data)

@app.route('/mainPage', methods=['POST'])
def get_main():
  params = json.loads(request.get_data(), encoding='utf-8')
  print(params)
  if len(params) == 0:
    return 'No params'
  uid = params['uid']
  friend_list = mongo_connect.get_friend(uid)
  data = []
  for fid in friend_list:
    url_list, pid_list = mongo_connect.get_history(fid)
    for i in range(len(url_list)):
      tmp_data = {"url" : url_list[i], "pid" : pid_list[i], "uid" : fid}
      data.append(tmp_data)
  random.shuffle(data)
  return jsonify(data)

@app.route('/addFriend', methods = ['POST'])
def add_friend():
  params = json.loads(request.get_data(), encoding='utf-8')
  print(params)
  if len(params) == 0:
    return 'No params'
  uid = params['uid']
  fid = params['fid']
  if uid == fid:
    return 'me'
  return mongo_connect.add_friend(uid, fid)
  #success, no_user, already

  
@app.route('/reimage', methods=['POST'])
def re_image():
  params = json.loads(request.get_data(), encoding='utf-8')
  print(params)
  if len(params) == 0:
    return 'No param'
  text = params['text']
  uid = params['uid']
  trs_text = translate.papago(text)

  save_image.show_images(trs_text)
  print("fin_img_create")
  filepath = "images/"+trs_text+".png"
  s3_result = s3_inout.s3_put_object(s3, bucket, filepath, trs_text, uid)
  if s3_result: #제대로 되면
    url = s3_inout.s3_get_image_url(s3, trs_text, uid)
    print("s3 url : ",url)
    return 'remake Success'
  else:
    return 'remake Fail'

  #print(text, uid)

@app.route('/image', methods=['POST'])
def make_image():
  params = json.loads(request.get_data(), encoding='utf-8')
  print(params)
  if len(params) == 0:
    return 'No params'
  text = params['text']
  uid = params['uid']
  print(text, uid)


  text_list = text.split(".")
  trs_text_list = []
  while text_list[-1] == "" or text_list[-1] == " ":
    text_list.pop()
  for text in text_list:
    trs_text = translate.papago(text)
    trs_text_list.append(trs_text)
  print(text_list)
  print(trs_text_list)
  for idx, trs_text in enumerate(trs_text_list):
    if trs_text[-1] == ".":
      trs_text_list[idx] = trs_text_list[idx][:-1]
  print(trs_text_list)
  #번역
  #trs_text = translate.papago(text)

  #.으로 문장 구분
  #text_list = text.split(".")
  #trs_text_list = trs_text.split(".")
  #if len(text_list) != len(trs_text_list):
  #  print('list_len_error')
  #  return "list_len_error"
  #print(text_list)
  #print(trs_text_list)

  #겹치는 문장 제거
  #print("쓸모없는 문장 제거 전: ",trs_text_list)
  #index_list, trs_text_list = cos_sim.cos_similarity(trs_text_list)
  #c_temp_list = text_list[:]
  #print("쓸모없는 문장 제거 후: ",trs_text_list)
  #문장 제거에서 구한 index를 통해 한글에서도 겹치는 문장 제거
  #for index in index_list:
  #  text_list.remove(c_temp_list[index])
  

  #마지막 값에 "" 가 들어가는 오류가 있어서 제거
  if trs_text_list[-1] == "":
    trs_text_list.pop() 
  if text_list[-1] == "":
    text_list.pop()
  for i in range(len(text_list)):
    text_list[i] = text_list[i].lstrip()
  for i in range(len(trs_text_list)):
    trs_text_list[i] = trs_text_list[i].lstrip()
  print(text_list)
  print(trs_text_list)
  data = []
  for idx, text in enumerate(trs_text_list):
    save_image.show_images(text)
    print("fin_img_create")
    filepath = "images/"+text+".png"
    ko_text = text_list[idx]
    s3_inout.s3_put_object(s3, bucket, filepath, text, uid)

    url = s3_inout.s3_get_image_url(s3, text, uid)
    print("s3 url : ",url)
    data.append({"text" : ko_text, "url" : url})
  #db에 넣어줌
  pid = mongo_connect.add_posts(uid, text_list, trs_text_list)
  #data.append({'pid':pid})

  #return render_template('drive/MyDrive/TMI_flask/home.html', image_file=filepath)
  return jsonify(data)
  
app.run()