
import Head from 'next/head'
import Hero from '../components/Hero'
import CoinTable from '../components/CoinTable'


export default function Home() {
  return (
    <>
      <Head>
        <title>CryptoInfoDaily</title>
        <meta name="description" content="Gamified Crypto Market Dashboard" />
      </Head>
      <Hero />
      <CoinTable />
    </>
  )
}
