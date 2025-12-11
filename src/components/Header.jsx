import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX, Menu, X, Github } from 'lucide-react';

const Header = ({ isAudioPlaying, toggleAudio }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    
    { name: 'Character', href: '#about' },
    { name: 'Missions', href: '#projects' },
    { name: 'Credits', href: '#footer' },
  ];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10 h-16"
    >
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
        
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-arcade-primary rounded-full animate-pulse"></div>
          <span className="font-retro text-white text-sm md:text-base tracking-widest">
            WENDEL<span className="text-arcade-primary">VX</span>
          </span>
        </div>

        <nav className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href}
              className="font-retro text-xs text-gray-400 hover:text-arcade-cyan transition-colors hover:shadow-[0_0_10px_rgba(0,255,255,0.5)]"
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={toggleAudio}
            className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
            title={isAudioPlaying ? "Mute Music" : "Play Music"}
          >
            {isAudioPlaying ? (
              <>
                <Volume2 size={18} className="text-green-400" />
                <span className="flex gap-0.5 h-3 items-end">
                  <span className="w-0.5 bg-green-400 h-2 animate-[pulse_0.5s_infinite]"></span>
                  <span className="w-0.5 bg-green-400 h-3 animate-[pulse_0.7s_infinite]"></span>
                  <span className="w-0.5 bg-green-400 h-1 animate-[pulse_0.6s_infinite]"></span>
                </span>
              </>
            ) : (
              <VolumeX size={18} />
            )}
          </button>
          
          <div className="h-4 w-px bg-gray-700"></div>
          
          <a href="https://github.com/wendelvx" target="_blank" className="flex items-center gap-2 px-3 py-1 border border-gray-600 rounded hover:bg-gray-800 transition-colors">
             <Github size={14} />
             <span className="font-body text-xs text-gray-300">GitHub</span>
          </a>
        </div>

        <button 
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-16 left-0 w-full bg-black/95 backdrop-blur-xl border-b border-gray-800 p-6 flex flex-col gap-6 shadow-2xl h-screen"
        >
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a 
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-retro text-lg text-gray-300 hover:text-arcade-primary border-b border-gray-800 pb-2"
              >
                {`> ${item.name}`}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-4 mt-2">
            <button 
              onClick={() => {
                toggleAudio();
                setMobileMenuOpen(false);
              }}
              className="flex items-center gap-3 font-retro text-sm text-gray-300 hover:text-white transition-colors"
            >
              {isAudioPlaying ? <Volume2 size={20} className="text-green-400" /> : <VolumeX size={20} />}
              {isAudioPlaying ? "MUTE MUSIC" : "PLAY MUSIC"}
            </button>

            <a 
              href="https://github.com/wendelvx" 
              target="_blank"
              className="flex items-center gap-3 font-retro text-sm text-gray-300 hover:text-white transition-colors"
            >
              <Github size={20} />
              GITHUB PROFILE
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;