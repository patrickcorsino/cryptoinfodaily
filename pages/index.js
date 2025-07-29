import Head from 'next/head';
import CoinTable from '../components/CoinTable';

export default function Home() {
  return (
    <>
      <Head>
        <title>CryptoInfoDaily</title>
      </Head>
      <main className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 min-h-screen text-white p-6">
        <h1 className="text-4xl font-bold mb-6 text-center neon-glow">Top 100 Cryptos</h1>
        <CoinTable />
      </main>
    </>
  );
}
