// components/DegenTable.js
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function DegenTable() {
  const [tokens, setTokens] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchDegenData = async () => {
    try {
      const res = await axios.get('https://api.dexscreener.com/latest/dex/pairs');
      const data = res.data.pairs.slice(0, 25); // Limit to top 25 trending
      setTokens(data);
    } catch (err) {
      console.error('Failed to fetch degen tokens:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDegenData();
    const interval = setInterval(fetchDegenData, 30000);
    return () => clearInterval(interval);
  }, []);

  if (loading) return <p className="text-center">Loading Degen coins...</p>;

  return (
    <div className="overflow-x-auto mt-6">
      <table className="w-full text-left border border-gray-700 rounded-xl bg-black text-green-400 shadow-lg">
        <thead>
          <tr className="bg-gray-900">
            <th className="px-4 py-2">Pair</th>
            <th className="px-4 py-2">DEX</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">Volume 24h</th>
            <th className="px-4 py-2">FDV</th>
          </tr>
        </thead>
        <tbody>
          {tokens.map((coin, i) => (
            <tr key={i} className="hover:bg-gray-800 transition-all">
              <td className="px-4 py-2 font-bold">{coin.baseToken.symbol}/{coin.quoteToken.symbol}</td>
              <td className="px-4 py-2">{coin.dexId}</td>
              <td className="px-4 py-2">${parseFloat(coin.priceUsd).toFixed(6)}</td>
              <td className="px-4 py-2">${Number(coin.volume.h24).toLocaleString()}</td>
              <td className="px-4 py-2">${Number(coin.fdv || 0).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
