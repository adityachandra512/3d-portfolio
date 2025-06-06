"use client";

import React from "react";
import { motion } from "framer-motion";

interface Props {
  src: string;
  width: number;
  height: number;
  index: number;
  name: string;
}

const SkillDataProvider = ({ src, width, height, index, name }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: index * 0.1 }}
      className="group relative flex flex-col items-center justify-center p-6 bg-black/20 backdrop-blur-sm border border-gray-700/50 rounded-xl hover:border-purple-500/50 transition-all duration-300 hover:bg-gradient-to-br hover:from-purple-500/10 hover:to-cyan-500/10"
    >
      <motion.img
        src={src}
        width={width}
        height={height}
        alt={name}
        className="transition-all duration-300 group-hover:scale-110 filter drop-shadow-lg"
        whileHover={{ scale: 1.1 }}
      />
      <motion.p
        className="text-white text-sm mt-3 font-medium opacity-80 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 0.8, y: 0 }}
        transition={{ delay: index * 0.1 + 0.2 }}
      >
        {name}
      </motion.p>
    </motion.div>
  );
};

export default SkillDataProvider;
