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

function App() {
  return (
    <div className="App">
      <OffcanvasNav />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="/login" element={<Login />} />
          <Route path="/membersetting" element={<MemberSetting />} />
          <Route path="/join" element={<Join />} />
          <Route path="/write" element={<Write />} />
          <Route path="/withdrawal" element={<Withdrawal />} />
          <Route path="/findID" element={<FindID />} />
          <Route path="/findPW" element={<FindPW />} />
          <Route path="/imageResult" element={<ImageResult />} />
        </Routes>
      </div>
      <BottomNav />
    </div>
  );
}

export default App;
