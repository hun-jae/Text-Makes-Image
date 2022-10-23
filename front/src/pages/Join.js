import { Form, Row, Col, Button, Container } from "react-bootstrap";

function Join() {
  return (
    <Container>
      <Form>
        <Form.Label variant='subject'>회원 가입</Form.Label>
        <Form.Group as={Row} className="mb-3" controlId="JoinFormID">
          <Form.Label column sm={3}>
            Email
          </Form.Label>
          <Col>
            <Form.Control type="email" placeholder="Email"></Form.Control>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="JoinFormID">
          <Form.Label column sm={3}>
            ID
          </Form.Label>
          <Col>
            <Form.Control type="text" placeholder="ID"></Form.Control>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="JoinFormNickname">
          <Form.Label column sm={3}>
            닉네임
          </Form.Label>
          <Col>
            <Form.Control type="text" placeholder="Nickname"></Form.Control>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="JoinFormPW">
          <Form.Label column sm={3}>
            비밀번호
          </Form.Label>
          <Col>
            <Form.Control type="password" placeholder="Password"></Form.Control>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="JoinFormPWCheck">
          <Form.Label column sm={3}>
            비밀번호 확인
          </Form.Label>
          <Col>
            <Form.Control
              type="password"
              placeholder="Password Check"
            ></Form.Control>
          </Col>
        </Form.Group>
        <Button className="mb-3" variant="outline-secondary" type="submit">
          확인
        </Button>
      </Form>
    </Container>
  );
}

export default Join;
