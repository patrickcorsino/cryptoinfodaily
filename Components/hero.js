import React from "react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-[#1A1A1D] to-black text-white py-20 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-extrabold mb-4 tracking-tight leading-tight">
          Track, Analyze, and Conquer the Crypto Market
        </h1>
        <p className="text-gray-400 text-lg mb-6">
          Live data, market trends, and degen insights — all in one dashboard.
        </p>
        <a
          href="#market-section"
          className="inline-block bg-yellow-400 text-black font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-yellow-300 transition duration-300"
        >
          Explore Market
        </a>
      </div>
    </section>
  );
}
