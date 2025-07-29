// components/Navbar.js
import { useState, useEffect } from 'react';
import SearchModal from './SearchModal';

export default function Navbar({ coins }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <nav className="w-full bg-gradient-to-r from-purple-800 to-indigo-900 text-white py-4 px-6 flex justify-between items-center shadow-md">
      <div className="text-2xl font-bold tracking-wide">CryptoInfoDaily</div>
      <div className="flex gap-4 items-center">
        <button
          onClick={() => setIsSearchOpen(true)}
          className="hover:text-yellow-300 transition"
          title="Search"
        >
          🔍
        </button>
      </div>

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        coins={coins}
      />
    </nav>
  );
}
