// pages/index.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import Head from "next/head";
import Hero from "../components/Hero";
import StatsPanel from "../components/StatsPanel";
import TrendingCoins from "../components/TrendingCoins";
import FearGreedPanel from "../components/FearGreedPanel";
import CoinTable from "../components/CoinTable";
import Search from "../components/Search";
import DegenModeToggle from "../components/DegenModeToggle";

export default function Home() {
  const [coins, setCoins] = useState([]);
  const [filteredCoins, setFilteredCoins] = useState([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isDegen, setIsDegen] = useState(false);
  const [lastUpdated, setLastUpdated] = useState(Date.now());

  const fetchCoins = async () => {
    try {
      if (isDegen) {
        const response = await axios.get(
          "https://api.dexscreener.com/latest/dex/pairs"
        );
        const data = response.data.pairs.slice(0, 50).map((pair) => ({
          id: pair.pairAddress,
          name: pair.baseToken.name,
          image: pair.baseToken.logoURI || "/default.png",
          current_price: parseFloat(pair.priceUsd),
          price_change_percentage_24h:
            parseFloat(pair.priceChange.h24) || 0.0,
          market_cap: parseFloat(pair.liquidity.usd) || 0.0,
        }));
        setCoins(data);
        setFilteredCoins(data);
      } else {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets",
          {
            params: {
              vs_currency: "usd",
              order: "market_cap_desc",
              per_page: 50,
              page: 1,
              sparkline: false,
            },
          }
        );
        setCoins(response.data);
        setFilteredCoins(response.data);
      }
    } catch (error) {
      console.error("Error fetching coin data:", error);
    }
  };

  useEffect(() => {
    fetchCoins(); // initial load
    const interval = setInterval(() => {
      fetchCoins();
      setLastUpdated(Date.now());
    }, 30000); // every 30 seconds

    return () => clearInterval(interval);
  }, [isDegen]);

  const toggleSearch = () => {
    setIsSearchOpen((prev) => !prev);
  };

  const toggleDegen = () => {
    setIsDegen((prev) => !prev);
  };

  return (
    <>
      <Head>
        <title>CryptoInfoDaily</title>
        <meta
          name="description"
          content="Track cryptocurrency prices, trends, and market sentiment. Gamified UI powered by CoinGecko and DexScreener."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-gradient-to-br from-gray-900 to-black min-h-screen p-4 text-white">
        <div className="max-w-7xl mx-auto space-y-6">
          <Hero />
          <DegenModeToggle isDegen={isDegen} toggleDegen={toggleDegen} />
          <StatsPanel />
          <FearGreedPanel />
          <TrendingCoins />
          <button
            onClick={toggleSearch}
            className="bg-white text-black px-4 py-2 rounded shadow hover:bg-gray-100"
          >
            Search Coins
          </button>
          {isSearchOpen && (
            <Search
              coins={coins}
              onClose={() => setIsSearchOpen(false)}
              setFilteredCoins={setFilteredCoins}
            />
          )}
          <CoinTable coins={filteredCoins} isDegen={isDegen} />
          <p className="text-xs text-gray-400 text-right">
            Updated: {new Date(lastUpdated).toLocaleTimeString()}
          </p>
        </div>
      </main>
    </>
  );
}
