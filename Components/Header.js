import { useState } from 'react';
import SearchModal from './SearchModal';

export default function Header() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-purple-800 to-indigo-900 text-white p-4 shadow-lg flex justify-between items-center rounded-b-xl">
      <h1 className="text-2xl font-bold tracking-wide hover:scale-105 transition-transform cursor-pointer">
        CryptoInfoDaily 🚀
      </h1>
      <div className="flex gap-4 items-center">
        <button
          onClick={() => setSearchOpen(true)}
          className="bg-pink-600 hover:bg-pink-800 transition px-3 py-1 rounded-lg text-sm shadow"
        >
          🔍 Search
        </button>
        <button className="bg-green-700 hover:bg-green-900 px-3 py-1 rounded-lg shadow text-sm">
          🧪 Degen Mode
        </button>
      </div>
      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  );
}
