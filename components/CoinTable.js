// components/CoinTable.js
import React from "react";
import Link from "next/link";
import Badge from "./Badge";

const CoinTable = ({ coins, isDegen }) => {
  return (
    <div className="bg-white bg-opacity-5 backdrop-blur-lg rounded-xl p-4 overflow-x-auto shadow-md">
      <table className="min-w-full text-sm text-white">
        <thead>
          <tr className="text-gray-300">
            <th className="text-left p-2">#</th>
            <th className="text-left p-2">Coin</th>
            <th className="text-right p-2">Price</th>
            <th className="text-right p-2">24h %</th>
            <th className="text-right p-2">Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin, index) => {
            const priceChange = coin.price_change_percentage_24h?.toFixed(2);
            return (
              <tr
                key={coin.id}
                className="hover:bg-white hover:bg-opacity-10 transition rounded-xl"
              >
                <td className="p-2">{index + 1}</td>
                <td className="p-2 flex items-center gap-2">
                  <img src={coin.image} alt={coin.name} className="w-6 h-6" />
                  <Link href={`/coin/${coin.id}`}>
                    <span className="hover:underline font-medium cursor-pointer">
                      {coin.name}
                    </span>
                  </Link>
                  {!isDegen && <Badge type="trending" />}
                </td>
                <td className="text-right p-2">${coin.current_price.toLocaleString()}</td>
                <td
                  className={`text-right p-2 ${
                    priceChange < 0 ? "text-red-400" : "text-green-400"
                  }`}
                >
                  {priceChange}%
                </td>
                <td className="text-right p-2">
                  ${coin.market_cap.toLocaleString()}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CoinTable;
