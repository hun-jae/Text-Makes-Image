import React, { useState } from "react";
import { useUserContext } from "../components/useUserContext";
import { useNavigate } from "react-router-dom";
import { fetchSignUp } from "../components/fetchSignUp";
import { duplicateCheck } from "../components/duplicateCheck";
import { Link } from "react-router-dom";
import { Container, Input, Button } from "./styled";

function SignUp() {
  // 글로벌 전역 상태값 setUser를 받아옴
  // 로그인이 성공적으로 이루어지면 user에 상태값을 넣어줘야지 나중에 다른 컴포넌트에서도 user값을 이용하여 다른 것들을 할 수 있음
  const setUser = useUserContext();

  //url 이동을 위한 useNavigate
  const history = useNavigate();

  //input에서 입력한 아이디와 비밀번호 정보를 담기위한 state
  const [account, setAccount] = useState({
    uid: "",
    password: "",
    nickname: "",
  });
  const [pwChk, setPwChk] = useState(false);

  //input 변경 발생 시 account state값 변경
  const onChangeAccount = (e) => {
    setAccount({
      ...account,
      [e.target.name]: e.target.value,
    });
  };

  //패스워드 확인
  const onChangePwChk = (e) => {
    setPwChk(e.target.value);
    if (e.target.value == account.password) {
      setPwChk(true);
    } else {
      setPwChk(false);
    }
  };

  //동기식으로 로그인정보를 통신하여 출력
  const onSubmitAccount = async () => {
    if (account.uid === "") {
      return window.alert("아이디를 입력하세요");
    }
    if (account.password === "") {
      return window.alert("패스워드를 입력하세요");
    }
    // 패스워드와 패스워드 확인이 일치하는지 확인
    if (!pwChk) {
      return window.alert("패스워드와 패스워드 확인이 일치하지 않습니다");
    }
    if (account.nickname === "") {
      return window.alert("닉네임을 입력하세요");
    }
    try {
      const user = await fetchSignUp(account);

    } catch (error) {
      //실패하면 error 출력
      window.alert(error);
    }
  };

  const checkIDDuplicate = () => {
    duplicateCheck(account);
  };

  return (
    <Container>
      <h1>Text-to-Image 회원가입</h1>
      <Input id="uid" name="uid" placeholder="ID" onChange={onChangeAccount} />
      <button onClick={checkIDDuplicate}>중복 확인</button>
      <Input
        id="password"
        name="password"
        type="password"
        placeholder="Password"
        onChange={onChangeAccount}
      />
      <Input
        id="checkPassword"
        name="checkPassword"
        type="password"
        placeholder="Password 확인"
        onChange={onChangePwChk}
      />
      {!pwChk ? <div>password와 password 확인이 일치하지 않습니다.</div> : null}

      <Input
        id="nickname"
        name="nickname"
        type="text"
        placeholder="닉네임"
        onChange={onChangeAccount}
      ></Input>
      <Button onClick={onSubmitAccount}>회원가입</Button>
      <div>
        이미 회원이신가요? 
        <Link to="/loginForm"> 로그인 하러가기</Link>
      </div>
    </Container>
  );
}
export default SignUp;
