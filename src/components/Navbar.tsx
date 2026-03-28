import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-[padding] duration-500 ${scrolled ? 'py-0' : 'py-4'}`}
    >
      <div className={`absolute inset-0 glass transition-opacity duration-500 border-b border-gray-200 dark:border-white/10 shadow-lg dark:shadow-2xl pointer-events-none ${scrolled ? 'opacity-100' : 'opacity-0'}`} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center gap-3 text-gray-900 dark:text-white group">
              <img src="/logo.png" alt="ScaleClaw Logo" className="w-12 h-12 object-contain drop-shadow-[0_0_15px_rgba(229,9,20,0.8)] group-hover:scale-110 transition-transform duration-300" />
              <span className="font-black text-2xl tracking-tighter">ScaleClaw</span>
            </a>
          </div>
          
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center space-x-10">
            <a href="#how-it-works" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors relative group py-2 font-bold text-sm uppercase tracking-widest">
              How it Works
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-scale-red transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#proof" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors relative group py-2 font-bold text-sm uppercase tracking-widest">
              Results
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-scale-red transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#models" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors relative group py-2 font-bold text-sm uppercase tracking-widest">
              Business Models
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-scale-red transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <ThemeToggle />
            <a href="#pricing" className="bg-scale-dark dark:bg-white text-white dark:text-black hover:bg-scale-red hover:text-white dark:hover:bg-scale-red dark:hover:text-white px-8 py-3 rounded-full font-black text-sm uppercase tracking-widest transition-all duration-300 shadow-lg dark:shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(229,9,20,0.6)] hover:-translate-y-0.5">
              Join Community
            </a>
          </div>
          
          <div className="-mr-2 flex md:hidden items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="block h-8 w-8" /> : <Menu className="block h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
          <div 
            className="md:hidden glass border-b border-gray-200 dark:border-white/10 absolute w-full top-20 left-0 shadow-3xl overflow-hidden backdrop-blur-3xl"
          >
            <div className="px-6 pt-4 pb-8 space-y-4">
              <a href="#how-it-works" className="block px-4 py-4 rounded-2xl text-lg font-bold text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 transition-colors">How it Works</a>
              <a href="#proof" className="block px-4 py-4 rounded-2xl text-lg font-bold text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 transition-colors">Results</a>
              <a href="#models" className="block px-4 py-4 rounded-2xl text-lg font-bold text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 transition-colors">Business Models</a>
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-white/10">
                <a href="#pricing" className="block w-full text-center bg-scale-red hover:bg-scale-red-light px-4 py-4 rounded-2xl text-white font-black text-xl uppercase tracking-widest shadow-lg dark:shadow-[0_0_30px_rgba(229,9,20,0.5)]">Join Community</a>
              </div>
            </div>
          </div>
        )}
    </nav>
  );
};

export default Navbar;
