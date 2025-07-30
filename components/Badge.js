export default function Badge({ text }) {
  return (
    <div className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-2xl shadow-md animate-pulse">
      {text}
    </div>
  );
}
