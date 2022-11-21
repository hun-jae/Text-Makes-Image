import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link, useNavigate } from "react-router-dom";
import { isLogin, deleteToken } from "./auth";
import { TbArrowBackUp } from "react-icons/tb";
import { AiOutlineHome, AiOutlineSetting } from "react-icons/ai";

function OffcanvasNav() {
  let navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClose = () => setMenuOpen(false);

  return (
    <div>
      <style type="text/css">
        {`
    .navbar-top {
      background-color: #ababd9;
    }
    .navbar-brand{
      color:white;
      font-weight:bold;
    }
    .btn {
      background-color: #ababd9;
      color: white;
      border-color: rgba( 255, 255, 255, 0 );
      margin:10px;
    }
    .backBtn{
      text-align:left;
      padding-left:0px;
      margin:0px;
    }
    .settingToggle{
      padding-right:0px;
      border-color: rgba( 255, 255, 255, 0 );
    }
    .title{
      color: white;
      font-weight: bold;
    }
    `}
      </style>

      {["lg"].map((expand) => (
        <Navbar key={expand} variant="top" expand={expand} className="mb-3">
          <Container fluid>
            <Button
              className="backBtn"
              onClick={() => {
                navigate(-1);
              }}
            >
              <TbArrowBackUp size="24" />
            </Button>
            <Navbar.Brand href="/">TMI</Navbar.Brand>
            <Navbar.Toggle
              className="settingToggle"
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              onClick={toggleMenu}
            >
              <AiOutlineSetting size="24" color="white" />
            </Navbar.Toggle>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              /** Add these props */
              restoreFocus={false}
              show={menuOpen}
              onHide={handleClose}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title
                  className="headerTitle"
                  id={`offcanvasNavbarLabel-expand-${expand}`}
                >
                  TMI
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  {/* <Link to="/" onClick={toggleMenu}>
                    <AiOutlineHome size="28" />
                  </Link> */}
                  <Button
                      className="toggleBtn"
                        onClick={() => {
                          navigate("/");
                          toggleMenu();
                        }}
                      >
                       <AiOutlineHome size="20" /> 홈 <AiOutlineHome size="20" />
                      </Button>

                  {isLogin() ? (
                    <>
                      {/* <Link to="/profile" onClick={toggleMenu}>
                        Feed
                      </Link>
                      <Link to="/membersetting" onClick={toggleMenu}>
                        Setting
                      </Link>
                      <Link to="/write" onClick={toggleMenu}>
                        Write
                      </Link>
                      <Link to="/withdrawal" onClick={toggleMenu}>
                        Withdrawal
                      </Link> */}
                      <Button
                      className="toggleBtn"
                        onClick={() => {
                          navigate("/membersetting");
                          toggleMenu();
                        }}
                      >
                        회원 설정
                      </Button>
                      <Button
                      className="toggleBtn"
                        onClick={() => {
                          deleteToken();
                          navigate("/");
                          toggleMenu();
                        }}
                      >
                        로그아웃
                      </Button>
                    </>
                  ) : (
                    <>
                      <Link to="/login" onClick={toggleMenu}>
                        Login
                      </Link>
                      <Link to="/join" onClick={toggleMenu}>
                        Join
                      </Link>
                    </>
                  )}

                  {/* <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown> */}
                </Nav>
                {/* <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form> */}
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
}

export default OffcanvasNav;