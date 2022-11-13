import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { isLogin, deleteToken } from "../components/auth";

function Home() {
  let navigate = useNavigate();

  return (
    <div>
      {!isLogin() ? (
        <>
          <Button
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </Button>
          <Button
            onClick={() => {
              navigate("/join");
            }}
          >
            Join
          </Button>
        </>
      ) : (
        <Container>
          <div>{localStorage.getItem("uid")}</div>
          <div>Welcome!</div>
          <Button onClick={() => navigate("/feed")}>Feed</Button>
          <Button onClick={() => navigate("/write")}>글쓰기</Button>
        </Container>
      )}
    </div>
  );
}

export default Home;
