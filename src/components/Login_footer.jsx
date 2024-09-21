import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";


const Login_footer = () => {
  return (
    <div className='flex flex-col bg-black justify-center items-center gap-[1.5rem] p-[2rem] w-[100%] mx-auto'> 
        <div className="flex flex-col gap-[3.3rem] border-b border-white pb-[2rem] w-[90%]">
            <div className="flex justify-center gap-[3.9rem]">
                <FaFacebook className='text-white size-[3rem]'/>
                <FaInstagramSquare className='text-white size-[3rem]'/>
                <FaSquareXTwitter  className='text-white size-[3rem]'/>
                <SiGmail className='text-white size-[3rem]'/>
                <FaLinkedin className='text-white size-[3rem]'/>

                
            </div>
            <div className='flex justify-center text-white gap-[3rem]'>
                <p><a href="">HOME</a></p>
                <p><a href="">EXPLORE</a></p>
                <p><a href="">FAQs</a></p>
                <p><a href="">CONTACT US</a></p>
                <p><a href="">OUR TEAM</a></p>
            </div>
        </div>
        <p className='text-white'>&#169; 2024 Plot Weavers from MetaMinds</p>
      
    </div>
    
  )
}

export default Login_footer
