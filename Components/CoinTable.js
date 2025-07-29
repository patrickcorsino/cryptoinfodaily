import React from 'react';

const mockData = Array.from({ length: 100 }, (_, i) => ({
  rank: i + 1,
  name: `Coin ${i + 1}`,
  symbol: `C${i + 1}`,
  price: `$${(Math.random() * 1000).toFixed(2)}`,
  change: `${(Math.random() * 20 - 10).toFixed(2)}%`,
  marketCap: `$${(Math.random() * 1_000_000_000).toLocaleString()}`,
  volume: `$${(Math.random() * 500_000_000).toLocaleString()}`
}));

export default function CoinTable() {
  return (
    <div className="overflow-x-auto bg-black bg-opacity-40 rounded-lg shadow-lg">
      <table className="min-w-full table-auto">
        <thead className="bg-purple-800 text-white text-sm">
          <tr>
            <th className="px-4 py-2">#</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">24h %</th>
            <th className="px-4 py-2">Market Cap</th>
            <th className="px-4 py-2">Volume</th>
          </tr>
        </thead>
        <tbody>
          {mockData.map(coin => (
            <tr key={coin.rank} className="hover:bg-indigo-700 transition duration-200">
              <td className="border px-4 py-2">{coin.rank}</td>
              <td className="border px-4 py-2">{coin.name}</td>
              <td className="border px-4 py-2">{coin.price}</td>
              <td className="border px-4 py-2">{coin.change}</td>
              <td className="border px-4 py-2">{coin.marketCap}</td>
              <td className="border px-4 py-2">{coin.volume}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
