import React from 'react';
import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      duration: 0.3
    }
  }
};

function About() {
  return (
    <motion.section 
      id="about"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2>About Me</h2>
      
      <p>
        Hello! I'm Sabari Girish, a recent MSc Cyber Security graduate from Cardiff 
        University with a background in software engineering from my time at Accenture.
      </p>
      
      <p>
        I'm fascinated by the challenge of securing the systems we build. My 
        Master's gave me a strong foundation in risk management and security 
        operations, but I'm a 'builder' at heart. I believe the best way to 
        learn is by doing.
      </p>

      <p>
        That's why I've spent my time building practical, hands-on projects. I've built a 
        {' '}<a href="https://github.com/SSabariGirish/log-file-analyser" target="_blank" rel="noopener noreferrer">Python Log Analyser</a>{' '}
        to hunt for threats like a SOC analyst, a {' '}
        <a href="https://github.com/SSabariGirish/grc-risk-assessment-toolkit" target="_blank" rel="noopener noreferrer">GRC Risk Toolkit</a>{' '}
        to automate risk assessments, and a {' '}
        <a href="https://github.com/SSabariGirish/mini-ctf-platform" target="_blank" rel="noopener noreferrer">vulnerable-by-design CTF platform</a>{' '}
        to explore the OWASP Top 10 and my interest towards penetration testing.
      </p>

      <p>
        I'm now eager to bring this blend of development, GRC, and SOC/Offensive Security
        skills to a graduate or junior cybersecurity role here in the UK.
      </p>

    </motion.section>
  );
}

export default About;