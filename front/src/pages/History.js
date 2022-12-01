import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../components/api";

function History() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const getHistory = async () => {
    const history = await api
    .post("/history", {
      uid : localStorage.getItem("uid")
    })
    .then((result) => {
      if(result.data === "No Param"){
        setData([]);
      }
      else{
        setData(result.data); // 썸네일 사진들 url
      }
    })
    .catch(() => {
      console.log("failed to load data");
    });
  }

  useEffect(() => {
    getHistory();
    console.log("use effect",data);
    // for test
    // setData(testData);
  }, []);

  return (
    <div>
      <style>{`
      .historyImg{
        width:33%;
        padding:3px;
      }
      `}
      </style>
      <div className="historyHeader">
        {localStorage.getItem("uid") + "님의 History"}
      </div>
      {data.map((i, idx) => {
        return <img
        className="col-md-4 NO-CACHE historyImg"
        src={i.url+"?"+Date.now()}
        onClick={async ()=>{
          await api.post("/posts", {
            pid: i.pid
          }).then((result)=>{
            navigate("/posts", {state:result.data})}
          ).catch(()=>{
            console.log("failed to load post.")
          })
          }}
      />
      })}
    </div>
  );
}

export default History;
