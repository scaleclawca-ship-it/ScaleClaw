import React from 'react';
import { Lock, Unlock, ChevronRight, ShoppingCart, Shirt, TrendingUp, Megaphone, Home, Dumbbell, BookOpen, Youtube, Package, Briefcase, Building2 } from 'lucide-react';

interface Niche {
  icon: React.ElementType;
  name: string;
  tag: string;
}

const allNiches: Niche[] = [
  { icon: ShoppingCart,  name: 'E-Commerce & Dropshipping', tag: 'Shopify • Auto-Fulfillment' },
  { icon: Shirt,         name: 'Clothing & Apparel Brands',  tag: 'Designs • Mockups • Tech Packs' },
  { icon: TrendingUp,    name: 'Trading & Investing',        tag: 'Scanners • Alerts • Journaling' },
  { icon: Megaphone,     name: 'Social Media Agency (SMMA)', tag: 'Content • Reports • Ads' },
  { icon: Building2,     name: 'Real Estate Investing',      tag: 'Deal Flow • Comps • Offers' },
  { icon: Dumbbell,      name: 'Health & Fitness Coaching',  tag: 'Meal Plans • Programs • Check-ins' },
  { icon: BookOpen,      name: 'Online Courses & Info Products', tag: 'Curriculum • Funnels • Enrollments' },
  { icon: Youtube,       name: 'Content Creation & YouTube', tag: 'Scripts • Thumbnails • SEO' },
  { icon: Package,       name: 'Amazon FBA & Marketplace',   tag: 'Research • Listings • PPC' },
  { icon: Briefcase,     name: 'Coaching & Consulting',      tag: 'Pipeline • Onboarding • Delivery' },
  { icon: Home,          name: 'Short-Term Rentals (Airbnb)', tag: 'Pricing • Messaging • Scheduling' },
];

interface TierAccess {
  tier: string;
  price: string;
  color: string;
  borderColor: string;
  badgeBg: string;
  badgeText: string;
  glowColor: string;
  nicheCount: string;
  nicheLabel: string;
  unlockedIndices: number[];
  extraPerks: string[];
}

const tierAccess: TierAccess[] = [
  {
    tier: 'Starter',
    price: '$35/mo',
    color: 'text-gray-500 dark:text-gray-400',
    borderColor: 'border-gray-200 dark:border-white/10',
    badgeBg: 'bg-gray-100 dark:bg-white/5',
    badgeText: 'text-gray-600 dark:text-gray-300',
    glowColor: '',
    nicheCount: '1',
    nicheLabel: 'Pre-Done Niche',
    unlockedIndices: [0],
    extraPerks: ['Full video script bible for your niche', 'Shot-by-shot directing guide', 'Hook variations & edit notes', 'Posting schedule & caption templates'],
  },
  {
    tier: 'Builder',
    price: '$150/mo',
    color: 'text-scale-red',
    borderColor: 'border-scale-red/40',
    badgeBg: 'bg-scale-red/10',
    badgeText: 'text-scale-red',
    glowColor: 'shadow-[0_0_40px_rgba(229,9,20,0.12)] dark:shadow-[0_0_60px_rgba(229,9,20,0.2)]',
    nicheCount: '5',
    nicheLabel: 'Niches Unlocked',
    unlockedIndices: [0, 1, 2, 3, 4],
    extraPerks: ['Everything in Starter', 'Done-for-you OpenClaw skill configs', 'SOUL.md templates for each niche', 'Monthly live automation workshops', 'Access to custom skills library'],
  },
  {
    tier: 'Operator',
    price: '$500/mo',
    color: 'text-amber-500',
    borderColor: 'border-amber-400/40',
    badgeBg: 'bg-amber-400/10',
    badgeText: 'text-amber-500',
    glowColor: 'shadow-[0_0_40px_rgba(251,191,36,0.08)] dark:shadow-[0_0_60px_rgba(251,191,36,0.15)]',
    nicheCount: 'All 11',
    nicheLabel: 'Niches + Full Library',
    unlockedIndices: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    extraPerks: ['Everything in Builder', '1-on-1 monthly strategy calls', 'Advanced multi-agent workflow configs', 'Enterprise automation blueprints', 'Priority support from our team'],
  },
];

