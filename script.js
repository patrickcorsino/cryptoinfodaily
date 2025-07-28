
const coinTable = document.getElementById("coin-table");
const trendingContainer = document.getElementById("trending");

fetch("https://api.coingecko.com/api/v3/global")
  .then(res => res.json())
  .then(data => {
    const d = data.data;
    document.getElementById("global-mcap").innerText = `$${(d.total_market_cap.usd/1e12).toFixed(2)}T`;
    document.getElementById("global-vol").innerText = `$${(d.total_volume.usd/1e9).toFixed(2)}B`;
    document.getElementById("btc-dominance").innerText = `${d.market_cap_percentage.btc.toFixed(1)}%`;
  });

fetch("https://api.coingecko.com/api/v3/search/trending")
  .then(res => res.json())
  .then(data => {
    trendingContainer.innerHTML = data.coins.map(coin => `
      <div class="min-w-fit bg-gray-800 text-white rounded-xl px-4 py-2 flex items-center space-x-2 shadow-md">
        <img src="${coin.item.thumb}" class="w-5 h-5" />
        <span>${coin.item.name}</span>
      </div>
    `).join('');
  });

fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1")
  .then(res => res.json())
  .then(data => {
    coinTable.innerHTML = data.map((coin, index) => `
      <tr class="hover:bg-gray-600 cursor-pointer" onclick="alert('Coin detail page coming soon')">
        <td class="px-4 py-2">${index + 1}</td>
        <td class="px-4 py-2 flex items-center space-x-2">
          <img src="${coin.image}" class="w-5 h-5"/> <span>${coin.name} (${coin.symbol.toUpperCase()})</span>
        </td>
        <td class="px-4 py-2 text-right">$${coin.current_price.toLocaleString()}</td>
        <td class="px-4 py-2 text-right ${coin.price_change_percentage_24h >= 0 ? 'text-green-400' : 'text-red-400'}">
          ${coin.price_change_percentage_24h.toFixed(2)}%
        </td>
        <td class="px-4 py-2 text-right">$${coin.market_cap.toLocaleString()}</td>
        <td class="px-4 py-2 text-right">$${coin.total_volume.toLocaleString()}</td>
      </tr>
    `).join('');
  });
