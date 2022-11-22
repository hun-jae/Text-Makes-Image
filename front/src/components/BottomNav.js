import Nav from "react-bootstrap/Nav";
import { AiOutlineHome, AiOutlinePlusCircle } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { isLogin } from "./auth";

function BottomNav() {
  const navigate = useNavigate();

  return (
    <div>
      <style type="text/css">
        {`
    .bottomWrapper {
      position:fixed;
      bottom:0;
      left:0;
      right:0;
      width:100%;
      height:55px;
      background-color: #ababd9;
    }
    .nav-item{
      text-align: center;
      width:33%;
    }
    .linkIcon{
        color:white;
        font-size:30px;
        top:0
    }
    .linkName{
      color:white;
      font-size:5px;
    }
    `}
      </style>
      {isLogin() ? 
      <Nav
        className="bottomWrapper"
        activeKey="/"
        onSelect={(selectedKey) => {
          navigate(`/${selectedKey}`);
        }}
      >
        <Nav.Item className="col-md-4">
          <Nav.Link className="nav-link" eventKey="home">
            <AiOutlineHome className="linkIcon" />
            <div className="linkName">Home</div>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="col-md-4">
          <Nav.Link className="nav-link" eventKey="write">
            <AiOutlinePlusCircle className="linkIcon" />
            <div className="linkName">Write</div>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="col-md-4">
          <Nav.Link className="nav-link" eventKey="history">
            <CgProfile className="linkIcon" />
            <div className="linkName">History</div>
          </Nav.Link>
        </Nav.Item>
      </Nav>
      :null}
      
    </div>
  );
}

export default BottomNav;
