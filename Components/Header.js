import Link from 'next/link';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        CryptoInfoDaily
      </Link>
      <div className={styles.actions}>
        <button className={styles.degenButton}>Degen Mode</button>
      </div>
    </header>
  );
};

export default Header;
