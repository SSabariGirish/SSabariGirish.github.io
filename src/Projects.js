import React, { useState } from 'react';
import ProjectCard from './ProjectCard'; 
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const projectsData = [
  {
    title: 'Wards and Firewalls',
    badge: '🏆 Highly Commended',
    description: 'Designed and developed a D&D-style card game to gamify Cyber Security Awareness training for non-technical audiences. <br><br>Earned High Commendation in the DTII Student Awards.',
    videoUrl: 'https://www.youtube.com/embed/M0zHOSZ1gc0',
    videoTitle: 'Wards and Firewalls Playthrough',
    techTags: 'Python, Flask, Game Design, SQL-Alchemy, HTML, CSS, Jinja2, JavaScript, Cyber Awareness',
    githubUrl: 'https://github.com/SSabariGirish/wards-and-firewalls',
    liveUrl: null,
  },
  {
    title: 'Threat Intelligence Dashboard',
    description: 'Developed a dashboard to check IPs and file hashes against AbuseIPDB and VirusTotal APIs. It also includes an RSS news feed for the latest threat updates.',
    videoUrl: 'https://www.youtube.com/embed/ImAxuPiJyZM',
    videoTitle: 'Threat Intelligence Dashboard Playthrough',
    techTags: 'Python, Flask, JavaScript, VirusTotal API, AbuseIPDB API',
    githubUrl: 'https://github.com/SSabariGirish/threat-intelligence-dashboard',
    liveUrl: null,
  },
  {
    title: 'FlagQuest V: A Mini-CTF Platform',
    description: 'A full-stack, "vulnerable-by-design" web app demonstrating the OWASP Top 10. Features secure user authentication, a live scoreboard, and 5 unique vulnerability challenges.',
    videoUrl: 'https://www.youtube.com/embed/wsF6_EzKBHo',
    videoTitle: 'FlagQuest V Playthrough',
    techTags: 'Python, Flask, SQLAlchemy, Flask-Login, SQLite, JavaScript',
    githubUrl: 'https://github.com/SSabariGirish/mini-ctf-platform.git',
    liveUrl: 'https://sabarigirish28.pythonanywhere.com/',
  },
  {
    title: 'The Trivia Gauntlet',
    description: 'A dynamic quiz game using a Flask backend to call the Google Gemini API for real-time, infinite question generation. Features a vanilla JavaScript frontend to manage the survival-mode game state.',
    videoUrl: 'https://www.youtube.com/embed/0yRXMlnF5k4',
    videoTitle: 'Trivia Gauntlet Playthrough',
    techTags: 'Python, Flask, Google Gemini API, JavaScript, HTML, CSS',
    githubUrl: 'https://github.com/SSabariGirish/trivia-game',
    liveUrl: 'https://trivia-game-fscx.onrender.com/',
  },
  {
    title: 'Python Log File Analyser',
    description: 'A script to simulate SOC tasks by parsing Apache access logs. Uses Regex to hunt for IoCs and detect threats like SQLi, Directory Traversal, and brute-force attacks.',
    videoUrl: 'https://www.youtube.com/embed/ARBCOeZXZWw',
    videoTitle: 'Log File Analyser Playthrough',
    techTags: 'Python, Regex, Log Analysis, Blue Team',
    githubUrl: 'https://github.com/SSabariGirish/log-file-analyser',
    liveUrl: null,
  },
  {
    title: 'GRC Risk Assessment Toolkit',
    description: 'A GRC workflow demo that automates the creation of a prioritised risk register from an asset register and risk assessment, based on a 3x3 qualitative risk matrix.',
    videoUrl: 'https://www.youtube.com/embed/hZCNy_lUGdY',
    videoTitle: 'GRC Toolkit Playthrough',
    techTags: 'Python, Pandas, GRC, Risk Management',
    githubUrl: 'https://github.com/SSabariGirish/grc-risk-assessment-toolkit',
    liveUrl: null,
  },
  {
    title: 'CyberSim Flashcards',
    description: 'A gamified cybersecurity training tool that simulates common attack vectors like SQL injection and phishing to visualise vulnerabilities and demonstrate effective defence strategies.',
    videoUrl: 'https://www.youtube.com/embed/oRZYsHNsSSI',
    videoTitle: 'CyberSim Flashcards Walkthrough',
    techTags: 'TypeScript, React, Vite',
    githubUrl: 'https://github.com/SSabariGirish/cybersim-flashcards',
    liveUrl: 'https://ssabarigirish.github.io/cybersim-flashcards/',
  },
];

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Logic to go to the next project, looping back to 0 if at the end
  const nextProject = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === projectsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Logic to go to the previous project, looping to the end if at 0
  const prevProject = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="projects">
      <h2 style={{ display: 'block', textAlign: 'center', margin: '0 auto 30px auto' }}>
        Hands-On Projects
      </h2>

      <div className="single-carousel-wrapper">
        
        <button 
          className="carousel-arrow left" 
          onClick={prevProject} 
          aria-label="Previous Project"
        >
          <FaChevronLeft />
        </button>

        <div className="project-display-area"> 
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex} 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              style={{ width: '100%' }}
            >
              <ProjectCard 
                title={projectsData[currentIndex].title}
                badge={projectsData[currentIndex].badge}
                description={projectsData[currentIndex].description}
                videoUrl={projectsData[currentIndex].videoUrl}
                videoTitle={projectsData[currentIndex].videoTitle}
                techTags={projectsData[currentIndex].techTags}
                githubUrl={projectsData[currentIndex].githubUrl}
                liveUrl={projectsData[currentIndex].liveUrl}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <button 
          className="carousel-arrow right" 
          onClick={nextProject} 
          aria-label="Next Project"
        >
          <FaChevronRight />
        </button>

      </div>
      
      {/* Optional: Add a small indicator to show 1/7, 2/7, etc. */}
      <p style={{ textAlign: 'center', marginTop: '15px', color: 'var(--border-color)', fontWeight: 'bold' }}>
        {currentIndex + 1} / {projectsData.length}
      </p>

    </section>
  );
}

export default Projects;