import React from 'react';
import { motion } from 'framer-motion';
import SparklineChart from './SparklineChart';
import Badge from './Badge';

const CoinTable = ({ coins, isDegenMode }) => {
  return (
    <div className="bg-white dark:bg-[#121212] rounded-xl p-4 shadow-lg mt-4">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
        {isDegenMode ? '🔥 Degen Mode Coins' : 'Top Cryptocurrencies'}
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="text-sm text-gray-600 dark:text-gray-300 border-b border-gray-300 dark:border-gray-700">
              <th className="py-2 px-3">#</th>
              <th className="py-2 px-3">Name</th>
              <th className="py-2 px-3">Price</th>
              <th className="py-2 px-3">24h %</th>
              <th className="py-2 px-3">Market Cap</th>
              <th className="py-2 px-3">7d Chart</th>
            </tr>
          </thead>
          <tbody>
            {coins?.map((coin, index) => (
              <motion.tr
                key={coin.id}
                whileHover={{ scale: 1.015 }}
                className="transition duration-200 ease-in-out hover:bg-gray-100 dark:hover:bg-[#1f1f1f]"
              >
                <td className="py-3 px-3 text-sm text-gray-700 dark:text-gray-200">{index + 1}</td>
                <td className="py-3 px-3 flex items-center gap-2 text-sm text-gray-800 dark:text-gray-100">
                  <img src={coin.image} alt={coin.name} className="w-6 h-6" />
                  <div className="flex flex-col">
                    <span className="font-semibold">{coin.name}</span>
                    <span className="text-xs text-gray-500 uppercase">{coin.symbol}</span>
                  </div>
                  {coin.isHot && <Badge type="hot" />}
                  {coin.isTrending && <Badge type="trending" />}
                  {coin.isNew && <Badge type="new" />}
                </td>
                <td className="py-3 px-3 text-sm text-gray-800 dark:text-gray-100">
                  ${coin.current_price?.toLocaleString() || 'N/A'}
                </td>
                <td
                  className={`py-3 px-3 text-sm font-semibold ${
                    coin.price_change_percentage_24h > 0
                      ? 'text-green-500'
                      : 'text-red-500'
                  }`}
                >
                  {coin.price_change_percentage_24h?.toFixed(2) || '0.00'}%
                </td>
                <td className="py-3 px-3 text-sm text-gray-800 dark:text-gray-100">
                  ${coin.market_cap?.toLocaleString() || 'N/A'}
                </td>
                <td className="py-3 px-3">
                  <SparklineChart data={coin.sparkline_in_7d?.price || []} />
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CoinTable;
