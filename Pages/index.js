// pages/index.js
import Head from 'next/head';
import Hero from '@/components/Hero';
import CoinTable from '@/components/CoinTable';
import Navbar from '@/components/Navbar';
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
        <CoinTable coins={coins} />
      </main>
    </>
  );
}
