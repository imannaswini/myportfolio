import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-scroll';
import { FiArrowUp } from 'react-icons/fi';
import LoadingScreen from './components/LoadingScreen';
import Background from './components/Background';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Education from './sections/Education';
import CodingProfiles from './sections/CodingProfiles';
import Contact from './sections/Contact';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Portfolio | Full Stack & AI Engineer</title>
        <meta name="description" content="Modern Developer Portfolio built with React and Tailwind CSS" />
      </Helmet>

      {isLoading && <LoadingScreen />}

      <Background />
      <Navbar />

      <main className="overflow-hidden">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <CodingProfiles />
        <Contact />
      </main>

      <Footer />

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Link
          to="hero"
          smooth={true}
          duration={500}
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center shadow-lg shadow-blue-500/30 cursor-pointer transition-all z-50 hover:-translate-y-1"
        >
          <FiArrowUp size={24} />
        </Link>
      )}
    </>
  );
}

export default App;
