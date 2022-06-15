import React from "react";
import { Link } from "react-router-dom";
import { useUserContext } from "../components/useUserContext";
import { Container, Input, Button } from "./styled";

function MainPage() {
  const user = useUserContext();

  const handleSignUp = (e) =>{
    e.preventDefault();
    window.location.href= "/signUp";
  };
  const handleLogin = (e) =>{
    e.preventDefault();
    window.location.href= "/loginForm";
  };



  return (
    <Container>
      <h1>Text-Makes-Image</h1>
      <div>
        <Button onClick={handleLogin}>로그인</Button>
      </div>
      <div>
        <Button onClick={handleSignUp}>회원가입</Button>
      </div>
      {/* <div>
        <Link to="/fileUpload">파일업로드</Link>
      </div> */}
    </Container>
  );
}

export default MainPage;
