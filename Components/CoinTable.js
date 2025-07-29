import { useEffect, useState } from 'react';

export default function CoinTable() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd');
      const data = await res.json();
      setCoins(data.slice(0, 50));
    }
    fetchData();
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-700 rounded-lg">
        <thead>
          <tr className="bg-gray-800 text-left">
            <th className="py-3 px-4">#</th>
            <th className="py-3 px-4">Coin</th>
            <th className="py-3 px-4">Price</th>
            <th className="py-3 px-4">24h %</th>
            <th className="py-3 px-4">Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin, index) => (
            <tr key={coin.id} className="hover:bg-gray-700 transition-colors">
              <td className="py-3 px-4">{index + 1}</td>
              <td className="py-3 px-4 flex items-center gap-2">
                <img src={coin.image} alt={coin.name} className="w-6 h-6" />
                {coin.name}
              </td>
              <td className="py-3 px-4">${coin.current_price.toLocaleString()}</td>
              <td className={`py-3 px-4 ${coin.price_change_percentage_24h >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                {coin.price_change_percentage_24h.toFixed(2)}%
              </td>
              <td className="py-3 px-4">${coin.market_cap.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

