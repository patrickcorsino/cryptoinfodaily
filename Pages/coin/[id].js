import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from '@/Styles/CoinDetail.module.css';

export default function CoinDetail() {
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
        console.error('Error fetching coin data:', err);
      }
    };
    fetchCoin();
  }, [id]);

  if (!coin) return <div className={styles.loading}>Loading...</div>;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img src={coin.image.large} alt={coin.name} className={styles.logo} />
        <h1>{coin.name} ({coin.symbol.toUpperCase()})</h1>
      </div>

      <div className={styles.stats}>
        <p><strong>Current Price:</strong> ${coin.market_data.current_price.usd.toLocaleString()}</p>
        <p><strong>Market Cap:</strong> ${coin.market_data.market_cap.usd.toLocaleString()}</p>
        <p><strong>Total Volume:</strong> ${coin.market_data.total_volume.usd.toLocaleString()}</p>
        <p><strong>24h High:</strong> ${coin.market_data.high_24h.usd}</p>
        <p><strong>24h Low:</strong> ${coin.market_data.low_24h.usd}</p>
        <p><strong>Price Change 24h:</strong> {coin.market_data.price_change_percentage_24h.toFixed(2)}%</p>
      </div>

      <div className={styles.description}>
        <h2>About {coin.name}</h2>
        <div dangerouslySetInnerHTML={{ __html: coin.description.en }} />
      </div>
    </div>
  );
}
