// components/DegenToggle.js
import { useDegen } from '@/context/DegenContext';

export default function DegenToggle() {
  const { isDegenMode, toggleDegenMode } = useDegen();

  return (
    <button
      onClick={toggleDegenMode}
      className={`px-4 py-2 rounded-xl mt-4 text-sm font-bold transition-all duration-300 shadow-md ${
        isDegenMode ? 'bg-green-600 text-black' : 'bg-gray-800 text-white'
      }`}
    >
      {isDegenMode ? 'Exit Degen Mode' : 'Enter Degen Mode'}
    </button>
  );
}
