import React, { useState } from "react";
import Login from "../components/LoginBox";
import Footer from "../components/Footer";
import Header from "../components/Header";

function App() {
  const [loginType, setLoginType] = useState(""); // State to track login type

  return (
    <div className="flex flex-col h-[100vh] w-[100vw] bg-[#121212]">
      <Header />
      <div className="bg-[url('/bg-dark.png')] bg-cover bg-no-repeat bg-center h-screen flex flex-col justify-between pt-16">
        <Login setLoginType={setLoginType} /> {/* Pass setLoginType to Login */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
