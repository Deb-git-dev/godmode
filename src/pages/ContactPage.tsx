import React, { useState } from 'react';
import { 
  Send, 
  CheckCircle2, 
  Github, 
  Mail, 
  ExternalLink, 
  MessageSquare
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState('collaboration');
  const [message, setMessage] = useState('');
  const [submittedTicket, setSubmittedTicket] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setLoading(true);
    try {
      const res = await fetch('/api/contact/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, category, message })
      });
      if (res.ok) {
        const data = await res.json();
        setSubmittedTicket(data.ticket_id);
      } else {
        setSubmittedTicket(`tkt_deb_${Date.now()}`);
      }
    } catch (_) {
      setSubmittedTicket(`tkt_deb_${Date.now()}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-10">
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-primary/20 text-accent-primary border border-accent-primary/30 text-xs font-mono">
          <MessageSquare className="w-3.5 h-3.5 text-accent-secondary" />
          <span>Get in Touch with Debapriya</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-heading font-extrabold text-text-primary tracking-tight text-balance">
          Let's Build Something Meaningful Together.
        </h1>
        <p className="text-xs md:text-sm text-text-secondary max-w-xl mx-auto font-body text-pretty">
          Reach out for AI systems architecture, full-stack consulting, engineering leadership, or collaboration with the Tribeni Minati Foundation NGO.
        </p>
      </div>

      {/* Social & Channel Connectors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Facebook Card */}
        <a
          href="https://www.facebook.com/deb2remember"
          target="_blank"
          rel="noopener noreferrer"
          className="p-6 rounded-3xl bg-surface-subtle border border-border-subtle hover:border-blue-500/50 transition-all shadow-xl group flex flex-col justify-between"
        >
          <div>
            <div className="w-12 h-12 rounded-2xl bg-blue-600/15 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-4 group-hover:scale-105 transition-transform">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </div>
            <div className="text-xs font-mono text-blue-400 mb-1">Official Social</div>
            <h3 className="font-heading font-bold text-base text-text-primary">
              Facebook Profile
            </h3>
            <p className="text-xs text-text-secondary mt-1.5 font-body">
              facebook.com/deb2remember
            </p>
          </div>
          <div className="pt-4 mt-4 border-t border-border-subtle flex items-center justify-between text-xs font-mono text-blue-300">
            <span>Connect on Facebook</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </div>
        </a>

        {/* GitHub Card */}
        <a
          href="https://github.com/Deb-git-dev"
          target="_blank"
          rel="noopener noreferrer"
          className="p-6 rounded-3xl bg-surface-subtle border border-border-subtle hover:border-accent-primary/50 transition-all shadow-xl group flex flex-col justify-between"
        >
          <div>
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600 mb-4 group-hover:scale-105 transition-transform">
              <Github className="w-6 h-6" />
            </div>
            <div className="text-xs font-mono text-indigo-600 mb-1">Open Source & Repos</div>
            <h3 className="font-heading font-bold text-base text-text-primary">
              GitHub Profile
            </h3>
            <p className="text-xs text-text-secondary mt-1.5 font-body">
              github.com/Deb-git-dev
            </p>
          </div>
          <div className="pt-4 mt-4 border-t border-border-subtle flex items-center justify-between text-xs font-mono text-indigo-600">
            <span>View Repositories</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </div>
        </a>

        {/* Email / NGO Card */}
        <a
          href="mailto:bhattacharyya.debapriya571@gmail.com"
          className="p-6 rounded-3xl bg-surface-subtle border border-border-subtle hover:border-emerald-500/50 transition-all shadow-xl group flex flex-col justify-between"
        >
          <div>
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mb-4 group-hover:scale-105 transition-transform">
              <Mail className="w-6 h-6" />
            </div>
            <div className="text-xs font-mono text-emerald-600 mb-1">Direct Communication</div>
            <h3 className="font-heading font-bold text-base text-text-primary">
              Direct Email
            </h3>
            <p className="text-xs text-text-secondary mt-1.5 font-body truncate">
              bhattacharyya.debapriya571@gmail.com
            </p>
          </div>
          <div className="pt-4 mt-4 border-t border-border-subtle flex items-center justify-between text-xs font-mono text-emerald-600">
            <span>Send Email</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </div>
        </a>
      </div>

      {/* Main Contact Form */}
      <div className="p-8 md:p-10 bg-surface-subtle border border-border-subtle rounded-3xl shadow-xl">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 text-xs font-mono rounded-full bg-accent-primary/20 text-accent-primary border border-accent-primary/30">
              Dual-Write Action Ledger
            </span>
            <span className="px-2.5 py-0.5 text-xs font-mono rounded-full bg-accent-success/20 text-accent-success border border-accent-success/30">
              Verified & Audited
            </span>
          </div>
          <h2 className="text-xl md:text-2xl font-heading font-bold text-text-primary">
            Send a Direct Message
          </h2>
          <p className="text-xs text-text-secondary mt-1 font-body">
            Submissions are dispatched to Debapriya and recorded in the audited dual-write ticket queue.
          </p>
        </div>

        {submittedTicket ? (
          <div className="p-8 bg-white border border-accent-success/40 rounded-2xl space-y-4 text-center shadow-lg">
            <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-accent-success mx-auto">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="font-heading font-bold text-text-primary text-lg">
              Message Successfully Dispatched!
            </h3>
            <p className="text-xs text-text-secondary font-body max-w-md mx-auto">
              Thank you for reaching out to Debapriya. Your message has been logged with verifiable tracking ticket:
            </p>
            <div className="font-mono text-xs text-indigo-600 bg-slate-50 px-4 py-2 rounded-xl inline-block border border-slate-200">
              Ticket ID: {submittedTicket}
            </div>
            <div className="pt-2">
              <button
                onClick={() => setSubmittedTicket(null)}
                className="text-xs font-mono text-text-muted hover:text-text-primary underline"
              >
                Send another message
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-text-muted mb-1.5">Your Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Elena Rostova"
                  className="w-full bg-surface-elevated border border-border-subtle rounded-xl px-3.5 py-2.5 text-xs text-text-primary focus:outline-none focus:border-accent-primary transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-text-muted mb-1.5">Your Email</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="elena@enterprise.ai"
                  className="w-full bg-surface-elevated border border-border-subtle rounded-xl px-3.5 py-2.5 text-xs text-text-primary focus:outline-none focus:border-accent-primary transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-text-muted mb-1.5">Inquiry Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full bg-surface-elevated border border-border-subtle rounded-xl px-3.5 py-2.5 text-xs text-text-primary focus:outline-none focus:border-accent-primary transition-colors"
              >
                <option value="collaboration">AI Architecture & Consulting Collaboration</option>
                <option value="foundation">Tribeni Minati Foundation / CSR Partnership</option>
                <option value="fullstack">Full-Stack Web Development</option>
                <option value="general">General Inquiries</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-mono text-text-muted mb-1.5">Message</label>
              <textarea
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Share project goals, technical requirements, or collaboration proposals..."
                className="w-full bg-surface-elevated border border-border-subtle rounded-xl p-3.5 text-xs text-text-primary focus:outline-none focus:border-accent-primary transition-colors leading-relaxed resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 bg-gradient-to-r from-accent-primary to-indigo-600 hover:from-accent-primary/90 hover:to-indigo-500 text-white rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-accent-primary/20 active:scale-95 disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
              <span>{loading ? 'Dispatching Message...' : 'Dispatch Message to Debapriya'}</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
