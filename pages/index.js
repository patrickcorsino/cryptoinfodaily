import Head from 'next/head';
import CoinTable from '../components/CoinTable';
import FearGreed from '../components/FearGreed';
import TrendingCoins from '../components/TrendingCoins';
import DegenToggle from '../components/DegenToggle';
import Header from '../components/Header';

export default function Home() {
  return (
    <>
      <Head>
        <title>Crypto Info Daily</title>
        <meta name="description" content="Live crypto dashboard – gamified & addictive." />
      </Head>
      <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white px-4 py-6">
        <Header />
        <DegenToggle />
        <div className="grid gap-6 md:grid-cols-2 mt-6">
          <TrendingCoins />
          <FearGreed />
        </div>
        <CoinTable />
      </div>
    </>
  );
}
