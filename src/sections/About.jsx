import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData.js';
import SectionHeading from '../components/SectionHeading.jsx';
import { FiCode, FiCpu, FiCloud } from 'react-icons/fi';

const About = () => {
  const { introduction, goals } = portfolioData.about;

  const features = [
    { icon: <FiCode size={24} />, title: "Full Stack", desc: "Building end-to-end applications" },
    { icon: <FiCpu size={24} />, title: "AI/ML", desc: "Integrating intelligent models" },
    { icon: <FiCloud size={24} />, title: "Cloud", desc: "Deploying scalable solutions" },
  ];

  return (
    <section id="about" className="py-20 px-6 md:px-12 relative z-10">
      <div className="container mx-auto max-w-5xl">
        <SectionHeading title="About Me" subtitle="A brief introduction about who I am and what I do." />
        
        <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
          
          {/* Visual Code Snippet Element instead of Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-full min-h-[300px]"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-3xl rounded-full"></div>
            <div className="relative h-full glass-card rounded-2xl p-6 border border-white/10 flex flex-col font-mono text-sm">
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="text-gray-300 flex-1 overflow-hidden">
                <p className="text-purple-400">const <span className="text-blue-400">developer</span> = {'{'}</p>
                <p className="ml-4">name: <span className="text-green-400">"P A Mannaswini"</span>,</p>
                <p className="ml-4">role: <span className="text-green-400">"Full Stack & AI Engineer"</span>,</p>
                <p className="ml-4">skills: [<span className="text-green-400">"React"</span>, <span className="text-green-400">"Node.js"</span>, <span className="text-green-400">"AI"</span>],</p>
                <p className="ml-4 text-purple-400">build: <span className="text-blue-400">function</span>() {'{'}</p>
                <p className="ml-8 text-gray-400">// Turning ideas into reality</p>
                <p className="ml-8 text-yellow-300">return <span className="text-green-400">"Scalable Solutions"</span>;</p>
                <p className="ml-4">{'}'}</p>
                <p>{'};'}</p>
                <br />
                <p className="text-gray-400">{'/* Always exploring new technologies */'}</p>
              </div>
            </div>
          </motion.div>
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {introduction}
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {goals}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
              {features.map((feature, idx) => (
                <div key={idx} className="glass-card p-4 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300 border border-white/5">
                  <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-3">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{feature.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{feature.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
