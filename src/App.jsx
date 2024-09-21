import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import FAQ from "./pages/FAQ";
import Story from "./pages/Story";
import "./App.css";
import { GoogleOAuthProvider } from "@react-oauth/google";

const clientId =
  "444233035555-eiuu84mh3ieuunoeuddtpo2r83v6pei1.apps.googleusercontent.com";

function App() {
  const [loginType, setLoginType] = useState("");

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Router>
        <Routes>
          <Route path="/" element={<Login setLoginType={setLoginType} />} />
          <Route path="/home" element={<Home loginType={loginType} />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/story/:id" element={<Story />} />{" "}
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;
