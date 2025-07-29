import { useEffect, useState } from 'react';

const FearGreed = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchFGI = async () => {
      try {
        const res = await fetch('https://api.alternative.me/fng/');
        const json = await res.json();
        setData(json.data[0]);
      } catch (err) {
        console.error('Failed to fetch FGI:', err);
      }
    };
    fetchFGI();
  }, []);

  if (!data) return <div className="fear-greed">Loading FGI...</div>;

  const score = parseInt(data.value);
  let color = 'gray';
  if (score >= 75) color = 'green';
  else if (score >= 50) color = 'limegreen';
  else if (score >= 25) color = 'orange';
  else color = 'red';

  return (
    <div className="fear-greed" style={{ background: '#111', padding: '20px', borderRadius: '12px', textAlign: 'center' }}>
      <h2>📊 Fear & Greed Index</h2>
      <div style={{ fontSize: '48px', fontWeight: 'bold', color }}>{score}</div>
      <p style={{ color: '#aaa' }}>{data.value_classification}</p>
      <p style={{ fontSize: '12px', color: '#555' }}>Last updated: {data.timestamp}</p>
    </div>
  );
};

export default FearGreed;
