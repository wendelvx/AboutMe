import React from 'react';
import { motion } from 'framer-motion';

const NeonButton = ({ children, onClick, color = 'primary', className = '' }) => {
  const colorClasses = {
    primary: 'border-arcade-primary text-arcade-primary hover:bg-arcade-primary hover:text-arcade-dark shadow-neon-green',
    secondary: 'border-arcade-secondary text-arcade-secondary hover:bg-arcade-secondary hover:text-arcade-dark shadow-neon-magenta',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`
        px-6 py-2 
        border-2 
        font-retro text-sm uppercase tracking-widest
        transition-colors duration-200
        cursor-pointer
        ${colorClasses[color]}
        ${className}
      `}
    >
      {children}
    </motion.button>
  );
};

export default NeonButton;