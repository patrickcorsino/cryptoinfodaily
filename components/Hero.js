import styles from '../styles/Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.backgroundBubbles}></div>
      <div className={styles.content}>
        <h1>Track, Trade & Triumph</h1>
        <p>Your gamified crypto dashboard</p>
      </div>
    </section>
  );
};

export default Hero;
