import { Form, Row, Col, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function FindID() {
  return (
    <Container>
      <Form>
        <Form.Label>아이디 찾기</Form.Label>
        <Form.Group as={Row} className="mb-3" controlId="FindPWFormNickname">
          <Form.Label column sm={3}>
            이메일
          </Form.Label>
          <Col>
            <Form.Control type="email" placeholder="Email"></Form.Control>
          </Col>
        </Form.Group>
        <Button className="mb-3" type="submit" variant="outline-secondary">
          인증코드 발송
        </Button>

        <Form.Group as={Row} className="mb-3" controlId="FindPWFormPW">
          <Form.Label column sm={3}>
            인증 코드
          </Form.Label>
          <Col>
            <Form.Control type="text"></Form.Control>
          </Col>
          <Col sm={2}>
            <Button variant="outline-secondary">확인</Button>
          </Col>
        </Form.Group>
      </Form>
      <Link to="/login" className="btn btn-outline-secondary">
        로그인 화면으로 돌아가기
      </Link>
    </Container>
  );
}

export default FindID;
