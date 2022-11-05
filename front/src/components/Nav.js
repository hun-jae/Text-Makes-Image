import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link, useNavigate } from "react-router-dom";
import { isLogin, deleteToken } from "../components/auth";
import { TbArrowBackUp } from "react-icons/tb";
import { AiOutlineHome } from "react-icons/ai";

function Nav_() {
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
    .btn {
      background-color: #ababd9;
      color: white;
      border-color: white;
    }
    `}
      </style>

      {["lg"].map((expand) => (
        <Navbar key={expand} variant="top" expand={expand} className="mb-3">
          <Container fluid>
            <Button
              variant="outline-light"
              onClick={() => {
                navigate(-1);
              }}
            >
              <TbArrowBackUp size="24" />
            </Button>
            <Navbar.Brand href="/">TMI</Navbar.Brand>
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              onClick={toggleMenu}
            />
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
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  TMI
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link>
                    <Link to="/" onClick={toggleMenu}>
                      <AiOutlineHome size="28" />
                    </Link>
                  </Nav.Link>
                  {isLogin() ? (
                    <>
                      <Nav.Link>
                        <Link to="/feed" onClick={toggleMenu}>
                          Feed
                        </Link>
                      </Nav.Link>
                      <Nav.Link>
                        <Link to="/membersetting" onClick={toggleMenu}>
                          Setting
                        </Link>
                      </Nav.Link>
                      <Nav.Link>
                        <Link to="/write" onClick={toggleMenu}>
                          Write
                        </Link>
                      </Nav.Link>
                      <Nav.Link>
                        <Link to="/withdrawal" onClick={toggleMenu}>
                          Withdrawal
                        </Link>
                      </Nav.Link>
                      <Button
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
                    <span>
                      <Nav.Link>
                        <Link to="/login" onClick={toggleMenu}>
                          Login
                        </Link>
                      </Nav.Link>
                      <Nav.Link>
                        <Link to="/join" onClick={toggleMenu}>
                          Join
                        </Link>
                      </Nav.Link>
                    </span>
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

export default Nav_;
