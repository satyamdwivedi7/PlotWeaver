import { BiUpvote, BiDownvote } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { FaPenNib } from "react-icons/fa6";


export default function Post({ title, content, author, genre }) {
  return (
    <div className="m-16 pb-8  text-white border-b-2">
      <h1 className="mx-4 text-2xl">{title}</h1>
      <p className="mx-4 text-sm">20/09/2024</p>
      <div className="flex justify-between mx-4 text-xl">
        <div className="">
          <p>Genre: {genre}</p>
        </div>
        <div className="flex gap-2">
          <FaPenNib />
          <p>{author}</p>
        </div>
      </div>
      <div className="border rounded-xl font-[100] p-8 font-mono bg-[#D9D9D9] bg-opacity-10">
        <p>
          {content}
        </p>
        <div className="flex justify-between">
          <div className="flex mt-4 gap-4">
            <div className="flex items-center justify-center text-center gap-2  w-24 h-8 p-1 border-2 rounded-full">
              <button>
                <BiUpvote className="text-xl"/>
              </button>
              <p className="flex h-full items-center font-mono">69</p>
              <button>
                <BiDownvote className="text-xl"/>
              </button>
            </div>
            <button className="flex gap-2 items-center justify-center border-2 rounded-full w-20 h-8">
              <FaRegComment className="text-lg"/>
              <p>49</p>
            </button>
          </div>
          <button className="text-3xl mt-4">
            <HiOutlineDotsVertical />
          </button>
        </div>
      </div>

    </div>
  );
}
