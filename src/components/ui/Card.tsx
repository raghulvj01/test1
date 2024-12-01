import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className = '', hover = true }) => {
  return (
    <motion.div
      whileHover={hover ? { y: -5 } : undefined}
      className={`
        relative overflow-hidden
        before:absolute before:inset-0 
        before:bg-gradient-to-r before:from-primary/5 before:to-secondary/5 
        before:rounded-2xl before:blur-xl
        ${hover ? 'before:group-hover:blur-2xl' : ''}
        ${className}
      `}
    >
      <div className="relative glass rounded-2xl p-6">
        {children}
      </div>
    </motion.div>
  );
};

export default Card;