const RevenueModels = () => {
  return (
    <section id="models" className="py-32 bg-gray-50 dark:bg-[#0a0a0a] border-y border-gray-200 dark:border-white/[0.05] relative overflow-hidden transition-colors duration-500">

      {/* Background glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-scale-red rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[150px] opacity-10 pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-scale-red rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[150px] opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-scale-red/10 border border-scale-red/20 text-scale-red text-xs font-black uppercase tracking-widest mb-6">
            <Unlock className="w-3.5 h-3.5" />
            Niche Access by Plan
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-gray-900 dark:text-white">
            Your Niche. <br/>
            <span className="text-gradient drop-shadow-sm dark:drop-shadow-md">Your Blueprint.</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-xl font-medium leading-relaxed">
            Every plan comes with a fully pre-built niche — complete video scripts, automation systems, and content strategy. Upgrade to unlock more.
          </p>
        </div>

        {/* Tier columns */}
        <div className="grid lg:grid-cols-3 gap-8">
          {tierAccess.map((t) => (
            <div
              key={t.tier}
              className={`rounded-3xl border ${t.borderColor} ${t.glowColor} bg-white dark:bg-[#111] overflow-hidden flex flex-col transition-all duration-300`}
            >
              {/* Tier header */}
              <div className={`px-8 pt-8 pb-6 border-b ${t.borderColor}`}>
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full ${t.badgeBg} ${t.badgeText} border ${t.borderColor}`}>
                    {t.tier}
                  </span>
                  <span className={`text-sm font-black ${t.color}`}>{t.price}</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className={`text-5xl font-black ${t.color}`}>{t.nicheCount}</span>
                  <span className="text-gray-600 dark:text-gray-400 font-bold text-sm">{t.nicheLabel}</span>
                </div>
              </div>

              {/* Niche grid */}
              <div className="px-6 py-6 flex-1">
                <p className="text-xs font-black uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4">Niches Included</p>
                <div className="space-y-2.5">
                  {allNiches.map((niche, i) => {
                    const unlocked = t.unlockedIndices.includes(i);
                    const Icon = niche.icon;
                    return (
                      <div
                        key={i}
                        className={`flex items-center gap-3 rounded-xl px-3 py-2.5 transition-all duration-200 ${
                          unlocked
                            ? 'bg-gray-50 dark:bg-white/[0.04] border border-gray-200 dark:border-white/[0.07]'
                            : 'opacity-30'
                        }`}
                      >
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                          unlocked
                            ? `${t.badgeBg} ${t.color}`
                            : 'bg-gray-100 dark:bg-white/5 text-gray-400'
                        }`}>
                          {unlocked ? <Icon className="w-4 h-4" /> : <Lock className="w-3.5 h-3.5" />}
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className={`text-xs font-bold leading-tight ${unlocked ? 'text-gray-900 dark:text-white' : 'text-gray-400 dark:text-gray-600'}`}>
                            {niche.name}
                          </p>
                          {unlocked && (
                            <p className="text-[10px] text-gray-500 dark:text-gray-500 mt-0.5 truncate">{niche.tag}</p>
                          )}
                        </div>
                        {unlocked && <ChevronRight className={`w-3.5 h-3.5 flex-shrink-0 ${t.color} opacity-60`} />}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Perks */}
              <div className={`px-6 pb-8 pt-4 border-t ${t.borderColor}`}>
                <p className="text-xs font-black uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-3">Also Included</p>
                <ul className="space-y-2">
                  {t.extraPerks.map((perk, pi) => (
                    <li key={pi} className="flex items-start gap-2">
                      <ChevronRight className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${t.color}`} />
                      <span className="text-xs text-gray-600 dark:text-gray-400 font-semibold leading-relaxed">{perk}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-sm text-gray-500 dark:text-gray-500 mt-12 font-medium">
          All niches include a full <span className="text-gray-700 dark:text-gray-300 font-bold">Video Script Bible</span>, automation setup, and content strategy. Switch niches anytime.
        </p>
      </div>
    </section>
  );
};

export default RevenueModels;
