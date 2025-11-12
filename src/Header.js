import React from 'react';
import { motion } from 'framer-motion';

function Header() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  const title = "Sabari Girish Srinivasan";
  const letters = Array.from(title);

  return (
    <header className="main-header" id="about">
      
      <motion.h1 
        className="animated-title" 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            variants={letterVariants} 
            style={{ display: 'inline-block' }} 
          >
            {letter === ' ' ? '\u00A0' : letter} 
          </motion.span>
        ))}
      </motion.h1>

      <p className="subtitle">
        MSc Cyber Security Graduate | Full-Stack Developer | GRC & SOC Enthusiast
      </p>

    </header>
  );
}

export default Header;