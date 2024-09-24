import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Version = ({ versions }) => {
  const [activeVersion, setActiveVersion] = useState(null);
  const navigate = useNavigate(); // Use the useNavigate hook

  const toggleDropdown = (index) => {
    setActiveVersion((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleChapterSelect = (chapterIndex, version) => {
    // Navigate to the chapter page using the story ID from the selected version
    navigate(
      `/story/${version.story}/version/${activeVersion}/chapter/${chapterIndex}`
    );
  };

  return (
    <div className="flex gap-8 flex-wrap justify-center">
      {versions.map((version, index) => (
        <div key={index}>
          {/* Version div */}
          <div
            onClick={() => toggleDropdown(index)}
            className="cursor-pointer flex flex-row justify-between pl-[1.7rem] pr-[0.6rem] rounded-lg border border-white-500 w-[30rem] h-16 bg-[#D9D9D9] bg-opacity-50 items-center pt-2"
          >
            <p className="text-[2rem] text-white">Version {index}</p>
            <p className="text-white">{activeVersion === index ? "▲" : "▼"}</p>
          </div>

          {/* Dropdown for chapters */}
          {activeVersion === index && (
            <div
              className="bg-[#121212] text-white mt-2 px-4 py-2 rounded-lg border border-white-500"
              style={{ width: "30rem" }} // Same width as Version div
            >
              <p>Select a Chapter:</p>
              <select
                className="mt-2 p-2 rounded bg-[#D9D9D9] text-black w-full"
                onChange={(e) => {
                  const chapterIndex = e.target.value;
                  if (chapterIndex) {
                    handleChapterSelect(chapterIndex, version); // Pass the whole version object
                  }
                }}
                defaultValue=""
              >
                {/* Default disabled option */}
                <option value="" disabled>
                  --Select a chapter--
                </option>
                {version.chapters.map((chapter, chapIndex) => (
                  <option key={chapIndex} value={chapIndex}>
                    Chapter {chapIndex + 1}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Version;


