// components/SearchModal.js
import { useState, useEffect } from 'react';

export default function SearchModal({ isOpen, onClose, coins }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    if (searchTerm === '') {
      setFiltered(coins.slice(0, 5)); // Trending coins
    } else {
      const results = coins.filter(coin =>
        coin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFiltered(results);
    }
  }, [searchTerm, coins]);

  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-80 flex items-center justify-center">
      <div className="bg-white text-black w-11/12 max-w-md rounded-2xl p-6 shadow-xl relative">
        <button onClick={onClose} className="absolute top-3 right-3 text-xl font-bold">&times;</button>
        <h2 className="text-lg font-bold mb-4">Search Coins</h2>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 rounded-lg border border-gray-300 mb-4"
        />
        <ul>
          {filtered.slice(0, 10).map((coin) => (
            <li key={coin.id}>
              <a
                href={`/coin/${coin.id}`}
                className="block py-1 hover:text-blue-500"
              >
                {coin.name} ({coin.symbol.toUpperCase()})
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
