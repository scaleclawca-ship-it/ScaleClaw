import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'glass border-b border-white/10 py-0 shadow-2xl' : 'bg-transparent py-4'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center gap-3 text-white group">
              <img src="/logo.png" alt="ScaleClaw Logo" className="w-12 h-12 object-contain drop-shadow-[0_0_15px_rgba(229,9,20,0.8)] group-hover:scale-110 transition-transform duration-300" />
              <span className="font-black text-2xl tracking-tighter">ScaleClaw</span>
            </a>
          </div>
          
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center space-x-10">
            <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors relative group py-2 font-bold text-sm uppercase tracking-widest">
              How it Works
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-scale-red transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#proof" className="text-gray-300 hover:text-white transition-colors relative group py-2 font-bold text-sm uppercase tracking-widest">
              Results
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-scale-red transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#models" className="text-gray-300 hover:text-white transition-colors relative group py-2 font-bold text-sm uppercase tracking-widest">
              Business Models
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-scale-red transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>

          <div className="hidden md:block">
            <a href="#pricing" className="bg-white text-black hover:bg-scale-red hover:text-white px-8 py-3 rounded-full font-black text-sm uppercase tracking-widest transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(229,9,20,0.6)] hover:-translate-y-0.5">
              Join Community
            </a>
          </div>
          
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="block h-8 w-8" /> : <Menu className="block h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-b border-white/10 absolute w-full top-20 left-0 shadow-3xl overflow-hidden backdrop-blur-3xl"
          >
            <div className="px-6 pt-4 pb-8 space-y-4">
              <a href="#how-it-works" className="block px-4 py-4 rounded-2xl text-lg font-bold text-gray-300 hover:text-white hover:bg-white/5 transition-colors">How it Works</a>
              <a href="#proof" className="block px-4 py-4 rounded-2xl text-lg font-bold text-gray-300 hover:text-white hover:bg-white/5 transition-colors">Results</a>
              <a href="#models" className="block px-4 py-4 rounded-2xl text-lg font-bold text-gray-300 hover:text-white hover:bg-white/5 transition-colors">Business Models</a>
              <div className="mt-6 pt-6 border-t border-white/10">
                <a href="#pricing" className="block w-full text-center bg-scale-red px-4 py-4 rounded-2xl text-white font-black text-xl uppercase tracking-widest shadow-[0_0_30px_rgba(229,9,20,0.5)]">Join Community</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
