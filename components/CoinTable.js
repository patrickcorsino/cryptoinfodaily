export default function CoinTable() {
  return (
    <div className="table-container">
      <h2 className="section-title">Top Crypto Coins</h2>
      <table className="coin-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Symbol</th>
            <th>Price</th>
            <th>Change</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Bitcoin</td>
            <td>BTC</td>
            <td>$29,000</td>
            <td className="positive">+2.5%</td>
          </tr>
          <tr>
            <td>Ethereum</td>
            <td>ETH</td>
            <td>$1,800</td>
            <td className="negative">-1.1%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
