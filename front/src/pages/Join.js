import { Form, Row, Col, Button, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { api } from "../components/api";

function Join() {
  const navigate = useNavigate();
  const onSubmit = (data) => {
    console.log("데이터::", data);
    api
      .post("/signin", {
        uid: data.uid,
        email: data.email,
        password: data.password,
        nickname: data.nickname,
      })
      .then((result) => {
        if (result.data === "success") {
          alert("회원가입 완료!");
          navigate("/home");
        } else if (result.data === "There is same id") {
          alert("같은 아이디가 존재합니다.");
        } else {
          alert("회원 가입에 실패하였습니다.");
        }
      })
      .catch(() => {
        alert("회원가입에 실패했습니다");
      });
  };

  const onError = (errors) => {
    console.log(errors);
  };

  // react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({ mode: "onBlur" });

  // 비밀번호 확인
  const pwChkValidateCheck = (value) => {
    const pw = getValues("password");
    const pwChk = getValues("pwChk");
    if (pw !== pwChk) {
      return "비밀번호와 비밀번호 확인이 일치하지 않습니다";
    } else {
      return true;
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit, onError)}>
        <Form.Label variant="subject">회원 가입</Form.Label>
        <Form.Group as={Row} className="mb-3" controlId="JoinFormEmail">
          <Form.Label column sm={3}>
            Email
          </Form.Label>
          <Col>
            <Form.Control
              name="email"
              type="email"
              placeholder="Email"
              {...register("email", {
                required: "이메일을 입력해주세요.",
                pattern: {
                  value:
                    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/,
                  message: "이메일 형식이 올바르지 않습니다.",
                },
              })}
            />
          </Col>
          {errors.email && (
            <Form.Text className="text-danger">
              {errors.email.message}
            </Form.Text>
          )}
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="JoinFormID">
          <Form.Label column sm={3}>
            ID
          </Form.Label>
          <Col>
            <Form.Control
              name="uid"
              type="text"
              placeholder="ID"
              {...register("uid", {
                required: "아이디를 입력해주세요.",
                pattern: {
                  value: /^[A-za-z]+[A-za-z0-9]{4,14}$/,
                  message:
                    "아이디는 5~15자 이내 영문자로 시작하여야하고 영문자와 숫자만 사용 가능합니다.",
                },
              })}
            ></Form.Control>
          </Col>
          {errors.uid && (
            <Form.Text className="text-danger">{errors.uid.message}</Form.Text>
          )}
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="JoinFormNickname">
          <Form.Label column sm={3}>
            닉네임
          </Form.Label>
          <Col>
            <Form.Control
              name="nickname"
              type="text"
              placeholder="Nickname"
              {...register("nickname", {
                required: "닉네임을 입력해주세요.",
                pattern: {
                  value: /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]{2,8}$/,
                  message: "닉네임은 2~8자로 입력해주세요.",
                },
              })}
            ></Form.Control>
          </Col>
          {errors.nickname && (
            <Form.Text className="text-danger">
              {errors.nickname.message}
            </Form.Text>
          )}
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="JoinFormPW">
          <Form.Label column sm={3}>
            비밀번호
          </Form.Label>
          <Col>
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
              {...register("password", {
                required: "비밀번호를 입력해주세요.",
                pattern: {
                  value:
                    /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/,
                  message:
                    "비밀번호는 영문+숫자+특수기호(!@#$%^+-=)를 1개 이상 조합하여야 합니다",
                },
              })}
            ></Form.Control>
          </Col>
          {errors.password && (
            <Form.Text className="text-danger">
              {errors.password.message}
            </Form.Text>
          )}
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="JoinFormPWCheck">
          <Form.Label column sm={3}>
            비밀번호 확인
          </Form.Label>
          <Col>
            <Form.Control
              type="password"
              placeholder="Password Check"
              {...register("pwChk", {
                required: "비밀번호 확인을 입력해주세요",
                validate: pwChkValidateCheck,
              })}
            ></Form.Control>
          </Col>
          {errors.pwChk && <Form.Text>{errors.pwChk.message}</Form.Text>}
        </Form.Group>
        <Button className="mb-3" variant="outline-secondary" type="submit">
          확인
        </Button>
      </Form>
    </Container>
  );
}

export default Join;
