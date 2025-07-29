export default function CoinTable() {
  return (
    <div className="bg-gray-800 p-6 rounded-2xl shadow-lg max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-white">Top Crypto Coins</h2>
      <table className="table-auto w-full text-left text-white">
        <thead>
          <tr className="text-gray-400">
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
            <td className="text-green-500">+2.5%</td>
          </tr>
          <tr>
            <td>Ethereum</td>
            <td>ETH</td>
            <td>$1,800</td>
            <td className="text-red-500">-1.1%</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}