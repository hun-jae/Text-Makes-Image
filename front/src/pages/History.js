import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

function History() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .post("http://localhost:3000/data/test.json", {
        uid : localStorage.getItem("uid")
      })
      .then((result) => {
        setData(result.data); // 썸네일 사진들 url
        console.log(data);
      })
      .catch(() => {
        console.log("failed to load data");
      });
  }, []);

  return (
    <div>
      <div className="historyHeader">
        {localStorage.getItem("uid") + "님의 History"}
      </div>
      {data.map((idx, i) => {
        return <Img i={i} />;
      })}
    </div>
  );
}

function Img(props) {
  return (
    <img
      className="col-md-4"
      src={"test_img/" + (props.i + 1) + ".jpg"}
      width="33%"
    />
  );
}

export default History;
