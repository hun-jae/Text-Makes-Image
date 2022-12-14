from pymongo import MongoClient # mongoDB 접속을 비롯한 액션을 할 때 사용하는 lib
import requests #python file에서 웹 접속이 필요할 때 사용하는 lib
import pandas as pd #dataframe 단위 작업을 할 때 사용하는 lib
mongo_path = f"mongodb+srv://Jaeheon:2679@cluster0.r2beulp.mongodb.net/?retryWrites=true&w=majority"

s3_base_url = "https://tmi-s3.s3.ap-northeast-2.amazonaws.com/"
#썸네일이랑 유저는 처음 유저 생성시 만들어지고, 수정위주로 사용할 예정
#posts는 계속 새로 생성된다.
try:
  client = MongoClient(mongo_path)
  db = client.Cluster0
  users = db.users
  thumbnail = db.thumbnail
  posts = db.posts
  friend = db.friends
except Exception as e:
  print(e)
else:
  print("mongo connected!")
def new_user(uid, password, email, nickname):
  #회원가입
  
  #겹치는 아이디가 있으면
  users_query = {'uid':uid}
  users_info = users.find_one(users_query)
  if users_info != None:
    return False
  user_info = {
    'uid' : uid,
    'password' : password,
    'email' : email,
    'nickname' : nickname
  }
  users.insert_one(user_info)

  thumb_info = {
    'uid' : uid,
    'num_post' : 0,
    'posts' : [
    ]
  }
  thumbnail.insert_one(thumb_info)

  
  friend_info = {
    'uid' : uid,
    'fid' : []
  }
  friend.insert_one(friend_info)
  return True

def login(uid, password):
  #로그인할때 회원db와 일치하는지 확인
  users_query = {'uid':uid}
  users_info = users.find_one(users_query)
  if users_info == None:
    return False
  if users_info['password'] == password:
    return True
  else:
    return False
  
def add_posts(uid, ko_text_list, eng_text_list):
  #사용자가 이미지 생성했을때
  #uid를 이용해 썸내일을 가져온뒤 post 개수 수정, 썸네일 한개 추가
  thumb_query = {'uid': uid}
  thumb_info = thumbnail.find_one(thumb_query)
  num_post = thumb_info['num_post']
  num_post += 1
  posts_list = thumb_info['posts']
  #영어 텍스트로 url생성해줌
  url_list = [s3_base_url + uid +"_" + eng_text.replace(' ', '+') for eng_text in eng_text_list]
  pid = uid + f"_{num_post}"
  eng_text = eng_text_list[0]
  ko_text = ko_text_list[0]

  url = url_list[0]
  post_info = {'pid' : pid, 'text' : ko_text,'url' : url}
  posts_list.append(post_info)
  thumbnail.update_one({'uid':uid}, {'$set':{'num_post' : num_post, 'posts':posts_list}})

  #만든 pid를 이용해 post 게시글 생성
  posts_doc = {'pid' : pid, 'texts' : ko_text_list, 'urls' : url_list}
  posts.insert_one(posts_doc)
  return pid

def change_user_info(change_type, change_data, uid):
  #유저가 비밀번호나 닉네임 변경 할 때 확인
  users_query = {'uid':uid}
  users_info = users.find_one(users_query)
  if change_type == "password":
    password = change_data
    users.update_one({'uid':uid}, {'$set':{'password' : password}})
  elif change_type == "nickname":
    nickname = change_data
    users.update_one({'uid':uid}, {'$set':{'nickname' : nickname}})

def get_history(uid):
  #피드페이지 요청 들어올때 썸네일 넘겨줌
  thumb_query = {'uid': uid}
  thumb_info = thumbnail.find_one(thumb_query)
  num_post = thumb_info['num_post']
  post_list = thumb_info['posts']
  url_list = [post_info['url'] for post_info in post_list]
  pid_list = [uid + f"_{cnt_post}" for cnt_post in range(1,num_post+1)]
  #한글
  #text_list = [post_info['text'] for post_info in post_list]
  #return text_list, url_list
  return url_list, pid_list
def get_post(pid):
  #게시글 페이지 요청 들어올때 posts 넘겨줌
  posts_query = {'pid':pid}
  post_info = posts.find_one(posts_query)
  text_list = post_info['texts']
  url_list = post_info['urls']
  return text_list, url_list

def add_friend(uid, fid):
  #친구 추가
  users_query = {'uid':fid}
  users_info = users.find_one(users_query)
  if users_info == None: #사용자가 없으면
    return "no_user"
  friend_query = {'uid' : uid}
  friend_info = friend.find_one(friend_query)
  if friend_info == None:
    friend.insert_one({'uid' : uid,'fid' : [fid]})
  else:
    friend_list = friend_info['fid']
    if fid in friend_list: #이미 친구로 추가되어있으면
      return "already"
    friend_list.append(fid)
    friend.update_one({'uid':uid}, {'$set':{'fid' : friend_list}})
  return "success"
def get_friend(uid):
  friend_query = {'uid' : uid}
  friend_info = friend.find_one(friend_query)
  friend_list = friend_info['fid']
  return friend_list
