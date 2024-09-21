import React from "react";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";

const Login_footer = () => {
  return (
    <div className="flex flex-col bg-black justify-center items-center gap-[1.5rem] p-[2rem] w-[100%] mx-auto">
      <div className="flex flex-col gap-[3.3rem] border-b border-white pb-[2rem] w-[90%]">
        <div className="flex justify-center gap-[3.9rem]">
          <div className="bg-white rounded-full flex items-center justify-center size-12">
            <FaFacebook className="text-black size-[2rem]" />
          </div>
          <div className="bg-white rounded-full flex items-center justify-center size-12">
            <RiInstagramFill className="text-black size-[2rem]" />
          </div>
          <div className="bg-white rounded-full flex items-center justify-center size-12">
            <FaXTwitter className="text-black size-[2rem]" />
          </div>
          <div className="bg-white rounded-full flex items-center justify-center size-12">
            <BiLogoGmail className="text-black size-[2rem]" />
          </div>
          <div className="bg-white rounded-full flex items-center justify-center size-12">
            <FaLinkedin className="text-black size-[2rem]" />
          </div>
        </div>
        <div className="flex justify-center text-white gap-[3rem]">
          <p>
            <a href="/home">HOME</a>
          </p>
          <p>
            <a href="/home">EXPLORE</a>
          </p>
          <p>
            <a href="/faq">FAQs</a>
          </p>
          <p>
            <a href="/contacts">CONTACT US</a>
          </p>
          <p>
            <a href="/">OUR TEAM</a>
          </p>
        </div>
      </div>
      <p className="text-white">&#169; 2024 Plot Weavers from MetaMinds</p>
    </div>
  );
};

export default Login_footer;
