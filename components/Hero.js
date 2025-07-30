import styles from '../styles/Hero.module.css';

import Badge from './Badge'

<Badge text="Trending" />


const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.backgroundBubbles}></div>
      <div className={styles.content}>
        <h1>Track, Trade & Triumph</h1>
        <p>Your gamified crypto dashboard</p>
  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
  <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl p-4 text-center shadow-lg transform hover:scale-105 transition">
    <div className="text-xl font-bold">$2.1T</div>
    <div className="text-sm opacity-80">Market Cap</div>
  </div>
  <div className="bg-gradient-to-r from-green-400 to-emerald-600 text-white rounded-2xl p-4 text-center shadow-lg transform hover:scale-105 transition">
    <div className="text-xl font-bold">$97B</div>
    <div className="text-sm opacity-80">24h Volume</div>
  </div>
  <div className="bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-2xl p-4 text-center shadow-lg transform hover:scale-105 transition">
    <div className="text-xl font-bold">9.4%</div>
    <div className="text-sm opacity-80">BTC Dominance</div>
  </div>
  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-2xl p-4 text-center shadow-lg transform hover:scale-105 transition">
    <div className="text-xl font-bold">8,900</div>
    <div className="text-sm opacity-80">Coins Tracked</div>
  </div>
</div>
      </div>
    </section>
  );
};

export default Hero;
