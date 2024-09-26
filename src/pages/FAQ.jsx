import React from "react";
import Login_footer from "../components/Login_footer";
import Navbar from "../components/Navbar";

const Faqs = () => {
  if (localStorage.getItem("name") === null) {
    window.location.href = "/";
  } else {
    return (
      <>
        <div className="font-sans px-16 bg-[#121212]">
          <Navbar />
          <div className=" flex flex-col gap-[1.5rem] justify-center items-center text-white w-[100%] py-8 mx-auto text-center">
            <h1 className="text-[3rem] font-bold">FAQ's</h1>
            <p className="w-[30%] text-xl">
              Find answers to frequently asked question about our platform
            </p>
            <div className="flex flex-col w-[100%] gap-8">
              <button className="flex border border-white w-[40%] rounded-xl mx-auto justify-between px-[1rem] h-[4rem] bg-[#b8d7ebac]  items-center">
                <p className="font-bold text-lg">Question 1 goes here</p>
                <p className=" text-4xl pb-2">+</p>
              </button>
              <button className="flex border border-white w-[40%] rounded-xl mx-auto justify-between px-[1rem] h-[4rem] bg-[#b8d7ebac] items-center">
                <p className="font-bold text-lg">Question 2 goes here</p>
                <p className="text-4xl pb-2">+</p>
              </button>
              <button className="flex border border-white w-[40%] rounded-xl mx-auto justify-between px-[1rem] h-[4rem] bg-[#b8d7ebac] items-center">
                <p className="font-bold text-lg">Question 3 goes here</p>
                <p className="text-4xl pb-2">+</p>
              </button>
              <button className="flex border border-white w-[40%] rounded-xl mx-auto justify-between px-[1rem] h-[4rem] bg-[#b8d7ebac] items-center">
                <p className="font-bold text-lg">Question 4 goes here</p>
                <p className="text-4xl pb-2">+</p>
              </button>
            </div>
            <div className="my-8">
              <p>Mail us your queries at plotweavers@devjams.com</p>
              <p>or</p>
              <p>
                Head over to{" "}
                <span>
                  <a href="" className="text-blue-600">
                    Contct Us
                  </a>
                </span>
              </p>
            </div>
          </div>
        </div>
        <Login_footer />
      </>
    );
  }
};

export default Faqs;
