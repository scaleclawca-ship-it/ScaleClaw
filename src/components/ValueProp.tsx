import { motion } from 'framer-motion';
import { ShieldCheck, Target, Users } from 'lucide-react';

const ValueProp = () => {
  return (
    <section id="how-it-works" className="py-24 bg-scale-gray relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Built For Action Takers. <br className="hidden md:block"/> <span className="text-scale-red">Not Developers.</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            We bridge the gap between open-source AI power and everyday business owners. Stop watching GitHub tutorials and start building real revenue streams.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-scale-red/10 rounded-xl flex items-center justify-center text-scale-red mt-1">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">Direct Path to Income</h3>
                <p className="text-gray-400">Forget "theoretical AI." We provide specific blueprints for Content Repurposing Agencies, Lead Gen automation, and Freelance enablement.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-scale-red/10 rounded-xl flex items-center justify-center text-scale-red mt-1">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">Safe Execution Environment</h3>
                <p className="text-gray-400">Security matters. We teach you exactly how to configure OpenClaw so you don't leak API keys, expose local data, or suffer prompt injections.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-scale-red/10 rounded-xl flex items-center justify-center text-scale-red mt-1">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">Community Driven Support</h3>
                <p className="text-gray-400">You are never stuck alone. Our private Discord is filled with builders actively trouble-shooting alongside you.</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-scale-red opacity-20 blur-3xl rounded-full"></div>
            <div className="glass p-8 rounded-2xl border border-gray-700 relative z-10 hover:border-scale-red/50 transition-colors">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" 
                alt="Dashboard Example" 
                className="rounded-xl w-full object-cover h-64 opacity-80 mix-blend-screen"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ValueProp;
