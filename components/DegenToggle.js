// components/DegenModeToggle.js
import React from "react";

const DegenModeToggle = ({ isDegen, toggleDegen }) => {
  return (
    <div className="flex items-center justify-end mb-4">
      <label className="flex items-center gap-2 cursor-pointer text-white">
        <span className="text-sm">🧠 Degen Mode</span>
        <div
          className={`w-10 h-5 flex items-center bg-gray-700 rounded-full p-1 transition ${
            isDegen ? "bg-green-500" : "bg-gray-500"
          }`}
          onClick={toggleDegen}
        >
          <div
            className={`bg-white w-4 h-4 rounded-full shadow-md transform transition ${
              isDegen ? "translate-x-5" : "translate-x-0"
            }`}
          ></div>
        </div>
      </label>
    </div>
  );
};

export default DegenModeToggle;
