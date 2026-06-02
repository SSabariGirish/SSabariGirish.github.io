import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Interests from './Interests';
import Contact from './Contact';
import Navbar from './Navbar';
import { ThemeProvider } from './ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Array of all your compartments
const sections = [
  { id: 'home', name: 'Home', component: <Header /> },
  { id: 'about', name: 'About', component: <About /> },
  { id: 'projects', name: 'Projects', component: <Projects /> },
  { id: 'skills', name: 'Skills', component: <Skills /> },
  { id: 'interests', name: 'Interests', component: <Interests /> },
  { id: 'contact', name: 'Contact', component: <Contact /> }
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSection = () => {
    if (currentIndex < sections.length - 1) setCurrentIndex(currentIndex + 1);
  };

  const prevSection = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  return (
    <ThemeProvider>
      <div className="App">
        {/* Pass state to Navbar so it can control the view */}
        <Navbar currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} sections={sections} />

        <main style={{ minHeight: '70vh' }}>
          {/* AnimatePresence handles the horizontal slide out/in */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              {sections[currentIndex].component}
            </motion.div>
          </AnimatePresence>
        </main>

        {/* Global Navigation Arrows at the bottom */}
        <div className="global-nav">
          <button onClick={prevSection} disabled={currentIndex === 0}>
            <FaChevronLeft /> Previous
          </button>
          
          <button onClick={nextSection} disabled={currentIndex === sections.length - 1}>
            Next <FaChevronRight />
          </button>
        </div>

      </div>
    </ThemeProvider>
  );
}

export default App;