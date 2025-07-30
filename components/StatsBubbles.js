// components/StatsBubbles.js
import React from "react";
import { motion } from "framer-motion";

const stats = [
  { label: "Market Cap", value: "$1.82T" },
  { label: "24h Volume", value: "$95.6B" },
  { label: "BTC Dominance", value: "48.3%" },
];

const StatsBubbles = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 my-6">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          className="bg-white bg-opacity-10 backdrop-blur-lg p-6 rounded-2xl shadow-lg text-center text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
        >
          <p className="text-sm text-gray-300">{stat.label}</p>
          <h3 className="text-xl font-bold">{stat.value}</h3>
        </motion.div>
      ))}
    </div>
  );
};

export default StatsBubbles;
