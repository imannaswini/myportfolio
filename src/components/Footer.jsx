import { portfolioData } from '../data/portfolioData';
import { FaGithub, FaLinkedin, FaHackerrank, FaEnvelope } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { socials } = portfolioData.hero;

  return (
    <footer className="py-8 relative z-10 border-t border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 backdrop-blur-md">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
        
        <div className="text-gray-600 dark:text-gray-400 text-sm flex items-center gap-1">
          &copy; {currentYear} {portfolioData.hero.name}. Built using React.
        </div>
        
        <div className="flex gap-4">
          <a href={socials.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-gray-900 hover:bg-gray-200 dark:hover:text-white dark:hover:bg-gray-700 transition-all hover:scale-110">
            <FaGithub size={20} />
          </a>
          <a href={socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-[#0077b5] hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all hover:scale-110">
            <FaLinkedin size={20} />
          </a>
          <a href={socials.twitter} target="_blank" rel="noreferrer" aria-label="Twitter/X" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-gray-900 hover:bg-gray-200 dark:hover:text-white dark:hover:bg-gray-700 transition-all hover:scale-110">
            <FaXTwitter size={20} />
          </a>
          <a href={socials.email} aria-label="Email" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/30 transition-all hover:scale-110">
            <FaEnvelope size={20} />
          </a>
          <a href={socials.hackerrank} target="_blank" rel="noreferrer" aria-label="HackerRank" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-[#2ec866] hover:bg-green-50 dark:hover:bg-green-900/30 transition-all hover:scale-110">
            <FaHackerrank size={20} />
          </a>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
