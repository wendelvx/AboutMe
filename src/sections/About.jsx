import React, { useState } from 'react'; 
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import avatarImg from '../assets/avatar.png';

const StatBar = ({ label, percentage, colorClass }) => (
  <div className="mb-4 md:mb-6">
    <div className="flex justify-between font-retro text-[10px] md:text-xs mb-2 text-gray-300">
      <span>{label}</span>
      <span>{percentage}%</span>
    </div>
    <div className="h-3 md:h-4 w-full bg-gray-800 border-2 border-gray-700 relative">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${percentage}%` }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className={`h-full ${colorClass} shadow-lg`}
      />
    </div>
  </div>
);

const About = () => {
  const [isImageLoading, setIsImageLoading] = useState(true);

  return (
    <section className="min-h-screen flex items-center justify-center p-4 md:p-8 relative z-10">
      
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <div className="relative p-2 border-4 border-arcade-primary shadow-neon-green bg-arcade-dark/50 mb-6">
            
            {isImageLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-900 z-10">
                <div className="w-12 h-12 border-4 border-arcade-primary border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}

            <img 
              src={avatarImg}
              alt="Avatar Wendel" 
              loading="lazy"
              onLoad={() => setIsImageLoading(false)}
              className={`w-48 h-48 md:w-80 md:h-80 object-cover bg-gray-900 transition-opacity duration-500 ${isImageLoading ? 'opacity-0' : 'opacity-100'}`}
            />
            
            <div className="absolute -bottom-3 -right-3 bg-arcade-primary text-arcade-dark font-retro text-[10px] md:text-xs px-2 py-1 z-20">
              LVL. 25
            </div>
          </div>
          
          <h2 className="font-retro text-xl md:text-2xl text-arcade-primary text-center">
            PLAYER: WENDEL
          </h2>
          <p className="font-body text-sm md:text-base text-gray-400 text-center mt-2 max-w-xs">
            "Full Stack Developer focado em Node.Js e React."
          </p>
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-arcade-dark/80 border-2 border-gray-700 p-6 md:p-8 shadow-xl">
            <h3 className="font-retro text-lg md:text-xl text-arcade-secondary mb-6 md:mb-8 border-b-2 border-gray-700 pb-4">
              CHARACTER STATS
            </h3>

            <StatBar 
              label="BACKEND (Node/Laravel/Django)" 
              percentage={97} 
              colorClass="bg-arcade-primary shadow-neon-green" 
            />
            
            <StatBar 
              label="FRONTEND (React/Vue)" 
              percentage={93} 
              colorClass="bg-arcade-secondary shadow-neon-magenta" 
            />
            
            <StatBar 
              label="DATABASE (SQL/NoSQL)" 
              percentage={95} 
              colorClass="bg-arcade-cyan shadow-[0_0_10px_#00ffff]" 
            />

            <div className="mt-6 md:mt-8">
              <p className="font-retro text-[10px] md:text-xs text-gray-500 mb-4">INVENTORY:</p>
              <div className="flex flex-wrap gap-2">
                {['Docker', 'Git', 'Go', 'Tailwind', 'Socket.IO', 'Redis'].map((tech) => (
                  <span key={tech} className="px-2 py-1 md:px-3 md:py-1 bg-gray-800 border border-gray-600 font-body text-[10px] md:text-xs text-gray-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;