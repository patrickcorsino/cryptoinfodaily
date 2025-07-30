import React, { useContext } from 'react';
import { ThemeContext } from '@/context/ThemeContext';

const DegenToggle = () => {
  const { isDegenMode, toggleDegenMode } = useContext(ThemeContext);

  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={toggleDegenMode}
        className={`px-4 py-2 rounded-full font-bold border-2 shadow-xl transition-all duration-300 ${
          isDegenMode
            ? 'bg-black border-green-500 text-green-400'
            : 'bg-white border-gray-300 text-gray-800'
        }`}
      >
        {isDegenMode ? 'Exit Degen Mode' : 'Enter Degen Mode'}
      </button>
    </div>
  );
};

export default DegenToggle;
