
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function CoinTable() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        'https://api.coingecko.com/api/v3/coins/markets',
        {
          params: {
            vs_currency: 'usd',
            order: 'market_cap_desc',
            per_page: 10,
            page: 1,
            price_change_percentage: '1h,24h,7d',
          },
        }
      );
      setCoins(result.data);
    };

    fetchData();
    const interval = setInterval(fetchData, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Top Crypto Coins</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th><th>Symbol</th><th>Price</th><th>Change</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin) => (
            <tr key={coin.id}>
              <td>{coin.name}</td>
              <td>{coin.symbol.toUpperCase()}</td>
              <td>${coin.current_price.toLocaleString()}</td>
              <td>{coin.price_change_percentage_24h?.toFixed(2)}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
