import React, { useState } from "react";
import { Link } from 'react-router-dom';

function MainPage(history) {
  return (
    <div>
      <h3>Text-Makes_Image</h3>
      <div>
        <Link to="/login">로그인</Link>
      </div>
      <div>
        <Link to="/loginForm">로그인폼</Link>
      </div>
    </div>
  );
}

export default MainPage;