import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const CoinDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [coin, setCoin] = useState(null);

  useEffect(() => {
    if (!id) return;
    const fetchCoin = async () => {
      try {
        const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);
        const data = await res.json();
        setCoin(data);
      } catch (err) {
        console.error('Failed to fetch coin:', err);
      }
    };
    fetchCoin();
  }, [id]);

  if (!coin) return <p style={{ textAlign: 'center' }}>Loading coin details...</p>;

  return (
    <div className="coin-detail-container">
      <h1>{coin.name} ({coin.symbol.toUpperCase()})</h1>
      <img src={coin.image.large} alt={coin.name} width={80} />
      <p>Rank: #{coin.market_cap_rank}</p>
      <p>Current Price: ${coin.market_data.current_price.usd.toLocaleString()}</p>
      <p>24h Change: {coin.market_data.price_change_percentage_24h.toFixed(2)}%</p>
      <p>Market Cap: ${coin.market_data.market_cap.usd.toLocaleString()}</p>
      <p>Volume: ${coin.market_data.total_volume.usd.toLocaleString()}</p>
      <p>Circulating Supply: {coin.market_data.circulating_supply.toLocaleString()}</p>
      <p>Total Supply: {coin.market_data.total_supply?.toLocaleString() || 'N/A'}</p>

      <div style={{ marginTop: '30px' }}>
        <h2>Description:</h2>
        <div dangerouslySetInnerHTML={{ __html: coin.description.en.split('. ')[0] + '.' }} />
      </div>
    </div>
  );
};

export default CoinDetail;
