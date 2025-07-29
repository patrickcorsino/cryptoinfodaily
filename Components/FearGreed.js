
import { useEffect, useState } from 'react';

export default function FearGreed() {
  const [index, setIndex] = useState(null);

  useEffect(() => {
    async function fetchFGI() {
      const res = await fetch('https://api.alternative.me/fng/?limit=1');
      const data = await res.json();
      setIndex(data.data[0]);
    }
    fetchFGI();
  }, []);

  return (
    <div className="bg-indigo-800 p-4 rounded-xl shadow-lg">
      <h3 className="text-xl font-bold mb-2">📊 Fear & Greed Index</h3>
      {index ? (
        <div>
          <p className="text-3xl font-bold">{index.value} – {index.value_classification}</p>
          <p className="text-sm text-gray-300 mt-1">Last updated: {index.timestamp}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
