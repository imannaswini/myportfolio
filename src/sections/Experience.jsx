import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import SectionHeading from '../components/SectionHeading';
import { FaBriefcase } from 'react-icons/fa';

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 md:px-12 relative z-10 bg-white/30 dark:bg-gray-900/30">
      <div className="container mx-auto max-w-4xl">
        <SectionHeading title="Experience & Contributions" subtitle="My journey in clubs, open source, and hackathons." />
        
        <div className="mt-12 relative border-l-2 border-blue-500/30 dark:border-blue-500/20 ml-6 md:ml-0 md:border-l-0">
          {/* Desktop central line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-500/30 dark:bg-blue-500/20 transform -translate-x-1/2"></div>
          
          {portfolioData.experience.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative mb-12 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:ml-0' : 'md:pl-12 md:ml-auto'} pl-8 md:pl-${index % 2 === 0 ? '0' : '12'}`}
            >
              {/* Timeline dot */}
              <div className={`absolute top-0 w-10 h-10 rounded-full bg-blue-500 border-4 border-white dark:border-gray-950 flex items-center justify-center text-white shadow-lg z-10
                -left-5 md:left-auto ${index % 2 === 0 ? 'md:-right-5' : 'md:-left-5'}`}
              >
                <FaBriefcase size={16} />
              </div>
              
              <div className="glass-card p-6 hover:-translate-y-1 transition-transform">
                <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full dark:bg-blue-900/30 dark:text-blue-400">
                  {exp.date}
                </span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{exp.title}</h3>
                <h4 className="text-lg font-medium text-gray-600 dark:text-gray-400 mb-4">{exp.organization}</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  {exp.description}
                </p>
                <div className="mt-4 inline-block px-2 py-1 text-xs font-medium text-purple-600 bg-purple-100 dark:bg-purple-900/30 dark:text-purple-400 rounded">
                  {exp.type}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
