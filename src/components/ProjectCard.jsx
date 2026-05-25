import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative bg-[#0a0a0a]/80 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 hover:border-blue-500/50 transition-all duration-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] flex flex-col h-full"
    >
      {/* Project Image */}
      <div className="relative aspect-video overflow-hidden shrink-0">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80" />
      </div>

      <div className="p-6 flex flex-col flex-1">
        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2 py-1 text-xs font-semibold bg-white/5 text-gray-300 rounded-md border border-white/5"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Title and Description */}
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm mb-8 line-clamp-3 flex-1">
          {project.description}
        </p>

        {/* View Repository Button */}
        <div className="mt-auto">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl glass-card text-white text-sm font-semibold hover:bg-white/10 transition-all border border-white/10 group/btn"
          >
            <Github size={18} className="group-hover/btn:rotate-12 transition-transform" />
            View Repository
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
