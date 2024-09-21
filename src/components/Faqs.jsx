import React from 'react'

const Faqs = () => {
  return (
    <div className=' flex flex-col gap-[1.5rem] justify-center items-center text-white bg-black w-[100%] mx-auto text-center'>
        <h1 className='text-[3rem] font-bold'>FAQ's</h1>
        <p className='w-[25%]'>Find answers to frequently asked question about our platform</p>
        <div className="flex flex-col w-[100%] gap-[1rem]">
            <button className='flex border border-white w-[40%] rounded-xl mx-auto justify-between px-[1rem] h-[3rem] bg-[#b8d7ebac]  items-center'>
                <p className='font-bold text-[0.9rem]' >Question 1 goes here</p>
                <p className=' text-[2rem] font-thin'>+</p>
            </button>
            <button className='flex border border-white w-[40%] rounded-xl mx-auto justify-between px-[1rem] h-[3rem] bg-[#b8d7ebac] items-center'>
                <p className='font-bold text-[0.9rem]'>Question 2 goes here</p>
                <p className=' text-[2rem] font-thin'>+</p>
            </button>
            <button className='flex border border-white w-[40%] rounded-xl mx-auto justify-between px-[1rem] h-[3rem] bg-[#b8d7ebac] items-center'>
                <p className='font-bold text-[0.9rem]'>Question 3 goes here</p>
                <p className=' text-[2rem] font-thin'>+</p>
            </button>
            <button className='flex border border-white w-[40%] rounded-xl mx-auto justify-between px-[1rem] h-[3rem] bg-[#b8d7ebac] items-center'>
                <p className='font-bold text-[0.9rem]'>Question 4 goes here</p>
                <p className=' text-[2rem] font-thin'>+</p>
            </button>
        </div>
        <div className="bottom_text">
            <p>Mail us your queries at plotweavers@devjams.com</p>
            <p>or</p>
            <p>Head over to <span><a href="" className='text-blue-600'>Contct Us</a></span></p>
        </div> 
    </div>
  )
}

export default Faqs
