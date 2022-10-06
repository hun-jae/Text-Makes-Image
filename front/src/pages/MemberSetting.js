import { Form, Row, Col, Button } from "react-bootstrap";

function MemberSetting() {
  return (
    <div>
      <div>회원 정보 수정</div>
      <Form>
        <Form.Group as={Row} className="mb-3" controlId="MSFormID">
          <Form.Label column sm={2}>
            ID
          </Form.Label>
          <Col>
            <Form.Control type="text" placeholder="ID" disabled></Form.Control>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="MSFormNickname">
          <Form.Label column sm={2}>
            닉네임
          </Form.Label>
          <Col>
            <Form.Control type="text" placeholder="Nickname"></Form.Control>
          </Col>
        </Form.Group>
        <Button className="mb-3" type="submit">
          닉네임 변경
        </Button>

        <Form.Group as={Row} className="mb-3" controlId="MSFormPW">
          <Form.Label column sm={2}>
            현재 비밀번호
          </Form.Label>
          <Col>
            <Form.Control type="password"></Form.Control>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="MSFormChangedPW">
          <Form.Label column sm={2}>
            변경 비밀번호
          </Form.Label>
          <Col>
            <Form.Control type="password"></Form.Control>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="MSFormChangedPWCheck">
          <Form.Label column sm={2}>
            변경 비밀번호 확인
          </Form.Label>
          <Col>
            <Form.Control type="password"></Form.Control>
          </Col>
        </Form.Group>
        <Button className="mb-3" variant="primary" type="submit">
          비밀번호 변경
        </Button>
      </Form>
    </div>
  );
}

export default MemberSetting;
