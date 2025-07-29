import Head from 'next/head';
import CoinTable from '../Components/CoinTable';
import FearGreed from '../Components/FearGreed';
import TrendingCoins from '../Components/TrendingCoins';
import DegenToggle from '../Components/DegenToggle';
import Header from '../Components/Header';

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
