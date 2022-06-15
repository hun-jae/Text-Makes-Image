import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginForm from "./pages/LoginForm";
import SignUp from "./pages/SignUp";
import MainPage from "./pages/MainPage";
import FileUpload from "./pages/FileUpload";

function RoutesPage() {
  return (
    <div>
      <Routes>
        <Route exact path="/loginForm" element={<LoginForm />} />
        <Route exact path="/signUp" element={<SignUp />} />
        <Route exact path="/fileUpload" element={<FileUpload />} />
        <Route exact path="/" element={<MainPage />} />
      </Routes>
    </div>
  );
}
export default RoutesPage;