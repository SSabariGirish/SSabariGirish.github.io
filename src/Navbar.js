import React from 'react';
import ThemeToggle from './ThemeToggle';

function Navbar({ currentIndex, setCurrentIndex, sections }) {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        
        {/* Dynamically render nav buttons based on the sections array */}
        {sections.map((section, index) => (
          <li key={section.id}>
            <button 
              className={`nav-btn ${currentIndex === index ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            >
              {section.name}
            </button>
          </li>
        ))}

        {/* Keep your CV Download and Theme Toggle */}
        <li>
          <a 
            href="SabariGirish_Resume.pdf" 
            className="cta-button" 
            download="SabariGirish_Resume.pdf"
          >
            Download CV
          </a>
        </li>
        <li>
          <ThemeToggle />
        </li>

      </ul>
    </nav>
  );
}

export default Navbar;