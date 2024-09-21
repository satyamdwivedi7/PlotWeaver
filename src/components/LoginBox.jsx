import React from 'react'
import gicon from '../assets/gicon.png'
import { useNavigate } from "react-router-dom";

const login = () => {
  const navigate = useNavigate();
  const guestClick = () => {
    navigate('/home')
  }
  return (
    <div className='flex flex-col items-center justify-center gap-[1.2rem] w-[20rem] p-8 rounded-[15px] shadow-lg bg-[#929292] bg-opacity-70 text-center mx-auto border-[3px] border-white'>
        <h1 className='text-[2.1rem] font-bold text-white mb-4 opacity-100'>LOGIN</h1>
        <button className='flex flex-row items-center justify-evenly gap-2 border border-white-400 rounded-md cursor-pointer transition duration-300 ease-in-out w-[95%] h-[2.8rem] hover:bg-[#e9ecef]'>
            <img src={gicon} alt="gicon" className='w-[20px] h-[20px]'/>
            <div className='h-3/5 border-r-2 border-white'></div>
            <p className='text-[0.7rem] text-white text-base opacity-100'>SIGN IN WITH GOOGLE</p>
        </button>
        <p className='relative text-[1rem] my-4 before:absolute before:top-1/2 before:left-[-50px] before:w-10 before:h-px before:bg-[#bbb9b9] after:absolute after:top-1/2 after:right-[-50px] after:w-10 after:h-px after:bg-[#bbb9b9] text-white opacity-100 font-bold'>OR</p>
        <button onClick={guestClick} className='px-6 py-3 border border-white-400 text-[0.7rem] text-base rounded-md cursor-pointer transition duration-300 ease-in-out w-[95%] hover:bg-[#e9ecef] text-white mb-4 opacity-100'>CONTINUE AS A GUEST</button>
    </div>
  )
}

export default login
