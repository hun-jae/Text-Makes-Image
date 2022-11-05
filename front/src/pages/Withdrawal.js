import { Form, Row, Col, Button, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";

function Withdrawal() {
  const { register, handleSubmit } = useForm();

  const onSubmit = () => {
    console.log();
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Label>회원 탈퇴</Form.Label>
        <Form.Group as={Row} className="mb-3" controlId="WithdrawalFormPW">
          <Form.Label column sm={2}>
            비밀번호
          </Form.Label>
          <Col>
            <Form.Control
              type="password"
              placeholder="Password"
              {...register("password")}
            />
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
