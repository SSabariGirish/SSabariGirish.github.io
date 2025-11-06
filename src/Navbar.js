import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#interests">Interests</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a 
            href="SabariGirish_Resume.pdf" 
            className="cta-button" 
            download="SabariGirish_Resume.pdf"
        >
        Download CV
            </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;