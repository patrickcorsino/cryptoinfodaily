import Head from 'next/head';
import Hero from '@/Components/Hero';
import CoinTable from '@/Components/CoinTable';

export default function Home() {
  return (
    <>
      <Head>
        <title>CryptoInfoDaily</title>
        <meta name="description" content="Stay updated. Trade smart. Have fun." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
        <CoinTable />
      </main>
    </>
  );
}
