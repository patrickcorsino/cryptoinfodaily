import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function CoinDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [coin, setCoin] = useState(null);

  useEffect(() => {
    if (!id) return;
    async function fetchCoin() {
      const res = await fetch(\`https://api.coingecko.com/api/v3/coins/\${id}\`);
      const data = await res.json();
      setCoin(data);
    }
    fetchCoin();
  }, [id]);

  if (!coin) return <div className="text-white p-6">Loading coin data...</div>;

  return (
    <div className="text-white p-6">
      <h1 className="text-3xl font-bold mb-2">{coin.name}</h1>
      <p className="text-gray-400">{coin.symbol.toUpperCase()}</p>
      <img src={coin.image.large} alt={coin.name} className="w-16 h-16 my-4" />
      <p dangerouslySetInnerHTML={{ __html: coin.description.en?.split('. ')[0] + '.' }} />
    </div>
  );
}
