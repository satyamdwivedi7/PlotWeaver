import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Login_footer from "../components/Login_footer";

export default function Chapter({ versions }) {
  const { versionIndex, chapterIndex } = useParams();
  const version = versions[versionIndex]; // Get the current version

  // Default to chapter 0 if no index is passed
  const [currentChapterIndex, setCurrentChapterIndex] = useState(
    parseInt(chapterIndex, 10) || 0
  );

  if (!version) return <p>Version not found.</p>;

  const currentChapter = version.chapters[currentChapterIndex];
  if (!currentChapter) return <p>Chapter not found.</p>;

  const handleNextChapter = () => {
    if (currentChapterIndex < version.chapters.length - 1) {
      setCurrentChapterIndex((prev) => prev + 1);
    }
  };

  const handlePreviousChapter = () => {
    if (currentChapterIndex > 0) {
      setCurrentChapterIndex((prev) => prev - 1);
    }
  };

  if (localStorage.getItem("name") === null) {
    window.location.href = "/";
  } else {
    return (
      <div className="bg-[#121212] text-white min-h-screen">
        <Navbar />
        <div className="flex justify-between items-center px-8 py-4">
          <button
            onClick={handlePreviousChapter}
            disabled={currentChapterIndex === 0}
            className={`p-4 text-2xl rounded ${
              currentChapterIndex === 0 ? "opacity-50" : "hover:bg-gray-700"
            }`}
          >
            ← Previous
          </button>

          <div className="relative max-w-4xl mx-auto bg-gray-800 rounded-lg overflow-hidden">
            {/* Fixed chapter content area */}
            <div
              className="p-6 flex flex-col"
              style={{ height: "500px", width: "600px" }} // Fixed height and width
            >
              <h1 className="text-3xl font-bold mb-4">
                {currentChapter.title}
              </h1>
              {/* Content area should scroll if it's too long */}
              <div
                className="overflow-y-auto flex-1 "
                style={{
                  maxHeight: "calc(100% - 3rem)", // Adjust height based on title and padding
                  paddingRight: "0.5rem", // To avoid content overlap with scrollbar
                  scrollbarWidth: "thin", // For Firefox
                  msOverflowStyle: "none", // For Internet Explorer and Edge
                }}
              >
                <p className="text-lg">{currentChapter.content}</p>
              </div>
              {/* Footer with author and date */}
              <div className="mt-4 text-sm text-gray-400">
                <p>
                  Author: {currentChapter.author} | Published on:{" "}
                  {new Date(currentChapter.timestamp).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={handleNextChapter}
            disabled={currentChapterIndex === version.chapters.length - 1}
            className={`p-4 text-2xl rounded ${
              currentChapterIndex === version.chapters.length - 1
                ? "opacity-50"
                : "hover:bg-gray-700"
            }`}
          >
            Next →
          </button>
        </div>
        <div className="w-[600px] mx-auto flex justify-end my-8">

        <button className="w-[8rem] h-8 font-sans bg-[#40C9A2] hover:bg-opacity-0 hover:border transition-all ease-in-out bg-opacity-50 rounded-xl text-base">
          <p>Contribute</p>
        </button>
        </div>
        <Login_footer />
      </div>
    );
  }
}
