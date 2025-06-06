"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import { SparklesIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

function HeroContent() {
  const handleViewWork = () => {
    window.open("https://github.com/adityachandra512", "_blank", "noopener,noreferrer");
  };

  const handleDownloadCV = () => {
    // Open your GitHub resume repository
    window.open("https://github.com/adityachandra512/resume/blob/main/Jake_s_Resume%20(8).pdf", "_blank", "noopener,noreferrer");
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-6 lg:px-20 mt-20 lg:mt-40 w-full z-[3] min-h-screen relative"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start max-w-7xl">
        
        {/* Name Section - Appears First */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-8 text-4xl lg:text-6xl font-bold text-white max-w-[700px] w-auto h-auto leading-tight"
        >
          <span>
            Aditya 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500"> Chandra </span>
          </span>
        </motion.div>

        {/* Welcome Badge - Appears Second */}
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-3 px-6 border border-[#7042f88b] opacity-[0.9] flex items-center hover:bg-gradient-to-r from-purple-500 to-cyan-500 transition-all duration-300 rounded-full backdrop-blur-sm bg-black/20 w-fit"
        >
          <SparklesIcon 
            className="text-[#b49bff] mr-3 h-5 w-5" 
          />
          <h1 className="Welcome-text text-sm font-medium tracking-wide text-white">
            Full-Stack Developer Portfolio
          </h1>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg lg:text-xl text-gray-300 my-6 max-w-[650px] leading-relaxed font-light"
        >
          Passionate Full-Stack Software Engineer specializing in modern web technologies, 
          mobile applications, and scalable software solutions. Transforming ideas into 
          impactful digital products.
        </motion.p>

        <motion.div
          variants={slideInFromLeft(1)}
          className="flex flex-col sm:flex-row gap-4 mt-4"
        >
          <button 
            onClick={handleViewWork}
            className="group py-4 px-8 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-center text-white cursor-pointer rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 flex items-center justify-center gap-2 min-w-[180px] border-none outline-none"
          >
            View My Work
            <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          
          <motion.a 
                        href="/AdityachandraCV.pdf"
                        download="Aditya_Chandra_CV.pdf"
                        className="py-3 px-8 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white cursor-pointer rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 text-center"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Download CV
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center relative hidden lg:flex"
      >
        <div className="relative group">
          {/* Gradient background - only visible on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-pink-500/10 to-cyan-500/20 rounded-full blur-3xl scale-110 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <Image
            src="/mainIconsdark.svg"
            alt="Technology stack and development icons"
            height={650}
            width={650}
            className="filter drop-shadow-2xl transition-all duration-300 hover:scale-105 hover:drop-shadow-[0_0_30px_rgba(168,85,247,0.4)] cursor-pointer"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default HeroContent;
