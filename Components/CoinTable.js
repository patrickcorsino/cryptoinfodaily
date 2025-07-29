import { useEffect, useState } from 'react';

export default function CoinTable() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    async function fetchCoins() {
      const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true');
      const data = await res.json();
      setCoins(data);
    }
    fetchCoins();
  }, []);

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">Top 100 Cryptos</h2>
      <div className="overflow-x-auto">
        <table className="w-full table-auto text-left bg-gray-800 rounded-lg shadow-md">
          <thead className="bg-gray-700">
            <tr>
              <th className="px-4 py-2">#</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Market Cap</th>
              <th className="px-4 py-2">24h %</th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin, index) => (
              <tr key={coin.id} className="hover:bg-gray-600 transition-all">
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2 flex items-center gap-2">
                  <img src={coin.image} alt={coin.name} className="w-6 h-6" />
                  {coin.name}
                </td>
                <td className="px-4 py-2">${coin.current_price.toLocaleString()}</td>
                <td className="px-4 py-2">${coin.market_cap.toLocaleString()}</td>
                <td className={`px-4 py-2 ${coin.price_change_percentage_24h >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
