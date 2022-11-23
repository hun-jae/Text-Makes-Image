import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <style type="text/css">
        {`
    .btnGroup{
      position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .homeUnloggedInBtn{
      width:100%;
    }
    .homeUid{
      font-weight:bold;
      color: #ababd9;
    }
    `}
      </style>
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
    </div>
  );
}

export default Home;
