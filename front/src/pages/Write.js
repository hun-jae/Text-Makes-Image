import { Form, Button, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Write() {
  const { register, handleSubmit } = useForm();
  let navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data.content);
    alert(data.content)
    navigate("/imageResult");
    // console.log("Submit Clicked!");
    // axios
    //   .post("주소", data)
    //   .then((response) => {
    //     console.log(response.status);
    //     if (response.status === 200) {
    //       alert("Submit Success");
    //       window.location.href = "/imageResult";
    //     } else {
    //       alert("Submit Error!!");
    //     }
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
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
