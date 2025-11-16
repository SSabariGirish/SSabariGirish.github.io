import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const names = [
  "Sabari Girish Srinivasan", // 0
  "சபரி கிரீஷ் ஸ்ரீனிவாசன்",     // 1
  "सबरी गिरीश श्रीनिवासन",     // 2
  "サバリ・ギリーシュ・スリニヴァサン" // 3
];

function Header() {
  const [nameIndex, setNameIndex] = useState(0);
  
  const intervalRef = useRef(null);

  const startCycling = () => {
    if (intervalRef.current) return;
    
    setNameIndex(1);
    
    intervalRef.current = setInterval(() => {
      setNameIndex(prevIndex => (prevIndex + 1) % names.length);
    }, 1500); // 1.5 seconds per language
  };

  const stopCycling = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = null;
    
    setNameIndex(0);
  };

  return (
    <header 
      className="main-header" 
      id="about"
      onMouseEnter={startCycling}
      onMouseLeave={stopCycling}
    >
      
      <h1 
        className="animated-title"
      >
        <AnimatePresence mode='wait'>
          <motion.span
            key={nameIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            style={{ display: 'inline-block' }}
          >
            {names[nameIndex]}
          </motion.span>
        </AnimatePresence>
      </h1>

      <p className="subtitle">
        MSc Cyber Security Graduate | Full-Stack Developer | GRC & SOC Enthusiast
      </p>

    </header>
  );
}

export default Header;