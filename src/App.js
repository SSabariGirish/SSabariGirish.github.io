import logo from './logo.svg';
import './App.css';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Header from './Header';
import Interests from './Interests';
import Navbar from './Navbar';
import Skills from './Skills';
import { ThemeProvider } from './ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Navbar />
        <Header />
        <About />
        <Projects />
        <Skills />
        <Interests />
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;
