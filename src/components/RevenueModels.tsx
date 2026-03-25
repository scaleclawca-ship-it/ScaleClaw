import { motion } from 'framer-motion';
import { Code, PenTool, Database, Laptop, ShoppingBag, Globe, Share2 } from 'lucide-react';
import { RevenueModel } from '../types';

const models: RevenueModel[] = [
  {
    title: "Automation Agency",
    income: "$500 - $5k/mo per client",
    description: "Offer OpenClaw-powered automation services to small businesses."
  },
  {
    title: "ClawHub Skill Sales",
    income: "$100 - $5k+/mo",
    description: "Build and sell vertical-specific skills on the marketplace."
  },
  {
    title: "Content Repurposing",
    income: "$600 - $1.2k/mo per client",
    description: "Turn one piece of content into blogs, threads, and scripts."
  },
  {
    title: "Done-For-You Setups",
    income: "$200 - $2k per setup",
    description: "Configure OpenClaw for local businesses or non-technical clients."
  },
  {
    title: "Template Packs",
    income: "$29 - $149 each",
    description: "Sell pre-built OpenClaw workspace configurations as digital products."
  },
  {
    title: "Freelance Enhancement",
    income: "10x Output",
    description: "Use OpenClaw to multiply your output and take on more clients."
  },
  {
    title: "Lead Generation",
    income: "High Ticket",
    description: "Run OpenClaw-powered prospecting systems for B2B clients."
  }
];

const icons = [Globe, Code, Share2, Laptop, ShoppingBag, PenTool, Database];

const RevenueModels = () => {
  return (
    <section id="models" className="py-24 bg-scale-gray-light border-y border-scale-gray relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 md:flex md:items-end justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">7 Ways to Monetize.</h2>
            <p className="text-gray-400 text-lg">
              We teach specific frameworks for generating income with OpenClaw. Pick your path and follow the blueprint.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {models.map((model, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="glass p-6 rounded-2xl border border-gray-700 hover:border-scale-red transition-all group cursor-default shadow-lg hover:shadow-[0_0_20px_rgba(229,9,20,0.15)]"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 rounded-xl bg-scale-dark border border-gray-700 text-scale-red flex items-center justify-center group-hover:bg-scale-red group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{model.title}</h3>
                <p className="text-sm text-gray-400 mb-4">{model.description}</p>
                <span className="inline-block text-xs font-bold text-green-400 bg-green-400/10 px-3 py-1.5 rounded-full border border-green-400/20">
                  {model.income}
                </span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default RevenueModels;
