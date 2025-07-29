import styles from '@/Styles/Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <h1 className={styles.title}>CryptoInfoDaily</h1>
        <p className={styles.subtitle}>Track market data in real time. Trade smarter.</p>
      </div>
    </section>
  );
}
