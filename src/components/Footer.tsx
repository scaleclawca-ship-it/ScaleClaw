import { Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-scale-dark border-t border-gray-200 dark:border-scale-gray py-12 text-center transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-6">
          <a href="/" className="flex items-center gap-2 text-gray-900 dark:text-white group">
            <img src="/logo.png" alt="ScaleClaw Logo" className="w-8 h-8 object-contain drop-shadow-[0_0_15px_rgba(229,9,20,0.5)] group-hover:scale-110 transition-transform" />
            <span className="font-bold text-lg tracking-tight">ScaleClaw</span>
          </a>
        </div>
        
        <p className="text-gray-600 dark:text-gray-500 text-sm mb-6 max-w-lg mx-auto">
          ScaleClaw is an independent education community. We are not affiliated with, endorsed by, or connected to the official OpenClaw open-source project.
        </p>

        <div className="flex justify-center items-center gap-6 mb-8">
          <a href="https://tiktok.com/@scaleclaw" target="_blank" rel="noreferrer" className="text-gray-600 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors flex items-center gap-2 text-sm font-bold">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
            TikTok
          </a>
          <a href="https://instagram.com/scaleclaw" target="_blank" rel="noreferrer" className="text-gray-600 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors flex items-center gap-2 text-sm font-bold">
            <Instagram className="w-5 h-5" />
            Instagram
          </a>
          <a href="https://x.com/scaleclawca" target="_blank" rel="noreferrer" className="text-gray-600 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors flex items-center gap-2 text-sm font-bold">
            <Twitter className="w-5 h-5" />
            X (Twitter)
          </a>
        </div>
        
        <div className="text-gray-500 dark:text-gray-600 text-xs mt-8 pt-8 border-t border-gray-200 dark:border-white/5 flex flex-col items-center gap-2">
          <p>Results shown on this site are for illustrative purposes and do not guarantee your own success.</p>
          <p>&copy; {new Date().getFullYear()} ScaleClaw Education. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
