// components/CoinTable.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

const CoinTable = () => {
  const [coins, setCoins] = useState([]);

  const fetchCoins = async () => {
    try {
      const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
        params: {
          vs_currency: 'usd',
          order: 'market_cap_desc',
          per_page: 100,
          page: 1,
          sparkline: false,
        },
      });
      setCoins(response.data);
    } catch (error) {
      console.error('Error fetching coins:', error);
    }
  };

  useEffect(() => {
    fetchCoins();
    const interval = setInterval(() => {
      fetchCoins();
    }, 30000); // every 30 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="coin-table p-4 bg-white rounded-2xl shadow-lg mt-4 overflow-x-auto">
      <table className="min-w-full text-left">
        <thead className="bg-gray-100 text-gray-700 text-sm uppercase">
          <tr>
            <th className="p-3">#</th>
            <th className="p-3">Coin</th>
            <th className="p-3">Price</th>
            <th className="p-3">24h %</th>
            <th className="p-3">Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin, index) => (
            <tr key={coin.id} className="border-b hover:bg-gray-50 text-sm transition">
              <td className="p-3 font-semibold text-gray-600">{index + 1}</td>
              <td className="p-3 flex items-center gap-2">
                <img src={coin.image} alt={coin.name} className="w-5 h-5" />
                <Link href={`/coin/${coin.id}`} className="text-blue-600 hover:underline">
                  {coin.name}
                </Link>
              </td>
              <td className="p-3">${coin.current_price.toLocaleString()}</td>
              <td
                className={`p-3 font-medium ${
                  coin.price_change_percentage_24h >= 0 ? 'text-green-500' : 'text-red-500'
                }`}
              >
                {coin.price_change_percentage_24h?.toFixed(2)}%
              </td>
              <td className="p-3">${coin.market_cap.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoinTable;
