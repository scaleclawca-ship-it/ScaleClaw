import { motion } from 'framer-motion';
import { BadgeCheck } from 'lucide-react';

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
    <section id="proof" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Real Results. <br className="hidden md:block"/> <span className="text-scale-red">Zero Fluff.</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            While others debate theoretical AGI on Twitter, our members are printing cash using practical OpenClaw implementations. Here are real wins from inside the community.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testi, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-8 rounded-2xl relative border border-gray-800 flex flex-col h-full hover:border-scale-red/30 transition-colors"
            >
              <div className="absolute top-0 right-0 p-6">
                <BadgeCheck className="text-scale-red w-8 h-8 opacity-80" />
              </div>
              
              <div className="mb-6">
                <span className="inline-block px-4 py-1.5 bg-green-500/10 text-green-400 rounded-full text-sm font-bold border border-green-500/20">
                  Win: {testi.result}
                </span>
              </div>
              
              <p className="text-gray-300 italic mb-8 flex-grow">"{testi.content}"</p>
              
              <div className="flex items-center gap-4 mt-auto">
                <img src={testi.image} alt={testi.name} className="w-12 h-12 rounded-full border-2 border-scale-gray-light bg-white" />
                <div>
                  <h4 className="font-bold text-white">{testi.name}</h4>
                  <p className="text-scale-red text-sm font-medium">{testi.role}</p>
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
