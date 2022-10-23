import { Form, Row, Col, Button, Container } from "react-bootstrap";

function Withdrawal() {
  return (
    <Container>
      <Form>
        <Form.Label>회원 탈퇴</Form.Label>
        <Form.Group as={Row} className="mb-3" controlId="WithdrawalFormPW">
          <Form.Label column sm={2}>
            비밀번호
          </Form.Label>
          <Col>
            <Form.Control type="password" placeholder="Password"></Form.Control>
          </Col>
        </Form.Group>
        <Button className="mb-3" variant="outline-secondary" type="submit">
          확인
        </Button>
      </Form>
    </Container>
  );
}

export default Withdrawal;
