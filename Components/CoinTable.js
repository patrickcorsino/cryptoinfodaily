import styles from '@/Styles/CoinTable.module.css';

const dummyData = [
  { name: 'Bitcoin', symbol: 'BTC', price: '$29,874', marketCap: '$580B', change: '+2.5%' },
  { name: 'Ethereum', symbol: 'ETH', price: '$1,874', marketCap: '$220B', change: '-1.3%' },
  { name: 'Solana', symbol: 'SOL', price: '$44.12', marketCap: '$18B', change: '+6.1%' },
];

export default function CoinTable() {
  return (
    <section className={styles.tableSection}>
      <h2 className={styles.heading}>Top Cryptos</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Symbol</th>
            <th>Price</th>
            <th>Market Cap</th>
            <th>24h Change</th>
          </tr>
        </thead>
        <tbody>
          {dummyData.map((coin, index) => (
            <tr key={index}>
              <td>{coin.name}</td>
              <td>{coin.symbol}</td>
              <td>{coin.price}</td>
              <td>{coin.marketCap}</td>
              <td className={coin.change.startsWith('+') ? styles.positive : styles.negative}>
                {coin.change}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
