import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../components/api";
import testData from "./test.json"  // for test

function History() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    api
      .post("/history", {
        uid : localStorage.getItem("uid")
      })
      .then((result) => {
        if(result.data === "No Param"){
          setData([])
        }
        else{
          setData(result.data); // 썸네일 사진들 url
        }
        console.log(data);
      })
      .catch(() => {
        console.log("failed to load data");
      });

    // for test
    // setData(testData);
  }, []);

  return (
    <div>
      <div className="historyHeader">
        {localStorage.getItem("uid") + "님의 History"}
      </div>
      {data.map((idx, i) => {
        return <img
        className="col-md-4"
        src={"test_img/" + (i + 1) + ".jpg"}
        width="33%"
        onClick={navigate("/posts",{
          pid : data.pid
        })}
      />
      })}
    </div>
  );
}

export default History;
