// Daily Streak Tracker
const streakKey = "visitStreak";
const lastVisitKey = "lastVisit";

const today = new Date().toDateString();
const lastVisit = localStorage.getItem(lastVisitKey);
let streak = parseInt(localStorage.getItem(streakKey)) || 0;

if (lastVisit !== today) {
  if (new Date(lastVisit).getTime() === new Date(new Date().setDate(new Date().getDate() - 1)).getTime()) {
    streak += 1;
  } else {
    streak = 1;
  }
  localStorage.setItem(streakKey, streak);
  localStorage.setItem(lastVisitKey, today);
}

document.getElementById("streak").innerText = `🔥 Daily Visit Streak: ${streak}`;

// Fetch Top 10 Coins
fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1")
  .then(response => response.json())
  .then(data => {
    const table = document.getElementById("crypto-table");
    data.forEach(coin => {
      const div = document.createElement("div");
      div.className = "coin " + (coin.price_change_percentage_24h >= 0 ? "positive" : "negative");
      div.innerHTML = `<strong>${coin.name}</strong> $${coin.current_price.toLocaleString()} (${coin.price_change_percentage_24h.toFixed(2)}%)`;
      table.appendChild(div);
    });
  })
  .catch(err => {
    console.error("Error fetching data:", err);
  });