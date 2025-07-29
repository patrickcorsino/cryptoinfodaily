import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const CoinDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [coin, setCoin] = useState(null);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    if (!id) return;

    const fetchCoin = async () => {
      try {
        const res = await fetch(
          `https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`
        );
        const data = await res.json();
        setCoin(data);
      } catch (err) {
        console.error('Failed to fetch coin detail:', err);
      }
    };

    const fetchChart = async () => {
      try {
        const res = await fetch(
          `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=7&interval=daily`
        );
        const data = await res.json();
        const formatted = data.prices.map(([timestamp, price]) => ({
          date: new Date(timestamp).toLocaleDateString(),
          price: price.toFixed(2),
        }));
        setChartData(formatted);
      } catch (err) {
        console.error('Failed to fetch chart data:', err);
      }
    };

    fetchCoin();
    fetchChart();
  }, [id]);

  if (!coin) {
    return <div className="text-center text-white mt-10">Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-white">
      <div className="flex items-center gap-4 mb-6">
        <img src={coin.image.large} alt={coin.name} className="w-12 h-12" />
        <h1 className="text-3xl font-bold">{coin.name} ({coin.symbol.toUpperCase()})</h1>
      </div>
      <p className="text-gray-300 mb-6">{coin.description.en.split('. ')[0]}.</p>

      <div className="bg-gray-900 p-6 rounded-xl shadow-lg space-y-4 mb-10">
        <div><strong>Current Price:</strong> ${coin.market_data.current_price.usd.toLocaleString()}</div>
        <div><strong>Market Cap:</strong> ${coin.market_data.market_cap.usd.toLocaleString()}</div>
        <div><strong>24h High:</strong> ${coin.market_data.high_24h.usd.toLocaleString()}</div>
        <div><strong>24h Low:</strong> ${coin.market_data.low_24h.usd.toLocaleString()}</div>
        <div><strong>Total Volume:</strong> ${coin.market_data.total_volume.usd.toLocaleString()}</div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Price History (7 Days)</h2>
      <div className="bg-gray-900 p-4 rounded-xl">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <XAxis dataKey="date" stroke="#ccc" />
            <YAxis stroke="#ccc" />
            <Tooltip />
            <Line type="monotone" dataKey="price" stroke="#00FF7F" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CoinDetail;
