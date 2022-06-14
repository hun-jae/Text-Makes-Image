import React, { useState } from "react";
import * as auth from "../components/auth";
import { useNavigate } from "react-router-dom";
import { Input, Button } from "./styled";


function Login() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const history = useNavigate();

  function submit() {
    auth.login(userId, password).then((res) => {
      console.log(res);
      if (res.resultcode === 1) {
        history.push("/");
      }
    });
  }

  return (
    <div>
      <h1>TMI 로그인</h1>
      <Input id="id"
        name="id"
        placeholder="ID"
        value={userId} 
        onChange={(e) => setUserId(e.target.value)} 
      />
      <Input id="password"
        name="password"
        placeholder="Password"
        value={password} onChange={(e) => setPassword(e.target.value)} 
      />
      <Button onClick={submit}>로그인</Button>
    </div>
  );
}

export default Login;