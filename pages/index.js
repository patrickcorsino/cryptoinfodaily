// pages/index.js
import Head from 'next/head';
import Hero from '../components/Hero';
import CoinTable from '../components/CoinTable';
import Navbar from '../components/Navbar';
import { getTrendingCoins } from '@/utils/api';

export async function getServerSideProps() {
  const coins = await getTrendingCoins();
  return { props: { coins } };
}

export default function Home({ coins }) {
  return (
    <>
      <Head>
        <title>CryptoInfoDaily</title>
        <meta name="description" content="Stay updated. Trade smart. Have fun." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar coins={coins} />
      <main>
        <Hero />
    <Hero />

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
  <div className="bg-white dark:bg-zinc-800 rounded-xl shadow p-4 hover:scale-105 transition-transform duration-300">
    <h4 className="text-sm text-gray-500 dark:text-gray-400">Market Cap</h4>
    <p className="text-lg font-bold text-gray-900 dark:text-white">$2.45T</p>
  </div>
  <div className="bg-white dark:bg-zinc-800 rounded-xl shadow p-4 hover:scale-105 transition-transform duration-300">
    <h4 className="text-sm text-gray-500 dark:text-gray-400">24h Volume</h4>
    <p className="text-lg font-bold text-gray-900 dark:text-white">$120B</p>
  </div>
  <div className="bg-white dark:bg-zinc-800 rounded-xl shadow p-4 hover:scale-105 transition-transform duration-300">
    <h4 className="text-sm text-gray-500 dark:text-gray-400">BTC Dominance</h4>
    <p className="text-lg font-bold text-gray-900 dark:text-white">51.2%</p>
  </div>
  <div className="bg-white dark:bg-zinc-800 rounded-xl shadow p-4 hover:scale-105 transition-transform duration-300">
    <h4 className="text-sm text-gray-500 dark:text-gray-400">ETH Dominance</h4>
    <p className="text-lg font-bold text-gray-900 dark:text-white">17.4%</p>
  </div>
</div>

        <CoinTable coins={coins} />
      </main>
    </>
  );
}
