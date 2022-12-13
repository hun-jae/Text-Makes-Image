import React from "react";
import "./App.css";
import OffcanvasNav from "./components/OffcanvasNav";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import MemberSetting from "./pages/MemberSetting";
import Join from "./pages/Join";
import Write from "./pages/Write";
import Withdrawal from "./pages/Withdrawal";
import FindID from "./pages/FindID";
import FindPW from "./pages/FindPW";
import History from "./pages/History";
import ImageResult from "./pages/ImageResult";
import Home from "./pages/Home";
import BottomNav from "./components/BottomNav";
import { isLogin } from "./components/auth";
import MainPage from "./pages/MainPage";
import Posts from "./pages/Posts";
import AddFriend from "./pages/AddFriend";

function App() {
  return (
    <div className="App">
      <style type="text/css">
        {`
    //     html, body{
    //       height:100%;
    //     }
    // #footer {
    //   position : relative;
    //   transform : translateY(-100%);
    // }
    #bodyContent{
      // height: auto;
      // min-height: 100%;
      // position: relative;
      padding-top: 55px;
      padding-bottom: 55px;
    }
    `}
      </style>
      <OffcanvasNav id="topNav" />
      <div id="bodyContent">
        <Routes>
          <Route path="/" element={isLogin() ? <MainPage /> : <Home />} />
          <Route path="/mainPage" element={<MainPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="/login" element={<Login />} />
          <Route path="/membersetting" element={<MemberSetting />} />
          <Route path="/join" element={<Join />} />
          <Route path="/write" element={<Write />} />
          <Route path="/withdrawal" element={<Withdrawal />} />
          <Route path="/findID" element={<FindID />} />
          <Route path="/findPW" element={<FindPW />} />
          <Route path="/imageResult" element={<ImageResult />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/addFriend" element={<AddFriend />} />
        </Routes>
      </div>
      <BottomNav id="footer" />
    </div>
  );
}

export default App;
