import { motion } from 'framer-motion';
import { ShieldCheck, Target, Users } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100 } }
};

const ValueProp = () => {
  return (
    <section id="how-it-works" className="py-32 bg-[#050505] relative overflow-hidden">
      
      {/* Background Decorative Mesh */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-scale-red/[0.03] to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">Built For Action Takers. <br className="hidden md:block"/> <span className="text-scale-red">Not Developers.</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-xl font-medium leading-relaxed">
            We bridge the gap between open-source AI power and everyday business owners. Stop watching GitHub tutorials and start building real revenue streams.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-10 focus:outline-none"
          >
            <motion.div variants={itemVariants} className="flex gap-6 group">
              <div className="flex-shrink-0 w-16 h-16 bg-white/[0.03] border border-white/10 rounded-2xl flex items-center justify-center text-scale-red mt-1 group-hover:bg-scale-red group-hover:text-white transition-all duration-500 shadow-xl group-hover:shadow-[0_0_30px_rgba(229,9,20,0.5)] group-hover:-translate-y-1 group-hover:scale-110">
                <Target className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-scale-red-light transition-colors">Direct Path to Income</h3>
                <p className="text-gray-400 text-lg leading-relaxed font-medium">Forget "theoretical AI." We provide specific blueprints for Content Repurposing Agencies, Lead Gen automation, and Freelance enablement.</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-6 group">
              <div className="flex-shrink-0 w-16 h-16 bg-white/[0.03] border border-white/10 rounded-2xl flex items-center justify-center text-scale-red mt-1 group-hover:bg-scale-red group-hover:text-white transition-all duration-500 shadow-xl group-hover:shadow-[0_0_30px_rgba(229,9,20,0.5)] group-hover:-translate-y-1 group-hover:scale-110">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-scale-red-light transition-colors">Safe Execution Environment</h3>
                <p className="text-gray-400 text-lg leading-relaxed font-medium">Security matters. We teach you exactly how to configure OpenClaw so you don't leak API keys, expose local data, or suffer prompt injections.</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-6 group">
              <div className="flex-shrink-0 w-16 h-16 bg-white/[0.03] border border-white/10 rounded-2xl flex items-center justify-center text-scale-red mt-1 group-hover:bg-scale-red group-hover:text-white transition-all duration-500 shadow-xl group-hover:shadow-[0_0_30px_rgba(229,9,20,0.5)] group-hover:-translate-y-1 group-hover:scale-110">
                <Users className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-scale-red-light transition-colors">Community Driven Support</h3>
                <p className="text-gray-400 text-lg leading-relaxed font-medium">You are never stuck alone. Our private Discord is filled with 14-30 year olds actively building and troubleshooting alongside you.</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
            className="relative perspective-1000"
          >
            <div className="absolute inset-0 bg-scale-red opacity-30 blur-[100px] rounded-full mix-blend-screen scale-75 animate-pulse"></div>
            <div className="glass p-4 rounded-[2rem] border border-white/10 relative z-10 hover:border-scale-red/50 transition-colors duration-500 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80" 
                alt="Dashboard Example" 
                className="rounded-2xl w-full object-cover h-96 opacity-90 mix-blend-screen filter contrast-125"
              />
              {/* Overlay elements */}
              <div className="absolute bottom-10 left-10 glass px-6 py-4 rounded-xl border border-white/20 shadow-2xl animate-bounce">
                 <p className="text-white font-black text-xl">$14,250 <span className="text-green-400 text-sm font-bold">▲ 24%</span></p>
                 <p className="text-gray-400 text-xs font-bold uppercase tracking-wider">Passive Revenue</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ValueProp;
