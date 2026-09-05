import React, { useState } from 'react';
import { ArrowLeft, Database, Copy, Check } from 'lucide-react';

const SAMPLE_SCHEMA = `datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model User {
  id        String   @id @default(cuid())
  email     String   @unique
  name      String?
  role      Role     @default(MEMBER)
  posts     Post[]
  createdAt DateTime @default(now())
}

model Post {
  id        String   @id @default(cuid())
  title     String
  content   String?
  published Boolean  @default(false)
  authorId  String
  author    User     @relation(fields: [authorId], references: [id])
}

enum Role {
  ADMIN
  MEMBER
}`;

export const PrismaHeroPage: React.FC<{ onBack?: () => void }> = ({ onBack }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(SAMPLE_SCHEMA);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative min-h-screen bg-[#F8FAFC] text-slate-900 font-body selection:bg-teal-600 selection:text-white">
      {/* Top Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200/80 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button 
            onClick={onBack || (() => window.location.hash = '/showcase')}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-xs font-medium text-slate-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Showcase Hub</span>
          </button>
          
          <span className="px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-700 text-xs font-mono font-semibold">
            PRISMA HERO • REF 20 (@rahil1202)
          </span>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-16 space-y-16">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-700 text-xs font-semibold">
            <Database className="w-3.5 h-3.5" />
            <span>Next-Generation Type-Safe ORM</span>
          </div>

          <h1 className="text-5xl sm:text-6xl font-heading font-black tracking-tight text-slate-900">
            Build data-driven apps <span className="bg-gradient-to-r from-teal-600 to-indigo-600 bg-clip-text text-transparent">without the boilerplate</span>.
          </h1>

          <p className="text-base text-slate-600 max-w-xl mx-auto font-light leading-relaxed">
            Intuitive data modeling, automated type-safe migrations, and instant query autocompletion for modern TypeScript teams.
          </p>
        </div>

        {/* Schema Viewer Card */}
        <div className="max-w-3xl mx-auto rounded-3xl overflow-hidden bg-slate-900 text-slate-200 border border-slate-800 shadow-2xl">
          <div className="flex items-center justify-between px-6 py-3.5 bg-slate-950 border-b border-slate-800">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <span className="w-3 h-3 rounded-full bg-slate-700" />
              <span>schema.prisma</span>
            </div>
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-mono text-slate-300 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
          <pre className="p-6 overflow-x-auto text-xs font-mono leading-relaxed text-teal-300">
            <code>{SAMPLE_SCHEMA}</code>
          </pre>
        </div>
      </main>

      <footer className="border-t border-slate-200 bg-white py-8 text-center text-xs text-slate-500">
        Prisma Hero Component • Original Clean Developer Aesthetic by @rahil1202
      </footer>
    </div>
  );
};
