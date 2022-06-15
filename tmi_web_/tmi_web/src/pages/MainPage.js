import React from "react";
import { Link } from "react-router-dom";
import { useUserContext } from "../components/useUserContext";

function MainPage(history) {
  const user = useUserContext();
  return (
    <div>
      <h1>Text-Makes-Image</h1>
      <div>
        <Link to="/loginForm">로그인폼</Link>
      </div>
      <div>
        <Link to="/signUp">회원가입</Link>
      </div>
      {/* <div>
        <Link to="/fileUpload">파일업로드</Link>
      </div> */}
    </div>
  );
}

export default MainPage;
