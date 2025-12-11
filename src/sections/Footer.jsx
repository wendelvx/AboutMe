import React, { useState } from 'react';
import { Github, Linkedin, Mail, Coins } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const [copied, setCopied] = useState(false);
  const email = "wendelpw22@gmail.com"; 

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="w-full bg-black py-10 md:py-16 flex flex-col items-center justify-center relative border-t-4 border-arcade-primary/20">
      
      <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-transparent via-arcade-primary to-transparent blur-sm"></div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-center px-4"
      >
        <h2 className="font-retro text-3xl md:text-4xl text-red-500 mb-2 animate-pulse">
          GAME OVER
        </h2>
        <p className="font-retro text-xs text-yellow-400 mb-8 blink">
          CREDITS: 1
        </p>

        <div className="flex gap-4 md:gap-6 mb-10 justify-center">
          <a href="https://github.com/wendelvx" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white hover:scale-125 transition-transform duration-200">
            <Github size={28} className="md:w-8 md:h-8" />
          </a>
          <a href="https://linkedin.com/in/paulo-wendel-9454ba322" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 hover:scale-125 transition-transform duration-200">
            <Linkedin size={28} className="md:w-8 md:h-8" />
          </a>
          <a href={`mailto:${email}`} className="text-gray-400 hover:text-red-400 hover:scale-125 transition-transform duration-200">
            <Mail size={28} className="md:w-8 md:h-8" />
          </a>
        </div>

        <div className="relative group">
          <button 
            onClick={handleCopyEmail}
            className="flex items-center gap-2 px-6 py-2 md:px-8 md:py-3 bg-transparent border-2 border-yellow-500 text-yellow-500 font-retro text-xs md:text-sm hover:bg-yellow-500 hover:text-black transition-colors rounded shadow-[0_0_15px_rgba(234,179,8,0.4)]"
          >
            <Coins size={16} className="md:w-[18px] md:h-[18px]" />
            {copied ? "EMAIL COPIED!" : "INSERT COIN"}
          </button>
          
          <p className="absolute -bottom-8 left-0 right-0 text-center text-[10px] text-gray-600 font-body opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">
            (Copiar contato para clipboard)
          </p>
        </div>

        <p className="mt-12 md:mt-16 font-body text-[10px] md:text-xs text-gray-700">
          © 2024 WendelVx. Built with React & Tailwind.
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;