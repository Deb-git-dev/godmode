export interface TechCrawl {
  runtime: string;
  framework: string;
  bundler: string;
  styling: string;
  mcpServers: string[];
  aiGateway: string;
  keyPackages: string[];
}

export interface VisualCrawl {
  theme: 'dark' | 'light' | 'hybrid';
  primaryBg: string;
  surfaceCard: string;
  accentPrimary: string;
  accentSecondary: string;
  typography: {
    heading: string;
    body: string;
    code: string;
  };
  layoutPattern: string;
  motionStyle: string;
}

export interface WebCrawl {
  title: string;
  domain: string;
  url: string;
  category: 'Coding Agents' | 'Harnesses' | 'MCP Servers' | 'Skill Makers' | 'Skill Routers' | 'Design Taste' | 'Component Libraries' | 'Templates';
  summary: string;
  llmMarkdown: string;
  keyFeatures: string[];
}

export interface AwesomePrompt {
  title: string;
  type: 'system' | 'generation' | 'workflow' | 'reverse-engineering' | 'motion';
  prompt: string;
  tags: string[];
}

export interface VisualMockup {
  heroTagline: string;
  accentGlow: string;
  previewBadge: string;
  previewAction: string;
  sampleUiSnippet?: string;
}

export interface CrawledWebsite {
  id: string;
  name: string;
  gradient: string;
  badgeColor: string;
  web: WebCrawl;
  tech: TechCrawl;
  visual: VisualCrawl;
  visualMockup: VisualMockup;
  prompts: AwesomePrompt[];
}

