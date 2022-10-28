import { useState } from "react";
import { Form, Row, Col, Button, Container } from "react-bootstrap";
import axios from "axios";

function Join() {
  const [user, setUser] = useState({
    email: "",
    uid: "",
    nickname: "",
    password: "",
  });
  const [passwordcheck, setPasswordcheck] = useState("");
  const [pwsame, setPwsame] = useState(false);

  const [msg, setMsg] = useState({
    emailMsg: "",
    uidMsg: "",
    pwMsg: "",
    pwChkMsg: "",
  });

  const handleMsg = (n) => {
    const emailReg =
      /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

    if (emailReg.test(user.email)) {
      setMsg({ ...msg, [n]: "이메일이 유효하지 않습니다." });
    }
  };

  const onChangeUser = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
    handleMsg(e.target.name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    // axios
    //   .post("http://localhost:3000/data/userdata.json", user)
    //   .then((result) => {
    //     alert("회원가입 완료!");
    //     window.location.replace("/");
    //   })
    //   .catch(() => {
    //     alert("회원가입에 실패했습니다");
    //   });
  };

  return (
    <Container>
      <Form onChange={handleSubmit}>
        <Form.Label variant="subject">회원 가입</Form.Label>
        <Form.Group as={Row} className="mb-3" controlId="JoinFormID">
          <Form.Label column sm={3}>
            Email
          </Form.Label>
          <Col>
            <Form.Control
              name="email"
              type="email"
              placeholder="Email"
              onChange={onChangeUser}
            />
          </Col>
          <p name="emailMsg">{msg.emailMsg}</p>
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
              onChange={onChangeUser}
            ></Form.Control>
          </Col>
          <p name="uidMsg">{msg.uidMsg}</p>
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
              onChange={onChangeUser}
            ></Form.Control>
          </Col>
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
              onChange={onChangeUser}
            ></Form.Control>
          </Col>
          <p name="pwMsg">{msg.pwMsg}</p>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="JoinFormPWCheck">
          <Form.Label column sm={3}>
            비밀번호 확인
          </Form.Label>
          <Col>
            <Form.Control
              type="password"
              placeholder="Password Check"
              onChange={(e) => {
                setPasswordcheck(e.target.value);
              }}
            ></Form.Control>
          </Col>
          <p name="pwChkMsg">{msg.pwChkMsg}</p>
        </Form.Group>
        <Button className="mb-3" variant="outline-secondary" type="submit">
          확인
        </Button>
      </Form>
    </Container>
  );
}

export default Join;
