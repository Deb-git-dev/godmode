import React from 'react';
import { ArrowLeft, TrendingUp, Users, Shield, ArrowRight, Zap } from 'lucide-react';

export const SaaSTemplatePage: React.FC<{ onBack?: () => void }> = ({ onBack }) => {
  return (
    <div className="relative min-h-screen bg-white text-slate-900 font-body selection:bg-blue-600 selection:text-white">
      {/* Top Header */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-100 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <button 
              onClick={onBack || (() => window.location.hash = '/showcase')}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-xs font-medium text-slate-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Showcase</span>
            </button>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
              <span className="font-heading font-extrabold text-base text-slate-900">Apex SaaS</span>
              <span className="px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 text-[10px] font-semibold">
                REF 24 • @waleedkibhen
              </span>
            </div>
          </div>

          <button className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-md shadow-blue-100 transition-all">
            Get Started Free
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-16 space-y-20">
        <section className="max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold">
            <Zap className="w-3.5 h-3.5" />
            <span>Modern Billing & Multi-Tenant Infrastructure</span>
          </div>

          <h1 className="text-5xl sm:text-6xl font-heading font-black tracking-tight text-slate-900">
            Scale your software business with <span className="text-blue-600">frictionless billing</span>.
          </h1>

          <p className="text-base text-slate-600 max-w-xl mx-auto font-light leading-relaxed">
            The complete toolkit for SaaS companies: automated invoicing, revenue recovery, usage meters, and multi-currency payouts in 140+ countries.
          </p>

          <div className="flex items-center justify-center gap-4 pt-2">
            <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-xl shadow-blue-200 transition-all">
              <span>Start Free 14-Day Trial</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>

        {/* Live Metrics Showcase */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-sm space-y-2">
            <div className="flex items-center justify-between text-slate-500 text-xs font-medium">
              <span>Monthly Recurring Revenue</span>
              <TrendingUp className="w-4 h-4 text-emerald-600" />
            </div>
            <div className="text-3xl font-heading font-black text-slate-900">$248,390</div>
            <div className="text-xs font-semibold text-emerald-600">+18.4% from last month</div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-sm space-y-2">
            <div className="flex items-center justify-between text-slate-500 text-xs font-medium">
              <span>Active Subscribers</span>
              <Users className="w-4 h-4 text-blue-600" />
            </div>
            <div className="text-3xl font-heading font-black text-slate-900">14,290</div>
            <div className="text-xs font-semibold text-blue-600">+1,420 new this week</div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-sm space-y-2">
            <div className="flex items-center justify-between text-slate-500 text-xs font-medium">
              <span>Failed Payment Recovery</span>
              <Shield className="w-4 h-4 text-indigo-600" />
            </div>
            <div className="text-3xl font-heading font-black text-slate-900">99.4%</div>
            <div className="text-xs font-semibold text-indigo-600">Smart retry active</div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-100 py-8 text-center text-xs text-slate-400">
        SaaS Template • Original Bright Modern UI from 21st.dev @waleedkibhen
      </footer>
    </div>
  );
};
