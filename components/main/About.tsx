"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import { SparklesIcon, MapPinIcon, CalendarIcon } from "@heroicons/react/24/solid";

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center px-6 lg:px-20 py-20 w-full relative overflow-hidden"
    >
      {/* Section Header */}
      <motion.div
        variants={slideInFromTop}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col items-center mb-16"
      >
        <div className="Welcome-box py-3 px-6 border border-[#7042f88b] opacity-[0.9] flex items-center hover:bg-gradient-to-r from-purple-500 to-cyan-500 transition-all duration-300 rounded-full backdrop-blur-sm bg-black/20 w-fit mb-8">
          <SparklesIcon className="text-[#b49bff] mr-3 h-5 w-5" />
          <h1 className="Welcome-text text-sm font-medium tracking-wide text-white">
            About Me
          </h1>
        </div>
        
        <h2 className="text-4xl lg:text-5xl text-white font-bold text-center mb-4">
          Get to Know <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Me Better</span>
        </h2>
        
        <p className="text-lg text-gray-300 text-center max-w-2xl">
          Passionate developer with a love for creating innovative solutions and building meaningful digital experiences.
        </p>
      </motion.div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 w-full max-w-7xl">
        
        {/* Left Side - Image */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex-1 flex justify-center items-center"
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-pink-500/10 to-cyan-500/20 rounded-2xl blur-2xl scale-110 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-900/20 to-cyan-900/20 backdrop-blur-sm border border-purple-500/30 p-6">
              <Image
                src="/picprofile.jpg"
                alt="Aditya Chandra"
                width={320}
                height={384}
                className="w-80 h-96 object-cover rounded-xl transition-all duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Content */}
        <motion.div
          variants={slideInFromRight(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex-1 space-y-6"
        >
            
          <div className="space-y-4">
            <p className="text-lg text-gray-300 leading-relaxed">
              Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-semibold">Aditya Chandan</span> — 
              a passionate developer with a strong foundation in web development, Python programming, and modern frameworks like React, Flask, and Django. 
              I love building user-centric applications that combine clean design with powerful functionality.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              Along with web development, I actively work on mobile app development using React Native, creating smooth, cross-platform apps 
              that deliver consistent performance and a great user experience. From responsive UIs to feature-rich mobile solutions, 
              I enjoy bringing ideas to life on both web and mobile platforms.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              With hands-on experience from multiple internships — including projects in fuel economy systems and chatbot development — 
              I&apos;ve built real-world solutions using technologies like PCAN-Basic, MongoDB, and Supabase. Whether it&apos;s designing authentication systems, 
              optimizing backend logic, or integrating external APIs, I thrive on solving problems through code.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              I&apos;m always eager to explore new technologies — from AI models and speech-to-text systems to supply chain analytics and parallel computing. 
              When I&apos;m not coding, you&apos;ll likely find me experimenting with new tools, reading about Nikola Tesla, or imagining what it&apos;d be like to read minds!
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500 font-semibold">Let&apos;s connect and create something awesome together.</span>
            </p>
          </div>

          {/* Personal Info */}
          <div className="space-y-4 pt-6">
            <div className="flex items-center gap-3">
              <MapPinIcon className="w-5 h-5 text-purple-500" />
              <span className="text-gray-300">Based in India</span>
            </div>
            <div className="flex items-center gap-3">
              <CalendarIcon className="w-5 h-5 text-cyan-500" />
              <span className="text-gray-300">2+ Years of Experience</span>
            </div>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <motion.a 
              href="/Jake_s_Resume.pdf"
              download="Aditya_Chandra_Resume.pdf"
              className="py-3 px-8 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white cursor-pointer rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
            </motion.a>
            
            <motion.a 
              href="#contact"
              className="py-3 px-8 border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white cursor-pointer rounded-lg font-semibold transition-all duration-300 text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
