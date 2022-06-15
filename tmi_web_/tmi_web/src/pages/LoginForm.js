import React, { useState } from "react";
import { useUserContext } from "../components/useUserContext";
import { fetchLogin } from "../components/fetchLogin";
import { useNavigate } from "react-router-dom";
import { Container, Input, Button } from "./styled";

function LoginForm() {
//글로벌 전역 상태값 setUser를 받아옴
//로그인이 성공적으로 이루어지면 user에 상태값을 넣어줘야지 나중에 다른 컴포넌트에서도 user값을 이용하여 다른 것들을 할 수 있음
  const setUser = useUserContext();

  //url 이동을 위한 useNavigate
  const history = useNavigate();

  //input에서 입력한 아이디와 비밀번호 정보를 담기위한 state
  const [account, setAccount] = useState({
    id: "",
    password: "",
    nickname: "",
  });

  //input에 입력하면 자동적으로 account state값 변경
  const onChangeAccount = (e) => {
    setAccount({
      ...account,
      [e.target.name]: e.target.value,
    });
  };

  //동기식으로 로그인정보를 통신하여 출력
  const onSubmitAccount = async () => {
    try {
      const user = await fetchLogin(account);

      //성공하면 해당 user 아이디 패스워드값 셋팅
      // setUser.setUser();
      //성공하면 해당 url로 이동(main페이지로)
      // history.replace("/");
    } catch (error) {

        //실패하면 throw new Error("") 값 출력
      window.alert(error);
    }
  };
  return (
    <Container>
        <h1>Text-to-Image</h1>
      <Input
        id="uid"
        name="uid"
        placeholder="ID"
        onChange={onChangeAccount}
      />
      <Input
        id="password"
        name="password"
        type="password"
        placeholder="Password"
        onChange={onChangeAccount}
      />
      <Button onClick={onSubmitAccount}>로그인</Button>
      <div>
        <a href="#">아이디 찾기</a>
      </div>
      <div>
        <a href="#">비밀번호 찾기</a>
      </div>
    </Container>
  );
}

export default LoginForm;