import Head from 'next/head';
import Hero from '@/Components/Hero';
import CoinTable from '@/Components/CoinTable';
import { useEffect, useState } from 'react';

export default function Home() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await fetch(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true'
      );
      const data = await res.json();
      setCoins(data);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching coins:', err);
    }
  };

  useEffect(() => {
    fetchData(); // initial load
    const interval = setInterval(fetchData, 30000); // every 30s
    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <div>
      <Head>
        <title>CryptoInfoDaily</title>
        <meta name="description" content="Stay updated. Trade smart. Have fun." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
        {loading ? <p style={{ textAlign: 'center' }}>Loading coins...</p> : <CoinTable coins={coins} />}
      </main>
    </div>
  );
}
