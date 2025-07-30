// pages/coin/[id].js
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const CoinPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [coin, setCoin] = useState(null);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      const [coinRes, chartRes] = await Promise.all([
        axios.get(`https://api.coingecko.com/api/v3/coins/${id}`),
        axios.get(
          `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=7`
        ),
      ]);

      setCoin(coinRes.data);
      const formatted = chartRes.data.prices.map((entry) => ({
        time: new Date(entry[0]).toLocaleDateString(),
        price: entry[1],
      }));
      setChartData(formatted);
    };

    fetchData();
  }, [id]);

  if (!coin) return <div className="text-white p-4">Loading coin...</div>;

  return (
    <div className="p-6 text-white">
      <div className="flex items-center gap-4 mb-4">
        <img src={coin.image.large} alt={coin.name} className="w-12 h-12" />
        <h1 className="text-2xl font-bold">{coin.name}</h1>
      </div>
      <p className="mb-4">{coin.description.en?.split(".")[0]}</p>
      <h2 className="text-lg font-semibold mb-2">7 Day Price Chart</h2>
      <div className="w-full h-64 bg-white bg-opacity-10 rounded-lg p-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="price"
              stroke="#00FF00"
              dot={false}
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CoinPage;
