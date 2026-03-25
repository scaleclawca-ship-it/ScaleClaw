import { ArrowRight, Bot, Zap, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-[rgba(229,9,20,0.15)] to-transparent pointer-events-none blur-3xl rounded-full" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-scale-red/30 mb-8"
          >
            <span className="flex h-2 w-2 rounded-full bg-scale-red animate-pulse"></span>
            <span className="text-sm font-medium text-gray-300">The #1 Community for Practical Agent Automation</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8"
          >
            Turn OpenClaw into <br />
            <span className="text-gradient">Automated Income</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            We show you exactly how to use OpenClaw to build automated income streams — whether you're starting from zero or scaling an existing business. No coding required.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="#pricing" className="w-full sm:w-auto px-8 py-4 bg-scale-red hover:bg-scale-red-light text-white rounded-lg font-bold text-lg transition-all shadow-[0_0_30px_rgba(229,9,20,0.5)] hover:shadow-[0_0_40px_rgba(229,9,20,0.7)] flex items-center justify-center gap-2 hover:-translate-y-1">
              Start Your First Automation <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#proof" className="w-full sm:w-auto px-8 py-4 glass hover:bg-scale-gray-light text-white rounded-lg font-bold text-lg transition-all flex items-center justify-center border border-gray-700">
              See Member Results
            </a>
          </motion.div>
        </div>

        {/* Feature Highlights Component inside Hero */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="glass p-8 rounded-2xl border border-gray-800 hover:border-scale-red/50 transition-colors">
            <div className="w-12 h-12 bg-scale-red/10 rounded-xl flex items-center justify-center mb-6 text-scale-red">
              <Bot className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">Setup in Minutes</h3>
            <p className="text-gray-400">Step-by-step videos for non-technical users to completely set up OpenClaw without terminal errors.</p>
          </div>
          
          <div className="glass p-8 rounded-2xl border border-gray-800 hover:border-scale-red/50 transition-colors">
            <div className="w-12 h-12 bg-scale-red/10 rounded-xl flex items-center justify-center mb-6 text-scale-red">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">Done-For-You Skills</h3>
            <p className="text-gray-400">Copy-paste configs and proven SOUL.md templates to automate lead gen, social, and emails.</p>
          </div>

          <div className="glass p-8 rounded-2xl border border-gray-800 hover:border-scale-red/50 transition-colors">
            <div className="w-12 h-12 bg-scale-red/10 rounded-xl flex items-center justify-center mb-6 text-scale-red">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">Real Business Models</h3>
            <p className="text-gray-400">Not just cool tech. Learn 7 actionable ways to productize OpenClaw for clients or your own side hustle.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
