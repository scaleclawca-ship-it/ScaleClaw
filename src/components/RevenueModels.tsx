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
    <section id="models" className="py-32 bg-gray-50 dark:bg-[#0a0a0a] border-y border-gray-200 dark:border-white/[0.05] relative overflow-hidden bg-grid-pattern transition-colors duration-500">
      
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-scale-red rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[150px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-20 md:flex md:items-end justify-between">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-gray-900 dark:text-white">7 Ways to <br/><span className="text-gradient drop-shadow-sm dark:drop-shadow-md">Monetize.</span></h2>
            <p className="text-gray-600 dark:text-gray-400 text-xl font-medium leading-relaxed">
              We teach specific frameworks for generating income with OpenClaw. Pick your path and follow the blueprint.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {models.map((model, index) => {
            const Icon = icons[index];
            return (
              <div
                key={index}
                className="glass p-8 rounded-3xl border border-gray-200 dark:border-white/[0.08] hover:border-scale-red/50 transition-all duration-300 group cursor-default bg-white/50 dark:bg-white/[0.01] hover:bg-white dark:hover:bg-white/[0.03] flex flex-col h-full"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-white to-gray-100 dark:from-scale-dark dark:to-[#1a1a1a] border border-gray-200 dark:border-white/10 text-scale-red flex items-center justify-center group-hover:bg-scale-red group-hover:text-white transition-colors duration-500 shadow-sm dark:shadow-xl group-hover:shadow-[0_0_20px_rgba(229,9,20,0.4)]">
                    <Icon className="w-7 h-7" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-scale-red-light transition-colors">{model.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 leading-relaxed font-medium">{model.description}</p>
                <div className="inline-flex mt-auto items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 text-xs font-bold uppercase tracking-wider self-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 dark:bg-green-400"></span>
                  {model.income}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default RevenueModels;
