import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const CoinDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [coin, setCoin] = useState(null);

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

    fetchCoin();
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
      <p className="text-gray-300 mb-4">{coin.description.en.split('. ')[0]}.</p>
      <div className="bg-gray-900 p-6 rounded-xl shadow-lg space-y-4">
        <div><strong>Current Price:</strong> ${coin.market_data.current_price.usd.toLocaleString()}</div>
        <div><strong>Market Cap:</strong> ${coin.market_data.market_cap.usd.toLocaleString()}</div>
        <div><strong>24h High:</strong> ${coin.market_data.high_24h.usd.toLocaleString()}</div>
        <div><strong>24h Low:</strong> ${coin.market_data.low_24h.usd.toLocaleString()}</div>
        <div><strong>Total Volume:</strong> ${coin.market_data.total_volume.usd.toLocaleString()}</div>
      </div>
    </div>
  );
};

export default CoinDetail;
