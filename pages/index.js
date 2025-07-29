
import Head from 'next/head'
import Hero from '../Components/Hero'
import CoinTable from '../Components/CoinTable'


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
