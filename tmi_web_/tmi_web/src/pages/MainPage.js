import React, { useState } from "react";
import { Link } from 'react-router-dom';

function MainPage(history) {
  return (
    <div>
      <h1>Text-Makes_Image</h1>
      <div>
        <Link to="/login">로그인</Link>
      </div>
      <div>
        <Link to="/loginForm">로그인폼</Link>
      </div>
      <div>
        <Link to="/signUp">회원가입</Link>
      </div>
      <div>
        <Link to="/fileUpload">파일업로드</Link>
      </div>
    </div>
  );
}

export default MainPage;