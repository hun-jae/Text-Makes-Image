import { Form, Button, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import { useState } from "react";

function Write() {
  const [loading, setLoading] = useState(null);

  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    // console.log(data.content);
    // alert(data.content)
    // navigate("/imageResult");

    console.log("Submit Clicked!");
    console.log(data);
    setLoading(true);
    axios
      .post("http://5e80-35-204-124-186.ngrok.io/image", data)
      .then((response) => {
        console.log(response.status);
        if (response.status === 200) {
          alert("Submit Success");
          setLoading(false);
          navigate("/imageResult", { state: response.data });
        } else {
          alert("Submit failed!!");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onError = () => {
    alert("내용을 입력해주세요!");
  };

  return (
    <>
      <style type="text/css">
        {`
       .formContent{
        width:100%;
        rows:"20";
        resize:none;
       }
    `}
      </style>
      <Container>
        {loading ? (
          <Loading />
        ) : (
          <Form onSubmit={handleSubmit(onSubmit, onError)}>
            <Form.Group controlId="WriteFormText">
              <Form.Label>글쓰기</Form.Label>
              <Form.Control
                className="formContent"
                rows={20}
                as="textarea"
                {...register("content", { required: true })}
              ></Form.Control>
            </Form.Group>
            <Button variant="outline-secondary" type="submit">
              확인
            </Button>
          </Form>
        )}
      </Container>
    </>
  );
}

export default Write;
