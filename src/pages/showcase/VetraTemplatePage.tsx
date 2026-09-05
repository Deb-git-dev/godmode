import React, { useState } from 'react';
import { ArrowLeft, CheckCircle2, ArrowRight, ShieldCheck, Zap, BarChart3 } from 'lucide-react';

export const VetraTemplatePage: React.FC<{ onBack?: () => void }> = ({ onBack }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <div className="relative min-h-screen bg-[#F9FAFB] text-slate-900 font-body selection:bg-violet-600 selection:text-white">
      {/* Top Navigation */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200/80 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <button 
              onClick={onBack || (() => window.location.hash = '/showcase')}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-xs font-medium text-slate-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Showcase</span>
            </button>
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-violet-600 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-md shadow-violet-200">
                V
              </div>
              <span className="font-heading font-extrabold text-lg tracking-tight text-slate-900">Vetra</span>
              <span className="px-2 py-0.5 rounded-full bg-violet-50 text-violet-700 border border-violet-200 text-[10px] font-semibold">
                SaaS Template
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a 
              href="https://21st.dev/@larsen66/templates/vetra" 
              target="_blank" 
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors"
            >
              Original by @larsen66
            </a>
            <button className="px-4 py-2 rounded-xl bg-violet-600 hover:bg-violet-700 text-white text-xs font-semibold shadow-md shadow-violet-200 transition-all hover:shadow-lg">
              Start Free Trial
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 pt-16 pb-24 space-y-20">
        <section className="max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-50 border border-violet-200 text-violet-700 text-xs font-medium">
            <Zap className="w-3.5 h-3.5" />
            <span>Vetra v2.4 Launch • Built for Modern Engineering Teams</span>
          </div>

          <h1 className="text-5xl sm:text-6xl font-heading font-black tracking-tight text-slate-950 leading-[1.08]">
            Ship faster with the <span className="bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 bg-clip-text text-transparent">developer platform</span> you love.
          </h1>

          <p className="text-lg text-slate-600 font-light leading-relaxed">
            Eliminate operational overhead, streamline deployment workflows, and monitor distributed infrastructure from a unified, lightning-fast workspace.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-semibold text-sm shadow-xl shadow-violet-200 hover:scale-105 transition-all">
              <span>Get Started Free</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="px-6 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-semibold text-sm border border-slate-200 shadow-sm transition-colors">
              Book Architecture Demo
            </button>
          </div>

          <div className="flex items-center justify-center gap-6 pt-4 text-xs text-slate-500 font-medium">
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> No credit card required</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> 14-day full access</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Cancel anytime</span>
          </div>
        </section>

        {/* Product Preview Card */}
        <section className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-2xl shadow-slate-200/60 p-4 sm:p-6">
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100 text-xs font-mono text-slate-500">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-400" />
              <span className="w-3 h-3 rounded-full bg-amber-400" />
              <span className="w-3 h-3 rounded-full bg-emerald-400" />
              <span className="ml-2 font-medium text-slate-700">vetra.app/telemetry/production</span>
            </div>
            <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-semibold">99.998% Uptime</span>
          </div>
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80" 
            alt="Vetra SaaS Dashboard" 
            className="w-full rounded-xl object-cover aspect-[21/9] shadow-inner"
          />
        </section>

        {/* Feature Grid */}
        <section className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-heading font-extrabold text-slate-900">Engineered for Velocity</h2>
            <p className="text-sm text-slate-500">Everything your team needs to scale from MVP to high-volume production.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Zap,
                title: "Instant Edge Deployments",
                desc: "Push code to main and see atomic rollouts across 300+ global edge nodes in under 2 seconds.",
                badge: "Edge Engine"
              },
              {
                icon: BarChart3,
                title: "Real-Time Telemetry",
                desc: "Granular latency traces, query metrics, and error rates delivered via sub-second websockets.",
                badge: "Live Telemetry"
              },
              {
                icon: ShieldCheck,
                title: "Statutory Compliance Guard",
                desc: "Automated SOC2, HIPAA, and GDPR audit trails generated with verifiable cryptographic proofs.",
                badge: "Compliance"
              }
            ].map((f, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md hover:border-violet-300 transition-all space-y-4">
                <div className="w-10 h-10 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center font-bold">
                  <f.icon className="w-5 h-5" />
                </div>
                <div className="space-y-1.5">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-violet-600">{f.badge}</span>
                  <h3 className="text-lg font-heading font-bold text-slate-900">{f.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Matrix */}
        <section className="space-y-8 pt-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-heading font-extrabold text-slate-900">Simple, Transparent Pricing</h2>
            <div className="inline-flex items-center p-1 rounded-xl bg-slate-200/80 text-xs font-semibold text-slate-700">
              <button 
                onClick={() => setBillingCycle('monthly')}
                className={`px-4 py-1.5 rounded-lg transition-all ${billingCycle === 'monthly' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600'}`}
              >
                Monthly
              </button>
              <button 
                onClick={() => setBillingCycle('yearly')}
                className={`px-4 py-1.5 rounded-lg transition-all ${billingCycle === 'yearly' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600'}`}
              >
                Yearly (20% Off)
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                name: "Starter",
                price: billingCycle === 'monthly' ? "$29" : "$23",
                desc: "Perfect for early-stage builders and micro-teams.",
                features: ["Up to 5 team members", "100GB fast edge bandwidth", "30-day log retention", "Community Discord support"]
              },
              {
                name: "Pro Platform",
                price: billingCycle === 'monthly' ? "$79" : "$63",
                desc: "Engineered for scaling engineering departments.",
                features: ["Unlimited team members", "1TB edge bandwidth", "90-day retention & traces", "Priority 24/7 SLA", "Custom domains & SSL"],
                featured: true
              },
              {
                name: "Enterprise",
                price: "Custom",
                desc: "Dedicated infrastructure, audit logs, and custom agreements.",
                features: ["Dedicated compute pods", "Zero-latency VPC peering", "SOC2 compliance attestation", "Dedicated account engineer"]
              }
            ].map((tier, idx) => (
              <div 
                key={idx}
                className={`p-8 rounded-2xl bg-white border transition-all relative space-y-6 ${
                  tier.featured 
                    ? 'border-violet-600 shadow-xl shadow-violet-100 ring-2 ring-violet-600' 
                    : 'border-slate-200 shadow-sm hover:shadow-md'
                }`}
              >
                {tier.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-violet-600 text-white text-[10px] font-bold uppercase tracking-wider shadow-sm">
                    Most Popular
                  </span>
                )}

                <div className="space-y-2">
                  <h3 className="text-xl font-heading font-bold text-slate-900">{tier.name}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{tier.desc}</p>
                </div>

                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-heading font-black text-slate-900">{tier.price}</span>
                  {tier.price !== "Custom" && <span className="text-xs text-slate-500 font-medium">/month</span>}
                </div>

                <ul className="space-y-3 pt-2 text-xs text-slate-600">
                  {tier.features.map((feat, fi) => (
                    <li key={fi} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-violet-600 flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  className={`w-full py-2.5 rounded-xl text-xs font-semibold transition-all ${
                    tier.featured 
                      ? 'bg-violet-600 hover:bg-violet-700 text-white shadow-md shadow-violet-200' 
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                  }`}
                >
                  Choose {tier.name}
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-8 px-6 text-center text-xs text-slate-500 font-medium">
        Vetra SaaS Template • Reconstructed from 21st.dev reference @larsen66 • Original Crisp Light Aesthetic
      </footer>
    </div>
  );
};
