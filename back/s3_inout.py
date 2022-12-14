import boto3
def s3_connection():
    try:
        s3 = boto3.client(
            service_name="s3",
            region_name="ap-northeast-2", # 자신이 설정한 bucket region
            aws_access_key_id="",
            aws_secret_access_key="",
        )
    except Exception as e:
        print(e)
    else:
        print("s3 bucket connected!")
        return s3
def s3_put_object(s3, bucket, filepath, filename, uid):
    """
    s3 bucket에 지정 파일 업로드
    :param s3: 연결된 s3 객체(boto3 client)
    :param bucket: 버킷명
    :param filepath: 파일 위치
    :param access_key: 저장 파일명
    :return: 성공 시 True, 실패 시 False 반환
    """
    s3_client = boto3.client(
      's3',
      aws_access_key_id="",
      aws_secret_access_key="",
    )
    filename = uid+'_'+filename
    try:
      s3_client.upload_file(filepath, bucket, filename, ExtraArgs={"ContentType" : "image/jpeg"})
      ''' s3.put_object(
        BODY = filepath,
        Bucket=bucket,
        Key=filename,
        Content_type = filepath.content_type,
      )'''
    except Exception as e:
        print("error")
        return False
    print("success")
    return True
def s3_get_image_url(s3, filename, uid):
    """
    s3 : 연결된 s3 객체(boto3 client)
    filename : s3에 저장된 파일 명
    """
    location = s3.get_bucket_location(Bucket="tmi-s3")["LocationConstraint"]
    filename = filename.replace(" ","+")
    print("filename :",)
    return f"https://tmi-s3.s3.ap-northeast-2.amazonaws.com/{uid}_{filename}"
