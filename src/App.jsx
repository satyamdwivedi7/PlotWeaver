import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import "./App.css";
import FAQ from "./pages/FAQ";
import { GoogleOAuthProvider } from "@react-oauth/google";

const clientId =
  "444233035555-eiuu84mh3ieuunoeuddtpo2r83v6pei1.apps.googleusercontent.com";

function App() {
  const [loginType, setLoginType] = useState(""); // State to track login type

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Router>
        <Routes>
          <Route path="/" element={<Login setLoginType={setLoginType} />} />
          <Route path="/home" element={<Home loginType={loginType} />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;
