import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex items-center justify-center p-2 rounded-xl border border-gray-200 dark:border-white/10 glass bg-white/50 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 text-gray-700 dark:text-gray-300 hover:text-scale-red dark:hover:text-white transition-all shadow-sm focus:outline-none"
      aria-label="Toggle theme"
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        <motion.div
          initial={false}
          animate={{
            scale: theme === 'dark' ? 1 : 0,
            opacity: theme === 'dark' ? 1 : 0,
            rotate: theme === 'dark' ? 0 : 90
          }}
          transition={{ type: 'spring', stiffness: 200, damping: 10 }}
          className="absolute"
        >
          <Moon className="w-5 h-5" />
        </motion.div>
        
        <motion.div
          initial={false}
          animate={{
            scale: theme === 'light' ? 1 : 0,
            opacity: theme === 'light' ? 1 : 0,
            rotate: theme === 'light' ? 0 : -90
          }}
          transition={{ type: 'spring', stiffness: 200, damping: 10 }}
          className="absolute text-yellow-500"
        >
          <Sun className="w-5 h-5" />
        </motion.div>
      </div>
    </button>
  );
};

export default ThemeToggle;
