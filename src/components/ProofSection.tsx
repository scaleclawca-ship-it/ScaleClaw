import { motion } from 'framer-motion';
import { BadgeCheck, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Alex M.",
    role: "Automation Agency",
    result: "$4.2k in 30 Days",
    content: "Used the Tier 2 'Builder' templates to set up an email triaging system for a local real estate agent. Sold it for $1k setup + $500/mo retainer. Insane ROI.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex&backgroundColor=E50914"
  },
  {
    name: "Sarah J.",
    role: "Content Creator",
    result: "Saved 40+ hours/week",
    content: "OpenClaw completely replaced my $1,200/mo Virtual Assistant. The content pipeline automation converts my 1 YouTube video into 15 TikToks automatically.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah&backgroundColor=E50914"
  },
  {
    name: "David K.",
    role: "ClawHub Developer",
    result: "First $500 online",
    content: "ScaleClaw taught me how to bundle my inventory management config into a skill and sell it on ClawHub. Had 0 programming experience 3 weeks ago.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=David&backgroundColor=E50914"
  }
];

const ProofSection = () => {
  return (
    <section id="proof" className="py-32 relative overflow-hidden bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">Real Results. <br className="hidden md:block"/> <span className="text-gradient">Zero Fluff.</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-xl font-medium leading-relaxed">
            While others debate theoretical AGI on Twitter, our members are printing cash using practical OpenClaw implementations. Here are real wins.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {testimonials.map((testi, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15, type: "spring" }}
              whileHover={{ y: -10 }}
              className="glass p-10 rounded-[2rem] relative border border-white/10 flex flex-col h-full hover:border-scale-red/50 transition-all duration-300 group hover:shadow-[0_0_40px_rgba(229,9,20,0.15)] bg-white/[0.01] hover:bg-white/[0.03]"
            >
              <Quote className="absolute top-10 right-10 w-12 h-12 text-white/5 rotate-180 group-hover:text-scale-red/10 transition-colors duration-500" />
              
              <div className="mb-8 relative z-10">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 text-green-400 rounded-full text-xs font-black uppercase tracking-wider border border-green-500/20 shadow-[0_0_15px_rgba(74,222,128,0.2)]">
                  <BadgeCheck className="w-4 h-4" /> Win: {testi.result}
                </span>
              </div>
              
              <p className="text-gray-300 text-lg font-medium leading-relaxed italic mb-10 flex-grow relative z-10">"{testi.content}"</p>
              
              <div className="flex items-center gap-5 mt-auto relative z-10">
                <div className="relative">
                  <div className="absolute inset-0 bg-scale-red blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-full"></div>
                  <img src={testi.image} alt={testi.name} className="w-14 h-14 rounded-full border-2 border-white/20 bg-white relative z-10 group-hover:border-scale-red transition-colors duration-300" />
                </div>
                <div>
                  <h4 className="font-black text-xl text-white">{testi.name}</h4>
                  <p className="text-scale-red text-sm font-bold uppercase tracking-widest">{testi.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProofSection;
