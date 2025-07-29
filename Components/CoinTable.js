import React from 'react';

export default function CoinTable() {
  const dummyCoins = [
    { name: 'Bitcoin', symbol: 'BTC', price: '29,000', change: '+2.5%' },
    { name: 'Ethereum', symbol: 'ETH', price: '1,800', change: '-1.1%' },
  ];

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="pb-3">Name</th>
            <th className="pb-3">Symbol</th>
            <th className="pb-3">Price</th>
            <th className="pb-3">Change</th>
          </tr>
        </thead>
        <tbody>
          {dummyCoins.map((coin, index) => (
            <tr key={index} className="hover:bg-gray-700 transition">
              <td className="py-2">{coin.name}</td>
              <td className="py-2">{coin.symbol}</td>
              <td className="py-2">${coin.price}</td>
              <td className="py-2">{coin.change}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

