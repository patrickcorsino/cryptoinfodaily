import '../styles/Globals.css';
import { DegenProvider } from '../context/DegenContext';

export default function App({ Component, pageProps }) {
  return (
    <DegenProvider>
      <Component {...pageProps} />
    </DegenProvider>
  );
}
