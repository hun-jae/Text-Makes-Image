import Nav from "react-bootstrap/Nav";
import { useNavigate } from "react-router-dom";
import { TbArrowBackUp } from "react-icons/tb";
import { AiOutlineSetting } from "react-icons/ai";

function TopNav() {
  const navigate = useNavigate();
  return (
    <div>
      <style type="text/css">
        {`
    .topWrapper {
      position:fixed;
      top:0;
      width:100%;
      height:45px;
      background-color: #ababd9;
    }
    .nav-item{
      text-align: center;
      width:33%;
    }
    .backBtn{
      background-color:rgba( 255, 255, 255, 0 );
      border: 10px solid rgba(255, 0, 0, 0);
      text-align: left;
    }
    .settingBtn{
      background-color:rgba( 255, 255, 255, 0 );
      border: 10px solid rgba(255, 0, 0, 0);
      text-align: right;
    }
    .brandName{
      color:white;
    }
    `}
      </style>
      <Nav
        className="topWrapper"
        activeKey="/"
        onSelect={(selectedKey) => {
          navigate(`/${selectedKey}`);
        }}
      >
        <Nav.Item>
          <button
            className="backBtn"
            onClick={() => {
              navigate(-1);
            }}
          >
            <TbArrowBackUp size="24" color="white" />
          </button>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="brand" eventKey="">
            <div className="brandName">TMI</div>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="nav-link" eventKey="membersetting"></Nav.Link>
          <button
            className="settingBtn"
            onClick={() => {
              navigate("/membersetting");
            }}
          >
            <AiOutlineSetting size="24" color="white" />
          </button>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default TopNav;
