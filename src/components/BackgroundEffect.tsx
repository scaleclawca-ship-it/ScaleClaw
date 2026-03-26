import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const BackgroundEffect = () => {
  const [isRendered, setIsRendered] = useState(false);

  // Ultra-smooth spring physics for the aura tracking
  const springConfig = { damping: 50, stiffness: 100, mass: 3 };
  const smoothX = useSpring(0, springConfig);
  const smoothY = useSpring(0, springConfig);

  useEffect(() => {
    setIsRendered(true);
    
    // Set initial position to center of screen invisibly
    smoothX.set(0);
    smoothY.set(0);

    const handleMouseMove = (e: MouseEvent) => {
      // Calculate offset from center so the element can be centered with flex
      smoothX.set(e.clientX - window.innerWidth / 2);
      smoothY.set(e.clientY - window.innerHeight / 2);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [smoothX, smoothY]);

  if (!isRendered) return null;

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none flex items-center justify-center">
      {/* Global Base Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-scale-red/5 to-transparent dark:via-scale-red/10 opacity-50"></div>

      {/* Primary Interactive Hover Aura */}
      <motion.div
        style={{ x: smoothX, y: smoothY }}
        className="absolute w-[600px] h-[600px] md:w-[900px] md:h-[900px] bg-scale-red/20 dark:bg-scale-red/20 rounded-full blur-[100px] md:blur-[160px] mix-blend-multiply dark:mix-blend-screen transition-colors duration-1000 will-change-transform"
      />
      
      {/* Secondary Slow Floating Aura */}
      <motion.div
        animate={{
          scale: [1, 1.2, 0.9, 1],
          opacity: [0.3, 0.5, 0.3, 0.3],
          x: [0, 150, -100, 0],
          y: [0, -150, 100, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute w-[500px] h-[500px] bg-red-400/20 dark:bg-red-600/20 rounded-full blur-[100px] md:blur-[140px] mix-blend-multiply dark:mix-blend-screen transition-colors duration-1000 will-change-transform"
      />

      {/* Tertiary Accent Aura */}
      <motion.div
        animate={{
          scale: [1, 0.8, 1.3, 1],
          opacity: [0.2, 0.4, 0.2, 0.2],
          x: [0, -200, 150, 0],
          y: [0, 100, -200, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute w-[400px] h-[400px] bg-orange-400/10 dark:bg-orange-600/10 rounded-full blur-[80px] md:blur-[120px] mix-blend-multiply dark:mix-blend-screen transition-colors duration-1000 will-change-transform"
      />
    </div>
  );
};

export default BackgroundEffect;
