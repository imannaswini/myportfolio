import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import SectionHeading from '../components/SectionHeading';

const Skills = () => {
  const categories = [...new Set(portfolioData.skills.map(skill => skill.category))];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="py-20 px-6 md:px-12 relative z-10 bg-white/30 dark:bg-gray-900/30">
      <div className="container mx-auto">
        <SectionHeading title="Skills & Technologies" subtitle="Here are the tools I use to bring ideas to life." />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {categories.map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-6"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 border-b border-gray-200 dark:border-gray-800 pb-2">
                {category}
              </h3>
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-4"
              >
                {portfolioData.skills.filter(s => s.category === category).map((skill, index) => (
                  <motion.div 
                    key={index}
                    variants={itemVariants}
                    className="flex items-center gap-2 px-4 py-2 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-lg hover:bg-white/80 dark:hover:bg-gray-800/80 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:border-blue-500/30 transition-all duration-300 group cursor-default"
                  >
                    <skill.icon className={`text-xl ${skill.color} group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`} />
                    <span className="font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
