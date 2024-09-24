import React from 'react'
import { FaUserCircle } from "react-icons/fa";
const Comments = () => {
  return (
    <div className='comments_container text-white flex flex-col gap-[2rem] font-sans mx-[10rem] py-16'>
        <p className='text-[2.5rem] font-bold '>Comments</p>
        <div className="comments_box1 flex flex-col gap-5">
            <div className="comment_done_box flex flex-row gap-[1.5rem]">
                <div className="left_box">
                    <FaUserCircle className='text-[2rem]' />
                </div>
                <div className="right_box flex flex-col gap-3">
                    <h2 className='font-bold text-xl' >Usersomeonewithopinion</h2>
                    <p className='text-[1.2rem]'>Book was great i loved it cant wait for next chapter</p>
                </div>
            </div>  
            <div className="reply_box ml-[7rem] flex flex-col gap-4">
                <div className="reply_box1 flex flex-row gap-[1.5rem]">
                    <div className="left_box">
                        <FaUserCircle className='text-[1.5rem] mt-1'/>
                    </div>
                    <div className="right_box flex flex-col gap-3">
                        <h2 className='font-bold text-xl flex' >Satyam</h2>
                        <p className='text-[1.1rem]'>I couldn't agree more</p>
                    </div>
                </div>
                <div className="reply_box2 flex flex-row gap-[1.5rem]">
                    <div className="left_box">
                        <FaUserCircle className='text-[1.5rem] mt-1' />
                    </div>
                    <div className="right_box flex flex-col gap-3">
                        <h2 className='font-bold text-xl' >Tanisha</h2>
                        <p className='text-[1.1rem]'>I couldn't agree more</p>
                    </div>
                </div>
                <div className="reply_box3 flex flex-row gap-[1.5rem]">
                    <div className="left_box">
                        <FaUserCircle className='text-[1.5rem] mt-1'/>
                    </div>
                    <div className="right_box flex flex-col gap-3">
                    <input type="text" placeholder="Add a reply...." className="placeholder-gray-200 text-white text-[1.05rem] border-[2px] border-white rounded-3xl h-10 w-[17rem] pl-4 flex items-center bg-[#8f8e8e]" />
                    </div>
                </div>
            </div>
        </div>
        <div className="comment_box2 flex flex-col gap-5">
            <div className="comment_done_box flex flex-row gap-[1.5rem]">
                <div className="left_box">
                    <FaUserCircle className='text-[2rem]'/>
                </div>
                <div className="right_box flex flex-col gap-3">
                    <h2 className='font-bold text-xl' >Usersomeonewithopinion</h2>
                    <p className='text-[1.2rem]'>Book was great i loved it cant wait for next chapter</p>
                </div>
            </div>
            <div className="reply_box3 flex flex-row gap-[1.5rem] ml-[7rem]">
                    <div className="left_box">
                        <FaUserCircle className='text-[1.5rem] mt-1'/>
                    </div>
                    <div className="right_box flex flex-col gap-3">
                    <input type="text" placeholder="Add a reply...." className="placeholder-gray-200 text-white text-[1.05rem] border-[2px] border-white rounded-3xl h-10 w-[17rem] pl-4 flex items-center bg-[#8f8e8e]" />
                    </div>
                </div>
        </div>
        <div className="comment_box3 flex flex-row gap-[1.5rem] mt-5">
            <div className="left_box">
                <FaUserCircle className='text-[2rem]'/>
            </div>
            <div className="right_box flex flex-col gap-3">
            <input type="text" placeholder="Add a comment...." className="placeholder-gray-200 text-white text-[1.05rem] border-[2px] border-white rounded-3xl h-10 w-[17rem] pl-4 flex items-center bg-[#8f8e8e]" />
            </div>
        </div>
    </div>
  )
}

export default Comments