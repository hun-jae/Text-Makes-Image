import React, { useState } from "react";
import * as auth from "../components/auth";
import { useNavigate } from "react-router-dom";

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
      <input value={userId} onChange={(e) => setUserId(e.target.value)} />
      <input value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={submit}>로그인</button>
    </div>
  );
}

export default Login;