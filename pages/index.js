import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Search from '../components/Search'
import CoinTable from '../components/CoinTable'
import TrendingCoins from '../components/TrendingCoins'
import FearGreedPanel from '../components/FearGreedPanel'
import MarketStats from '../components/MarketStats'
import { useState } from 'react'

export default function Home() {
  const [isDegenMode, setIsDegenMode] = useState(false)

  const toggleDegenMode = () => {
    setIsDegenMode(!isDegenMode)
  }

  return (
    <>
      <Head>
        <title>CryptoInfoDaily</title>
        <meta name="description" content="Stay updated. Trade smart. Have fun." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={isDegenMode ? 'degen-mode' : ''}>
        {/* Navbar with Toggle */}
        <Navbar onToggleDegen={toggleDegenMode} isDegenMode={isDegenMode} />

        {/* Search Modal */}
        <Search />

        {/* Main Hero Section */}
        <Hero />

        {/* Section: Market Cap, BTC Dominance, Volume */}
        <MarketStats />

        {/* Trending Coins Section */}
        <TrendingCoins />

        {/* Fear & Greed Index Panel */}
        <FearGreedPanel />

        {/* Coin Table */}
        <CoinTable isDegenMode={isDegenMode} />
      </div>
    </>
  )
}
