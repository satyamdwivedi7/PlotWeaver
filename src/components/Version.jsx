import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Version = ({ versions }) => {
  const [activeVersion, setActiveVersion] = useState(null);
  const navigate = useNavigate();

  const toggleDropdown = (index) => {
    setActiveVersion((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleChapterSelect = (chapterIndex, version) => {
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
              style={{ width: "30rem" }}
            >
              <p className="text-[1.2rem] mb-4">Select a Chapter:</p>
              <div className="flex flex-wrap gap-4">
                {version.chapters.map((chapter, chapIndex) => (
                  <div
                    key={chapIndex}
                    onClick={() => handleChapterSelect(chapIndex, version)}
                    className="cursor-pointer text-center text-[1.5rem] text-white bg-[#D9D9D9] bg-opacity-50 w-[8rem] h-[4rem] flex items-center justify-center rounded-lg border border-white-500"
                  >
                    Chapter {chapIndex + 1}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Version;
