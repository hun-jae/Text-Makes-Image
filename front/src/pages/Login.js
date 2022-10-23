import { Row, Col, Container, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

function Login() {
  return (
    <Container>
      <Form>
        <Form.Group as={Row} className="mb-3" controlId="LoginID">
          <Form.Label column sm={3}>
            ID
          </Form.Label>
          <Col>
            <Form.Control type="text" placeholder="Enter ID" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="LoginPassword">
          <Form.Label column sm={3}>
            Password
          </Form.Label>
          <Col>
            <Form.Control type="password" placeholder="Password" />
          </Col>
        </Form.Group>

        <Form.Group>
          <Link to="/join" className="m-1 btn btn-outline-secondary">
            회원가입{" "}
          </Link>
          <Button className="m-1" variant="outline-secondary">
            로그인
          </Button>
        </Form.Group>
        <Form.Group>
          <Link to="/findID" className="m-1">
            아이디 찾기
          </Link>
          <Link to="/findPW" className="m-1">
            비밀번호 찾기
          </Link>
        </Form.Group>
      </Form>
    </Container>
  );
}

export default Login;
