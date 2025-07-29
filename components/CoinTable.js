import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const CoinTable = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const res = await fetch(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
        );
        const data = await res.json();
        setCoins(data);
      } catch (error) {
        console.error('Error fetching coin data:', error);
      }
    };

    fetchCoins();

    const interval = setInterval(() => {
      fetchCoins();
    }, 30000); // refresh every 30 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-x-auto mt-8">
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-900 text-white">
            <th className="px-4 py-2 text-left text-sm">Name</th>
            <th className="px-4 py-2 text-left text-sm">Symbol</th>
            <th className="px-4 py-2 text-left text-sm">Price</th>
            <th className="px-4 py-2 text-left text-sm">Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin) => (
            <tr key={coin.id} className="hover:bg-gray-800 transition-all">
              <td className="px-4 py-2 text-sm font-medium">
                <Link href={`/coin/${coin.id}`}>
                  <div className="flex items-center gap-2 cursor-pointer hover:underline">
                    <img src={coin.image} alt={coin.name} className="w-6 h-6" />
                    {coin.name}
                  </div>
                </Link>
              </td>
              <td className="px-4 py-2 text-sm text-gray-400">{coin.symbol.toUpperCase()}</td>
              <td className="px-4 py-2 text-sm text-green-400">
                ${coin.current_price.toLocaleString()}
              </td>
              <td className="px-4 py-2 text-sm text-gray-300">
                ${coin.market_cap.toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoinTable;