export const CRAWLED_WEBSITES: CrawledWebsite[] = [
  {
    "id": "opencode",
    "name": "OpenCode CLI",
    "gradient": "from-cyan-500 via-blue-600 to-indigo-700",
    "badgeColor": "bg-cyan-500/20 text-cyan-300 border-cyan-500/50",
    "web": {
        "title": "OpenCode \u2014 Provider-Agnostic Terminal Coding Agent",
        "domain": "opencode.ai",
        "url": "https://github.com/opencode-ai/opencode",
        "category": "Coding Agents",
        "summary": "Autonomous terminal pair programming harness supporting Claude, GPT-4o, and DeepSeek with strict markdown rule guidance and zero local GPU overhead.",
        "llmMarkdown": "# OpenCode\\nProvider-agnostic terminal coding agent guided by AGENTS.md and DESIGN.md.\\n\\n## Capabilities\\n- In-terminal AST navigation\\n- Zero local GPU dependency\\n- OpenCode harness schema compliance",
        "keyFeatures": [
            "Terminal TUI interface",
            "Multi-model fallback routing",
            "Zero local weight inference",
            "Strict AGENTS.md rule obedience"
        ]
    },
    "tech": {
        "runtime": "Node.js / Bun",
        "framework": "Ink (React TUI)",
        "bundler": "esbuild",
        "styling": "Chalk / ANSI 256 Colors",
        "mcpServers": [
            "filesystem",
            "git",
            "bash-execution"
        ],
        "aiGateway": "OpenRouter / Anthropic Direct",
        "keyPackages": [
            "ink",
            "commander",
            "openai",
            "@anthropic-ai/sdk"
        ]
    },
    "visual": {
        "theme": "dark",
        "primaryBg": "#0A0D14",
        "surfaceCard": "#131A29",
        "accentPrimary": "#00F0FF",
        "accentSecondary": "#6366F1",
        "typography": {
            "heading": "Space Grotesk",
            "body": "Inter",
            "code": "JetBrains Mono"
        },
        "layoutPattern": "Split Viewport Terminal TUI with live status bar",
        "motionStyle": "Sub-millisecond cursor blinks & stream reveals"
    },
    "visualMockup": {
        "heroTagline": "Terminal Pair Programming at Lightning Speed",
        "accentGlow": "shadow-[0_0_50px_-12px_rgba(6,182,212,0.5)]",
        "previewBadge": "TUI AGENT ENGINE",
        "previewAction": "$ opencode start --harness claude-3-7-sonnet"
    },
    "prompts": [
        {
            "title": "OpenCode Autonomous Refactor Prompt",
            "type": "system",
            "tags": [
                "Autonomous",
                "Refactoring",
                "Zero-Slop"
            ],
            "prompt": "You are OpenCode, an elite autonomous terminal coding assistant. You inspect codebases via AST, maintain 100% production-ready code with zero placeholder comments, and verify every change by executing local tests before reporting done. Adhere strictly to the workspace AGENTS.md rules. Never hallucinate dependencies or API keys."
        },
        {
            "title": "OpenCode Invariant Enforcer",
            "type": "workflow",
            "tags": [
                "Invariants",
                "Security",
                "Lint"
            ],
            "prompt": "Run a continuous invariant audit loop on the proposed diff. Ensure: 1) Strict TypeScript compilation with zero warnings; 2) Zero unhandled Promise rejections; 3) Memory leak prevention in React useEffect cleanups; 4) Absolute traceability in PROVENANCE.md."
        }
    ]
},
  {
    "id": "awesome-coding-agent",
    "name": "Awesome Coding Agents",
    "gradient": "from-emerald-500 via-teal-600 to-cyan-700",
    "badgeColor": "bg-emerald-500/20 text-emerald-300 border-emerald-500/50",
    "web": {
        "title": "Awesome Coding Agents Directory",
        "domain": "github.com/jqueryscript",
        "url": "https://github.com/jqueryscript/awesome-coding-agent",
        "category": "Coding Agents",
        "summary": "Curated catalog of autonomous coding assistants, agentic IDE extensions, and automated pull request bots.",
        "llmMarkdown": "# Awesome Coding Agents\\nIndex of modern terminal agents, IDE extensions, and benchmark evaluations.\\n\\n## Highlights\\n- OpenCode\\n- Claude Code\\n- Aider\\n- Roo Code",
        "keyFeatures": [
            "Comprehensive agent comparison",
            "Benchmark accuracy index",
            "Supported LLM matrix"
        ]
    },
    "tech": {
        "runtime": "GitHub Pages / Markdown",
        "framework": "Jekyll / Static HTML",
        "bundler": "Native",
        "styling": "Primer CSS",
        "mcpServers": [
            "github",
            "web-search"
        ],
        "aiGateway": "Multi-model",
        "keyPackages": [
            "markdown-it",
            "octokit"
        ]
    },
    "visual": {
        "theme": "hybrid",
        "primaryBg": "#0D1117",
        "surfaceCard": "#161B22",
        "accentPrimary": "#10B981",
        "accentSecondary": "#06B6D4",
        "typography": {
            "heading": "Inter Display",
            "body": "Inter",
            "code": "SF Mono"
        },
        "layoutPattern": "Badge-dense catalog with categorized tables",
        "motionStyle": "Subtle hover lifts & border highlights"
    },
    "visualMockup": {
        "heroTagline": "The Definitive Atlas of Autonomous Software Agents",
        "accentGlow": "shadow-[0_0_50px_-12px_rgba(16,185,129,0.5)]",
        "previewBadge": "100+ AGENTS INDEXED",
        "previewAction": "Explore Coding Agents"
    },
    "prompts": [
        {
            "title": "Agent Benchmark Evaluator Prompt",
            "type": "workflow",
            "tags": [
                "Benchmarks",
                "Evaluation",
                "SWE-bench"
            ],
            "prompt": "Evaluate this coding agent across 5 core dimensions: 1) SWE-bench verified solve rate; 2) Context window token efficiency; 3) Tool call latency and retry overhead; 4) Sandboxed execution safety; 5) Terminal ergonomics and developer joy."
        }
    ]
},
  {
    "id": "awesome-agent-harness",
    "name": "Awesome Agent Harness",
    "gradient": "from-violet-500 via-purple-600 to-indigo-800",
    "badgeColor": "bg-purple-500/20 text-purple-300 border-purple-500/50",
    "web": {
        "title": "Awesome Agent Harness Engineering",
        "domain": "github.com/Picrew",
        "url": "https://github.com/Picrew/awesome-agent-harness",
        "category": "Harnesses",
        "summary": "Engineering guide and architecture specs for building reliable, production-grade AI agent harnesses and sandboxes.",
        "llmMarkdown": "# Awesome Agent Harness\\nCurated architecture guidelines for deterministic agent state machines.\\n\\n## Core Pillars\\n- Sandboxing\\n- Headroom management\\n- Session persistence",
        "keyFeatures": [
            "Deterministic state machines",
            "Headroom management",
            "Docker/WASM sandboxing"
        ]
    },
    "tech": {
        "runtime": "Node.js / Python",
        "framework": "Next.js / Astro",
        "bundler": "Turbo",
        "styling": "Tailwind CSS",
        "mcpServers": [
            "docker",
            "filesystem"
        ],
        "aiGateway": "Claude / OpenAI",
        "keyPackages": [
            "zod",
            "pydantic",
            "langchain"
        ]
    },
    "visual": {
        "theme": "dark",
        "primaryBg": "#090A10",
        "surfaceCard": "#121324",
        "accentPrimary": "#A855F7",
        "accentSecondary": "#6366F1",
        "typography": {
            "heading": "Syne",
            "body": "Plus Jakarta Sans",
            "code": "Fira Code"
        },
        "layoutPattern": "Hierarchical state machine diagrams with code drawers",
        "motionStyle": "Framer Motion layout transitions"
    },
    "visualMockup": {
        "heroTagline": "Bulletproof Control Planes for Agentic Execution",
        "accentGlow": "shadow-[0_0_50px_-12px_rgba(168,85,247,0.5)]",
        "previewBadge": "HARNESS ARCHITECTURE",
        "previewAction": "Load Harness Spec"
    },
    "prompts": [
        {
            "title": "Harness Sandboxing Prompt Spec",
            "type": "system",
            "tags": [
                "Sandboxing",
                "Safety",
                "Execution"
            ],
            "prompt": "You are an Agent Harness controller. Before executing any shell command or code modification, check the sandbox boundary: 1) Working directory restricted to user workspace; 2) No outbound internet access without explicit user consent; 3) Timeout enforcement of 30 seconds; 4) Memory headroom capped at 2GB."
        }
    ]
},
  {
    "id": "awesome-mcp-servers",
    "name": "Awesome MCP Servers",
    "gradient": "from-amber-500 via-orange-600 to-red-700",
    "badgeColor": "bg-amber-500/20 text-amber-300 border-amber-500/50",
    "web": {
        "title": "Awesome MCP Servers Directory",
        "domain": "github.com/wong2",
        "url": "https://github.com/wong2/awesome-mcp-servers",
        "category": "MCP Servers",
        "summary": "The definitive registry of Model Context Protocol (MCP) servers connecting LLMs to external tools, databases, and APIs.",
        "llmMarkdown": "# Awesome MCP Servers\\nUniversal registry of Model Context Protocol endpoints.\\n\\n## Featured Categories\\n- Cloud Storage\\n- Git & Repositories\\n- Browser Automation\\n- SQL & NoSQL Databases",
        "keyFeatures": [
            "Universal protocol compatibility",
            "STDIO & SSE transports",
            "Official & community servers"
        ]
    },
    "tech": {
        "runtime": "Node.js / Python",
        "framework": "MCP Protocol SDK",
        "bundler": "tsup",
        "styling": "Markdown Tables",
        "mcpServers": [
            "all standard servers"
        ],
        "aiGateway": "Anthropic Claude Desktop",
        "keyPackages": [
            "@modelcontextprotocol/sdk",
            "mcp-python"
        ]
    },
    "visual": {
        "theme": "dark",
        "primaryBg": "#0E0E10",
        "surfaceCard": "#18181B",
        "accentPrimary": "#F59E0B",
        "accentSecondary": "#EF4444",
        "typography": {
            "heading": "Geist",
            "body": "Geist Sans",
            "code": "Geist Mono"
        },
        "layoutPattern": "Multi-column protocol matrix with status badges",
        "motionStyle": "Zero latency crisp render"
    },
    "visualMockup": {
        "heroTagline": "Connecting Claude & LLMs to Every Database & API",
        "accentGlow": "shadow-[0_0_50px_-12px_rgba(245,158,11,0.5)]",
        "previewBadge": "MCP STANDARD PROTOCOL",
        "previewAction": "Explore 500+ MCP Servers"
    },
    "prompts": [
        {
            "title": "MCP Tool Schema Synthesizer",
            "type": "generation",
            "tags": [
                "MCP",
                "JSON-RPC",
                "Tools"
            ],
            "prompt": "Given this REST API endpoint documentation, synthesize a fully typed Model Context Protocol (MCP) tool schema using TypeScript and @modelcontextprotocol/sdk. Provide both tool description, inputSchema with Zod validation, and the handler function returning content: [{ type: 'text', text: ... }]."
        }
    ]
},
  {
    "id": "gitmcp",
    "name": "GitMCP Remote",
    "gradient": "from-blue-500 via-indigo-600 to-purple-700",
    "badgeColor": "bg-blue-500/20 text-blue-300 border-blue-500/50",
    "web": {
        "title": "GitMCP \u2014 Remote Git Intelligence for Agents",
        "domain": "gitmcp.io",
        "url": "https://gitmcp.io",
        "category": "MCP Servers",
        "summary": "Remote git grounding and repository indexing server enabling LLMs to query codebases directly without cloning huge repos locally.",
        "llmMarkdown": "# GitMCP\\nRemote repository grounding for Claude and agentic workflows.\\n\\n## Features\\n- AST semantic code search\\n- Zero local disk clone requirement\\n- Instant branch diffing",
        "keyFeatures": [
            "Cloud-native code indexing",
            "Sub-second AST grep",
            "Zero disk footprint"
        ]
    },
    "tech": {
        "runtime": "Cloudflare Workers / Rust",
        "framework": "Hono",
        "bundler": "Wrangler",
        "styling": "Tailwind CSS",
        "mcpServers": [
            "gitmcp"
        ],
        "aiGateway": "Cloudflare AI",
        "keyPackages": [
            "@cloudflare/workers-types",
            "tree-sitter"
        ]
    },
    "visual": {
        "theme": "dark",
        "primaryBg": "#080B14",
        "surfaceCard": "#101626",
        "accentPrimary": "#3B82F6",
        "accentSecondary": "#8B5CF6",
        "typography": {
            "heading": "Cabinet Grotesk",
            "body": "Inter",
            "code": "JetBrains Mono"
        },
        "layoutPattern": "Cloud terminal stream with AST node tree",
        "motionStyle": "Fluid SVG connection lines"
    },
    "visualMockup": {
        "heroTagline": "Query Any GitHub Repo at the Speed of Light",
        "accentGlow": "shadow-[0_0_50px_-12px_rgba(59,130,246,0.5)]",
        "previewBadge": "REMOTE AST GROUNDING",
        "previewAction": "Connect Repository"
    },
    "prompts": [
        {
            "title": "Remote Git Grounding Prompt",
            "type": "workflow",
            "tags": [
                "Git",
                "AST",
                "Remote Grounding"
            ],
            "prompt": "Connect to the remote repository via GitMCP. Before answering the user request, fetch the symbols index, inspect the package.json dependency tree, and search for the exact definition of the target interface without downloading full binary blobs."
        }
    ]
},
  {
    "id": "playwright-mcp",
    "name": "Playwright MCP",
    "gradient": "from-teal-500 via-emerald-600 to-green-700",
    "badgeColor": "bg-teal-500/20 text-teal-300 border-teal-500/50",
    "web": {
        "title": "Playwright Browser MCP Server",
        "domain": "github.com/microsoft",
        "url": "https://github.com/microsoft/playwright-mcp",
        "category": "MCP Servers",
        "summary": "Headless browser automation and web page interaction server for LLMs using Microsoft Playwright.",
        "llmMarkdown": "# Playwright MCP\\nBrowser interaction and visual accessibility inspection server.\\n\\n## Capabilities\\n- Page navigation & screenshot\\n- Click, fill, and form submission\\n- Visual DOM accessibility snapshot",
        "keyFeatures": [
            "Headless Chromium/Firefox",
            "Visual snapshot tree",
            "Zero flaky selector waits"
        ]
    },
    "tech": {
        "runtime": "Node.js",
        "framework": "Playwright",
        "bundler": "esbuild",
        "styling": "None (Headless)",
        "mcpServers": [
            "playwright"
        ],
        "aiGateway": "Claude / OpenAI",
        "keyPackages": [
            "playwright",
            "@modelcontextprotocol/sdk"
        ]
    },
    "visual": {
        "theme": "dark",
        "primaryBg": "#0A1010",
        "surfaceCard": "#121E1E",
        "accentPrimary": "#14B8A6",
        "accentSecondary": "#10B981",
        "typography": {
            "heading": "Inter",
            "body": "Inter",
            "code": "JetBrains Mono"
        },
        "layoutPattern": "Live browser viewport stream with action log",
        "motionStyle": "Cursor animation on DOM elements"
    },
    "visualMockup": {
        "heroTagline": "Autonomous Web Navigation & Screenshot Inspection",
        "accentGlow": "shadow-[0_0_50px_-12px_rgba(20,184,166,0.5)]",
        "previewBadge": "HEADLESS BROWSER ENGINE",
        "previewAction": "Launch Browser Session"
    },
    "prompts": [
        {
            "title": "Automated Visual QA Prompt",
            "type": "workflow",
            "tags": [
                "Playwright",
                "Visual QA",
                "Accessibility"
            ],
            "prompt": "Navigate to the URL using Playwright MCP. Take a full-page snapshot, inspect the accessibility tree for WCAG AA violations, check that all interactive buttons have distinct focus rings and minimum 48x48px hit areas, and return an audited report."
        }
    ]
},
  {
    "id": "github-mcp",
    "name": "GitHub MCP Server",
    "gradient": "from-slate-700 via-gray-800 to-zinc-900",
    "badgeColor": "bg-slate-500/20 text-slate-300 border-slate-500/50",
    "web": {
        "title": "Official GitHub MCP Server",
        "domain": "github.com/modelcontextprotocol",
        "url": "https://github.com/modelcontextprotocol/servers/tree/main/src/github",
        "category": "MCP Servers",
        "summary": "Full GitHub API integration for LLMs to manage issues, pull requests, commits, branches, and code reviews directly.",
        "llmMarkdown": "# GitHub MCP Server\\nRepository management and PR automation via MCP.\\n\\n## Tools\\n- create_or_update_file\\n- create_pull_request\\n- search_code\\n- list_issues",
        "keyFeatures": [
            "Native Octokit client",
            "Fine-grained token auth",
            "Atomic commit bundling"
        ]
    },
    "tech": {
        "runtime": "Node.js",
        "framework": "Octokit",
        "bundler": "tsup",
        "styling": "Primer",
        "mcpServers": [
            "github"
        ],
        "aiGateway": "Multi-model",
        "keyPackages": [
            "@octokit/rest",
            "@modelcontextprotocol/sdk"
        ]
    },
    "visual": {
        "theme": "dark",
        "primaryBg": "#0D1117",
        "surfaceCard": "#161B22",
        "accentPrimary": "#58A6FF",
        "accentSecondary": "#238636",
        "typography": {
            "heading": "Mona Sans",
            "body": "Hubot Sans",
            "code": "SF Mono"
        },
        "layoutPattern": "Commit timeline and pull request review drawer",
        "motionStyle": "Subtle status badge pulse"
    },
    "visualMockup": {
        "heroTagline": "Automate Issues, PRs & Code Reviews Seamlessly",
        "accentGlow": "shadow-[0_0_50px_-12px_rgba(88,166,255,0.5)]",
        "previewBadge": "OCTOKIT PROTOCOL",
        "previewAction": "Create Pull Request"
    },
    "prompts": [
        {
            "title": "Automated PR Reviewer Prompt",
            "type": "workflow",
            "tags": [
                "GitHub",
                "Code Review",
                "PR"
            ],
            "prompt": "Inspect the pull request diff using GitHub MCP. Analyze the changes for architectural consistency, potential memory leaks, security vulnerabilities (OWASP top 10), and strict type compliance. Leave concise, respectful line comments with drop-in code fixes."
        }
    ]
},
  {
    "id": "canva-mcp",
    "name": "Canva MCP",
    "gradient": "from-cyan-400 via-blue-500 to-purple-600",
    "badgeColor": "bg-cyan-500/20 text-cyan-300 border-cyan-500/50",
    "web": {
        "title": "Canva Design MCP Connector",
        "domain": "npmjs.com/package/canva-mcp",
        "url": "https://registry.npmjs.org/canva-mcp",
        "category": "MCP Servers",
        "summary": "Connects AI coding assistants to Canva designs, assets, brand kits, and multi-platform media templates.",
        "llmMarkdown": "# Canva MCP\\nProgrammatic access to Canva designs and brand assets.\\n\\n## Endpoints\\n- get_brand_kit\\n- export_design\\n- generate_presentation_slide",
        "keyFeatures": [
            "Brand kit synchronization",
            "Vector SVG export",
            "Social banner generation"
        ]
    },
    "tech": {
        "runtime": "Node.js",
        "framework": "Canva Connect API",
        "bundler": "tsup",
        "styling": "Canva Tokens",
        "mcpServers": [
            "canva"
        ],
        "aiGateway": "Anthropic Claude",
        "keyPackages": [
            "@canva/connect-api",
            "@modelcontextprotocol/sdk"
        ]
    },
    "visual": {
        "theme": "hybrid",
        "primaryBg": "#000B2A",
        "surfaceCard": "#081640",
        "accentPrimary": "#00C4CC",
        "accentSecondary": "#7D2AE8",
        "typography": {
            "heading": "Canva Sans",
            "body": "Inter",
            "code": "JetBrains Mono"
        },
        "layoutPattern": "Multi-slide canvas grid with color palette chips",
        "motionStyle": "Bouncy spring easing"
    },
    "visualMockup": {
        "heroTagline": "Generate Brand Kits & Design Assets On the Fly",
        "accentGlow": "shadow-[0_0_50px_-12px_rgba(0,196,204,0.5)]",
        "previewBadge": "CANVA CONNECT",
        "previewAction": "Export Social Assets"
    },
    "prompts": [
        {
            "title": "Brand Asset Generator Prompt",
            "type": "generation",
            "tags": [
                "Canva",
                "Brand Kit",
                "SVG"
            ],
            "prompt": "Connect to Canva via MCP. Fetch the foundation brand kit (primary colors, secondary fonts, logo assets). Generate 3 social media card layouts for OpenGraph banners (1200x630px) with high typographic contrast and verified WCAG AA compliance."
        }
    ]
},
  {
    "id": "supabase-mcp",
    "name": "Supabase MCP",
    "gradient": "from-emerald-400 via-green-500 to-teal-600",
    "badgeColor": "bg-emerald-500/20 text-emerald-300 border-emerald-500/50",
    "web": {
        "title": "Supabase Postgres & Auth MCP Server",
        "domain": "mcp.supabase.com",
        "url": "https://mcp.supabase.com",
        "category": "MCP Servers",
        "summary": "Agentic database management for Supabase Postgres, migrations, RLS security policies, and edge functions.",
        "llmMarkdown": "# Supabase MCP\\nDirect Postgres management and RLS policy generator.\\n\\n## Capabilities\\n- Run SQL queries & migrations\\n- Inspect schema & table relationships\\n- Enforce Row Level Security (RLS)",
        "keyFeatures": [
            "Direct SQL execution",
            "RLS security audit",
            "TypeScript types generator"
        ]
    },
    "tech": {
        "runtime": "Deno / TypeScript",
        "framework": "Supabase Client",
        "bundler": "Deno Deploy",
        "styling": "Tailwind",
        "mcpServers": [
            "supabase"
        ],
        "aiGateway": "Claude / OpenAI",
        "keyPackages": [
            "@supabase/supabase-js",
            "postgres"
        ]
    },
    "visual": {
        "theme": "dark",
        "primaryBg": "#121212",
        "surfaceCard": "#1E1E1E",
        "accentPrimary": "#3ECF8E",
        "accentSecondary": "#24B47E",
        "typography": {
            "heading": "Circular Std",
            "body": "Inter",
            "code": "JetBrains Mono"
        },
        "layoutPattern": "Database ER diagram with interactive SQL console",
        "motionStyle": "Subtle green pulse on query execution"
    },
    "visualMockup": {
        "heroTagline": "Realtime Postgres & Row Level Security for Agents",
        "accentGlow": "shadow-[0_0_50px_-12px_rgba(62,207,142,0.5)]",
        "previewBadge": "POSTGRES MCP",
        "previewAction": "Inspect Database Schema"
    },
    "prompts": [
        {
            "title": "Strict RLS Policy Generator",
            "type": "generation",
            "tags": [
                "Supabase",
                "Postgres",
                "RLS",
                "Security"
            ],
            "prompt": "Write a PostgreSQL migration script for Supabase. Enable Row Level Security (RLS) on the table. Create restrictive SELECT, INSERT, UPDATE, and DELETE policies that verify `auth.uid() = user_id`. Ensure indexes are added for high-throughput foreign keys."
        }
    ]
},
  {
    "id": "awesome-claude-code",
    "name": "Awesome Claude Code",
    "gradient": "from-amber-600 via-orange-600 to-yellow-600",
    "badgeColor": "bg-amber-500/20 text-amber-300 border-amber-500/50",
    "web": {
        "title": "Awesome Claude Code Ecosystem",
        "domain": "github.com/fix2015",
        "url": "https://github.com/fix2015/awesome-claude-code",
        "category": "Coding Agents",
        "summary": "Curated collection of workflows, CLAUDE.md templates, slash commands, and plugins for Anthropic's Claude Code CLI.",
        "llmMarkdown": "# Awesome Claude Code\\nDirectory of Claude Code workflows and slash commands.\\n\\n## Content\\n- CLAUDE.md best practices\\n- MCP server recipes\\n- Slash commands (/test, /review, /commit)",
        "keyFeatures": [
            "CLAUDE.md templates",
            "Slash command presets",
            "Memory integration recipes"
        ]
    },
    "tech": {
        "runtime": "Node.js",
        "framework": "Claude Code CLI",
        "bundler": "Native",
        "styling": "Terminal",
        "mcpServers": [
            "filesystem",
            "memory",
            "github"
        ],
        "aiGateway": "Anthropic Claude 3.7 Sonnet",
        "keyPackages": [
            "@anthropic-ai/claude-code"
        ]
    },
    "visual": {
        "theme": "dark",
        "primaryBg": "#1F1A16",
        "surfaceCard": "#2C241E",
        "accentPrimary": "#D97706",
        "accentSecondary": "#F59E0B",
        "typography": {
            "heading": "Instrument Serif",
            "body": "Inter",
            "code": "JetBrains Mono"
        },
        "layoutPattern": "Notebook card layout with expandable slash commands",
        "motionStyle": "Warm amber glow on focus"
    },
    "visualMockup": {
        "heroTagline": "Supercharge Claude Code with Battle-Tested Workflows",
        "accentGlow": "shadow-[0_0_50px_-12px_rgba(217,119,6,0.5)]",
        "previewBadge": "CLAUDE CODE ECOSYSTEM",
        "previewAction": "Load Slash Commands"
    },
    "prompts": [
        {
            "title": "Master CLAUDE.md Generator",
            "type": "generation",
            "tags": [
                "Claude Code",
                "CLAUDE.md",
                "System Prompt"
            ],
            "prompt": "Generate a production-grade CLAUDE.md file for this project. Include: 1) Build & test commands; 2) Code architecture invariants; 3) Prohibited anti-patterns (no any types, no mock data in prod); 4) Git commit formatting rules; 5) Verification checklist before marking tasks complete."
        }
    ]
},
  {
    "id": "awesome-free-models",
    "name": "Awesome Free Models",
    "gradient": "from-indigo-500 via-blue-600 to-cyan-500",
    "badgeColor": "bg-indigo-500/20 text-indigo-300 border-indigo-500/50",
    "web": {
        "title": "Awesome Free LLM Models & APIs",
        "domain": "github.com/12britz",
        "url": "https://github.com/12britz/awesome-free-models",
        "category": "Coding Agents",
        "summary": "Directory of free API tiers, hosted model endpoints (OpenRouter, NVIDIA NIM, Groq, Together), and zero-cost LLM inference options.",
        "llmMarkdown": "# Awesome Free Models\\nZero-cost cloud LLM inference APIs.\\n\\n## Providers\\n- OpenRouter Free Tiers\\n- NVIDIA NIM Microservices\\n- Groq Cloud (Llama 3 70B)\\n- Google AI Studio (Gemini 2.0 Flash)",
        "keyFeatures": [
            "Zero-dollar cloud compute",
            "Sub-second TTFT endpoints",
            "Rate limit matrix"
        ]
    },
    "tech": {
        "runtime": "Python / FastHTML",
        "framework": "Static Markdown",
        "bundler": "Native",
        "styling": "Tailwind",
        "mcpServers": [
            "fetch"
        ],
        "aiGateway": "OpenRouter / NIM / Groq",
        "keyPackages": [
            "httpx",
            "litellm"
        ]
    },
    "visual": {
        "theme": "dark",
        "primaryBg": "#0B0F1B",
        "surfaceCard": "#131C31",
        "accentPrimary": "#6366F1",
        "accentSecondary": "#06B6D4",
        "typography": {
            "heading": "Space Grotesk",
            "body": "Inter",
            "code": "JetBrains Mono"
        },
        "layoutPattern": "Live latency and pricing ticker cards",
        "motionStyle": "Telemetry ping wave animation"
    },
    "visualMockup": {
        "heroTagline": "Zero-Cost Cloud Intelligence for Every Developer",
        "accentGlow": "shadow-[0_0_50px_-12px_rgba(99,102,241,0.5)]",
        "previewBadge": "100% FREE CLOUD TIERS",
        "previewAction": "Route to Free Model"
    },
    "prompts": [
        {
            "title": "Dynamic Model Fallback Router",
            "type": "workflow",
            "tags": [
                "Routing",
                "Fallback",
                "Cost-Optimization"
            ],
            "prompt": "Construct a multi-model fallback cascade: 1) Try NVIDIA NIM Llama-3.3-70B for sub-second reasoning; 2) Fallback to OpenRouter free tier (Qwen-2.5-Coder); 3) Escalate to Claude 3.7 Sonnet only if architectural synthesis or strict code refactoring requires it."
        }
    ]
},
  {
    "id": "100-free-open-source-github-repos",
    "name": "100 Free OSS Repos",
    "gradient": "from-pink-500 via-rose-600 to-red-600",
    "badgeColor": "bg-rose-500/20 text-rose-300 border-rose-500/50",
    "web": {
        "title": "100 Free Open Source GitHub Repositories",
        "domain": "github.com/Moh4696",
        "url": "https://github.com/Moh4696/100-free-open-source-github-repos",
        "category": "Coding Agents",
        "summary": "Curated catalog of 100 free open-source GitHub repositories covering developer tools, AI frameworks, design systems, and productivity suites.",
        "llmMarkdown": "# 100 Free OSS Repos\\nHigh-impact open source tools for modern developers.\\n\\n## Sectors\\n- Frontend UI Systems\\n- Autonomous Agents\\n- Developer Productivity",
        "keyFeatures": [
            "Permissive MIT/Apache licenses",
            "Self-hostable architectures",
            "Active maintenance audit"
        ]
    },
    "tech": {
        "runtime": "Markdown / Jekyll",
        "framework": "GitHub Pages",
        "bundler": "Native",
        "styling": "Primer",
        "mcpServers": [
            "github"
        ],
        "aiGateway": "Multi-model",
        "keyPackages": [
            "octokit"
        ]
    },
    "visual": {
        "theme": "dark",
        "primaryBg": "#120B10",
        "surfaceCard": "#1F121C",
        "accentPrimary": "#F43F5E",
        "accentSecondary": "#FB7185",
        "typography": {
            "heading": "Inter Display",
            "body": "Inter",
            "code": "JetBrains Mono"
        },
        "layoutPattern": "Star-ranked repository grid with live activity metrics",
        "motionStyle": "Smooth card scale on hover"
    },
    "visualMockup": {
        "heroTagline": "The Top 100 Open Source Supertools",
        "accentGlow": "shadow-[0_0_50px_-12px_rgba(244,63,94,0.5)]",
        "previewBadge": "100 OSS TOOLS",
        "previewAction": "Browse Repositories"
    },
    "prompts": [
        {
            "title": "OSS Architecture Decompiler",
            "type": "reverse-engineering",
            "tags": [
                "Decompiler",
                "OSS",
                "Reverse-Engineering"
            ],
            "prompt": "Analyze this open source repository: 1) Identify its core architectural patterns (Hexagonal, Event-driven, Micro-frontend); 2) Extract its key public interfaces; 3) Document how to integrate its capabilities into a zero-local-GPU stack without heavy dependencies."
        }
    ]
},
  {
    "id": "skill-creator",
    "name": "Skill Creator",
    "gradient": "from-purple-500 via-indigo-600 to-blue-600",
    "badgeColor": "bg-purple-500/20 text-purple-300 border-purple-500/50",
    "web": {
        "title": "Gaubee Skill Creator \u2014 Modular AI Skill Generator",
        "domain": "github.com/Gaubee",
        "url": "https://github.com/Gaubee/skill-creator",
        "category": "Skill Makers",
        "summary": "Automated skill generator for Claude Code and agent harnesses that turns natural language requirements into validated SKILL.md packages.",
        "llmMarkdown": "# Skill Creator\\nSynthesize validated SKILL.md packages from instructions.\\n\\n## Workflow\\n1. Requirements extraction\\n2. YAML frontmatter validation\\n3. Eval test generation",
        "keyFeatures": [
            "YAML frontmatter validation",
            "Eval test suites",
            "Cross-agent portability"
        ]
    },
    "tech": {
        "runtime": "Node.js / Deno",
        "framework": "TypeScript CLI",
        "bundler": "tsup",
        "styling": "Chalk",
        "mcpServers": [
            "filesystem"
        ],
        "aiGateway": "Claude / OpenAI",
        "keyPackages": [
            "js-yaml",
            "zod",
            "commander"
        ]
    },
    "visual": {
        "theme": "dark",
        "primaryBg": "#0E0A18",
        "surfaceCard": "#181228",
        "accentPrimary": "#9333EA",
        "accentSecondary": "#6366F1",
        "typography": {
            "heading": "Plus Jakarta Sans",
            "body": "Inter",
            "code": "JetBrains Mono"
        },
        "layoutPattern": "Step-by-step interactive skill wizard",
        "motionStyle": "Fluid progress bar with glowing checkmarks"
    },
    "visualMockup": {
        "heroTagline": "Turn Plain English into Validated Agent Skills",
        "accentGlow": "shadow-[0_0_50px_-12px_rgba(147,51,234,0.5)]",
        "previewBadge": "SKILL CREATION ENGINE",
        "previewAction": "Generate New Skill"
    },
    "prompts": [
        {
            "title": "Master SKILL.md Generator Prompt",
            "type": "generation",
            "tags": [
                "Skill",
                "SKILL.md",
                "Specification"
            ],
            "prompt": "Create a fully functional SKILL.md for the following task. Ensure: 1) Valid YAML frontmatter (name, description); 2) Clear trigger conditions explaining when the agent must activate it; 3) Numbered execution workflow with concrete shell commands or scripts; 4) Strict boundaries and prohibited actions; 5) Evaluation verification test cases."
        }
    ]
},
  {
    "id": "claude-code-skills",
    "name": "Claude Code Skills",
    "gradient": "from-amber-500 via-rose-500 to-purple-600",
    "badgeColor": "bg-rose-500/20 text-rose-300 border-rose-500/50",
    "web": {
        "title": "Daymade Claude Code Skills Collection",
        "domain": "github.com/daymade",
        "url": "https://github.com/daymade/claude-code-skills",
        "category": "Skill Makers",
        "summary": "Curated collection of production-ready skills for Claude Code covering design taste, git hygiene, test-driven development, and performance.",
        "llmMarkdown": "# Claude Code Skills\\nMarketplace-installable skill bundles for Claude Code.\\n\\n## Featured Skills\\n- design-taste\\n- tdd-enforcer\\n- git-safety",
        "keyFeatures": [
            "One-command installation",
            "Pre-commit hooks",
            "Aesthetic conviction rules"
        ]
    },
    "tech": {
        "runtime": "Node.js",
        "framework": "Claude Code Plugin SDK",
        "bundler": "Native",
        "styling": "Terminal",
        "mcpServers": [
            "filesystem",
            "git"
        ],
        "aiGateway": "Claude 3.7 Sonnet",
        "keyPackages": [
            "@anthropic-ai/sdk"
        ]
    },
    "visual": {
        "theme": "dark",
        "primaryBg": "#140D0E",
        "surfaceCard": "#221618",
        "accentPrimary": "#F43F5E",
        "accentSecondary": "#F59E0B",
        "typography": {
            "heading": "Syne",
            "body": "Inter",
            "code": "JetBrains Mono"
        },
        "layoutPattern": "Marketplace cards with install pills and rating stars",
        "motionStyle": "Gentle floating hover animations"
    },
    "visualMockup": {
        "heroTagline": "Curated Skills to Make Claude Code Unstoppable",
        "accentGlow": "shadow-[0_0_50px_-12px_rgba(244,63,94,0.5)]",
        "previewBadge": "SKILL MARKETPLACE",
        "previewAction": "Install Skill Bundle"
    },
    "prompts": [
        {
            "title": "TDD Skill Enforcer Prompt",
            "type": "workflow",
            "tags": [
                "TDD",
                "Testing",
                "Hygiene"
            ],
            "prompt": "Activate the TDD Enforcer skill. Before writing any implementation code: 1) Write a failing unit test asserting the desired behavior; 2) Run the test to confirm it fails cleanly; 3) Write the minimal code required to pass; 4) Refactor for cleanliness and readability; 5) Confirm 100% test coverage."
        }
    ]
},
  {
    "id": "skills-maker",
    "name": "Skills Maker",
    "gradient": "from-cyan-500 via-teal-500 to-emerald-600",
    "badgeColor": "bg-teal-500/20 text-teal-300 border-teal-500/50",
    "web": {
        "title": "Zhing Skills Maker \u2014 Universal Cross-Agent Skill Packager",
        "domain": "github.com/zhing2006",
        "url": "https://github.com/zhing2006/skills-maker",
        "category": "Skill Makers",
        "summary": "Universal skill packager that generates cross-compatible skills for Claude Code, Cursor, Windsurf, Roo Code, and OpenCode.",
        "llmMarkdown": "# Skills Maker\\nCompile once, run in any AI coding assistant.\\n\\n## Target Assistants\\n- Claude Code\\n- Cursor (.cursorrules)\\n- Windsurf (.windsurfrules)\\n- OpenCode",
        "keyFeatures": [
            "Cross-platform compiler",
            "Format transpile engine",
            "Zero syntax errors"
        ]
    },
    "tech": {
        "runtime": "Python",
        "framework": "Typer CLI",
        "bundler": "PyInstaller",
        "styling": "Rich TUI",
        "mcpServers": [
            "filesystem"
        ],
        "aiGateway": "Multi-model",
        "keyPackages": [
            "typer",
            "rich",
            "pydantic",
            "jinja2"
        ]
    },
    "visual": {
        "theme": "dark",
        "primaryBg": "#081210",
        "surfaceCard": "#10201D",
        "accentPrimary": "#10B981",
        "accentSecondary": "#06B6D4",
        "typography": {
            "heading": "Space Grotesk",
            "body": "Inter",
            "code": "JetBrains Mono"
        },
        "layoutPattern": "Multi-target export matrix with switch toggles",
        "motionStyle": "Transpile pulse progress"
    },
    "visualMockup": {
        "heroTagline": "Write Once, Run on Cursor, Claude, Windsurf & Roo",
        "accentGlow": "shadow-[0_0_50px_-12px_rgba(16,185,129,0.5)]",
        "previewBadge": "UNIVERSAL TRANSPILER",
        "previewAction": "Transpile Skill"
    },
    "prompts": [
        {
            "title": "Universal Rule Transpiler Prompt",
            "type": "workflow",
            "tags": [
                "Transpiler",
                "Cursor",
                "Claude",
                "Cross-Platform"
            ],
            "prompt": "Take this agent skill specification and generate: 1) A standard SKILL.md for Claude Code; 2) A `.cursorrules` file with matching system prompt constraints; 3) A `.windsurfrules` configuration; 4) An OpenCode `rules.json` entry. Maintain 100% semantic parity across all outputs."
        }
    ]
},
  {
    "id": "agent-skill-creator",
    "name": "Agent Skill Creator",
    "gradient": "from-blue-600 via-indigo-600 to-violet-700",
    "badgeColor": "bg-indigo-500/20 text-indigo-300 border-indigo-500/50",
    "web": {
        "title": "Francy Agent Skill Creator",
        "domain": "github.com/FrancyJGLisboa",
        "url": "https://github.com/FrancyJGLisboa/agent-skill-creator",
        "category": "Skill Makers",
        "summary": "Specialized prompt engineer and skill builder that generates robust evaluation criteria and regression test cases for custom agent skills.",
        "llmMarkdown": "# Agent Skill Creator\\nRegression-tested skill generator with eval metrics.\\n\\n## Pipeline\\n1. Natural language intent\\n2. Grounding schema validation\\n3. Automated benchmark run",
        "keyFeatures": [
            "Automated benchmark generation",
            "Safety checks",
            "Zero hallucination grounding"
        ]
    },
    "tech": {
        "runtime": "Python / TypeScript",
        "framework": "LangChain",
        "bundler": "tsup",
        "styling": "Tailwind",
        "mcpServers": [
            "filesystem",
            "eval"
        ],
        "aiGateway": "Anthropic Claude",
        "keyPackages": [
            "pydantic",
            "langsmith"
        ]
    },
    "visual": {
        "theme": "dark",
        "primaryBg": "#0A0D18",
        "surfaceCard": "#141A2D",
        "accentPrimary": "#6366F1",
        "accentSecondary": "#8B5CF6",
        "typography": {
            "heading": "Inter",
            "body": "Inter",
            "code": "JetBrains Mono"
        },
        "layoutPattern": "Benchmark evaluation leaderboard with test badges",
        "motionStyle": "Score reveal counters"
    },
    "visualMockup": {
        "heroTagline": "Benchmark & Regression Test Your Custom Agent Skills",
        "accentGlow": "shadow-[0_0_50px_-12px_rgba(99,102,241,0.5)]",
        "previewBadge": "REGRESSION TESTING",
        "previewAction": "Run Skill Evals"
    },
    "prompts": [
        {
            "title": "Skill Benchmark Eval Generator",
            "type": "generation",
            "tags": [
                "Evals",
                "Benchmarks",
                "Testing"
            ],
            "prompt": "For this agent skill, write 5 adversarial benchmark test cases. Include: 1) Normal happy path input; 2) Edge case with missing context; 3) Malicious attempt to break out of sandbox constraints; 4) Ambiguous request requiring clarification; 5) Expected verifiable criteria for each."
        }
    ]
},
  {
    "id": "skill-from-masters",
    "name": "Skill From Masters",
    "gradient": "from-emerald-500 via-teal-600 to-blue-700",
    "badgeColor": "bg-emerald-500/20 text-emerald-300 border-emerald-500/50",
    "web": {
        "title": "Skill From Masters \u2014 Reverse-Engineering Real Codebases",
        "domain": "github.com/gbsoss",
        "url": "https://github.com/gbsoss/skill-from-masters",
        "category": "Skill Makers",
        "summary": "Searches top-starred GitHub repositories solving a given problem, studies real production patterns, and synthesizes a master SKILL.md from real code.",
        "llmMarkdown": "# Skill From Masters\\nReverse-engineer master patterns from top GitHub repositories.\\n\\n## Process\\n1. GitHub Code Search\\n2. Pattern abstraction\\n3. Master skill synthesis",
        "keyFeatures": [
            "Real-world pattern extraction",
            "GitHub search integration",
            "Anti-pattern detection"
        ]
    },
    "tech": {
        "runtime": "Node.js",
        "framework": "Octokit / AST Parser",
        "bundler": "tsup",
        "styling": "Terminal",
        "mcpServers": [
            "github",
            "filesystem"
        ],
        "aiGateway": "Anthropic Claude 3.7 Sonnet",
        "keyPackages": [
            "@octokit/rest",
            "@babel/parser"
        ]
    },
    "visual": {
        "theme": "dark",
        "primaryBg": "#081210",
        "surfaceCard": "#10221E",
        "accentPrimary": "#10B981",
        "accentSecondary": "#3B82F6",
        "typography": {
            "heading": "Plus Jakarta Sans",
            "body": "Inter",
            "code": "JetBrains Mono"
        },
        "layoutPattern": "Code diff extractor with pattern synthesis drawer",
        "motionStyle": "Subtle line scan effect on AST tokens"
    },
    "visualMockup": {
        "heroTagline": "Extract Production Patterns from Top 1% GitHub Repos",
        "accentGlow": "shadow-[0_0_50px_-12px_rgba(16,185,129,0.5)]",
        "previewBadge": "PATTERN SYNTHESIZER",
        "previewAction": "Synthesize from Master"
    },
    "prompts": [
        {
            "title": "Codebase Pattern Extractor",
            "type": "reverse-engineering",
            "tags": [
                "Pattern Extraction",
                "AST",
                "Clean Code"
            ],
            "prompt": "Analyze this master repository. Extract the core design pattern used for state synchronization and error resilience. Abstract away repository-specific naming into a reusable architectural pattern and format it as a SKILL.md for other agents to emulate."
        }
    ]
},
  {
    "id": "myskills",
    "name": "MySkills Catalog",
    "gradient": "from-cyan-500 via-blue-500 to-indigo-600",
    "badgeColor": "bg-cyan-500/20 text-cyan-300 border-cyan-500/50",
    "web": {
        "title": "MySkills Catalog & Library",
        "domain": "github.com/mingyooagi",
        "url": "https://github.com/mingyooagi/myskills",
        "category": "Skill Routers",
        "summary": "Personalized catalog and registry of specialized skills for autonomous agents with semantic search and dynamic loading.",
        "llmMarkdown": "# MySkills\\nSemantic skill index and dynamic loader.\\n\\n## Features\\n- Dynamic runtime injection\\n- Category tags and versioning\\n- Memory persistence",
        "keyFeatures": [
            "Dynamic injection",
            "Semantic search",
            "Zero memory overhead"
        ]
    },
    "tech": {
        "runtime": "Node.js",
        "framework": "Vite / React",
        "bundler": "Rollup",
        "styling": "Tailwind CSS",
        "mcpServers": [
            "filesystem"
        ],
        "aiGateway": "OpenAI / Claude",
        "keyPackages": [
            "fuse.js",
            "zustand"
        ]
    },
    "visual": {
        "theme": "dark",
        "primaryBg": "#0B101C",
        "surfaceCard": "#141D30",
        "accentPrimary": "#06B6D4",
        "accentSecondary": "#3B82F6",
        "typography": {
            "heading": "Inter",
            "body": "Inter",
            "code": "JetBrains Mono"
        },
        "layoutPattern": "Grid of interactive skill pills with dynamic tag filters",
        "motionStyle": "Framer Motion layoutId card expansion"
    },
    "visualMockup": {
        "heroTagline": "Your Personalized Neural Library of Autonomous Skills",
        "accentGlow": "shadow-[0_0_50px_-12px_rgba(6,182,212,0.5)]",
        "previewBadge": "SKILL REGISTRY",
        "previewAction": "Load Custom Skill"
    },
    "prompts": [
        {
            "title": "Dynamic Skill Matcher",
            "type": "workflow",
            "tags": [
                "Matching",
                "Routing",
                "Registry"
            ],
            "prompt": "Given the user intent: classify the domain, match against available skills in the registry, pick the single highest-scoring skill, and inject its instructions into the current session context without context bloat."
        }
    ]
},
  {
    "id": "agent-playbook",
    "name": "Agent Playbook",
    "gradient": "from-violet-600 via-purple-600 to-pink-600",
    "badgeColor": "bg-purple-500/20 text-purple-300 border-purple-500/50",
    "web": {
        "title": "Agent Playbook \u2014 Systematic Multi-Skill Workflows",
        "domain": "github.com/charon-fan",
        "url": "https://github.com/charon-fan/agent-playbook",
        "category": "Skill Routers",
        "summary": "Step-by-step orchestrator that sequences multiple skills into coherent multi-stage enterprise workflows.",
        "llmMarkdown": "# Agent Playbook\\nSequential multi-skill execution graph.\\n\\n## Stages\\n1. Intent Classification\\n2. Architecture Planning\\n3. Code Generation\\n4. Visual Verification",
        "keyFeatures": [
            "DAG execution graphs",
            "Conditional branching",
            "Intermediate state checkpoints"
        ]
    },
    "tech": {
        "runtime": "Python",
        "framework": "LangGraph",
        "bundler": "Native",
        "styling": "Graphviz / Mermaid",
        "mcpServers": [
            "filesystem",
            "memory"
        ],
        "aiGateway": "Claude / OpenAI",
        "keyPackages": [
            "langgraph",
            "pydantic"
        ]
    },
    "visual": {
        "theme": "dark",
        "primaryBg": "#100918",
        "surfaceCard": "#1E122C",
        "accentPrimary": "#A855F7",
        "accentSecondary": "#EC4899",
        "typography": {
            "heading": "Syne",
            "body": "Inter",
            "code": "JetBrains Mono"
        },
        "layoutPattern": "Interactive node graph with live execution pulse",
        "motionStyle": "Animated glowing SVG paths between stages"
    },
    "visualMockup": {
        "heroTagline": "Orchestrate Multi-Stage AI Agent Workflows Seamlessly",
        "accentGlow": "shadow-[0_0_50px_-12px_rgba(168,85,247,0.5)]",
        "previewBadge": "GRAPH ORCHESTRATOR",
        "previewAction": "Execute Playbook"
    },
    "prompts": [
        {
            "title": "Playbook Workflow Graph Compiler",
            "type": "generation",
            "tags": [
                "Playbook",
                "LangGraph",
                "Workflow"
            ],
            "prompt": "Design an execution DAG for an end-to-end web feature: 1) Spec & Design Token generation; 2) Backend API schema mutation; 3) Frontend component synthesis; 4) Visual QA & accessibility audit. Define state schema and failover retry edges."
        }
    ]
},
  {
    "id": "skillmux",
    "name": "SkillMux Router",
    "gradient": "from-teal-500 via-cyan-600 to-blue-600",
    "badgeColor": "bg-cyan-500/20 text-cyan-300 border-cyan-500/50",
    "web": {
        "title": "SkillMux \u2014 Multiplexed Hybrid Skill Router",
        "domain": "github.com/klhq",
        "url": "https://github.com/klhq/skillmux",
        "category": "Skill Routers",
        "summary": "Hybrid BM25 + embedding skill multiplexer that classifies natural language intents and routes commands to the optimal SKILL.md in real time.",
        "llmMarkdown": "# SkillMux\\nHybrid BM25 + dense embedding router.\\n\\n## Capabilities\\n- Sub-10ms skill lookup\\n- Zero vector DB local cost\\n- Strict keyword & semantic fusion",
        "keyFeatures": [
            "Hybrid BM25 + dense retrieval",
            "Zero local GPU required",
            "Sub-10ms route latency"
        ]
    },
    "tech": {
        "runtime": "Rust / WebAssembly",
        "framework": "Wasmtime",
        "bundler": "wasm-pack",
        "styling": "Terminal",
        "mcpServers": [
            "skillmux"
        ],
        "aiGateway": "Cloud Embeddings",
        "keyPackages": [
            "tantivy",
            "serde"
        ]
    },
    "visual": {
        "theme": "dark",
        "primaryBg": "#081014",
        "surfaceCard": "#101D24",
        "accentPrimary": "#06B6D4",
        "accentSecondary": "#14B8A6",
        "typography": {
            "heading": "JetBrains Mono",
            "body": "Inter",
            "code": "JetBrains Mono"
        },
        "layoutPattern": "Fast routing matrix with live confidence scores",
        "motionStyle": "Sub-millisecond score gauges"
    },
    "visualMockup": {
        "heroTagline": "Sub-10ms Hybrid BM25 + Semantic Skill Multiplexer",
        "accentGlow": "shadow-[0_0_50px_-12px_rgba(6,182,212,0.5)]",
        "previewBadge": "WASM ROUTER",
        "previewAction": "Route User Intent"
    },
    "prompts": [
        {
            "title": "Intent Classification & Route Prompt",
            "type": "system",
            "tags": [
                "Routing",
                "Classification",
                "BM25"
            ],
            "prompt": "You are SkillMux. Classify the user prompt across 5 categories: [Frontend UI, Backend API, Database, Testing, Invariant Audit]. Output JSON: { category: string, primarySkill: string, confidence: number, rationale: string }. Return nothing else."
        }
    ]
},
  {
    "id": "mis-skills",
    "name": "MIS Skills",
    "gradient": "from-emerald-600 via-teal-600 to-cyan-700",
    "badgeColor": "bg-teal-500/20 text-teal-300 border-teal-500/50",
    "web": {
        "title": "MIS Skills \u2014 Multilingual & Multi-Agent Dispatcher",
        "domain": "github.com/WaltherGL66",
        "url": "https://github.com/WaltherGL66/mis-skills",
        "category": "Skill Routers",
        "summary": "Enterprise multi-agent skill dispatching framework with multilingual support and strict prompt isolation.",
        "llmMarkdown": "# MIS Skills\\nMultilingual multi-agent routing registry.\\n\\n## Capabilities\\n- Zero cross-language contamination\\n- Isolated sub-agent scopes\\n- Enterprise audit logging",
        "keyFeatures": [
            "Zero code-mixing",
            "Context isolation",
            "Audit trail logging"
        ]
    },
    "tech": {
        "runtime": "Python",
        "framework": "FastAPI",
        "bundler": "Native",
        "styling": "Tailwind",
        "mcpServers": [
            "filesystem",
            "memory"
        ],
        "aiGateway": "OpenRouter / Claude",
        "keyPackages": [
            "fastapi",
            "uvicorn",
            "pydantic"
        ]
    },
    "visual": {
        "theme": "dark",
        "primaryBg": "#0A1412",
        "surfaceCard": "#12221F",
        "accentPrimary": "#10B981",
        "accentSecondary": "#06B6D4",
        "typography": {
            "heading": "Inter",
            "body": "Inter",
            "code": "JetBrains Mono"
        },
        "layoutPattern": "Multilingual agent dispatch board with status chips",
        "motionStyle": "Subtle language switcher fade"
    },
    "visualMockup": {
        "heroTagline": "Multilingual Multi-Agent Dispatch Without Code Mixing",
        "accentGlow": "shadow-[0_0_50px_-12px_rgba(16,185,129,0.5)]",
        "previewBadge": "MULTI-AGENT DISPATCH",
        "previewAction": "Dispatch Sub-Agent"
    },
    "prompts": [
        {
            "title": "Multilingual Isolation Prompt",
            "type": "system",
            "tags": [
                "Multilingual",
                "Isolation",
                "Zero-Mixing"
            ],
            "prompt": "You are a multilingual agent gateway. When processing inputs in any language, output the response strictly in that same language. Do not mix English keywords into non-English prose. Maintain 100% statutory precision and verified facts."
        }
    ]
},
  {
    "id": "awesome-design",
    "name": "Awesome Design",
    "gradient": "from-fuchsia-500 via-pink-600 to-rose-600",
    "badgeColor": "bg-pink-500/20 text-pink-300 border-pink-500/50",
    "web": {
        "title": "Awesome Design Systems & UI Resources",
        "domain": "github.com/MarcBender-git",
        "url": "https://github.com/MarcBender-git/awesome-design",
        "category": "Design Taste",
        "summary": "Curated collection of world-class design systems, typography guidelines, micro-interaction catalogs, and design tokens.",
        "llmMarkdown": "# Awesome Design\\nDesign system guidelines and micro-interactions.\\n\\n## Topics\\n- Color theory and tokens\\n- Font pairings (Editorial, Swiss, Neo-Brutalist)\\n- Spring physics and motion easing",
        "keyFeatures": [
            "Design token contracts",
            "Micro-interaction recipes",
            "Typography scale guides"
        ]
    },
    "tech": {
        "runtime": "Figma / Web",
        "framework": "Storybook",
        "bundler": "Vite",
        "styling": "Tailwind / CSS Modules",
        "mcpServers": [
            "canva",
            "filesystem"
        ],
        "aiGateway": "Multi-model",
        "keyPackages": [
            "framer-motion",
            "lucide-react"
        ]
    },
    "visual": {
        "theme": "hybrid",
        "primaryBg": "#160A14",
        "surfaceCard": "#261223",
        "accentPrimary": "#D946EF",
        "accentSecondary": "#F43F5E",
        "typography": {
            "heading": "Syne",
            "body": "Inter",
            "code": "JetBrains Mono"
        },
        "layoutPattern": "Visual moodboard with high-contrast color swatches",
        "motionStyle": "Elastic spring physics on drag and hover"
    },
    "visualMockup": {
        "heroTagline": "World-Class Design Systems & High-End Micro-Interactions",
        "accentGlow": "shadow-[0_0_50px_-12px_rgba(217,70,239,0.5)]",
        "previewBadge": "DESIGN SYSTEM INDEX",
        "previewAction": "Explore Design Tokens"
    },
    "prompts": [
        {
            "title": "3-Layer Design Token Synthesizer",
            "type": "generation",
            "tags": [
                "Design Tokens",
                "Figma",
                "Tailwind",
                "CSS"
            ],
            "prompt": "Generate a 3-layer design token system in Tailwind CSS format: 1) Primitive tokens (raw hex scales for obsidian, void, indigo, cyan); 2) Semantic tokens (bg-canvas, bg-surface-subtle, text-primary, border-accent); 3) Component tokens (btn-primary-bg, card-elevation-bezel). Ensure WCAG AA contrast."
        }
    ]
},
  {
    "id": "awesome-design-md",
    "name": "Awesome Design-MD",
    "gradient": "from-rose-500 via-red-600 to-amber-600",
    "badgeColor": "bg-rose-500/20 text-rose-300 border-rose-500/50",
    "web": {
        "title": "Awesome DESIGN.md Guidelines & Specs",
        "domain": "github.com/voltagent",
        "url": "https://github.com/voltagent/awesome-design-md",
        "category": "Design Taste",
        "summary": "Collection of DESIGN.md prompt guidelines that force AI coding assistants to design with conviction before writing code.",
        "llmMarkdown": "# Awesome DESIGN.md\\nAesthetic conviction specifications for AI agents.\\n\\n## Core Rules\\n- Declare design tokens BEFORE writing JSX\\n- Ban raw purple gradient defaults\\n- Enforce intentional typography scale",
        "keyFeatures": [
            "Pre-code design phase",
            "Anti-slop rules",
            "Typography pairing scale"
        ]
    },
    "tech": {
        "runtime": "Markdown",
        "framework": "DESIGN.md Spec",
        "bundler": "Native",
        "styling": "Tailwind",
        "mcpServers": [
            "filesystem"
        ],
        "aiGateway": "Claude / OpenAI",
        "keyPackages": [
            "markdown-it"
        ]
    },
    "visual": {
        "theme": "dark",
        "primaryBg": "#160A0A",
        "surfaceCard": "#271212",
        "accentPrimary": "#F43F5E",
        "accentSecondary": "#F59E0B",
        "typography": {
            "heading": "Space Grotesk",
            "body": "Inter",
            "code": "JetBrains Mono"
        },
        "layoutPattern": "Before/After code comparison with aesthetic score",
        "motionStyle": "Sharp 150ms transitions"
    },
    "visualMockup": {
        "heroTagline": "Force AI Assistants to Design with Aesthetic Conviction",
        "accentGlow": "shadow-[0_0_50px_-12px_rgba(244,63,94,0.5)]",
        "previewBadge": "AESTHETIC CONVICTION",
        "previewAction": "Load DESIGN.md"
    },
    "prompts": [
        {
            "title": "Pre-Code DESIGN.md Declaration Prompt",
            "type": "generation",
            "tags": [
                "DESIGN.md",
                "Anti-Slop",
                "Frontend"
            ],
            "prompt": "Before generating any frontend component, output a DESIGN.md block declaring: 1) Aesthetic Persona (e.g. Minimalist Editorial, Obsidian Cyber); 2) Concrete Token Palette (exact hex codes for bg, surface, border, primary, secondary); 3) Typography Pairing (Header font, body font, monospace font); 4) Layout blueprint; 5) Prohibited AI defaults (no raw purple linear gradients, no generic icons)."
        }
    ]
},
  {
    "id": "design-md",
    "name": "VoltAgent Design-MD",
    "gradient": "from-red-500 via-rose-600 to-pink-600",
    "badgeColor": "bg-red-500/20 text-red-300 border-red-500/50",
    "web": {
        "title": "VoltAgent Design-MD \u2014 Prompt Spec Generator",
        "domain": "github.com/VoltAgent",
        "url": "https://github.com/VoltAgent/design-md",
        "category": "Design Taste",
        "summary": "Automated prompt tool that audits frontend codebases and injects formal design systems directly into AI assistant context.",
        "llmMarkdown": "# VoltAgent Design-MD\\nLive design auditor and prompt injector.\\n\\n## Features\\n- Codebase style scanner\\n- Token consistency checker\\n- Instant DESIGN.md generator",
        "keyFeatures": [
            "Automated style scanner",
            "Token linter",
            "Context injector"
        ]
    },
    "tech": {
        "runtime": "Node.js",
        "framework": "Babel AST Parser",
        "bundler": "tsup",
        "styling": "Tailwind",
        "mcpServers": [
            "filesystem"
        ],
        "aiGateway": "Claude 3.7 Sonnet",
        "keyPackages": [
            "@babel/parser",
            "chalk"
        ]
    },
    "visual": {
        "theme": "dark",
        "primaryBg": "#140A0D",
        "surfaceCard": "#241217",
        "accentPrimary": "#EF4444",
        "accentSecondary": "#EC4899",
        "typography": {
            "heading": "Inter Display",
            "body": "Inter",
            "code": "JetBrains Mono"
        },
        "layoutPattern": "Interactive audit scorecard with warning chips",
        "motionStyle": "Smooth meter fills"
    },
    "visualMockup": {
        "heroTagline": "Automated Design System Audit & Context Injection",
        "accentGlow": "shadow-[0_0_50px_-12px_rgba(239,68,68,0.5)]",
        "previewBadge": "DESIGN AUDITOR",
        "previewAction": "Scan Codebase"
    },
    "prompts": [
        {
            "title": "Codebase Design Audit Prompt",
            "type": "workflow",
            "tags": [
                "Audit",
                "Design Linter",
                "Consistency"
            ],
            "prompt": "Audit all React components in `src/components/`. Check: 1) Hardcoded hex colors instead of semantic Tailwind tokens; 2) Inconsistent padding/margin scales; 3) Unconsidered typography wrapping; 4) Missing hover/focus states; 5) Generate a patch replacing inconsistent styles with token references."
        }
    ]
},
  {
    "id": "ui-ux-pro-max",
    "name": "UI/UX Pro Max",
    "gradient": "from-indigo-500 via-purple-600 to-pink-500",
    "badgeColor": "bg-indigo-500/20 text-indigo-300 border-indigo-500/50",
    "web": {
        "title": "UI/UX Pro Max Design Intelligence Engine",
        "domain": "github.com/nextlevelbuilder",
        "url": "https://github.com/nextlevelbuilder/ui-ux-pro-max-skill",
        "category": "Design Taste",
        "summary": "AI UI/UX intelligence engine equipped with 161 reasoning rules, 67 UI styles, 97 color palettes, 57 font pairings, and built-in WCAG AA compliance.",
        "llmMarkdown": "# UI/UX Pro Max\\n161 reasoning rules, 67 UI styles, 97 color palettes.\\n\\n## Capabilities\\n- Pre-build design system generator\\n- WCAG AA accessibility validator\\n- Anti-pattern scanner",
        "keyFeatures": [
            "161 reasoning rules",
            "67 UI styles",
            "97 palettes",
            "57 font pairings",
            "WCAG AA validator"
        ]
    },
    "tech": {
        "runtime": "Python / TypeScript",
        "framework": "Skill Engine",
        "bundler": "tsup",
        "styling": "Tailwind CSS",
        "mcpServers": [
            "filesystem"
        ],
        "aiGateway": "Claude / OpenAI",
        "keyPackages": [
            "pydantic",
            "colord",
            "lucide-react"
        ]
    },
    "visual": {
        "theme": "dark",
        "primaryBg": "#0D0A1A",
        "surfaceCard": "#17122E",
        "accentPrimary": "#6366F1",
        "accentSecondary": "#EC4899",
        "typography": {
            "heading": "Space Grotesk",
            "body": "Inter",
            "code": "JetBrains Mono"
        },
        "layoutPattern": "Style generator with palette matrix and live preview sandbox",
        "motionStyle": "Fluid 3D tilt with dynamic light highlights"
    },
    "visualMockup": {
        "heroTagline": "161 Reasoning Rules \u2022 67 UI Styles \u2022 97 Palettes",
        "accentGlow": "shadow-[0_0_50px_-12px_rgba(99,102,241,0.5)]",
        "previewBadge": "AI DESIGN INTELLIGENCE",
        "previewAction": "Generate Design Plan"
    },
    "prompts": [
        {
            "title": "UI/UX Pro Max Plan Generator",
            "type": "generation",
            "tags": [
                "UI/UX Pro Max",
                "Design Plan",
                "161 Rules"
            ],
            "prompt": "Activate UI/UX Pro Max. Analyze this user request: Generate a complete Design Plan before touching code: 1) Recommended Style (e.g. Neo-Brutalist, Minimal Warm, Obsidian Cyber); 2) Full 5-step Palette with exact hex codes; 3) Primary & secondary typography pairings; 4) Key CSS micro-interactions; 5) 3 critical anti-patterns to avoid; 6) Pre-build accessibility checklist."
        }
    ]
},
  {
    "id": "claude-code-templates",
    "name": "Claude Code Templates",
    "gradient": "from-amber-500 via-orange-600 to-rose-600",
    "badgeColor": "bg-orange-500/20 text-orange-300 border-orange-500/50",
    "web": {
        "title": "Davila7 Claude Code Templates Engine",
        "domain": "github.com/davila7",
        "url": "https://github.com/davila7/claude-code-templates",
        "category": "Templates",
        "summary": "Production starter templates for Claude Code, bundling UI/UX Pro Max, Supabase integrations, and high-performance React architectures.",
        "llmMarkdown": "# Claude Code Templates\\nBattle-tested project scaffolding for agent workflows.\\n\\n## Bundled Modules\\n- Next.js 15 App Router\\n- Supabase SSR Auth\\n- Tailwind v4 + Framer Motion",
        "keyFeatures": [
            "Zero-setup scaffolding",
            "Production ready SSR",
            "Pre-configured agent rules"
        ]
    },
    "tech": {
        "runtime": "Node.js",
        "framework": "Next.js / Vite",
        "bundler": "Turbopack / Rolldown",
        "styling": "Tailwind CSS",
        "mcpServers": [
            "supabase",
            "github"
        ],
        "aiGateway": "Claude 3.7 Sonnet",
        "keyPackages": [
            "next",
            "react",
            "@supabase/ssr"
        ]
    },
    "visual": {
        "theme": "dark",
        "primaryBg": "#140D08",
        "surfaceCard": "#24160E",
        "accentPrimary": "#EA580C",
        "accentSecondary": "#F59E0B",
        "typography": {
            "heading": "Plus Jakarta Sans",
            "body": "Inter",
            "code": "JetBrains Mono"
        },
        "layoutPattern": "Interactive template showcase with one-click clone",
        "motionStyle": "Spring hover bounce"
    },
    "visualMockup": {
        "heroTagline": "Zero-Setup Production Templates for Claude Code",
        "accentGlow": "shadow-[0_0_50px_-12px_rgba(234,88,12,0.5)]",
        "previewBadge": "PRODUCTION TEMPLATES",
        "previewAction": "Clone Template"
    },
    "prompts": [
        {
            "title": "Production Template Scaffolder",
            "type": "generation",
            "tags": [
                "Templates",
                "Scaffolding",
                "Production"
            ],
            "prompt": "Scaffold a complete production-grade Next.js 15 application. Include: 1) App router folder structure with loading and error boundaries; 2) Supabase authentication middleware with SSR cookies; 3) Tailwind tokens matching the project palette; 4) Lucide icons; 5) Clean type definitions with zero TypeScript errors."
        }
    ]
},
  {
    "id": "garden-skills",
    "name": "Garden Skills",
    "gradient": "from-emerald-500 via-green-600 to-teal-700",
    "badgeColor": "bg-emerald-500/20 text-emerald-300 border-emerald-500/50",
    "web": {
        "title": "ConardLi Garden Skills \u2014 High-Taste Design Workflow",
        "domain": "github.com/ConardLi",
        "url": "https://github.com/ConardLi/garden-skills",
        "category": "Design Taste",
        "summary": "Design-taste workflow for frontend engineering: Requirements -> Context -> Token Declaration -> Draft -> Build -> Verify.",
        "llmMarkdown": "# Garden Skills\\nHuman-in-the-loop design-taste workflow.\\n\\n## Phases\\n1. Requirements & Context\\n2. Token Declaration\\n3. Component Draft\\n4. Strict Verification",
        "keyFeatures": [
            "Design-first workflow",
            "Zero placeholder policy",
            "Automated screenshot verification"
        ]
    },
    "tech": {
        "runtime": "Node.js / React",
        "framework": "Vite / Next.js",
        "bundler": "Rolldown",
        "styling": "Tailwind CSS",
        "mcpServers": [
            "playwright",
            "filesystem"
        ],
        "aiGateway": "Claude / OpenAI",
        "keyPackages": [
            "framer-motion",
            "lucide-react"
        ]
    },
    "visual": {
        "theme": "hybrid",
        "primaryBg": "#08140E",
        "surfaceCard": "#10241A",
        "accentPrimary": "#10B981",
        "accentSecondary": "#34D399",
        "typography": {
            "heading": "Fraunces",
            "body": "Plus Jakarta Sans",
            "code": "JetBrains Mono"
        },
        "layoutPattern": "Organic cards with soft rounded corners and subtle shadows",
        "motionStyle": "Fluid organic easing with gentle floating stems"
    },
    "visualMockup": {
        "heroTagline": "Cultivate High-Taste Frontend Interfaces Step by Step",
        "accentGlow": "shadow-[0_0_50px_-12px_rgba(16,185,129,0.5)]",
        "previewBadge": "HIGH-TASTE WORKFLOW",
        "previewAction": "Start Garden Workflow"
    },
    "prompts": [
        {
            "title": "Garden 6-Phase Design Workflow",
            "type": "workflow",
            "tags": [
                "Garden Skills",
                "Workflow",
                "High-Taste"
            ],
            "prompt": "Execute the Garden Skills 6-phase engineering workflow: 1) Requirements: clarify user goals; 2) Context: ground against workspace rules; 3) Design Tokens: declare exact colors and fonts; 4) Draft: render component skeleton; 5) Build: implement complete interactions without placeholders; 6) Verify: run tests and visual checks."
        }
    ]
},
  {
    "id": "taste-skill",
    "name": "Taste Skill",
    "gradient": "from-cyan-400 via-indigo-500 to-purple-600",
    "badgeColor": "bg-indigo-500/20 text-indigo-300 border-indigo-500/50",
    "web": {
        "title": "Leonxlnx Taste Skill \u2014 Anti-Slop Frontend Enforcer",
        "domain": "github.com/Leonxlnx",
        "url": "https://github.com/Leonxlnx/taste-skill",
        "category": "Design Taste",
        "summary": "Anti-slop frontend skill that eliminates generic AI templates, enforces intentional layout variance, audits typography wrapping, and adds micro-interactions.",
        "llmMarkdown": "# Taste Skill\\nEliminate generic AI frontend slop.\\n\\n## Anti-Slop Invariants\\n- Ban generic centered hero blocks with raw purple gradients\\n- Enforce asymmetric grid layouts\\n- Require spring-physics micro-interactions",
        "keyFeatures": [
            "Anti-slop enforcement",
            "Typography wrapping audit",
            "Layout variance engine",
            "Micro-interaction rules"
        ]
    },
    "tech": {
        "runtime": "Node.js / React",
        "framework": "Tailwind / Framer Motion",
        "bundler": "Vite",
        "styling": "Tailwind CSS v4",
        "mcpServers": [
            "filesystem"
        ],
        "aiGateway": "Claude 3.7 Sonnet",
        "keyPackages": [
            "framer-motion",
            "clsx",
            "tailwind-merge"
        ]
    },
    "visual": {
        "theme": "dark",
        "primaryBg": "#090B14",
        "surfaceCard": "#121728",
        "accentPrimary": "#6366F1",
        "accentSecondary": "#06B6D4",
        "typography": {
            "heading": "Space Grotesk",
            "body": "Inter",
            "code": "JetBrains Mono"
        },
        "layoutPattern": "Asymmetrical editorial bento grid with layered bezels",
        "motionStyle": "Framer Motion spring physics (stiffness: 300, damping: 20)"
    },
    "visualMockup": {
        "heroTagline": "Banish Generic AI Slop \u2022 Elevate to Studio Grade",
        "accentGlow": "shadow-[0_0_50px_-12px_rgba(99,102,241,0.5)]",
        "previewBadge": "ANTI-SLOP ENFORCER",
        "previewAction": "Enforce Design Taste"
    },
    "prompts": [
        {
            "title": "Anti-Slop Frontend Enforcer Prompt",
            "type": "system",
            "tags": [
                "Anti-Slop",
                "Taste",
                "Aesthetics"
            ],
            "prompt": "You are Taste Skill. You reject generic AI frontend slop. Before rendering any UI: 1) Prohibit centered cookie-cutter card grids; 2) Add intentional layout asymmetry; 3) Use layered double-bezel cards with distinct inner/outer strokes; 4) Add fluid spring micro-interactions on hover and click; 5) Wrap typography carefully with `text-balance` and avoid lonely orphan words."
        }
    ]
}
];
