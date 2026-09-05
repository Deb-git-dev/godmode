import React, { useState, useRef, useEffect } from 'react';
import { 
  Terminal as TerminalIcon, 
  Play, 
  Trash2, 
  ShieldCheck 
} from 'lucide-react';

interface TerminalLine {
  id: string;
  type: 'input' | 'output' | 'system' | 'error';
  text: string;
}

export const CliTerminalPage: React.FC = () => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [lines, setLines] = useState<TerminalLine[]>([
    { id: '1', type: 'system', text: 'GODMODE Architecture Invariant Terminal [v1.0.0]' },
    { id: '2', type: 'system', text: 'Zero Local GPU Enforced • Cloud-Only Compute • 50 Skills Grounded' },
    { id: '3', type: 'system', text: 'Type "help" for a list of available CLI commands, or click any chip below.\n' }
  ]);

  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [lines]);

  const executeCommand = (cmdText: string) => {
    const trimmed = cmdText.trim();
    if (!trimmed) return;

    // Add input line
    const newLines: TerminalLine[] = [
      ...lines,
      { id: Date.now().toString(), type: 'input', text: `godmode@deb-portfolio:~$ ${trimmed}` }
    ];

    setHistory(prev => [...prev, trimmed]);
    setHistoryIndex(-1);

    const cmdLower = trimmed.toLowerCase();

    if (cmdLower === 'clear') {
      setLines([]);
      setInputVal('');
      return;
    }

    if (cmdLower === 'help') {
      newLines.push({
        id: (Date.now() + 1).toString(),
        type: 'output',
        text: `AVAILABLE COMMANDS:
  opencode status          - Display OpenCode terminal harness status & routing
  /design-md <url>         - Decompile website into DESIGN.md token contract
  firecrawl crawl <url>    - Crawl website, extract AST and LLM-ready markdown
  skill-creator init <name>- Scaffold a new .agents/skills/ package
  /audit                   - Execute 14-point invariant loop recheck
  /ground                  - Ground assistant in verified statutory facts
  headroom check           - Check context compression & token headroom
  clear                    - Clear terminal screen
  help                     - Show this menu`
      });
    } else if (cmdLower.startsWith('opencode')) {
      newLines.push({
        id: (Date.now() + 1).toString(),
        type: 'output',
        text: `[OpenCode Harness v1.0.0]
Status: ACTIVE
Connected Providers: Claude 3.5 Sonnet (Primary), NVIDIA NIM Nemotron-4, OpenRouter
Harness Rules: AGENTS.md + DESIGN.md
Local GPU Weights: 0 bytes (Pure Cloud Gateway)`
      });
    } else if (cmdLower.startsWith('/design-md')) {
      const targetUrl = trimmed.split(' ')[1] || 'https://21st.dev';
      newLines.push({
        id: (Date.now() + 1).toString(),
        type: 'output',
        text: `[Claude Code /design-md]
Analyzing target: ${targetUrl}
Extracting layout variance, color tokens, and font scale...
Generated DESIGN.md specification:
- Background: #0B0F19 (Obsidian Deep)
- Surface: #1E293B (Void Elevation)
- Accent: #6366F1 (Indigo Glow)
- Typography: Space Grotesk (Headline) + Inter (Body)
- Status: Ready for copy-paste injection.`
      });
    } else if (cmdLower.startsWith('firecrawl')) {
      const targetUrl = trimmed.split(' ')[2] || trimmed.split(' ')[1] || 'https://github.com/opencode-ai/opencode';
      newLines.push({
        id: (Date.now() + 1).toString(),
        type: 'output',
        text: `[Firecrawl CLI v2.0]
Dispatching web crawler to: ${targetUrl}
Status: 200 OK
Parsed 1,842 DOM nodes in 148ms
Generated clean llms.txt context markdown
Payload size: 12.4 KB`
      });
    } else if (cmdLower.startsWith('skill-creator')) {
      const skillName = trimmed.split(' ')[2] || 'new-feature-skill';
      newLines.push({
        id: (Date.now() + 1).toString(),
        type: 'output',
        text: `[Skill Creator CLI]
Scaffolding skill package: .agents/skills/${skillName}/
- Created SKILL.md (YAML frontmatter + system prompt)
- Created scripts/run.py
- Created eval_spec.json
Skill package passed strict validation.`
      });
    } else if (cmdLower === '/audit') {
      newLines.push({
        id: (Date.now() + 1).toString(),
        type: 'output',
        text: `[*] Running GODMODE Automated Invariant Audit (§19)...
[1/14] Zero Local GPU / Neural Weights: PASSED (0 local weights)
[2/14] Workspace Rules Hierarchy: PASSED (All 9 active)
[3/14] Skills Ecosystem & Meta-Router: PASSED (50 skills installed)
[4/14] Concrete Design Token Contract: PASSED (Obsidian Deep active)
[5/14] MCP Servers & Harness: PASSED (Supabase, GitHub, GitMCP active)
[SUCCESS] ALL VERIFICATION INVARIANTS PASSED (100%).`
      });
    } else if (cmdLower === '/ground') {
      newLines.push({
        id: (Date.now() + 1).toString(),
        type: 'output',
        text: `[Compliance Grounding Registry]
Author: Debapriya Bhattacharyya (Deb)
Foundation: Tribeni Minati Foundation
Registration No: WB/2021/0284912
Section 80G Approval: AAATT1903EE20214
Section 12A Registry: AAATT1903EE20211
Verified ground truth locked.`
      });
    } else if (cmdLower.startsWith('headroom')) {
      newLines.push({
        id: (Date.now() + 1).toString(),
        type: 'output',
        text: `[Headroom AI Token Optimization]
Context Window: 200,000 tokens
Current Prompt Footprint: 2,410 tokens
Available Headroom: 98.8%
Compression Ratio: 3.4x (Lossless pruning active)`
      });
    } else {
      newLines.push({
        id: (Date.now() + 1).toString(),
        type: 'error',
        text: `command not found: ${trimmed}. Type "help" for a list of valid commands.`
      });
    }

    setLines(newLines);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (history.length > 0) {
        const nextIdx = historyIndex + 1 < history.length ? historyIndex + 1 : historyIndex;
        setHistoryIndex(nextIdx);
        setInputVal(history[history.length - 1 - nextIdx] || '');
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIdx = historyIndex - 1;
        setHistoryIndex(nextIdx);
        setInputVal(history[history.length - 1 - nextIdx] || '');
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInputVal('');
      }
    }
  };

  const chips = [
    { label: 'opencode status', cmd: 'opencode status' },
    { label: '/design-md 21st.dev', cmd: '/design-md https://21st.dev' },
    { label: 'firecrawl crawl', cmd: 'firecrawl crawl https://github.com/opencode-ai/opencode' },
    { label: 'skill-creator init', cmd: 'skill-creator init dynamic-crawler' },
    { label: '/audit (14-Point)', cmd: '/audit' },
    { label: '/ground (Statutory)', cmd: '/ground' },
    { label: 'headroom check', cmd: 'headroom check' },
    { label: 'help', cmd: 'help' },
    { label: 'clear', cmd: 'clear' }
  ];

  return (
    <div className="space-y-6">
      {/* Header Card */}
      <div className="p-6 md:p-8 bg-surface-subtle border border-border-subtle rounded-3xl relative overflow-hidden shadow-2xl">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-700/60 text-cyan-300 text-xs font-mono flex items-center gap-1.5">
              <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
              <span>Agent CLI & Harness Playground</span>
            </span>
            <span className="px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-700/60 text-indigo-300 text-xs font-mono">
              OpenCode • Claude Code • Firecrawl CLI
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
            <ShieldCheck className="w-4 h-4" />
            <span>Pure In-Browser REPL Simulator</span>
          </div>
        </div>

        <h1 className="text-2xl md:text-4xl font-heading font-extrabold text-white tracking-tight">
          Agent CLI & Terminal Sandbox
        </h1>
        <p className="text-text-secondary text-xs md:text-sm mt-2 max-w-3xl leading-relaxed font-body">
          Interact with the underlying CLI tools, slash commands, and harnesses configured in Project GODMODE. Run automated invariant audits, execute Firecrawl crawls, or test Claude Code slash extensions directly in your browser.
        </p>

        {/* Quick Execution Chips */}
        <div className="mt-6 flex flex-wrap items-center gap-2">
          {chips.map((chip, idx) => (
            <button
              key={idx}
              onClick={() => executeCommand(chip.cmd)}
              className="px-3 py-1.5 rounded-lg bg-slate-950 hover:bg-slate-900 text-slate-300 hover:text-cyan-300 border border-slate-800 hover:border-cyan-500/50 text-xs font-mono transition-all flex items-center gap-1.5 shadow-sm"
            >
              <Play className="w-2.5 h-2.5 text-cyan-400" />
              <span>{chip.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Terminal Screen Container */}
      <div className="rounded-3xl border border-border-subtle bg-slate-950 shadow-2xl overflow-hidden">
        {/* Terminal Header Bar */}
        <div className="bg-slate-900 px-6 py-3 border-b border-slate-800 flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-rose-500/80" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
            </div>
            <span className="text-slate-400 ml-2">deb@godmode-terminal: ~ (bash / zsh)</span>
          </div>

          <button
            onClick={() => setLines([])}
            className="text-slate-500 hover:text-slate-300 transition-colors flex items-center gap-1 text-[11px]"
            title="Clear terminal screen"
          >
            <Trash2 className="w-3 h-3" />
            <span>Clear</span>
          </button>
        </div>

        {/* Terminal Body */}
        <div className="p-6 font-mono text-xs text-slate-200 min-h-[420px] max-h-[550px] overflow-y-auto space-y-3">
          {lines.map((l) => {
            if (l.type === 'input') {
              return (
                <div key={l.id} className="text-cyan-400 font-semibold flex items-start gap-2">
                  <span>{l.text}</span>
                </div>
              );
            }
            if (l.type === 'system') {
              return (
                <div key={l.id} className="text-slate-500">
                  {l.text}
                </div>
              );
            }
            if (l.type === 'error') {
              return (
                <div key={l.id} className="text-rose-400 whitespace-pre-wrap">
                  {l.text}
                </div>
              );
            }
            return (
              <div key={l.id} className="text-emerald-300 whitespace-pre-wrap leading-relaxed">
                {l.text}
              </div>
            );
          })}

          {/* Active Input Line */}
          <div className="flex items-center gap-2 text-cyan-400 pt-1">
            <span className="shrink-0 font-bold">godmode@deb-portfolio:~$</span>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              autoFocus
              className="flex-1 bg-transparent border-none outline-none text-slate-100 font-mono text-xs focus:ring-0"
              placeholder="Type a command (e.g. 'help', 'opencode status', '/audit')..."
            />
          </div>

          <div ref={endRef} />
        </div>
      </div>
    </div>
  );
};

export default CliTerminalPage;
