import React from 'react';
import HeroContent from '../sub/HeroContent';

function Hero() {
  return (
    <div className='relative flex flex-col h-full w-full' id="hero">
      <video
        autoPlay
        muted
        loop
        className='rotate-180 absolute top-[-340px] h-full w-full left-0 z-[1] object-cover opacity-60'>
        <source src='/blackhole.webm' type='video/webm' />
      </video>
      {/* Overlay to blend video with star background */}
      <div className="absolute inset-0 bg-black/20 z-[2]"></div>
      <div className="relative z-[3]">
        <HeroContent />
      </div>
    </div>
  );
}

export default Hero;
