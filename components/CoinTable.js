import styles from '@/Styles/CoinTable.module.css';
import Link from 'next/link';

export default function CoinTable({ coins }) {
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>#</th>
            <th>Coin</th>
            <th>Price</th>
            <th>24h %</th>
            <th>Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin, index) => (
            <Link href={`/coin/${coin.id}`} key={coin.id}>
              <tr className={styles.row}>
                <td>{index + 1}</td>
                <td className={styles.coin}>
                  <img src={coin.image} alt={coin.name} className={styles.logo} />
                  <span>{coin.name}</span>
                </td>
                <td>${coin.current_price.toLocaleString()}</td>
                <td className={coin.price_change_percentage_24h >= 0 ? styles.green : styles.red}>
                  {coin.price_change_percentage_24h?.toFixed(2)}%
                </td>
                <td>${coin.market_cap.toLocaleString()}</td>
              </tr>
            </Link>
          ))}
        </tbody>
      </table>
    </div>
  );
}
