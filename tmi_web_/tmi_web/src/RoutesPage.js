import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import LoginForm from "./pages/LoginForm";
import SignUp from "./pages/SignUp";
import MainPage from "./pages/MainPage";
import FileUpload from "./pages/FileUpload";

function RoutesPage() {
  // let isAuthorized = sessionStorage.getItem("isAuthorized");

  return (
    <div>
      {/* {!isAuthorized ? <Navigate to="/login" /> : <Navigate to="/" />} */}
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/loginForm" element={<LoginForm />} />
        <Route exact path="/signUp" element={<SignUp />} />
        <Route exact path="/fileUpload" element={<FileUpload />} />
        <Route exact path="/" element={<MainPage />} />
      </Routes>
    </div>
  );
}
export default RoutesPage;