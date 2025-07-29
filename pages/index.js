import CoinTable from '../Components/CoinTable';
import '../Styles/Globals.css';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold mb-6 text-center">Crypto Info Daily</h1>
      <CoinTable />
    </div>
  );
}

