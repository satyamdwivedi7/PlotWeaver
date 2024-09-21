import { BiUpvote, BiDownvote } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { FaPenNib } from "react-icons/fa6";
import { useState } from "react";
import { truncate } from "../components/truncate";

export default function Post({ title, content, author, genre, postId }) {
  const [count, setCount] = useState(0);
  const [upvoted, setUpvoted] = useState(false); 
  const [downvoted, setDownvoted] = useState(false);

  const handleUpvote = () => {
    if (upvoted) {
      setCount(count - 1);
      setUpvoted(false);
    } else {
      setCount(downvoted ? count + 2 : count + 1);
      setUpvoted(true);
      setDownvoted(false);
    }
  };

  const handleDownvote = () => {
    if (downvoted) {
      setCount(count + 1);
      setDownvoted(false);
    } else {
      setCount(upvoted ? count - 2 : count - 1);
      setDownvoted(true);
      setUpvoted(false); 
    }
  };

  return (
    <div className="m-16 pb-8 text-white border-b-2">
      <a href={`/story/${postId}`} className="block">
        <h1 className="mx-4 text-2xl">{title}</h1>
        <p className="mx-4 text-sm">20/09/2024</p>
        <div className="flex justify-between mx-4 text-xl">
          <div>
            <p>Genre: {genre}</p>
          </div>
          <div className="flex gap-2">
            <FaPenNib />
            <p>{author}</p>
          </div>
        </div>
      </a>

      <div className="border rounded-xl font-[100] p-8 font-mono bg-[#D9D9D9] bg-opacity-10">
        <a href={`/story/${postId}`} className="block">
          <p>{truncate(content, 50)}</p>
        </a>
        <div className="flex justify-between">
          <div className="flex mt-4 gap-4">
            <div className="flex items-center justify-center text-center gap-2 w-24 h-8 p-1 border-2 rounded-full">
              <button onClick={handleUpvote}>
                {upvoted ? (
                  <BiUpvote className="text-xl text-green-500" /> 
                ) : (
                  <BiUpvote className="text-xl" />
                )}
              </button>
              <p className="flex h-full items-center font-mono">{count}</p>
              <button onClick={handleDownvote}>
                {downvoted ? (
                  <BiDownvote className="text-xl text-red-500" /> 
                ) : (
                  <BiDownvote className="text-xl" />
                )}
              </button>
            </div>

            <a href={`/story/${postId}#comments`} className="block">
              {" "}
              <button className="flex gap-2 items-center justify-center border-2 rounded-full w-20 h-8">
                <FaRegComment className="text-lg" />
                <p>49</p>
              </button>
            </a>
          </div>

          <button className="text-3xl mt-4">
            <HiOutlineDotsVertical />
          </button>
        </div>
      </div>
    </div>
  );
}
