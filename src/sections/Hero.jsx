import React from 'react';
import { motion } from 'framer-motion';

const Hero = ({ onStart }) => {
  return (
    <div 
      className="h-screen w-full flex flex-col items-center justify-center relative z-10 cursor-pointer px-4 select-none"
      onClick={onStart} 
    >
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="font-retro text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-arcade-primary mb-6 md:mb-8 text-center leading-tight drop-shadow-[0_0_10px_rgba(57,255,20,0.5)]"
      >
        DEV ARCADE
      </motion.h1>

      <motion.p
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
        className="font-retro text-base sm:text-xl md:text-2xl text-white mt-8 md:mt-12 text-center"
      >
        PRESS START
      </motion.p>
      
      <p className="font-body text-gray-500 text-[10px] md:text-sm mt-4 uppercase tracking-widest text-center">
        (Tap or Click anywhere to begin)
      </p>
    </div>
  );
};

export default Hero;