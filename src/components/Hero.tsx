import { ArrowRight, Bot, Zap, TrendingUp, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
};

const floatingAnimation = {
  y: ["-10px", "10px"],
  transition: {
    duration: 3,
    repeat: Infinity,
    repeatType: "reverse" as const,
    ease: "easeInOut"
  }
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-grid-pattern">
      {/* Background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] md:w-full h-[800px] bg-gradient-to-b from-[rgba(229,9,20,0.25)] via-[rgba(229,9,20,0.05)] to-transparent pointer-events-none blur-[120px] rounded-full mix-blend-screen" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-scale-red/40 mb-8 relative overflow-hidden group"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shine_1.5s_ease-in-out]"></span>
            <Sparkles className="w-4 h-4 text-scale-red" />
            <span className="text-sm font-bold bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent">The #1 Community for Practical Agent Automation</span>
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[1.1]"
          >
            Turn OpenClaw into <br />
            <span className="text-gradient drop-shadow-[0_0_25px_rgba(229,9,20,0.4)]">Automated Income</span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed font-medium"
          >
            We show you exactly how to use OpenClaw to build automated income streams — whether you're starting from zero or scaling an existing business.
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <a href="#pricing" className="w-full sm:w-auto px-10 py-5 bg-scale-red hover:bg-scale-red-light text-white rounded-xl font-black text-lg transition-all shadow-[0_0_40px_rgba(229,9,20,0.6)] hover:shadow-[0_0_60px_rgba(229,9,20,0.8)] flex items-center justify-center gap-2 hover:-translate-y-2 relative overflow-hidden group">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-tr from-transparent via-white/20 to-transparent scale-[2.0] -translate-x-full group-hover:animate-[shine_1s_ease-out]"></span>
              Start Your First Automation <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#proof" className="w-full sm:w-auto px-10 py-5 glass hover:bg-white/10 text-white rounded-xl font-bold text-lg transition-all flex items-center justify-center border border-gray-600 hover:border-gray-400 hover:-translate-y-1">
              See Member Results
            </a>
          </motion.div>
        </motion.div>

        {/* Feature Highlights Component inside Hero */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          <motion.div animate={floatingAnimation} style={{ animationDelay: "0s" }} className="glass p-8 rounded-3xl border border-gray-800 hover:border-scale-red transition-all group hover:bg-white/[0.02]">
            <div className="w-14 h-14 bg-gradient-to-br from-scale-red/20 to-transparent rounded-2xl flex items-center justify-center mb-6 text-scale-red border border-scale-red/20 group-hover:scale-110 transition-transform">
              <Bot className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white">Setup in Minutes</h3>
            <p className="text-gray-400 leading-relaxed font-medium">Step-by-step videos for non-technical users to completely set up OpenClaw without terminal errors.</p>
          </motion.div>
          
          <motion.div animate={floatingAnimation} style={{ animationDelay: "1s" }} className="glass p-8 rounded-3xl border border-gray-800 hover:border-scale-red transition-all group hover:bg-white/[0.02] mt-4 md:mt-8">
            <div className="w-14 h-14 bg-gradient-to-br from-scale-red/20 to-transparent rounded-2xl flex items-center justify-center mb-6 text-scale-red border border-scale-red/20 group-hover:scale-110 transition-transform">
              <Zap className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white">Done-For-You Skills</h3>
            <p className="text-gray-400 leading-relaxed font-medium">Copy-paste configs and proven SOUL.md templates to automate lead gen, social, and emails.</p>
          </motion.div>

          <motion.div animate={floatingAnimation} style={{ animationDelay: "2s" }} className="glass p-8 rounded-3xl border border-gray-800 hover:border-scale-red transition-all group hover:bg-white/[0.02]">
            <div className="w-14 h-14 bg-gradient-to-br from-scale-red/20 to-transparent rounded-2xl flex items-center justify-center mb-6 text-scale-red border border-scale-red/20 group-hover:scale-110 transition-transform">
              <TrendingUp className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white">Real Business Models</h3>
            <p className="text-gray-400 leading-relaxed font-medium">Not just cool tech. Learn 7 actionable ways to productize OpenClaw for clients or your own side hustle.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
