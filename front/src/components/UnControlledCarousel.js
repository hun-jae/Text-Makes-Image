import Carousel from "react-bootstrap/Carousel";

function UnControlledCarousel() {
  return (
    <div>
      <style type="text/css">{`
        .carouselText{
          background-color: #ababd9;
          opacity : 90%;
          border-radius: 10px;
          padding: 5px;
          top:50%;
          text-align: center;
          line-heught:center;
      `}

      </style>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://tmi-s3.s3.ap-northeast-2.amazonaws.com/admin_The+corgi+is+wearing+sunglasses"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className="carouselText">코기가 선글라스를 쓰고 있다.</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://tmi-s3.s3.ap-northeast-2.amazonaws.com/We+went+camping"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className="carouselText">나는 캠핑을 갔다</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://tmi-s3.s3.ap-northeast-2.amazonaws.com/Christmas+eve+with+santa+claus"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className="carouselText">산타클로스</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default UnControlledCarousel;
