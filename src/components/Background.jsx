import { motion } from 'framer-motion';

const Background = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiIGZpbGw9Im5vbmUiLz4KPHBhdGggZD0iTTAgMGg0MHYxSDB6bTAgNDBoMXYtNDBoLTEiIGZpbGw9InJnYmEoMTUwLCAxNTAsIDE1MCwgMC4wNSkiLz4KPC9zdmc+')] opacity-50 dark:opacity-20" />
      
      {/* Animated Blobs */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 dark:bg-blue-600/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] opacity-70"
      />
      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 dark:bg-purple-600/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] opacity-70"
      />
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, 100, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-500/20 dark:bg-pink-600/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[120px] opacity-50"
      />
    </div>
  );
};

export default Background;
