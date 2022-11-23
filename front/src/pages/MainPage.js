import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../components/api";
import Post from "../components/Post";
import { Button } from "react-bootstrap";

import localData from "./localData.json";
import Carousel from "../components/UnControlledCarousel";

function MainPage() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    // api
    //   .post("/mainPage")
    //   .then((result) => {
    //     if (result.data === "No Param") {
    //       setData([]);
    //     } else {
    //       setData(result.data); // text, url
    //     }
    //     console.log(data);
    //   })
    //   .catch(() => {
    //     console.log("failed to load data");
    //   });

    // for test
    setData(localData);
  }, []);

  return (
    <div>
      <style type="text/css">
        {`
            #mainPageWrapper{
                height:auto;
                min-height:100%;
            }
            .mainPageImg{
                width:100%;
            }
            #mainPageHeader{
              font-size: 20px;
            }
            `}
      </style>
      <div id="mainPageWrapper">
        <div id="mainPageHeader">Text-Makes-Image</div>
        {/* {data.map((i) => {
          return (
            <div>
              <img className="mainPageImg" src={i.url} />
              <div>{i.text}</div>
            </div>
          );
        })} */}
        <Carousel></Carousel>
        <Button
          onClick={() => {
            navigate("/write");
          }}
        >
          Start Now
        </Button>
      </div>
    </div>
  );
}

export default MainPage;
