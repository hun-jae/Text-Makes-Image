import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link, useNavigate } from "react-router-dom";

function Nav_() {
  let navigate = useNavigate();
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
        <Navbar key={expand} variant='top' expand={expand} className="mb-3">
          <Container fluid>
            <Button
              variant="outline-light"
              onClick={() => {
                navigate(-1);
              }}
            >
              뒤로가기
            </Button>
            <Navbar.Brand href="/">TMI</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  TMI
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link>
                    <Link to="/">Home</Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="/login">Login</Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="/join">Join</Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="/membersetting">Setting</Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="/write">Write</Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="/withdrawal">Withdrawal</Link>
                  </Nav.Link>
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
