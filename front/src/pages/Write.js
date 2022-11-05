import { Form, Button, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";

function Write() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data.content);

    window.location.href = "/imageResult";
  };

  const onError = () => {
    alert("내용을 입력해주세요!");
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit, onError)}>
        <Form.Group controlId="WriteFormText">
          <Form.Label>글쓰기</Form.Label>
          <Form.Control
            as="textarea"
            rows={25}
            {...register("content", { required: true })}
          ></Form.Control>
        </Form.Group>
        <Button variant="outline-secondary" type="submit">
          확인
        </Button>
      </Form>
    </Container>
  );
}

export default Write;
