import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import axios from 'axios';

const CoinChart = ({ coinId }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchHistoricalData = async () => {
      try {
        const res = await axios.get(
          `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=7`
        );
        const prices = res.data.prices.map(([timestamp, price]) => ({
          time: new Date(timestamp).toLocaleDateString(),
          price: price.toFixed(2),
        }));
        setChartData(prices);
      } catch (err) {
        console.error('Error fetching chart data:', err);
      }
    };

    fetchHistoricalData();
  }, [coinId]);

  return (
    <div className="bg-white dark:bg-[#111] p-4 rounded-2xl shadow-lg mt-6">
      <h3 className="text-lg font-semibold mb-2 text-center text-[#00FF85]">7-Day Price Chart</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <XAxis dataKey="time" />
          <YAxis domain={['auto', 'auto']} />
          <Tooltip />
          <Line type="monotone" dataKey="price" stroke="#00FF85" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CoinChart;
