import axios from "axios";
import { useEffect, useState } from "react";

function ImageResult() {
  const [data, setData] = useState([]);
  const getData = async () => {
    await axios
      .get("http://localhost:3000/data/imageResult.json")
      .then((result) => {
        console.log("Then");
        setData(result.data);
      })
      .catch((error) => {
        console.log("Error::", error);
      });
  };
  useEffect(getData);
  return (
    <div>
      {data.map((s) => {
        <div>
          <h4>{s.sentence}</h4>
          <Img data={s} />
        </div>;
      })}
    </div>
  );
}

function Img(props) {
  return props.data.map(function (setence, i) {
    return (
      <div className="col-md-4">
        <img src={setence.img1} width="100%"></img>
        <img src={setence.img2} width="100%"></img>
        <img src={setence.img3} width="100%"></img>
      </div>
    );
  });
}

export default ImageResult;
