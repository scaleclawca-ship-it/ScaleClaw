import { motion } from 'framer-motion';
import { CheckCircle2, Star } from 'lucide-react';
import { Tier } from '../types';

const tiers: Tier[] = [
  {
    name: "Starter",
    price: "$29",
    description: "For complete beginners who have never used OpenClaw.",
    features: [
      "Step-by-step OpenClaw setup guides",
      "Beginner automation templates",
      "First $100 with OpenClaw roadmap",
      "Access to beginner community channels",
      "Weekly group Q&A calls",
      "Curated list of free/cheap LLM APIs"
    ]
  },
  {
    name: "Builder",
    price: "$99",
    description: "For those ready to build real income streams or automate a business.",
    recommended: true,
    features: [
      "Everything in Starter",
      "Done-for-you OpenClaw skill configs",
      "SOUL.md templates for specific models",
      "Build Your First Automated Business program",
      "Monthly live automation workshops",
      "Access to custom OpenClaw skills library"
    ]
  },
  {
    name: "Operator",
    price: "$499",
    description: "For people scaling to serious income or running agencies.",
    features: [
      "Everything in Builder",
      "1-on-1 strategy calls (monthly)",
      "Advanced multi-agent workflow configs",
      "Enterprise-level automation blueprints",
      "Revenue share / joint ventures",
      "Priority support from our team"
    ]
  }
];

const PricingTiers = () => {
  return (
    <section id="pricing" className="py-32 relative bg-[#050505]">
      {/* Absolute ambient glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-scale-red rounded-full mix-blend-screen filter blur-[150px] opacity-10 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-scale-red rounded-full mix-blend-screen filter blur-[150px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">Join The <span className="text-gradient">Ecosystem</span>.</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-xl font-medium">
            Choose the tier that fits your current goals. Upgrade anytime as your automated income grows.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 items-start lg:gap-10">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15, type: "spring" }}
              whileHover={{ y: -10 }}
              className={`rounded-[2rem] p-8 lg:p-10 relative overflow-hidden backdrop-blur-3xl ${
                tier.recommended 
                  ? 'bg-gradient-to-b from-[#2a0808] to-[#0a0000] border-2 border-scale-red shadow-[0_0_50px_rgba(229,9,20,0.2)]' 
                  : 'bg-white/[0.02] border border-white/[0.08] hover:border-white/20 hover:bg-white/[0.04]'
              } transition-all duration-500`}
            >
              {tier.recommended && (
                <>
                  <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-scale-red to-transparent"></div>
                  <div className="absolute top-0 right-0 p-6">
                    <Star className="w-8 h-8 text-scale-red fill-scale-red animate-pulse" />
                  </div>
                  <div className="inline-block bg-scale-red/20 border border-scale-red/30 text-scale-red font-black text-xs uppercase tracking-[0.2em] px-3 py-1 rounded-full mb-6">
                    Most Popular
                  </div>
                </>
              )}
              
              <div className="mb-8 border-b border-white/10 pb-8">
                <h3 className="text-3xl font-bold text-white mb-3">{tier.name}</h3>
                <p className="text-gray-400 text-sm h-12 leading-relaxed">{tier.description}</p>
                <div className="mt-8 flex items-baseline gap-1">
                  <span className="text-6xl font-black text-white tracking-tighter">{tier.price}</span>
                  <span className="text-gray-400 font-bold">/mo</span>
                </div>
              </div>

              <ul className="space-y-5 mb-10">
                {tier.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-4">
                    <CheckCircle2 className={`w-6 h-6 flex-shrink-0 mt-0.5 ${tier.recommended ? 'text-scale-red' : 'text-gray-500'}`} />
                    <span className="text-gray-300 text-sm leading-relaxed font-semibold">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-5 rounded-2xl font-black text-lg transition-all relative overflow-hidden group ${
                tier.recommended
                  ? 'bg-scale-red hover:bg-scale-red-light text-white shadow-[0_0_30px_rgba(229,9,20,0.4)] hover:shadow-[0_0_50px_rgba(229,9,20,0.6)]'
                  : 'bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20'
              }`}>
                <span className="relative z-10">Join {tier.name}</span>
                {tier.recommended && (
                  <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shine_1.5s_ease-in-out]"></div>
                )}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingTiers;
