import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import api from "../components/api";
import { isLogin } from "../components/auth";
import Post from "../components/Post";

function Home() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    if (isLogin()) {
      api
        .post("/mainPage")
        .then((result) => {
          if (result.data === "No Param") {
            setData([]);
          } else {
            setData(result.data); // text, url
          }
          console.log(data);
        })
        .catch(() => {
          console.log("failed to load data");
        });

      // for test
      // setData(testData);
    }
  }, []);

  return (
    <div>
      <style type="text/css">
        {`
    .btnGroup{
      vertical-align:center;
    }
    .homeUnloggedInBtn{
      width:80%;
    }
    .homeUid{
      font-weight:bold;
      color: #ababd9;
    }
    `}
      </style>
      {!isLogin() ? (
        // Not logged in
        <div className="btnGroup">
          <Button
            className="homeUnloggedInBtn"
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </Button>
          <Button
            className="homeUnloggedInBtn"
            onClick={() => {
              navigate("/join");
            }}
          >
            Join
          </Button>
        </div>
      ) : (
        // Logged in
        <Container>
          <div className="homeUid">
            {localStorage.getItem("uid") + "님 환영합니다!"}
          </div>
          {/* <Button onClick={() => navigate("/feed")}>Feed</Button>
          <Button onClick={() => navigate("/write")}>글쓰기</Button> */}
        </Container>
      )}
    </div>
  );
}

export default Home;
