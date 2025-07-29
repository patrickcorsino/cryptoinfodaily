
import { useEffect, useState } from 'react';

export default function TrendingCoins() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    async function fetchTrending() {
      const res = await fetch('https://api.coingecko.com/api/v3/search/trending');
      const data = await res.json();
      setCoins(data.coins);
    }
    fetchTrending();
  }, []);

  return (
    <div className="bg-purple-900 p-4 rounded-xl shadow-lg">
      <h3 className="text-xl font-bold mb-2">🔥 Trending Coins</h3>
      <ul className="space-y-2">
        {coins.map((coin, idx) => (
          <li key={idx} className="flex items-center gap-2 hover:underline">
            <img src={coin.item.small} alt={coin.item.name} className="w-5 h-5" />
            <span>{coin.item.name}</span>
            <span className="text-sm text-gray-300">({coin.item.symbol.toUpperCase()})</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
