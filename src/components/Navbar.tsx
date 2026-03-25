import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 glass border-b border-scale-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center gap-2 text-white">
              <img src="/logo.png" alt="ScaleClaw Logo" className="w-10 h-10 object-contain drop-shadow-[0_0_15px_rgba(229,9,20,0.5)]" />
              <span className="font-bold text-xl tracking-tight">ScaleClaw</span>
            </a>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors relative group py-2 font-medium">
                How it Works
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-scale-red transition-all group-hover:w-full"></span>
              </a>
              <a href="#proof" className="text-gray-300 hover:text-white transition-colors relative group py-2 font-medium">
                Results
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-scale-red transition-all group-hover:w-full"></span>
              </a>
              <a href="#models" className="text-gray-300 hover:text-white transition-colors relative group py-2 font-medium">
                Business Models
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-scale-red transition-all group-hover:w-full"></span>
              </a>
              <a href="#pricing" className="bg-scale-red hover:bg-scale-red-light text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-[0_0_20px_rgba(229,9,20,0.4)] hover:shadow-[0_0_30px_rgba(229,9,20,0.6)] ml-4">
                Join Community
              </a>
            </div>
          </div>
          
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-scale-gray focus:outline-none"
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden glass border-b border-scale-gray-light absolute w-full top-20 left-0 shadow-2xl">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <a href="#how-it-works" className="block px-3 py-3 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-scale-gray">How it Works</a>
            <a href="#proof" className="block px-3 py-3 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-scale-gray">Results</a>
            <a href="#models" className="block px-3 py-3 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-scale-gray">Business Models</a>
            <div className="mt-4 pt-4 border-t border-scale-gray">
              <a href="#pricing" className="block w-full text-center bg-scale-red px-3 py-3 rounded-lg text-white font-bold shadow-[0_0_15px_rgba(229,9,20,0.4)]">Join Community</a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
