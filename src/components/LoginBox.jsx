import React from "react";
import gicon from "../assets/gicon.png";
import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";

const Login = ({ setLoginType }) => {
  const navigate = useNavigate();

  const guestClick = () => {
    setLoginType("guest");
    localStorage.setItem("name", "Guest");
    navigate("/home");
  };

  const login = useGoogleLogin({
    onSuccess: async (response) => {
      console.log("Login successful:", response);
      try {
        const accessToken = response.access_token;

        const res = await fetch(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        const userData = await res.json();
        console.log("User Data:", userData);
        localStorage.setItem("name", userData.name);
        localStorage.setItem("token", accessToken);
        setLoginType("google");
        navigate("/home");
      } catch (error) {
        console.error("Error fetching user information", error);
      }
    },
    onError: (error) => {
      console.error("Login Failed:", error);
    },
  });

  return (
    <div className="flex flex-col items-center justify-center gap-[1.2rem] w-[20rem] p-8 rounded-[15px] shadow-lg bg-[#929292] bg-opacity-70 text-center mx-auto border-[3px] border-white">
      <h1 className="text-[2.1rem] font-bold text-white mb-4 opacity-100">
        LOGIN
      </h1>
      <button
        onClick={() => {
          console.log("Google login button clicked");
          login();
        }}
        className="font-sans flex flex-row items-center justify-evenly gap-2 border border-white-400 rounded-md cursor-pointer transition duration-300 ease-in-out w-[95%] h-[2.8rem] hover:bg-[#121212] hover:bg-opacity-50"
      >
        <img src={gicon} alt="gicon" className="w-[20px] h-[20px]" />
        <div className="h-3/5 border-r-2 border-white"></div>
        <p className="text-white text-sm opacity-100">SIGN IN WITH GOOGLE</p>
      </button>
      <p className="relative text-[1rem] my-4 before:absolute before:top-1/2 before:left-[-50px] before:w-10 before:h-px before:bg-[#bbb9b9] after:absolute after:top-1/2 after:right-[-50px] after:w-10 after:h-px after:bg-[#bbb9b9] text-white opacity-100 font-bold">
        OR
      </p>
      <button
        onClick={guestClick}
        className="font-sans px-6 py-3 border border-white-400 text-sm rounded-md cursor-pointer transition duration-300 ease-in-out w-[95%] hover:bg-[#121212] hover:bg-opacity-50 text-white mb-4 opacity-100"
      >
        CONTINUE AS A GUEST
      </button>
    </div>
  );
};

export default Login;
