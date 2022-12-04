import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import api from "./api";
import { TfiReload } from "react-icons/tfi";
import { Button } from "react-bootstrap";
import Loading from "./Loading";

function ControlledCarousel(props) {
  const [index, setIndex] = useState(0);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const handleTargetImgUrl = () => {
    let targetImg = document.getElementById("targetImg");	// targetImg라는 아이디를 가진 이미지 가져옴
    const oldUrl = targetImg.src;	// 이미지 src 파싱
    const array = new Uint32Array(1);	// 32비트 정수 배열 생성
    const rndNumforCache = window.crypto.getRandomValues(array)[0];	// 강력한 난수를 생성하기 위함
    let paramsString = `?v=${rndNumforCache}`;	// src 뒤에 붙여 줄 문자열
    let newImgSrc = `${oldUrl}${paramsString}`;	// 새로운 src 생성
    targetImg.src = newImgSrc;	// 원래의 src와 교체
}

  const getPosts = async () => {
    const posts = await api
      .post("/posts", {
        pid: props.pid,
      })
      .then((result) => {
        if (result.data === "No Param") {
          setData([]);
        } else {
          setData(result.data);
        }
      })
      .catch(() => {
        console.log("failed to load data");
      });
  };

  useEffect(() => { 
    getPosts();
    console.log(data);
  }, []);

  useEffect(() => {}, []);

  return (
    <div>
      <style type="text/css">
        {`
    .carouselText{
      background-color: #808080;
      opacity : 90%;
      border-radius: 10px;
      padding: 5px;
      text-align: center;
      line-heught:center;
    }
      #reloadBtn{
        background-color: #808080;
        opacity: 90%;
        border-radius: 30px;
      }
  `}
      </style>
      {loading ? (
        <Loading />
      ) : (
        <Carousel activeIndex={index} onSelect={handleSelect} interval="50000">
          {props.data.map((i, idx) => {
            return (
              <Carousel.Item>
                <img className="d-block w-100 NO-CACHE" src={i.url+"?"+Date.now()} alt={idx} />
                <Carousel.Caption>
                  <Button
                    id="reloadBtn"
                    onClick={async () => {
                      setLoading(true);

                      await api
                        .post("/reimage", {
                          uid: localStorage.getItem("uid"),
                          text: i.text,
                        })
                        .then((response) => {
                          if (response.data === "remake Success") {
                            setLoading(false);
                            window.location.reload();
                          } else {
                            alert("이미지 재생성 실패");
                          }
                        })
                        .catch((error) => {
                          console.log(error);
                        });
                    }}
                  >
                    <TfiReload size={24} />
                  </Button>
                  <h4 className="carouselText">{i.text}</h4>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
      )}
    </div>
  );
}

export default ControlledCarousel;
