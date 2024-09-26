import React, { useState } from "react";
import Navbar from "../components/Navbar"; // Assuming Navbar component exists
import Footer from "../components/Login_footer"; // Assuming Footer component exists

const CreateChapter = () => {
  // State for chapter fields
  const [versionId, setVersionId] = useState("");
  const [previousChapterId, setPreviousChapterId] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const raw = JSON.stringify({
      versionId,
      previousChapterId,
      title,
      content,
      author,
      timestamp: new Date().toISOString(), // Set the current timestamp
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
        "http://localhost:8000/stories/create-chapter",
        requestOptions
      );
      const result = await response.json();
      console.log(result);
      // Handle success (e.g., redirect or show success message)
    } catch (error) {
      console.error("Error creating chapter:", error);
      // Handle error
    }
  };

  return (
    <div className="bg-[#121212] text-white min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-grow flex justify-center items-center px-4 my-8">
        <div className="bg-[#1E1E1E] p-8 rounded-lg shadow-lg w-full max-w-3xl">
          <h2 className="text-2xl font-bold mb-6">Create a New Chapter</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="versionId" className="block text-sm font-medium">
                Version ID:
              </label>
              <input
                type="text"
                id="versionId"
                value={versionId}
                onChange={(e) => setVersionId(e.target.value)}
                required
                className="border p-2 w-full rounded bg-[#2C2C2C] text-white"
              />
            </div>
            <div>
              <label
                htmlFor="previousChapterId"
                className="block text-sm font-medium"
              >
                Previous Chapter ID:
              </label>
              <input
                type="text"
                id="previousChapterId"
                value={previousChapterId}
                onChange={(e) => setPreviousChapterId(e.target.value)}
                required
                className="border p-2 w-full rounded bg-[#2C2C2C] text-white"
              />
            </div>
            <div>
              <label htmlFor="title" className="block text-sm font-medium">
                Chapter Title:
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
              <label htmlFor="content" className="block text-sm font-medium">
                Chapter Content:
              </label>
              <textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
                className="border p-2 w-full rounded bg-[#2C2C2C] text-white"
              />
            </div>
            <div>
              <label htmlFor="author" className="block text-sm font-medium">
                Chapter Author:
              </label>
              <input
                type="text"
                id="author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                required
                className="border p-2 w-full rounded bg-[#2C2C2C] text-white"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded w-full mt-4"
            >
              Create Chapter
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CreateChapter;
