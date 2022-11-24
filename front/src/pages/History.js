import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../components/api";

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
      <style>{`
      .historyImg{
        width:33%;
        padding:10px;
      }
      `}
      </style>
      <div className="historyHeader">
        {localStorage.getItem("uid") + "님의 History"}
      </div>
      {data.map((i, idx) => {
        return <img
        className="col-md-4 historyImg"
        src={i.url}
        onClick={()=>{navigate("/posts", {state:i})}}
      />
      })}
    </div>
  );
}

export default History;
