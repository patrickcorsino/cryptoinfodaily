
import { useState, useEffect } from 'react';

export default function SearchModal({ open, onClose }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (!query) return setResults([]);
    const timer = setTimeout(async () => {
      const res = await fetch(`https://api.coingecko.com/api/v3/search?query=${query}`);
      const data = await res.json();
      setResults(data.coins || []);
    }, 300);
    return () => clearTimeout(timer);
  }, [query]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4">
      <div className="bg-gray-800 rounded-xl p-6 w-full max-w-lg">
        <button onClick={onClose} className="text-white text-sm float-right">❌ Close</button>
        <h2 className="text-xl font-bold mb-2 text-white">🔍 Search Coins</h2>
        <input
          type="text"
          className="w-full p-2 rounded bg-gray-700 text-white"
          placeholder="Search coin name or symbol..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <ul className="mt-4 space-y-2 max-h-60 overflow-y-auto">
          {results.map(coin => (
            <li key={coin.id} className="text-white hover:underline">
              <a href={`/coin/${coin.id}`}>
                <div className="flex items-center gap-2">
                  <img src={coin.thumb} alt={coin.name} className="w-5 h-5" />
                  <span>{coin.name}</span>
                  <span className="text-gray-400 text-sm">({coin.symbol})</span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
