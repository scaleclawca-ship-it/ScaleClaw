const Footer = () => {
  return (
    <footer className="bg-scale-dark border-t border-scale-gray py-12 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-6">
          <a href="/" className="flex items-center gap-2 text-white">
            <div className="w-8 h-8 bg-scale-red rounded flex items-center justify-center font-bold text-lg glow">
              S
            </div>
            <span className="font-bold text-lg tracking-tight">ScaleClaw</span>
          </a>
        </div>
        
        <p className="text-gray-500 text-sm mb-4 max-w-lg mx-auto">
          ScaleClaw is an independent education community. We are not affiliated with, endorsed by, or connected to the official OpenClaw open-source project.
        </p>
        
        <div className="text-gray-600 text-xs mt-8 flex flex-col items-center gap-2">
          <p>Results shown on this site are for illustrative purposes and do not guarantee your own success.</p>
          <p>&copy; {new Date().getFullYear()} ScaleClaw Education. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
