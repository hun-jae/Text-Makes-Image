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
      }
    })
    .catch(() => {
      console.log("Failed to load data");
    });

  }

  useEffect(() => {
    getTimeline();
    console.log(data);
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
                bottom:55px;
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
   {data.map((i, idx) => {
          return (
            <div>
              <div>{i.pid}</div>
          <img
          className="col-md-4 NO-CACHE mainPageImg"
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
        </div>);
        })
}

        {/* Show timeline */}
      </div>
    </div>
  );
}

export default MainPage;
