// components/TrendingCoins.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const TrendingCoins = () => {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    const fetchTrending = async () => {
      const { data } = await axios.get(
        "https://api.coingecko.com/api/v3/search/trending"
      );
      setTrending(data.coins);
    };
    fetchTrending();
  }, []);

  return (
    <motion.section
      className="bg-white bg-opacity-5 backdrop-blur-lg rounded-2xl p-4 mb-6 shadow-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h2 className="text-lg font-bold text-white mb-4">🔥 Trending Coins</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {trending.map((coinObj) => {
          const coin = coinObj.item;
          return (
            <div
              key={coin.id}
              className="flex flex-col items-center bg-gradient-to-br from-purple-700 via-indigo-700 to-purple-900 text-white p-3 rounded-xl shadow hover:scale-105 transform transition"
            >
              <img src={coin.small} alt={coin.name} className="w-8 h-8 mb-1" />
              <span className="text-sm font-medium">{coin.name}</span>
              <span className="text-xs text-yellow-300">#{coin.market_cap_rank}</span>
            </div>
          );
        })}
      </div>
    </motion.section>
  );
};

export default TrendingCoins;
