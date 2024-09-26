import { BiUpvote, BiDownvote } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa";
import { FaPenNib } from "react-icons/fa6";

export default function Description({ title, content, author, genre, postId }) {
  return (
    <>
      <div className="m-16 pb-8 text-white border-b-2">
        <h1 className="mx-4 text-2xl">{title}</h1>
        <p className="mx-4 text-sm">20/09/2024</p>
        <div className="flex justify-between mx-4 text-xl">
          <div className="font-sans text-base ">
            <p>
              Genre:{" "}
              <span className="border text-base px-2 bg rounded-full bg-[#FFBD84] text-black">
                {genre}
              </span>
            </p>
          </div>
          <div className="flex gap-2">
            <FaPenNib />
            <p>{author}</p>
          </div>
        </div>
        <div className="font-[100] p-4 font-mono">
          <p>{content}</p>
          <div className="flex justify-between">
            <div className="flex mt-4 gap-4">
              <div className="flex items-center justify-center text-center gap-2 w-24 h-8 p-1 border-2 rounded-full">
                <button>
                  <BiUpvote className="text-xl" />
                </button>
                <p className="flex h-full items-center font-mono">69</p>
                <button>
                  <BiDownvote className="text-xl" />
                </button>
              </div>
              <button className="flex gap-2 items-center justify-center border-2 rounded-full w-20 h-8">
                <FaRegComment className="text-lg" />
                <p>49</p>
              </button>
            </div>
            <a href="/">
              <button className="w-[8rem] h-8 mt-4 bg-[#40C9A2] hover:bg-opacity-0 hover:border transition-all ease-in-out bg-opacity-50 rounded-xl text-base px-2">
                <p>Contribute</p>
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
