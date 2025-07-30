import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FearGreedPanel = () => {
  const [fearGreed, setFearGreed] = useState(null);

  useEffect(() => {
    const fetchFG = async () => {
      try {
        const res = await axios.get('https://api.alternative.me/fng/?limit=1');
        setFearGreed(res.data.data[0]);
      } catch (error) {
        console.error('Error fetching Fear & Greed data:', error);
      }
    };

    fetchFG();
  }, []);

  if (!fearGreed) return null;

  const level = parseInt(fearGreed.value, 10);
  const sentiment = fearGreed.value_classification;

  const bgColor =
    level >= 80 ? 'bg-green-600' :
    level >= 60 ? 'bg-green-500' :
    level >= 40 ? 'bg-yellow-400' :
    level >= 20 ? 'bg-orange-500' : 'bg-red-600';

  return (
    <div className={`p-6 rounded-2xl shadow-xl text-white mt-8 ${bgColor} animate-pulse`}>
      <h2 className="text-2xl font-bold text-center mb-2">Fear & Greed Index</h2>
      <p className="text-center text-4xl font-black">{fearGreed.value}</p>
      <p className="text-center text-lg uppercase tracking-wider">{sentiment}</p>
      <p className="text-center text-sm mt-2 opacity-80">Updated: {fearGreed.timestamp}</p>
    </div>
  );
};

export default FearGreedPanel;
