import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/CoinDetail.module.css';

export default function CoinDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [coin, setCoin] = useState(null);

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      try {
        const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);
        const data = await res.json();
        setCoin(data);
      } catch (err) {
        console.error('Failed to fetch coin data:', err);
      }
    };

    fetchData();
  }, [id]);

  if (!coin) return <div className={styles.loading}>Loading coin data...</div>;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{coin.name} ({coin.symbol.toUpperCase()})</h1>
      <img src={coin.image.large} alt={coin.name} className={styles.image} />

      <p className={styles.description}>
        {coin.description.en ? coin.description.en.split('. ')[0] + '.' : 'No description available.'}
      </p>

      <div className={styles.stats}>
        <p><strong>Current Price:</strong> ${coin.market_data.current_price.usd.toLocaleString()}</p>
        <p><strong>Market Cap:</strong> ${coin.market_data.market_cap.usd.toLocaleString()}</p>
        <p><strong>24h Change:</strong> {coin.market_data.price_change_percentage_24h.toFixed(2)}%</p>
        <p><strong>Total Volume:</strong> ${coin.market_data.total_volume.usd.toLocaleString()}</p>
      </div>
    </div>
  );
}
