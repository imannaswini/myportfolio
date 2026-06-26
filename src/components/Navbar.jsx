import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FiSun, FiMoon, FiMenu, FiX, FiEye } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext.jsx';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolioData.js';

const navLinks = [
  { name: 'Home', to: 'hero' },
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Projects', to: 'projects' },
  { name: 'Contributions', to: 'experience' },
  { name: 'Contact', to: 'contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-3 shadow-lg' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link 
          to="hero" 
          smooth={true} 
          duration={500} 
          className="text-2xl font-bold text-gray-900 dark:text-white cursor-pointer"
        >
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-gradient"
          >
            Mannaswini
          </motion.span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.to}
              smooth={true}
              duration={500}
              spy={true}
              activeClass="text-blue-500 font-semibold"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 cursor-pointer transition-colors relative group text-sm lg:text-base"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
            </Link>
          ))}
          <div className="flex items-center gap-4 border-l border-gray-300 dark:border-gray-700 pl-4 lg:pl-6">
            <button 
              onClick={toggleTheme} 
              className="relative w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors text-gray-700 dark:text-gray-300 overflow-hidden"
              aria-label="Toggle Theme"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={isDarkMode ? 'dark' : 'light'}
                  initial={{ y: -20, opacity: 0, rotate: -90 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  exit={{ y: 20, opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                  className="absolute"
                >
                  {isDarkMode ? <FiSun size={20} className="text-yellow-400" /> : <FiMoon size={20} className="text-blue-600" />}
                </motion.div>
              </AnimatePresence>
            </button>
            <a 
              href={portfolioData.hero.socials.resume} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium text-sm hover:from-blue-500 hover:to-purple-500 transition-all shadow-[0_0_15px_rgba(37,99,235,0.4)] hover:shadow-[0_0_25px_rgba(37,99,235,0.6)] hover:scale-105 border border-white/10"
            >
              <FiEye size={16} /> View Resume
            </a>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <button 
            onClick={toggleTheme} 
            className="relative w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors text-gray-700 dark:text-gray-300 overflow-hidden"
            aria-label="Toggle Theme"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={isDarkMode ? 'dark' : 'light'}
                initial={{ y: -20, opacity: 0, rotate: -90 }}
                animate={{ y: 0, opacity: 1, rotate: 0 }}
                exit={{ y: 20, opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
                className="absolute"
              >
                {isDarkMode ? <FiSun size={20} className="text-yellow-400" /> : <FiMoon size={20} className="text-blue-600" />}
              </motion.div>
            </AnimatePresence>
          </button>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-700 dark:text-gray-300"
          >
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full glass shadow-lg py-4 px-6 flex flex-col gap-4"
        >
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.to}
              smooth={true}
              duration={500}
              spy={true}
              activeClass="text-blue-500 font-semibold"
              className="text-gray-800 dark:text-gray-200 hover:text-blue-500 text-lg py-2 border-b border-gray-200 dark:border-gray-800 last:border-0"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <a 
            href={portfolioData.hero.socials.resume} 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-center gap-2 mt-4 px-4 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:from-blue-500 hover:to-purple-500 transition-all shadow-[0_0_15px_rgba(37,99,235,0.4)]"
          >
            <FiEye size={18} /> View Resume
          </a>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
