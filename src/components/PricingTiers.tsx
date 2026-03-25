import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
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
    <section id="pricing" className="py-24 bg-scale-dark relative border-t border-scale-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Join The Ecosystem.</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Choose the tier that fits your current goals. Upgrade anytime as your automated income grows.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-3xl p-8 lg:p-10 relative ${
                tier.recommended 
                  ? 'bg-gradient-to-b from-[#1a0505] to-scale-dark border-2 border-scale-red transform md:-translate-y-4 shadow-[0_0_40px_rgba(229,9,20,0.3)]' 
                  : 'glass border border-gray-800 hover:border-gray-600 transition-colors'
              }`}
            >
              {tier.recommended && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-scale-red shadow-[0_0_15px_rgba(229,9,20,0.6)] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="mb-8 border-b border-gray-800 pb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                <p className="text-gray-400 text-sm h-10">{tier.description}</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-5xl font-extrabold text-white">{tier.price}</span>
                  <span className="text-gray-400 font-medium">/month</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3">
                    <CheckCircle2 className={`w-5 h-5 flex-shrink-0 mt-0.5 ${tier.recommended ? 'text-scale-red' : 'text-gray-600'}`} />
                    <span className="text-gray-300 text-sm leading-tight font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-xl font-bold transition-all ${
                tier.recommended
                  ? 'bg-scale-red hover:bg-scale-red-light text-white shadow-lg shadow-scale-red/25'
                  : 'bg-scale-gray hover:bg-gray-700 text-white border border-gray-600'
              }`}>
                Join {tier.name}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingTiers;
