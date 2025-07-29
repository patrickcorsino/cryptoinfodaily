import { useEffect, useState } from 'react';
import styles from '@/Styles/CoinTable.module.css';

export default function CoinTable() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCoins = async () => {
    try {
      const res = await fetch(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=25&page=1&sparkline=false'
      );
      const data = await res.json();
      setCoins(data);
      setLoading(false);
    } catch (err) {
      console.error('Failed to fetch coin data:', err);
    }
  };

  useEffect(() => {
    fetchCoins();
    const interval = setInterval(fetchCoins, 30000); // Refresh every 30 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.tableSection}>
      <h2 className={styles.heading}>Top 25 Cryptos</h2>
      {loading ? (
        <p style={{ textAlign: 'center' }}>Loading...</p>
      ) : (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Coin</th>
              <th>Symbol</th>
              <th>Price</th>
              <th>Market Cap</th>
              <th>24h Change</th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin) => (
              <tr key={coin.id}>
                <td>
                  <img src={coin.image} alt={coin.name} width={20} style={{ marginRight: 10, verticalAlign: 'middle' }} />
                  {coin.name}
                </td>
                <td>{coin.symbol.toUpperCase()}</td>
                <td>${coin.current_price.toLocaleString()}</td>
                <td>${coin.market_cap.toLocaleString()}</td>
                <td className={coin.price_change_percentage_24h >= 0 ? styles.positive : styles.negative}>
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
}
