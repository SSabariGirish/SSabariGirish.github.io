import React from 'react';
import ProjectCard from './ProjectCard'; 
// 1. Import Framer Motion
import { motion } from 'framer-motion';

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
];

// 2. Define the animation "variants"
const cardVariants = {
  hidden: { opacity: 0, y: 50 }, 
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      duration: 0.3,
    }
  }
};


function Projects() {
  return (
    <section id="projects">
      <h2>Hands-On Projects</h2>

      <div className="project-list"> 
        
        {projectsData.map((project) => (
          
          // 3. WRAP your <ProjectCard> with the motion.div
          <motion.div
            key={project.title} // The key must be on the outermost element
            variants={cardVariants}
            initial="hidden"
            whileInView="visible" // Triggers when it scrolls into view
            viewport={{ once: true, amount: 0.3 }} // Triggers once
          >
            <ProjectCard 
              // Pass all the props to your beautiful component
              title={project.title}
              badge={project.badge}
              description={project.description}
              videoUrl={project.videoUrl}
              videoTitle={project.videoTitle}
              techTags={project.techTags}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
            />
          </motion.div>

        ))}

      </div>
    </section>
  );
}

export default Projects;