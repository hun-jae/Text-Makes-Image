import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import api from "./api";

function ControlledCarousel(props) {
  const [index, setIndex] = useState(0);
  const [data, setData] = useState([]);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  useEffect(()=>{
    api.post("/posts",{
      pid: props.pid
    })
    .then((result) => {
      if(result.data === "No Param"){
        setData([]);
      }
        else{
          setData(result.data);
        }})
        .catch(() => {
          console.log("failed to load data");
        });
  },[]);

  return (
    <div><style type="text/css">{`
    .carouselText{
      background-color: #ababd9;
      opacity : 90%;
      border-radius: 10px;
      padding: 5px;
      text-align: center;
      line-heught:center;
  `}

  </style>
    <Carousel activeIndex={index} onSelect={handleSelect} interval="50000">
      {
      props.data.map((i, idx) => {
        return (
          <Carousel.Item>
            <img className="d-block w-100" src={i.url} alt={idx} />
            <Carousel.Caption>
              <h3 className="carouselText">{i.text}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
    </div>
  );
}

export default ControlledCarousel;
