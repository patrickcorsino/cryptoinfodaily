import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function CoinDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  const [coin, setCoin] = useState(null);
  const [chartData, setChartData] = useState([]);
  const [selectedChart, setSelectedChart] = useState('line');

  useEffect(() => {
    if (!id) return;

    const fetchCoinData = async () => {
      try {
        const res = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`);
        setCoin(res.data);
      } catch (err) {
        console.error('Error fetching coin details:', err);
      }
    };

    const fetchChartData = async () => {
      try {
        const res = await axios.get(
          `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=7`
        );
        const formattedData = res.data.prices.map(([timestamp, price]) => ({
          time: new Date(timestamp).toLocaleDateString(),
          price,
        }));
        setChartData(formattedData);
      } catch (err) {
        console.error('Error fetching chart data:', err);
      }
    };

    fetchCoinData();
    fetchChartData();
  }, [id]);

  if (!coin) return <div className="text-white">Loading...</div>;

  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold mb-2">{coin.name} ({coin.symbol.toUpperCase()})</h1>
      <p className="mb-4 text-gray-300">{coin.description.en?.split('. ')[0]}</p>

      <div className="mb-4">
        <button
          onClick={() => setSelectedChart('line')}
          className={`px-4 py-2 mr-2 ${selectedChart === 'line' ? 'bg-blue-600' : 'bg-gray-700'}`}
        >
          Line Chart
        </button>
        <button
          onClick={() => setSelectedChart('candlestick')}
          className={`px-4 py-2 ${selectedChart === 'candlestick' ? 'bg-blue-600' : 'bg-gray-700'}`}
        >
          Candlestick (Coming Soon)
        </button>
      </div>

      {selectedChart === 'line' && (
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <XAxis dataKey="time" />
            <YAxis domain={['auto', 'auto']} />
            <Tooltip />
            <Line type="monotone" dataKey="price" stroke="#3b82f6" dot={false} />
          </LineChart>
        </ResponsiveContainer>
      )}

      {selectedChart === 'candlestick' && (
        <div className="text-gray-400 mt-4">Candlestick chart coming soon!</div>
      )}
    </div>
  );
}
