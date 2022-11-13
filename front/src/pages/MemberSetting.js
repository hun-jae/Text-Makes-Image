import { Form, Row, Col, Button, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";

function MemberSetting({ user }) {
  const {register, handleSubmit} = useForm();
  const { uid, nickname, password} = user || {};
  return (
    <Container>
      <Form>
        <Form.Label>회원 정보 수정</Form.Label>
        <Form.Group as={Row} className="mb-3" controlId="MSFormID">
          <Form.Label column sm={3}>
            ID
          </Form.Label>
          <Col>
            <Form.Control type="text" placeholder="ID" disabled>{uid}</Form.Control>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="MSFormNickname">
          <Form.Label column sm={3}>
            닉네임
          </Form.Label>
          <Col>
            <Form.Control type="text" placeholder="Nickname"></Form.Control>
          </Col>
        </Form.Group>
        <Button className="mb-3" type="submit" variant="outline-secondary">
          닉네임 변경
        </Button>

        <Form.Group as={Row} className="mb-3" controlId="MSFormPW">
          <Form.Label column sm={3}>
            현재 비밀번호
          </Form.Label>
          <Col>
            <Form.Control type="password"></Form.Control>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="MSFormChangedPW">
          <Form.Label column sm={3}>
            변경 비밀번호
          </Form.Label>
          <Col>
            <Form.Control type="password"></Form.Control>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="MSFormChangedPWCheck">
          <Form.Label column sm={3}>
            변경 비밀번호 확인
          </Form.Label>
          <Col>
            <Form.Control type="password"></Form.Control>
          </Col>
        </Form.Group>
        <Button className="mb-3" variant="outline-secondary" type="submit">
          비밀번호 변경
        </Button>
      </Form>
    </Container>
  );
}

export default MemberSetting;
