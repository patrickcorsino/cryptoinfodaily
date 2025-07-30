export default function InfoBubble({ title, value }) {
  return (
    <div className="bg-gradient-to-tr from-indigo-600 to-purple-600 p-4 rounded-2xl shadow-xl text-white w-full sm:w-auto text-center">
      <div className="text-sm opacity-75">{title}</div>
      <div className="text-xl font-bold">{value}</div>
    </div>
  )
}
