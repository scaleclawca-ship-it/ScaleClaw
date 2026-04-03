import { CheckCircle2, Star } from 'lucide-react';
import { Tier } from '../types';

const tiers: Tier[] = [
  {
    name: "Starter",
    price: "$28",
    originalPrice: "$35",
    description: "For complete beginners who have never used OpenClaw.",
    features: [
      "Step-by-step OpenClaw setup guides",
      "Beginner automation templates",
      "First $100 with OpenClaw roadmap",
      "Access to beginner community channels",
      "Weekly group Q&A calls",
      "Curated list of free/cheap LLM APIs"
    ],
    whopLink: "https://whop.com/scale-claw/starter-e3-eb40/"
  },
  {
    name: "Builder",
    price: "$120",
    originalPrice: "$150",
    description: "For those ready to build real income streams or automate a business.",
    recommended: true,
    features: [
      "Everything in Starter",
      "Done-for-you OpenClaw skill configs",
      "SOUL.md templates for specific models",
      "Build Your First Automated Business program",
      "Monthly live automation workshops",
      "Access to custom OpenClaw skills library"
    ],
    whopLink: "https://whop.com/scale-claw/builder-9c/"
  },
  {
    name: "Operator",
    price: "$400",
    originalPrice: "$500",
    description: "For people scaling to serious income or running agencies.",
    features: [
      "Everything in Builder",
      "1-on-1 strategy calls (monthly)",
      "Advanced multi-agent workflow configs",
      "Enterprise-level automation blueprints",
      "Revenue share / joint ventures",
      "Priority support from our team"
    ],
    whopLink: "https://whop.com/scale-claw/operator-4e/"
  }
];

const PricingTiers = () => {
  return (
    <section id="pricing" className="py-32 relative bg-white dark:bg-[#050505] transition-colors duration-500">
      {/* Absolute ambient glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-scale-red rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[150px] opacity-10 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-scale-red rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[150px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-gray-900 dark:text-white">Join The <span className="text-gradient">Ecosystem</span>.</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-xl font-medium">
            Choose the tier that fits your current goals. Upgrade anytime as your automated income grows.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start lg:gap-10">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-[2rem] p-8 lg:p-10 relative flex flex-col h-full ${tier.recommended
                  ? 'bg-gradient-to-b from-red-50 to-white dark:from-[#2a0808] dark:to-[#0a0000] border-2 border-scale-red shadow-[0_0_30px_rgba(229,9,20,0.1)] dark:shadow-[0_0_50px_rgba(229,9,20,0.2)] overflow-hidden'
                  : 'glass hover:border-gray-300 dark:hover:border-white/20'
                } transition-all duration-500`}
            >
              {tier.recommended && (
                <>
                  <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-scale-red to-transparent"></div>
                  <div className="absolute top-0 right-0 p-6">
                    <Star className="w-8 h-8 text-scale-red fill-scale-red" />
                  </div>
                  <div className="inline-block bg-scale-red/10 dark:bg-scale-red/20 border border-scale-red/20 dark:border-scale-red/30 text-scale-red font-black text-xs uppercase tracking-[0.2em] px-3 py-1 rounded-full mb-6 relative z-10">
                    Best Value
                  </div>
                </>
              )}

              <div className="mb-8 border-b border-gray-200 dark:border-white/10 pb-8 relative z-10">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">{tier.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm h-12 leading-relaxed">{tier.description}</p>
                <div className="mt-8 flex flex-col gap-1">
                  {tier.originalPrice && (
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-2xl font-bold text-gray-400 dark:text-gray-500 line-through decoration-scale-red/50">{tier.originalPrice}</span>
                      <span className="bg-scale-red/10 border border-scale-red/20 text-scale-red text-[0.65rem] font-black uppercase tracking-widest px-2 py-1 rounded-md">
                        Save 20%
                      </span>
                    </div>
                  )}
                  <div className="flex items-baseline gap-1">
                    <span className="text-6xl font-black text-gray-900 dark:text-white tracking-tighter">{tier.price}</span>
                    <span className="text-gray-500 dark:text-gray-400 font-bold">/mo</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-5 mb-10 relative z-10">
                {tier.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-4">
                    <CheckCircle2 className={`w-6 h-6 flex-shrink-0 mt-0.5 ${tier.recommended ? 'text-scale-red' : 'text-gray-400 dark:text-gray-500'}`} />
                    <span className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed font-semibold">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={tier.whopLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-auto w-full py-5 rounded-2xl font-black text-lg transition-all relative overflow-hidden group z-10 text-center block ${tier.recommended
                    ? 'bg-scale-red hover:bg-scale-red-light text-white shadow-[0_0_20px_rgba(229,9,20,0.3)] dark:shadow-[0_0_30px_rgba(229,9,20,0.4)] hover:shadow-[0_0_30px_rgba(229,9,20,0.5)] dark:hover:shadow-[0_0_50px_rgba(229,9,20,0.6)]'
                    : 'bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 text-gray-900 dark:text-white border border-gray-200 dark:border-white/10'
                  }`}
              >
                <span className="relative z-10">Join {tier.name}</span>
                {tier.recommended && (
                  <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                )}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingTiers;
