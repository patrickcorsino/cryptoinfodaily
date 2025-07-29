// utils/api.js
export async function getTrendingCoins() {
  const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1');
  const data = await res.json();
  return data;
}
