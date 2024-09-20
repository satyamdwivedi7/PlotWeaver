import React from 'react'
import gicon from '../assets/gicon.png'

const login = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-[1.2rem] w-[20rem] p-8 rounded-[15px] shadow-lg bg-[rgba(237,235,235,0.925)] opacity-70 text-center mx-auto border border-[rgb(181,179,179)]'>
        <h1 className='text-[2.1rem] font-bold text-black mb-4 opacity-100'>LOGIN</h1>
        <button className='flex flex-row items-center justify-evenly gap-2 border border-gray-400 rounded-md cursor-pointer transition duration-300 ease-in-out w-[95%] h-[2.8rem] hover:bg-[#e9ecef]'>
            <img src={gicon} alt="gicon" className='w-[20px] h-[20px]'/>
            <p className="font-extrabold">|</p>
            <p className='text-[0.7rem] text-black font-bold opacity-100'>SIGN IN WITH GOOGLE</p>
        </button>
        <p className='relative text-[1rem] my-4 before:absolute before:top-1/2 before:left-[-50px] before:w-10 before:h-px before:bg-[#bbb9b9] after:absolute after:top-1/2 after:right-[-50px] after:w-10 after:h-px after:bg-[#bbb9b9] text-black opacity-100 font-bold'>OR</p>
        <button className='px-6 py-3 border border-gray-400 text-[0.7rem] font-bold rounded-md cursor-pointer transition duration-300 ease-in-out w-[95%] hover:bg-[#e9ecef] text-black mb-4 opacity-100'>CONTINUE AS A GUEST</button>
    </div>
  )
}

export default login
