import { motion } from 'framer-motion';
import { cn } from '../utils/cn.js';

const Section = ({ children, id, className, title, subtitle }) => {
  return (
    <section id={id} className={cn('py-24 px-6', className)}>
      <div className="container mx-auto">
        {(title || subtitle) && (
          <div className="mb-16 text-center">
            {subtitle && (
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-primary font-semibold tracking-wider uppercase text-sm mb-3 block"
              >
                {subtitle}
              </motion.span>
            )}
            {title && (
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-5xl font-bold text-white mb-4"
              >
                {title}
              </motion.h2>
            )}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="h-1 w-20 bg-primary mx-auto rounded-full"
            />
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
