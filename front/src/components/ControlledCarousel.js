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
                  {localStorage.getItem("uid")===props.uid&&<Button
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
                  </Button>}
                  
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
