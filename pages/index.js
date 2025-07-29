import Head from 'next/head'
import Hero from '../components/Hero'
import CoinTable from '../components/CoinTable'

export default function Home() {
  return (
    <div>
      <Head>
        <title>CryptoInfoDaily</title>
        <meta name="description" content="Stay updated. Trade smart. Have fun." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
        <CoinTable />
      </main>
    </div>
  )
}
