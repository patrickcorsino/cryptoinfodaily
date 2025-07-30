// components/Hero.js
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section
      className="w-full bg-gradient-to-br from-purple-800 via-indigo-700 to-purple-900 text-white py-16 px-6 text-center rounded-2xl shadow-lg mb-6"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
        Welcome to <span className="text-yellow-300">CryptoInfoDaily</span>
      </h1>
      <p className="text-lg md:text-xl font-light">
        The most engaging and gamified crypto dashboard in the game.
      </p>
    </motion.section>
  );
};

export default Hero;
