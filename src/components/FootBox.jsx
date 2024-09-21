import { IoMdCheckmarkCircleOutline } from "react-icons/io";

export default function FootBox() {
  return (
    <div className="bg-[#121212] pb-16">
      <div className=" text-white bg-[#D9D9D9] bg-opacity-10 flex flex-col p-4 py-12 gap-8 items-center justify-center border rounded-lg mx-32">
        <IoMdCheckmarkCircleOutline className="text-5xl" />
        <h1 className="text-3xl">
          YOU'VE REACHED THE END OF YOUR CURATED FEED
        </h1>
        <div className="flex justify-between w-4/5">
          <a className="border-b" href="">
            REFRESH YOUR FEED
          </a>
          <a className="border-b" href="">
            EXPLORE NEW STORIES
          </a>
          <a className="border-b" href="">
            CREATE YOUR OWN STORY
          </a>
        </div>
      </div>
    </div>
  );
}
