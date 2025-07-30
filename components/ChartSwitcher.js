import { useState } from 'react'

export default function ChartSwitcher({ onChange }) {
  const [chartType, setChartType] = useState('line')

  const handleClick = (type) => {
    setChartType(type)
    onChange(type)
  }

  return (
    <div className="flex gap-2 my-4">
      <button
        className={`px-4 py-2 rounded-lg text-white ${chartType === 'line' ? 'bg-purple-600' : 'bg-gray-700'}`}
        onClick={() => handleClick('line')}
      >
        Line
      </button>
      <button
        className={`px-4 py-2 rounded-lg text-white ${chartType === 'candlestick' ? 'bg-purple-600' : 'bg-gray-700'}`}
        onClick={() => handleClick('candlestick')}
      >
        Candlestick
      </button>
    </div>
  )
}
