import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { portfolioData } from '../data/portfolioData';
import SectionHeading from '../components/SectionHeading';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = ['All', ...new Set(portfolioData.projects.map(p => p.category))];
  
  const filteredProjects = activeCategory === 'All' 
    ? portfolioData.projects 
    : portfolioData.projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 px-6 md:px-12 relative z-10">
      <div className="container mx-auto">
        <SectionHeading title="Featured Projects" subtitle="A selection of my recent work and personal projects." />
        
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' 
                  : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <Tilt
                key={project.title}
                tiltMaxAngleX={5}
                tiltMaxAngleY={5}
                scale={1.02}
                transitionSpeed={2000}
                className="h-full"
              >
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="glass-card h-full flex flex-col overflow-hidden group"
                >
                  <div className="relative h-48 overflow-hidden shrink-0">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-500 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, idx) => (
                        <span key={idx} className="px-2 py-1 text-xs rounded bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium border border-blue-200 dark:border-blue-800/30">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* View Repository Button */}
                    <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-800">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noreferrer"
                        className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-gray-100 dark:bg-white/5 text-gray-900 dark:text-white text-sm font-semibold hover:bg-gray-200 dark:hover:bg-white/10 transition-all border border-transparent dark:border-white/10 group/btn"
                      >
                        <FaGithub size={16} className="group-hover/btn:rotate-12 transition-transform" />
                        View Repository
                      </a>
                    </div>
                  </div>
                </motion.div>
              </Tilt>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
