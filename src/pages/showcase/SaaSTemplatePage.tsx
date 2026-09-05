import React from 'react';
import { ArrowLeft, Check } from 'lucide-react';

export const SaaSTemplatePage: React.FC<{ onBack?: () => void }> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-body p-6 flex flex-col justify-between">
      <div className="flex items-center justify-between border-b border-slate-800 pb-4">
        <button 
          onClick={onBack || (() => window.location.hash = '/showcase')}
          className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Showcase Hub</span>
        </button>
        <span className="text-xs font-mono px-3 py-1 rounded-full bg-indigo-950 border border-indigo-700 text-indigo-300">
          WALEED SAAS TEMPLATE • REF 24
        </span>
      </div>

      {/* Main SaaS Section */}
      <div className="max-w-6xl mx-auto py-16 space-y-16">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <h1 className="text-4xl sm:text-6xl font-heading font-extrabold text-white">
            Everything Your Startup Needs
          </h1>
          <p className="text-sm sm:text-base text-slate-300 font-light">
            All-in-one developer platform with authentication, database pooling, and edge deployments.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { tier: "Hobby", price: "$0", desc: "Perfect for experiments", features: ["1 Project", "Community Support", "10k API calls"] },
            { tier: "Pro", price: "$29", desc: "For scaling teams", popular: true, features: ["Unlimited Projects", "Sub-second TTFT", "24/7 Support", "Zero-GPU Fallback"] },
            { tier: "Enterprise", price: "Custom", desc: "Dedicated sovereignty", features: ["Dedicated VPC", "Custom SLA", "Audit Logging", "Role Governance"] },
          ].map((card, i) => (
            <div 
              key={i} 
              className={`p-8 rounded-3xl border flex flex-col justify-between space-y-6 ${
                card.popular ? 'bg-slate-900 border-indigo-500/80 shadow-2xl shadow-indigo-500/10' : 'bg-slate-900/60 border-slate-800'
              }`}
            >
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <h3 className="font-heading font-bold text-lg text-white">{card.tier}</h3>
                  {card.popular && <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-indigo-500 text-white">POPULAR</span>}
                </div>
                <div className="text-4xl font-extrabold font-heading text-white">{card.price}</div>
                <p className="text-xs text-slate-400 font-mono">{card.desc}</p>
              </div>

              <div className="space-y-3">
                {card.features.map((f, fi) => (
                  <div key={fi} className="flex items-center gap-2 text-xs text-slate-300">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-3 rounded-xl font-mono text-xs font-bold transition-all ${
                card.popular ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg' : 'bg-slate-800 hover:bg-slate-700 text-slate-200'
              }`}>
                Choose {card.tier}
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-slate-800 pt-4 text-center text-xs font-mono text-slate-500">
        Full-Featured High-Converting SaaS Landing Template
      </div>
    </div>
  );
};
