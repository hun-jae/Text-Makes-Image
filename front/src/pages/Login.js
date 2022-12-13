import { Row, Col, Container, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import api from "../components/api";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });
  const navigate = useNavigate();

  const onSubmit = (data) => {
    api
      .post("/login", {
        uid: data.uid,
        password: data.password,
      })
      .then((response) => {
        if (response.data === "success") {
          localStorage.setItem("uid", data.uid);
          localStorage.setItem("password", data.password);
          localStorage.setItem("accessToken", "defined");

          console.log("User", localStorage.getItem("uid"), "has logged in.");

          navigate("/mainPage");
        } else {
          alert("로그인 실패! 아이디와 비밀번호를 확인하세요.");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onError = (errors) => {
    console.log("error::", errors);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit, onError)}>
        <Form.Group as={Row} className="mb-3" controlId="LoginID">
          <Form.Label column sm={3}>
            ID
          </Form.Label>
          <Col>
            <Form.Control
              type="text"
              placeholder="Enter ID"
              {...register("uid", {
                required: "아이디를 입력해주세요.",
                pattern: {
                  value: /^[A-za-z]+[A-za-z0-9]{4,14}$/,
                  message:
                    "아이디가 형식에 맞지 않습니다.(영문자+숫자 조합 5~15자)",
                },
              })}
            />
          </Col>
          {errors.uid && (
            <Form.Text className="text-danger">{errors.uid.message}</Form.Text>
          )}
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="LoginPassword">
          <Form.Label column sm={3}>
            Password
          </Form.Label>
          <Col>
            <Form.Control
              type="password"
              placeholder="Password"
              {...register("password", {
                required: "비밀번호를 입력해주세요.",
                pattern: {
                  value:
                    /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/,
                  message: "비밀번호는 영문자+숫자+특수기호 조합 8~20자입니다.",
                },
              })}
            />
          </Col>
          {errors.password && (
            <Form.Text className="text-danger">
              {errors.password.message}
            </Form.Text>
          )}
        </Form.Group>

        <Form.Group>
          <Link to="/join" className="m-1 btn btn-outline-secondary">
            회원가입
          </Link>
          <Button className="m-1" variant="outline-secondary" type="submit">
            로그인
          </Button>
        </Form.Group>
        {/* <Form.Group>
          <Link to="/findID" className="m-1">
            아이디 찾기
          </Link>
          <Link to="/findPW" className="m-1">
            비밀번호 찾기
          </Link>
        </Form.Group> */}
      </Form>
    </Container>
  );
}

export default Login;
