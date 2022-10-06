import { Form, Row, Col, Button, Container } from "react-bootstrap";

function Write() {
  return (
    <Container>
      <Form>
        <Form.Group controlId="WriteFormText">
          <Form.Label>글쓰기</Form.Label>
          <Form.Control as="textarea" rows={30}></Form.Control>
        </Form.Group>
        <Button variant="outline-secondary" type="submit">
          확인
        </Button>
      </Form>
    </Container>
  );
}

export default Write;
