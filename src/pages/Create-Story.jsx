import React, { useState } from "react";
import Navbar from "../components/Navbar"; // Assuming Navbar component exists
import Footer from "../components/Login_footer"; // Assuming Footer component exists

const CreateStory = () => {
  // State for story fields
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [overallAuthor, setOverallAuthor] = useState("");
  const [description, setDescription] = useState("");

  // State for first chapter fields
  const [chapterTitle, setChapterTitle] = useState("");
  const [chapterContent, setChapterContent] = useState("");
  const [chapterAuthor, setChapterAuthor] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const raw = JSON.stringify({
      title,
      genre,
      overallAuthor,
      description,
      chapterTitle,
      chapterContent,
      chapterAuthor,
    });

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: raw,
    };

    try {
      const response = await fetch(
        "http://localhost:8000/stories/create",
        requestOptions
      );
      const result = await response.json();
      console.log(result);
      // Handle success (e.g., redirect or show success message)
    } catch (error) {
      console.error("Error creating story:", error);
      // Handle error
    }
  };

  return (
    <div className="bg-[#121212] text-white min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-grow flex justify-center items-center px-4 my-8">
        <div className="bg-[#1E1E1E] p-8 rounded-lg shadow-lg w-full max-w-3xl">
          <h2 className="text-2xl font-bold mb-6">Create a New Story</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Story fields */}
            <div>
              <label htmlFor="title" className="block text-sm font-medium">
                Story Title:
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="border p-2 w-full rounded bg-[#2C2C2C] text-white"
              />
            </div>
            <div>
              <label htmlFor="genre" className="block text-sm font-medium">
                Genre:
              </label>
              <input
                type="text"
                id="genre"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
                required
                className="border p-2 w-full rounded bg-[#2C2C2C] text-white"
              />
            </div>
            <div>
              <label
                htmlFor="overallAuthor"
                className="block text-sm font-medium"
              >
                Overall Author:
              </label>
              <input
                type="text"
                id="overallAuthor"
                value={overallAuthor}
                onChange={(e) => setOverallAuthor(e.target.value)}
                required
                className="border p-2 w-full rounded bg-[#2C2C2C] text-white"
              />
            </div>
            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium"
              >
                Description:
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                className="border p-2 w-full rounded bg-[#2C2C2C] text-white"
              />
            </div>

            {/* First Chapter fields */}
            <h3 className="text-xl font-semibold mt-6">First Chapter</h3>
            <div>
              <label
                htmlFor="chapterTitle"
                className="block text-sm font-medium"
              >
                Chapter Title:
              </label>
              <input
                type="text"
                id="chapterTitle"
                value={chapterTitle}
                onChange={(e) => setChapterTitle(e.target.value)}
                required
                className="border p-2 w-full rounded bg-[#2C2C2C] text-white"
              />
            </div>
            <div>
              <label
                htmlFor="chapterContent"
                className="block text-sm font-medium"
              >
                Chapter Content:
              </label>
              <textarea
                id="chapterContent"
                value={chapterContent}
                onChange={(e) => setChapterContent(e.target.value)}
                required
                className="border p-2 w-full rounded bg-[#2C2C2C] text-white"
              />
            </div>
            <div>
              <label
                htmlFor="chapterAuthor"
                className="block text-sm font-medium"
              >
                Chapter Author:
              </label>
              <input
                type="text"
                id="chapterAuthor"
                value={chapterAuthor}
                onChange={(e) => setChapterAuthor(e.target.value)}
                required
                className="border p-2 w-full rounded bg-[#2C2C2C] text-white"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded w-full mt-4"
            >
              Create Story
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CreateStory;
