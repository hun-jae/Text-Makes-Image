import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { isLogin } from "../components/auth";
import Post from "../components/Post";

function Home() {
  let navigate = useNavigate();

  return (
    <div>
      <style type="text/css">
        {`
    .btn {
      background-color: #ababd9;
      color: white;
      border-color: rgba( 255, 255, 255, 0 );
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
        <>
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
        </>
      ) : (
        // Logged in
        <Container>
          <div className="homeUid">{localStorage.getItem("uid")+"님 환영합니다!"}</div>
          {/* <Button onClick={() => navigate("/feed")}>Feed</Button>
          <Button onClick={() => navigate("/write")}>글쓰기</Button> */}
        </Container>
      )}
    </div>
  );
}

export default Home;
