import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { portfolioData } from '../data/portfolioData.js';
import { FiEye, FiArrowRight, FiGithub } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaHackerrank } from 'react-icons/fa';

const Hero = () => {
  const { name, tagline, description, miniStatus, socials } = portfolioData.hero;

  const stats = [
    { label: "Projects Built", value: "15+" },
    { label: "Hackathons", value: "5+" },
    { label: "Contributor", value: "3" },
    { label: "Certifications", value: "4" }
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-24 pb-12 relative px-6 md:px-12 overflow-hidden">
      
      {/* Background Animated Blobs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-pulse delay-1000"></div>
      
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] z-0 pointer-events-none"></div>

      <div className="container mx-auto relative z-10 max-w-5xl">
        
        {/* Main Content */}
        <div className="flex flex-col items-center text-center gap-8">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass-card border border-white/5 text-sm font-medium text-blue-400 backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            {miniStatus}
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight tracking-tight"
          >
            Building Scalable <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient">
              Full Stack Applications
            </span>
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-300 h-[40px] md:h-auto"
          >
            <TypeAnimation
              sequence={[
                tagline,
                2000,
                'Building Modern Web Apps',
                2000,
                'Exploring AI & Cloud',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed"
          >
            Hi, I'm <span className="text-white font-semibold">{name}</span>. {description}
          </motion.p>

          {/* Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-4 mt-4 w-full sm:w-auto"
          >
            <a 
              href="#projects"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] flex items-center justify-center gap-2 group"
            >
              View Projects
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href={socials.resume} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl glass-card text-white font-semibold hover:bg-white/10 transition-all flex items-center justify-center gap-2 border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] hover:scale-105"
            >
              <FiEye /> View Resume
            </a>
            <a 
              href={socials.github} 
              target="_blank" rel="noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl glass-card text-white font-semibold hover:bg-white/10 transition-all flex items-center justify-center gap-2 border border-white/10"
            >
              <FiGithub /> GitHub
            </a>
          </motion.div>
          
          {/* Social Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center gap-6 mt-6"
          >
            <a href={socials.github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform">
              <FaGithub size={24} />
            </a>
            <a href={socials.linkedin} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#0077b5] transition-colors hover:scale-110 transform">
              <FaLinkedin size={24} />
            </a>
            <a href={socials.hackerrank} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#2ec866] transition-colors hover:scale-110 transform">
              <FaHackerrank size={24} />
            </a>
          </motion.div>

        </div>

        {/* Developer Stats Cards */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-20"
        >
          {stats.map((stat, idx) => (
            <div key={idx} className="glass-card p-6 rounded-2xl border border-white/5 flex flex-col items-center justify-center text-center hover:border-blue-500/30 transition-colors group">
              <div className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-2 group-hover:scale-110 transition-transform">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-gray-400 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
};

export default Hero;
