import { Socials } from '@/constants';
import React from 'react';
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className='w-full h-[75px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001420] backdrop-blur-lg z-50 px-10 transition-all duration-300 hover:h-[85px] hover:bg-[#03001435]'>
      <div className='w-full h-full flex flex-row items-center justify-between m-auto px-[10px]'>
        {/* Enhanced Name Section */}
        <a href="#about-me" className='h-auto w-auto flex flex-row items-center group'>
          <span className='font-bold ml-[10px] block text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-lg md:text-xl hover:text-xl md:hover:text-2xl transition-all duration-500 hover:scale-110 relative hover:from-cyan-400 hover:via-purple-500 hover:to-pink-500'>
            Aditya Chandra
            <span className='absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-purple-500 to-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300'></span>
          </span>
        </a>

        {/* Enhanced Navigation Menu */}
        <div className="w-[650px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f880] bg-[#03001460] backdrop-blur-sm mr-[15px] px-[25px] py-[12px] rounded-full text-gray-200 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-300 hover:bg-[#03001480]">
            <a href="#hero" className="cursor-pointer hover:text-purple-300 transition-all duration-300 text-sm hover:text-lg hover:font-semibold relative group px-2 py-1 hover:scale-110">
              <span className="relative z-10">Home</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
            </a>
            <a href="#about" className="cursor-pointer hover:text-purple-300 transition-all duration-300 text-sm hover:text-lg hover:font-semibold relative group px-2 py-1 hover:scale-110">
              <span className="relative z-10">About</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
            </a>
            <a href="#skills" className="cursor-pointer hover:text-purple-300 transition-all duration-300 text-sm hover:text-lg hover:font-semibold relative group px-2 py-1 hover:scale-110">
              <span className="relative z-10">Skills</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
            </a>
            <a href="#experience" className="cursor-pointer hover:text-purple-300 transition-all duration-300 text-sm hover:text-lg hover:font-semibold relative group px-2 py-1 hover:scale-110">
              <span className="relative z-10">Experience</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
            </a>
            <a href="#projects" className="cursor-pointer hover:text-purple-300 transition-all duration-300 text-sm hover:text-lg hover:font-semibold relative group px-2 py-1 hover:scale-110">
              <span className="relative z-10">Projects</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
            </a>
          </div>
        </div>

        {/* Enhanced Socials Section */}
        <div className="flex flex-row gap-6">
          {Socials.map((social) => (
            <a 
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              key={social.name}
              className="group relative transform hover:scale-125 transition-all duration-300"
            >
              <Image
                src={social.src}
                alt={social.name}
                width={28}
                height={28}
                className="cursor-pointer transition-all duration-300 hover:brightness-150 hover:drop-shadow-lg filter hover:saturate-200 relative z-10"
              />
              {/* Enhanced Tooltip */}
              <span className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-lg backdrop-blur-sm">
                {social.name}
                <div className="absolute top-[-4px] left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gradient-to-r from-purple-600 to-pink-600 rotate-45"></div>
              </span>
              {/* Enhanced Glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/30 to-pink-500/30 scale-0 group-hover:scale-200 transition-all duration-500 -z-10 blur-sm"></div>
              {/* Pulse effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400/20 to-pink-400/20 scale-100 group-hover:scale-150 transition-all duration-700 -z-20 animate-pulse opacity-0 group-hover:opacity-100"></div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar;