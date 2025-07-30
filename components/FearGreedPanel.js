// components/FearGreedPanel.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const getColor = (value) => {
  if (value < 25) return "text-red-500";
  if (value < 50) return "text-yellow-500";
  if (value < 75) return "text-green-400";
  return "text-green-500";
};

const FearGreedPanel = () => {
  const [fearGreed, setFearGreed] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("https://api.alternative.me/fng/");
      setFearGreed(data.data[0]);
    };
    fetchData();
  }, []);

  return (
    <motion.div
      className="bg-white bg-opacity-5 backdrop-blur-lg p-4 rounded-2xl text-white text-center shadow-lg mb-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h3 className="text-lg font-bold mb-1">📊 Fear & Greed Index</h3>
      {fearGreed ? (
        <>
          <p className={`text-3xl font-bold ${getColor(fearGreed.value)}`}>
            {fearGreed.value} - {fearGreed.value_classification}
          </p>
          <p className="text-sm text-gray-300 mt-1">
            Last updated: {fearGreed.timestamp}
          </p>
        </>
      ) : (
        <p className="text-sm text-gray-400">Loading index...</p>
      )}
    </motion.div>
  );
};

export default FearGreedPanel;
