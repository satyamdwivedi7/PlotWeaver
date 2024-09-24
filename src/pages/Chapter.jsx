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
          <div className="p-6" style={{ height: "500px", overflowY: "hidden" }}>
            <h1 className="text-3xl font-bold mb-4">{currentChapter.title}</h1>
            <div
              className="overflow-y-auto h-full"
              style={{
                maxHeight: "calc(500px - 2rem)", // Adjust for padding
                paddingRight: "0.5rem", // To avoid content overlap
                scrollbarWidth: "none", // For Firefox
                msOverflowStyle: "none", // For Internet Explorer and Edge
              }}
            >
              <p className="text-lg">{currentChapter.content}</p>
              <p className="text-sm mt-4 text-gray-400">
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
      <Login_footer />
    </div>
  );
}
