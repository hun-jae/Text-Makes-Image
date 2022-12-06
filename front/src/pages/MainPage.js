import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../components/api";

function MainPage() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const getTimeline = async () => {
    const timeline = await api
    .post("/mainPage",{
      uid:localStorage.getItem("uid")
    })
    .then((result) => {
      if (result.data === "No Param") {
        console.log("No data");
        setData([]);
      } else {
        setData(result.data); // url, pid, uid
        // console.log("Result.data::", result.data);
      }
    })
    .catch(() => {
      console.log("Failed to load data");
    });

  }

  useEffect(() => {
    getTimeline();
    // for test
    // setData(localData);
  }, []);

  return (
    <div>
      <style type="text/css">
        {`
            #mainPageWrapper{
                height:auto;
                min-height:100%;
            }
            .postHeader{
              margin:10px;
            }
            .postImg{
                width:100%;
            }
            #mainPageHeader{
              font-size: 20px;
            }
            `}
      </style>
      <div id="mainPageWrapper">
        {data.length == 0
        ?navigate("/home")
        :data.map((i, idx) => {
          return (
            <div>
              <h2 className="postHeader">{i.uid + "님의 게시물"}</h2>
          <img
          className="col-md-4 NO-CACHE postImg"
          src={i.url+"?"+Date.now()}
          onClick={async ()=>{
            await api.post("/posts", {
              pid: i.pid
            }).then((result)=>{
              navigate("/posts", {state:{
                data : result.data,
                uid : i.uid
              }})}
            ).catch(()=>{
              console.log("failed to load post.")
            })
            }}
        />
        </div>);
        })
}
   

        {/* Show timeline */}
      </div>
    </div>
  );
}

export default MainPage;
