import React from 'react';

function Projects() {
  return (
    <section id="projects">
      <h2>My Projects</h2>

      <div className="project-list">        
        <div className="project-card">
          <h3>Threat Intelligence Dashboard</h3>
          <p>
            Developed a Threat Intelligence Dashboard to check IPs and file hashes 
            against AbuseIPDB and VirusTotal APIs. It also includes an RSS 
            news feed for the latest threat updates. 
          </p>
          
          <div className="video-responsive">
            <iframe 
              src="https://www.youtube.com/embed/ImAxuPiJyZM" 
              title="Threat Intelligence Dashboard Playthrough" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>

          <p>
            <strong>Technologies Used:</strong> Python, Flask, JavaScript,
            VirusTotal API, AbuseIPDB API
          </p>
          <div className="project-links">
            <a href="https://github.com/SSabariGirish/threat-intelligence-dashboard" target="_blank" rel="noopener noreferrer">View on GitHub</a>
          </div>
        </div>

        
        <div className="project-card">
          <h3>Wards and Firewalls</h3>
          <p>
            Designed and developed a card-based, D&D-style game that gamifies 
            Cyber Security Awareness training for non-technical audiences.<br></br><br></br>
            Earned positive reviews from members of Cyber Innovation Hub <br></br>
            Earned High Commendation in the DTII Student Awards category 
          </p>
          
          <div className="video-responsive">
            <iframe 
              src="https://www.youtube.com/embed/M0zHOSZ1gc0" 
              title="Wards and Firewalls Playthrough" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>

          <p>
            <strong>Technologies Used:</strong> (e.g., JavaScript, React, HTML/CSS)
          </p>
          <div className="project-links">
            <a href="https://github.com/SSabariGirish/wards-and-firewalls" target="_blank" rel="noopener noreferrer">View on GitHub</a>
          </div>
        </div>

        <div className="project-card">
          <h3>FlagQuest V: A Mini-CTF Platform</h3>
          <p>
            A full-stack, 'vulnerable-by-design' web app demonstrating practical
            skills in application security and the OWASP Top 10.
          </p>
          <p>
            The platform is a complete CTF game with secure user authentication, 
            a live scoreboard, and 5 unique vulnerability challenges.
          </p>
          
          <div className="video-responsive">
            <iframe 
              src="https://www.youtube.com/embed/wsF6_EzKBHo" 
              title="FlagQuest V Playthrough" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>

          <p>
            <strong>Technologies Used:</strong> Python, Flask, Flask-SQLAlchemy, 
            Flask-Login, SQLite, HTML/CSS, JavaScript
          </p>
          <div className="project-links">
            <a 
              href="https://github.com/SSabariGirish/mini-ctf-platform.git" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              View on GitHub
            </a><br></br>
            <a 
              href="https://sabarigirish28.pythonanywhere.com/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Play it Now
            </a>
          </div>
        </div>

        <div className="project-card">
          <h3>GRC Risk Assessment Toolkit</h3>
          <p>
            A GRC workflow demonstration. Automates the creation of a prioritised
            risk register from an asset register and risk assessment, based on
            a 3x3 qualitative risk matrix.
          </p>
          
          <div className="video-responsive">
            <iframe 
              src="https://www.youtube.com/embed/hZCNy_lUGdY" 
              title="GRC Toolkit Playthrough" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>

          <p>
            <strong>Technologies Used:</strong> Python, Pandas
          </p>
          <div className="project-links">
            <a 
              href="https://github.com/SSabariGirish/grc-risk-assessment-toolkit" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          </div>
        </div>

        <div className="project-card">
          <h3>Python Log File Analyser</h3>
          <p>
            A script to simulate SOC tasks by parsing Apache access logs. Uses
            Regex to hunt for IoCs and detect threats like SQLi, Directory Traversal,
            and brute-force attacks, generating a final incident report.
          </p>
          
          <div className="video-responsive">
            <iframe 
              src="https://www.youtube.com/embed/ARBCOeZXZWw" 
              title="Log File Analyser Playthrough" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>

          <p>
            <strong>Technologies Used:</strong> Python (Regex, Collections)
          </p>
          <div className="project-links">
            <a 
              href="https://github.com/SSabariGirish/log-file-analyser" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          </div>
        </div>

        <div className="project-card">
          <h3>The Trivia Gauntlet</h3>
          <p>
            A dynamic quiz game that uses a Python/Flask backend to call the 
            Google Gemini API for real-time, infinite question generation. 
            Features a vanilla JavaScript frontend to manage the survival-mode game state.
          </p>

          <div className="video-responsive">
            <iframe 
              src="https://www.youtube.com/embed/0yRXMlnF5k4" 
              title="Trivia Gauntlet Playthrough" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>

          <p>
            <strong>Technologies Used:</strong> Python, Flask, Google Gemini API, 
            Vanilla JavaScript, HTML/CSS
          </p>
          <div className="project-links">
            <a 
              href="https://github.com/SSabariGirish/trivia-game" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              View on GitHub
            </a><br></br>
            <a 
              href="https://trivia-game-fscx.onrender.com/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Play it Now
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Projects;