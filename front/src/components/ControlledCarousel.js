import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function ControlledCarousel(props) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} interval="50000">
      {
      props.data.map((i, idx) => {
        return (idx<props.data.length-1?
          <Carousel.Item>
            <img className="d-block w-100" src={i.url} alt={idx} />
            <Carousel.Caption>
              <h3>{i.text}</h3>
            </Carousel.Caption>
          </Carousel.Item>
          :null
        );
      })}
    </Carousel>
  );
}

export default ControlledCarousel;
