import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import SectionHeading from '../components/SectionHeading';
import { FaGithub, FaLinkedin, FaHackerrank } from 'react-icons/fa';

const CodingProfiles = () => {
  const { github, linkedin, hackerrank } = portfolioData.hero.socials;
  
  const profiles = [
    { name: "GitHub", icon: <FaGithub size={40} />, url: github, color: "text-gray-900 dark:text-white", bg: "bg-gray-100 dark:bg-gray-800", hover: "hover:bg-gray-200 dark:hover:bg-gray-700" },
    { name: "LinkedIn", icon: <FaLinkedin size={40} />, url: linkedin, color: "text-blue-600", bg: "bg-blue-50 dark:bg-blue-900/20", hover: "hover:bg-blue-100 dark:hover:bg-blue-900/40" },
    { name: "HackerRank", icon: <FaHackerrank size={40} />, url: hackerrank, color: "text-green-500", bg: "bg-green-50 dark:bg-green-900/20", hover: "hover:bg-green-100 dark:hover:bg-green-900/40" }
  ];

  return (
    <section id="profiles" className="py-20 px-6 md:px-12 relative z-10 bg-white/30 dark:bg-gray-900/30">
      <div className="container mx-auto">
        <SectionHeading title="Coding Profiles" subtitle="Find me across the web." />
        
        <div className="flex flex-wrap justify-center gap-8 mt-12">
          {profiles.map((profile, index) => (
            <motion.a 
              key={index}
              href={profile.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className={`w-40 h-40 rounded-2xl flex flex-col items-center justify-center gap-4 ${profile.bg} ${profile.hover} transition-all shadow-lg border border-gray-200 dark:border-gray-800`}
            >
              <div className={`${profile.color}`}>
                {profile.icon}
              </div>
              <span className="font-semibold text-gray-800 dark:text-gray-200">{profile.name}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;
