import Background from "./components/Background";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Perspectives from "./components/Perspectives";
import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen">
      <Background />
      <Nav />
      <main>
        <Hero />
        <Projects />
        <Perspectives />
        <About />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
