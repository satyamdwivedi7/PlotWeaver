import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [name, setName] = useState("");
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate(); // Initialize the navigate function

  function toggleMenu() {
    setToggle(!toggle);
  }

  // Determine class based on the toggle state
  let toggleClass = toggle ? "flex" : "hidden";

  // Fetch the user's name from localStorage on component mount
  useEffect(() => {
    setName(localStorage.getItem("name"));
  }, []);

  // Logout function to clear storage and redirect
  function Logout() {
    localStorage.clear();
    navigate("/"); // Navigate to home after logout
  }

  // Simulate login function for demonstration
  function Login() {
    navigate("/");
  }

  return (
    <>
      <nav
        className="flex justify-between items-center px-16 py-4 h-20 bg-[#121212] text-white relative shadow-sm"
        role="navigation"
      >
        <a href="/" className="">
          <img className="w-16" src="/logo-dark.png" alt="Logo" />
        </a>
        <div className="flex items-center justify-center text-xl">
          <div className="pr-8 md:block flex flex-col items-center">
            <a href="/home" className="p-4">
              Explore
            </a>{" "}
            &#x2022;{" "}
            <a href="/faq" className="p-4">
              FAQs
            </a>
            &#x2022;{" "}
            <a href="/" className="p-4">
              Contact Us
            </a>
            &#x2022;{" "}
            <a href="/" className="p-4">
              Our Team
            </a>
          </div>
          <h1 className="mx-4">{name}</h1>

          {/* Profile dropdown */}
          <button className="relative" onClick={toggleMenu}>
            <img src="/profile.png" alt="profile" className="w-12" />
            {/* Toggle dropdown menu */}
            <div
              className={`font-sans border rounded-lg p-2 gap-3 flex-col bg-black text-lg py-4 top-[3.5rem] right-0 text-white w-[10rem] absolute ${toggleClass}`}
            >
              {localStorage.getItem("token") ? (
                <>
                  <button className="">Write a story</button>
                  <hr className="w-4/5 mx-auto" />
                  <button className="">View Profile</button>
                  <hr className="w-4/5 mx-auto" />
                  <button onClick={Logout} className="">
                    Logout
                  </button>
                </>
              ) : (
                <button onClick={Login} className="">
                  Sign In
                </button>
              )}
            </div>
          </button>
        </div>
      </nav>
      <div className="mx-auto w-[90%] border"></div>
    </>
  );
}
