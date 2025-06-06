"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromTop } from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";

const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-3 px-6 border border-[#7042f88b] opacity-[0.9] flex items-center hover:bg-gradient-to-r from-purple-500 to-cyan-500 transition-all duration-300 rounded-full backdrop-blur-sm bg-black/20 w-fit mb-8"
      >
        <SparklesIcon className="text-[#b49bff] mr-3 h-5 w-5" />
        <h1 className="Welcome-text text-sm font-medium tracking-wide text-white">
          Skills & Technologies
        </h1>
      </motion.div>

      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-4xl lg:text-5xl text-white font-bold text-center mb-4"
      >
        Technical{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          Expertise
        </span>
      </motion.div>

      <motion.div
        variants={slideInFromLeft(0.7)}
        className="text-lg text-gray-300 text-center max-w-2xl mb-16"
      >
        A comprehensive overview of my technical skills and the technologies I work
        with to build modern applications.
      </motion.div>
    </div>
  );
};

export default SkillText;
