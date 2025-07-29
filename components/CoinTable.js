import React, { useEffect, useState } from "react";
import Link from "next/link";
import { LineChart, Line, ResponsiveContainer } from "recharts";

const CoinTable = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&sparkline=true&price_change_percentage=24h");
      const data = await res.json();
      setCoins(data);
    };

    fetchData();

    const interval = setInterval(fetchData, 30000); // auto-refresh every 30s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="coin-table">
      <h2 className="text-2xl font-bold mb-4">Top 100 Cryptos</h2>
      <table className="min-w-full bg-white rounded shadow">
        <thead>
          <tr className="text-left border-b">
            <th className="p-3">#</th>
            <th className="p-3">Coin</th>
            <th className="p-3">Price</th>
            <th className="p-3">24h %</th>
            <th className="p-3">Chart</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin, i) => (
            <tr key={coin.id} className="border-b hover:bg-gray-50 transition">
              <td className="p-3">{i + 1}</td>
              <td className="p-3 flex items-center gap-2">
                <img src={coin.image} alt={coin.name} className="w-6 h-6" />
                <Link href={`/coin/${coin.id}`}>
                  <span className="text-blue-600 hover:underline cursor-pointer">{coin.name}</span>
                </Link>
              </td>
              <td className="p-3">${coin.current_price.toLocaleString()}</td>
              <td className={`p-3 ${coin.price_change_percentage_24h >= 0 ? "text-green-500" : "text-red-500"}`}>
                {coin.price_change_percentage_24h.toFixed(2)}%
              </td>
              <td className="p-3 w-32 h-10">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={coin.sparkline_in_7d.price.map((p, idx) => ({ pv: p, idx }))}>
                    <Line type="monotone" dataKey="pv" stroke="#3b82f6" strokeWidth={2} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoinTable;
