import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import SectionHeading from '../components/SectionHeading';
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
  return (
    <section id="education" className="py-20 px-6 md:px-12 relative z-10">
      <div className="container mx-auto max-w-4xl">
        <SectionHeading title="Education" subtitle="My academic background." />
        
        <div className="mt-12 space-y-8">
          {portfolioData.education.map((edu, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 flex flex-col md:flex-row gap-6 items-start"
            >
              <div className="w-16 h-16 rounded-2xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                <FaGraduationCap size={32} />
              </div>
              
              <div className="flex-grow">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{edu.degree}</h3>
                    <h4 className="text-xl font-medium text-blue-600 dark:text-blue-400 mt-1">{edu.institution}</h4>
                  </div>
                  <span className="inline-block px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-semibold text-gray-700 dark:text-gray-300">
                    {edu.period}
                  </span>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-lg">
                  {edu.details}
                </p>
                
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 font-semibold">
                  <span>CGPA:</span>
                  <span>{edu.cgpa}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
