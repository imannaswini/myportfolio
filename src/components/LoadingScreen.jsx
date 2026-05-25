import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 2, ease: "easeInOut" }}
      onAnimationComplete={() => document.body.style.overflow = "unset"}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-gray-50 dark:bg-gray-950 pointer-events-none"
    >
      <div className="flex flex-col items-center">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.5, 1],
            repeat: Infinity
          }}
          className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full mb-4"
        />
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-xl font-bold text-gray-800 dark:text-gray-200"
        >
          Initializing...
        </motion.h2>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
