import Head from 'next/head';
import CoinTable from '../Components/CoinTable';
import '../Styles/Globals.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Crypto Info Daily</title>
      </Head>
      <main className="min-h-screen bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white">
        <div className="container mx-auto py-8">
          <h1 className="text-4xl font-bold mb-6 text-center drop-shadow-lg">Top Crypto Coins</h1>
          <CoinTable />
        </div>
      </main>
    </>
  );
}
