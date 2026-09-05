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
  category: 'Coding Agents' | 'Harnesses' | 'MCP Servers' | 'Skill Makers' | 'Skill Routers' | 'Design Taste' | 'Component Libraries';
  summary: string;
  llmMarkdown: string;
  keyFeatures: string[];
}

export interface CrawledWebsite {
  id: string;
  name: string;
  web: WebCrawl;
  tech: TechCrawl;
  visual: VisualCrawl;
}

export const CRAWLED_WEBSITES: CrawledWebsite[] = [
  {
    id: 'opencode',
    name: 'OpenCode CLI',
    web: {
      title: 'OpenCode — Provider-Agnostic Terminal Coding Agent',
      domain: 'opencode.ai',
      url: 'https://github.com/opencode-ai/opencode',
      category: 'Coding Agents',
      summary: 'Autonomous terminal pair programming harness supporting Claude, GPT-4o, and DeepSeek with strict markdown rule guidance.',
      llmMarkdown: '# OpenCode\nProvider-agnostic terminal coding agent guided by AGENTS.md and DESIGN.md.\n\n## Capabilities\n- In-terminal AST navigation\n- Zero local GPU dependency\n- OpenCode harness schema compliance',
      keyFeatures: ['Terminal TUI interface', 'Multi-model fallback routing', 'Zero local weight inference']
    },
    tech: {
      runtime: 'Node.js / Bun',
      framework: 'Ink (React TUI)',
      bundler: 'esbuild',
      styling: 'Chalk / ANSI 256-color',
      mcpServers: ['GitMCP', 'Filesystem MCP'],
      aiGateway: 'OpenRouter / Anthropic Direct',
      keyPackages: ['ink', 'commander', 'zod', 'ws']
    },
    visual: {
      theme: 'dark',
      primaryBg: '#0D1117',
      surfaceCard: '#161B22',
      accentPrimary: '#58A6FF',
      accentSecondary: '#3FB950',
      typography: {
        heading: 'JetBrains Mono',
        body: 'Fira Code',
        code: 'JetBrains Mono'
      },
      layoutPattern: 'Split terminal pane with status footer',
      motionStyle: 'Sub-second CLI spinner and cursor blink'
    }
  },
  {
    id: 'awesome-coding-agent',
    name: 'Awesome Coding Agent',
    web: {
      title: 'Awesome Coding Agents & AI Pair Programmers',
      domain: 'github.com/jqueryscript/awesome-coding-agent',
      url: 'https://github.com/jqueryscript/awesome-coding-agent',
      category: 'Coding Agents',
      summary: 'Curated directory of autonomous coding agents, benchmark scores, and terminal harnesses.',
      llmMarkdown: '# Awesome Coding Agents\nA curated list of autonomous software development agents, harnesses, and benchmarks.',
      keyFeatures: ['Comparative benchmark analysis', 'Tool-calling compatibility matrix', 'Free and open-source directory']
    },
    tech: {
      runtime: 'GitHub Pages / Jekyll',
      framework: 'Static Markdown / Liquid',
      bundler: 'N/A',
      styling: 'GitHub Markdown CSS',
      mcpServers: ['GitHub MCP'],
      aiGateway: 'Static Grounding Data',
      keyPackages: ['github-pages', 'jekyll-theme-primer']
    },
    visual: {
      theme: 'dark',
      primaryBg: '#0D1117',
      surfaceCard: '#161B22',
      accentPrimary: '#58A6FF',
      accentSecondary: '#A371F7',
      typography: {
        heading: '-apple-system, BlinkMacSystemFont',
        body: 'Inter',
        code: 'ui-monospace'
      },
      layoutPattern: 'Hierarchical categorization tables with badge shields',
      motionStyle: 'Native smooth scroll'
    }
  },
  {
    id: 'awesome-agent-harness',
    name: 'Awesome Agent Harness',
    web: {
      title: 'Awesome Agent Harness Engineering Resources',
      domain: 'github.com/Picrew/awesome-agent-harness',
      url: 'https://github.com/Picrew/awesome-agent-harness',
      category: 'Harnesses',
      summary: 'Deep resource guide for building reliable agent sandboxes, terminal executors, and evaluation loops.',
      llmMarkdown: '# Awesome Agent Harness\nEngineering resources, runtime isolation patterns, and sandboxing architecture for AI agents.',
      keyFeatures: ['Process lifecycle management', 'Sub-process timeout monitors', 'Workspace branching standards']
    },
    tech: {
      runtime: 'Python / TypeScript',
      framework: 'Docker / Sandbox SDK',
      bundler: 'tsup',
      styling: 'Tailwind CSS',
      mcpServers: ['Playwright MCP', 'Docker MCP'],
      aiGateway: 'Multi-provider harness adapter',
      keyPackages: ['dockerode', 'execa', 'pydantic']
    },
    visual: {
      theme: 'dark',
      primaryBg: '#090D16',
      surfaceCard: '#131B2E',
      accentPrimary: '#6366F1',
      accentSecondary: '#EC4899',
      typography: {
        heading: 'Space Grotesk',
        body: 'Inter',
        code: 'JetBrains Mono'
      },
      layoutPattern: 'Matrix grid of harness architectures',
      motionStyle: 'Spring fade-in'
    }
  },
  {
    id: 'awesome-mcp-servers',
    name: 'Awesome MCP Servers',
    web: {
      title: 'Awesome Model Context Protocol (MCP) Servers',
      domain: 'github.com/wong2/awesome-mcp-servers',
      url: 'https://github.com/wong2/awesome-mcp-servers',
      category: 'MCP Servers',
      summary: 'The primary catalog of stdio and SSE Model Context Protocol servers connecting LLMs to external tools and databases.',
      llmMarkdown: '# Awesome MCP Servers\nCurated collection of MCP servers for filesystem, GitHub, databases, browsers, and devtools.',
      keyFeatures: ['Stdio and SSE protocol definitions', 'OAuth and keyless connection patterns', 'Cross-client compatibility matrix']
    },
    tech: {
      runtime: 'Node.js / Python',
      framework: '@modelcontextprotocol/sdk',
      bundler: 'Rollup / esbuild',
      styling: 'Markdown',
      mcpServers: ['Supabase MCP', 'GitMCP', 'Filesystem MCP', 'GitHub MCP'],
      aiGateway: 'Standardized MCP JSON-RPC 2.0',
      keyPackages: ['@modelcontextprotocol/sdk', 'zod', 'sse.js']
    },
    visual: {
      theme: 'dark',
      primaryBg: '#0B0F19',
      surfaceCard: '#1E293B',
      accentPrimary: '#06B6D4',
      accentSecondary: '#10B981',
      typography: {
        heading: 'Space Grotesk',
        body: 'Inter',
        code: 'JetBrains Mono'
      },
      layoutPattern: 'Connector cards with status indicators',
      motionStyle: 'Micro-interaction hover lift'
    }
  },
  {
    id: 'gitmcp',
    name: 'GitMCP Server',
    web: {
      title: 'GitMCP — Zero-Clone Remote Git Grounding for Agents',
      domain: 'gitmcp.io',
      url: 'https://github.com/gitmcp/gitmcp',
      category: 'MCP Servers',
      summary: 'Remote MCP service enabling AI agents to read files, search repos, and inspect git histories without local cloning.',
      llmMarkdown: '# GitMCP\nCloud-hosted MCP server for zero-disk GitHub exploration and file streaming.',
      keyFeatures: ['Zero local disk storage footprint', 'Raw git object extraction', 'Fast syntax search']
    },
    tech: {
      runtime: 'Cloudflare Workers (Edge V8)',
      framework: 'Hono / MCP Server',
      bundler: 'Wrangler',
      styling: 'Tailwind CSS',
      mcpServers: ['GitMCP'],
      aiGateway: 'GitHub GraphQL API',
      keyPackages: ['hono', '@cloudflare/workers-types']
    },
    visual: {
      theme: 'dark',
      primaryBg: '#000000',
      surfaceCard: '#111111',
      accentPrimary: '#F97316',
      accentSecondary: '#3B82F6',
      typography: {
        heading: 'Geist',
        body: 'Geist',
        code: 'Geist Mono'
      },
      layoutPattern: 'Minimalist high-contrast technical grid',
      motionStyle: 'Instant transition'
    }
  },
  {
    id: 'playwright-mcp',
    name: 'Playwright MCP',
    web: {
      title: 'Microsoft Playwright MCP Server',
      domain: 'github.com/microsoft/playwright-mcp',
      url: 'https://github.com/microsoft/playwright-mcp',
      category: 'MCP Servers',
      summary: 'Headless browser automation MCP server providing agents with screenshotting, page clicks, form fills, and DOM inspections.',
      llmMarkdown: '# Playwright MCP\nBrowser automation MCP server enabling web navigation, snapshot testing, and DOM scraping for AI assistants.',
      keyFeatures: ['Headless Chromium / WebKit control', 'Visual accessibility tree snapshotting', 'Network request interception']
    },
    tech: {
      runtime: 'Node.js 20+',
      framework: 'Playwright Core',
      bundler: 'tsup',
      styling: 'N/A',
      mcpServers: ['Playwright MCP'],
      aiGateway: 'DOM JSON serialization',
      keyPackages: ['playwright-core', '@modelcontextprotocol/sdk']
    },
    visual: {
      theme: 'dark',
      primaryBg: '#1A1B26',
      surfaceCard: '#24283B',
      accentPrimary: '#2AC3DE',
      accentSecondary: '#9ECE6A',
      typography: {
        heading: 'Inter',
        body: 'Inter',
        code: 'JetBrains Mono'
      },
      layoutPattern: 'Dual-panel viewport and DOM tree',
      motionStyle: 'Smooth frame streaming'
    }
  },
  {
    id: 'github-mcp',
    name: 'GitHub MCP Server',
    web: {
      title: 'Official GitHub Model Context Protocol Server',
      domain: 'github.com/modelcontextprotocol/servers',
      url: 'https://github.com/modelcontextprotocol/servers/tree/main/src/github',
      category: 'MCP Servers',
      summary: 'Official stdio server exposing GitHub issues, pull requests, commits, and branch creation directly to LLMs.',
      llmMarkdown: '# GitHub MCP Server\nComprehensive GitHub integration for agents: manage PRs, file issues, and search codebases.',
      keyFeatures: ['Repository branch management', 'PR creation and diff review', 'Issue tracking and labeling']
    },
    tech: {
      runtime: 'TypeScript / Node.js',
      framework: '@octokit/rest',
      bundler: 'esbuild',
      styling: 'N/A',
      mcpServers: ['GitHub MCP'],
      aiGateway: 'GitHub REST / GraphQL',
      keyPackages: ['@octokit/rest', '@modelcontextprotocol/sdk']
    },
    visual: {
      theme: 'dark',
      primaryBg: '#0D1117',
      surfaceCard: '#161B22',
      accentPrimary: '#238636',
      accentSecondary: '#58A6FF',
      typography: {
        heading: 'Mona Sans',
        body: 'Mona Sans',
        code: 'Hubot Sans Mono'
      },
      layoutPattern: 'Repository timeline and issue board',
      motionStyle: 'Standard GitHub easing'
    }
  },
  {
    id: 'canva-mcp',
    name: 'Canva MCP Connector',
    web: {
      title: 'Canva Design & Asset Management MCP',
      domain: 'registry.npmjs.org/canva-mcp',
      url: 'https://registry.npmjs.org/canva-mcp',
      category: 'MCP Servers',
      summary: 'Design generation and template export tool allowing coding agents to generate marketing banners and visual assets.',
      llmMarkdown: '# Canva MCP\nProgrammatic Canva asset integration: generate banners, decks, and open graph cards without local graphics compute.',
      keyFeatures: ['Cloud-based template rendering', 'Vector SVG and PNG export', 'Zero local GPU graphic generation']
    },
    tech: {
      runtime: 'Node.js',
      framework: 'Canva Connect API',
      bundler: 'tsup',
      styling: 'Canva Design Tokens',
      mcpServers: ['Canva MCP'],
      aiGateway: 'Canva REST Connect API',
      keyPackages: ['canva-connect-sdk', 'axios']
    },
    visual: {
      theme: 'light',
      primaryBg: '#FFFFFF',
      surfaceCard: '#F2F3F5',
      accentPrimary: '#00C4CC',
      accentSecondary: '#7D2AE8',
      typography: {
        heading: 'Canva Sans',
        body: 'Canva Sans',
        code: 'Monospace'
      },
      layoutPattern: 'Canvas drag-and-drop workspace layout',
      motionStyle: 'Playful bouncy spring'
    }
  },
  {
    id: 'supabase-mcp',
    name: 'Supabase Postgres MCP',
    web: {
      title: 'Supabase Cloud Database MCP Gateway',
      domain: 'mcp.supabase.com',
      url: 'https://mcp.supabase.com/mcp',
      category: 'MCP Servers',
      summary: 'Direct database management, transactional query execution, and migration tracking for agentic workflows.',
      llmMarkdown: '# Supabase MCP\nManage hosted Postgres databases, run schema migrations, and generate TypeScript types from live schemas.',
      keyFeatures: ['Row Level Security policy validation', 'Instant schema introspection', 'Connection pooling via Supavisor']
    },
    tech: {
      runtime: 'PostgreSQL 15 / Deno',
      framework: 'PostgREST',
      bundler: 'N/A',
      styling: 'Supabase UI',
      mcpServers: ['Supabase MCP'],
      aiGateway: 'Supabase REST & pgvector',
      keyPackages: ['@supabase/supabase-js', 'pg']
    },
    visual: {
      theme: 'dark',
      primaryBg: '#1C1C1C',
      surfaceCard: '#242424',
      accentPrimary: '#3ECF8E',
      accentSecondary: '#70E2B2',
      typography: {
        heading: 'Circular',
        body: 'Inter',
        code: 'JetBrains Mono'
      },
      layoutPattern: 'SQL query editor and data table preview',
      motionStyle: 'Subtle high-precision feedback'
    }
  },
  {
    id: 'awesome-claude-code',
    name: 'Awesome Claude Code',
    web: {
      title: 'Awesome Claude Code Skills, Extensions & Hooks',
      domain: 'github.com/fix2015/awesome-claude-code',
      url: 'https://github.com/fix2015/awesome-claude-code',
      category: 'Coding Agents',
      summary: 'Comprehensive list of community tools, prompts, hooks, and persistent memory skills for Anthropic Claude Code.',
      llmMarkdown: '# Awesome Claude Code\nEverything for Claude Code: slash commands, bash sub-agents, memory journals, and architecture guides.',
      keyFeatures: ['Session journal patterns', 'Slash command extensions', 'Zero-slop system prompt presets']
    },
    tech: {
      runtime: 'Markdown / Shell',
      framework: 'Claude CLI',
      bundler: 'N/A',
      styling: 'Terminal ANSI',
      mcpServers: ['Filesystem MCP', 'GitHub MCP'],
      aiGateway: 'Anthropic Claude 3.5 Sonnet',
      keyPackages: ['@anthropic-ai/claude-code']
    },
    visual: {
      theme: 'dark',
      primaryBg: '#18181B',
      surfaceCard: '#27272A',
      accentPrimary: '#D97706',
      accentSecondary: '#F59E0B',
      typography: {
        heading: 'Space Grotesk',
        body: 'Inter',
        code: 'JetBrains Mono'
      },
      layoutPattern: 'Documentation columns with code snippet cards',
      motionStyle: 'Smooth tab transition'
    }
  },
  {
    id: 'awesome-free-models',
    name: 'Awesome Free Models',
    web: {
      title: 'Directory of Free Cloud LLMs & Inference APIs',
      domain: 'github.com/12britz/awesome-free-models',
      url: 'https://github.com/12britz/awesome-free-models',
      category: 'Harnesses',
      summary: 'Verified collection of zero-cost API endpoints for Claude, Llama 3, DeepSeek, and Qwen.',
      llmMarkdown: '# Awesome Free Models\nZero-cost cloud LLM inference microservices: OpenRouter free tier, NVIDIA NIM, Groq, and Gemini 1.5 Flash.',
      keyFeatures: ['Zero local compute overhead', 'Sub-second first token latency', 'High rate-limit tiers']
    },
    tech: {
      runtime: 'Cloud APIs',
      framework: 'OpenAI-Compatible REST',
      bundler: 'N/A',
      styling: 'Markdown',
      mcpServers: [],
      aiGateway: 'OpenRouter, NVIDIA NIM, Groq, Gemini',
      keyPackages: ['openai', 'httpx']
    },
    visual: {
      theme: 'dark',
      primaryBg: '#0F172A',
      surfaceCard: '#1E293B',
      accentPrimary: '#38BDF8',
      accentSecondary: '#818CF8',
      typography: {
        heading: 'Inter',
        body: 'Inter',
        code: 'JetBrains Mono'
      },
      layoutPattern: 'Model latency and pricing comparison matrix',
      motionStyle: 'Real-time telemetry pulse'
    }
  },
  {
    id: '100-free-repos',
    name: '100 Free Open-Source Repos',
    web: {
      title: '100 Curated Free Open-Source GitHub Repositories',
      domain: 'github.com/Moh4696/100-free-open-source-github-repos',
      url: 'https://github.com/Moh4696/100-free-open-source-github-repos',
      category: 'Harnesses',
      summary: 'The master curated registry of developer tools, AI frameworks, and full-stack boilerplates.',
      llmMarkdown: '# 100 Free Open-Source Repos\nTop open-source software covering AI agents, automation, design systems, and cloud infrastructure.',
      keyFeatures: ['Full provenance and licensing verification', 'Category-based taxonomy', 'Star metrics and maintenance telemetry']
    },
    tech: {
      runtime: 'Multi-stack',
      framework: 'Open Source Ecosystem',
      bundler: 'Various',
      styling: 'Clean Markdown',
      mcpServers: ['GitHub MCP'],
      aiGateway: 'Grounded verified facts',
      keyPackages: ['git', 'gh-cli']
    },
    visual: {
      theme: 'dark',
      primaryBg: '#0B0F19',
      surfaceCard: '#111827',
      accentPrimary: '#6366F1',
      accentSecondary: '#10B981',
      typography: {
        heading: 'Space Grotesk',
        body: 'Inter',
        code: 'JetBrains Mono'
      },
      layoutPattern: 'Bento grid with category filters',
      motionStyle: 'Staggered card reveal'
    }
  },
  {
    id: 'skill-creator',
    name: 'Skill Creator',
    web: {
      title: 'Gaubee Skill Creator — Synthesize Agent Capabilities',
      domain: 'github.com/Gaubee/skill-creator',
      url: 'https://github.com/Gaubee/skill-creator',
      category: 'Skill Makers',
      summary: 'CLI and subagent tool for scaffolding standardized .agents/skills/ folders with YAML metadata and runbooks.',
      llmMarkdown: '# Skill Creator\nScaffold, validate, and publish reusable agent skills from recurring human-in-the-loop workflows.',
      keyFeatures: ['YAML frontmatter linting', 'Self-contained executable scripts', 'Automated test suite generation']
    },
    tech: {
      runtime: 'Deno / Node.js',
      framework: 'Commander / Clack Prompt',
      bundler: 'esbuild',
      styling: 'Chalk',
      mcpServers: ['Filesystem MCP'],
      aiGateway: 'Prompt expansion engine',
      keyPackages: ['@clack/prompts', 'yaml', 'zod']
    },
    visual: {
      theme: 'dark',
      primaryBg: '#121212',
      surfaceCard: '#1E1E1E',
      accentPrimary: '#BB86FC',
      accentSecondary: '#03DAC6',
      typography: {
        heading: 'Fira Code',
        body: 'Inter',
        code: 'Fira Code'
      },
      layoutPattern: 'Step-by-step CLI wizard flowchart',
      motionStyle: 'Interactive prompt transitions'
    }
  },
  {
    id: 'claude-code-skills',
    name: 'Claude Code Skills',
    web: {
      title: 'Claude Code Skills Packaging & Registry',
      domain: 'github.com/daymade/claude-code-skills',
      url: 'https://github.com/daymade/claude-code-skills',
      category: 'Skill Makers',
      summary: 'Init/validate/package workflow for cross-agent modular skills compatible with Claude Code and OpenCode.',
      llmMarkdown: '# Claude Code Skills\nPackaging ecosystem for distribution of modular agent skills with automated validation hooks.',
      keyFeatures: ['Semantic capability tags', 'Cross-platform installation scripts', 'Dependency verification']
    },
    tech: {
      runtime: 'TypeScript',
      framework: 'Node.js ESM',
      bundler: 'tsup',
      styling: 'Tailwind CSS',
      mcpServers: ['Filesystem MCP'],
      aiGateway: 'Anthropic Claude API',
      keyPackages: ['ajv', 'glob', 'yaml']
    },
    visual: {
      theme: 'dark',
      primaryBg: '#090A0F',
      surfaceCard: '#141622',
      accentPrimary: '#6366F1',
      accentSecondary: '#06B6D4',
      typography: {
        heading: 'Space Grotesk',
        body: 'Inter',
        code: 'JetBrains Mono'
      },
      layoutPattern: 'Catalog cards with one-click install commands',
      motionStyle: 'Smooth accordion expand'
    }
  },
  {
    id: 'skills-maker',
    name: 'Skills Maker',
    web: {
      title: 'Skills Maker — Multi-Agent Skill Generator',
      domain: 'github.com/zhing2006/skills-maker',
      url: 'https://github.com/zhing2006/skills-maker',
      category: 'Skill Makers',
      summary: 'Cross-tool skill generator compatible across Claude Code, Cursor, Codex, OpenCode, and Roo Code.',
      llmMarkdown: '# Skills Maker\nUniversal generator transforming plain instructions into portable agent skills for any coding harness.',
      keyFeatures: ['Universal format conversion', 'Evaluation test runner', 'Multi-IDE prompt injection']
    },
    tech: {
      runtime: 'Python 3.11+',
      framework: 'Click / Typer',
      bundler: 'Poetry',
      styling: 'Rich',
      mcpServers: ['Filesystem MCP'],
      aiGateway: 'Multi-provider LLM Client',
      keyPackages: ['typer', 'rich', 'pydantic']
    },
    visual: {
      theme: 'dark',
      primaryBg: '#1E1E2E',
      surfaceCard: '#313244',
      accentPrimary: '#CBA6F7',
      accentSecondary: '#A6E3A1',
      typography: {
        heading: 'JetBrains Mono',
        body: 'JetBrains Mono',
        code: 'JetBrains Mono'
      },
      layoutPattern: 'Terminal dashboard with colorized output trees',
      motionStyle: 'Instant character streaming'
    }
  },
  {
    id: 'agent-skill-creator',
    name: 'Agent Skill Creator',
    web: {
      title: 'Agent Skill Creator — Spec-Driven Synthesizer',
      domain: 'github.com/FrancyJGLisboa/agent-skill-creator',
      url: 'https://github.com/FrancyJGLisboa/agent-skill-creator',
      category: 'Skill Makers',
      summary: 'Natural language description to validated skill with evaluation benchmarks and installation scripts.',
      llmMarkdown: '# Agent Skill Creator\nSynthesize enterprise agent skills from PRDs with zero-code prompt engineering.',
      keyFeatures: ['Prompt regression testing', 'Token budget optimizer', 'Statutory rule enforcement']
    },
    tech: {
      runtime: 'TypeScript',
      framework: 'Next.js / Node.js',
      bundler: 'Turbopack',
      styling: 'Tailwind CSS',
      mcpServers: ['Filesystem MCP'],
      aiGateway: 'Claude 3.5 Sonnet',
      keyPackages: ['zod', 'openai', 'framer-motion']
    },
    visual: {
      theme: 'dark',
      primaryBg: '#0B0F19',
      surfaceCard: '#1E293B',
      accentPrimary: '#38BDF8',
      accentSecondary: '#F43F5E',
      typography: {
        heading: 'Space Grotesk',
        body: 'Inter',
        code: 'JetBrains Mono'
      },
      layoutPattern: 'Split editor with live benchmark telemetry',
      motionStyle: 'Smooth state transition'
    }
  },
  {
    id: 'skill-from-masters',
    name: 'Skill From Masters',
    web: {
      title: 'Skill From Masters — Repo-to-Skill Harvester',
      domain: 'github.com/gbsoss/skill-from-masters',
      url: 'https://github.com/gbsoss/skill-from-masters',
      category: 'Skill Makers',
      summary: 'Searches GitHub for production repos, analyzes implementation patterns, and synthesizes executable SKILL.md files.',
      llmMarkdown: '# Skill From Masters\nTurn real GitHub repositories into actionable agent skills in seconds.',
      keyFeatures: ['Automated repository AST parsing', 'Idiomatic pattern extraction', 'Verified code examples extraction']
    },
    tech: {
      runtime: 'Python',
      framework: 'FastAPI / LangChain',
      bundler: 'Uvicorn',
      styling: 'Tailwind CSS',
      mcpServers: ['GitHub MCP', 'GitMCP'],
      aiGateway: 'OpenRouter / Claude API',
      keyPackages: ['fastapi', 'tree-sitter', 'github3.py']
    },
    visual: {
      theme: 'dark',
      primaryBg: '#05070D',
      surfaceCard: '#111827',
      accentPrimary: '#06B6D4',
      accentSecondary: '#3B82F6',
      typography: {
        heading: 'Space Grotesk',
        body: 'Inter',
        code: 'JetBrains Mono'
      },
      layoutPattern: 'Source repo vs. synthesized skill comparison diff',
      motionStyle: 'Subtle hover glow'
    }
  },
  {
    id: 'skill-router',
    name: 'Skill Router',
    web: {
      title: 'Skill Router — Intent Classification & Auto-Dispatch',
      domain: 'github.com/mingyooagi/myskills',
      url: 'https://github.com/mingyooagi/myskills',
      category: 'Skill Routers',
      summary: 'Semantic skill router evaluating user prompt intent and dynamically dispatching the optimal skill from catalog.',
      llmMarkdown: '# Skill Router\nIntent classifier ensuring agents select the exact right specialized skill for every task.',
      keyFeatures: ['Sub-millisecond intent classification', 'Hierarchical fallback routing', 'Zero hallucination guard']
    },
    tech: {
      runtime: 'Python / TypeScript',
      framework: 'Pydantic / Zod',
      bundler: 'Rollup',
      styling: 'Tailwind CSS',
      mcpServers: ['Skill Router MCP'],
      aiGateway: 'Cloud Embedding API (OpenAI / Cohere)',
      keyPackages: ['numpy', 'pydantic', 'fastapi']
    },
    visual: {
      theme: 'dark',
      primaryBg: '#0B0F19',
      surfaceCard: '#1E293B',
      accentPrimary: '#6366F1',
      accentSecondary: '#10B981',
      typography: {
        heading: 'Space Grotesk',
        body: 'Inter',
        code: 'JetBrains Mono'
      },
      layoutPattern: 'Visual routing graph with live confidence gauges',
      motionStyle: 'Animated node connections'
    }
  },
  {
    id: 'agent-playbook',
    name: 'Agent Playbook',
    web: {
      title: 'Agent Playbook — Multi-Stage Workflow Orchestration',
      domain: 'github.com/charon-fan/agent-playbook',
      url: 'https://github.com/charon-fan/agent-playbook',
      category: 'Skill Routers',
      summary: 'Semantic playbook engine executing multi-stage agent workflows with checkpoints and rollback states.',
      llmMarkdown: '# Agent Playbook\nComplex workflow runner managing staged agent pipelines and human review gates.',
      keyFeatures: ['State machine workflow execution', 'Checkpointed rollback states', 'Approval gate integration']
    },
    tech: {
      runtime: 'TypeScript',
      framework: 'XState / Node.js',
      bundler: 'Vite',
      styling: 'Tailwind CSS',
      mcpServers: ['Filesystem MCP'],
      aiGateway: 'Structured output schemas',
      keyPackages: ['xstate', 'zod', 'framer-motion']
    },
    visual: {
      theme: 'dark',
      primaryBg: '#0C0F17',
      surfaceCard: '#161D2B',
      accentPrimary: '#38BDF8',
      accentSecondary: '#818CF8',
      typography: {
        heading: 'Space Grotesk',
        body: 'Inter',
        code: 'JetBrains Mono'
      },
      layoutPattern: 'Interactive pipeline diagram with active step pulses',
      motionStyle: 'Fluid progress filling'
    }
  },
  {
    id: 'skillmux',
    name: 'Skillmux Router',
    web: {
      title: 'Skillmux — Hybrid BM25 & Semantic Skill Dispatcher',
      domain: 'github.com/klhq/skillmux',
      url: 'https://github.com/klhq/skillmux',
      category: 'Skill Routers',
      summary: 'Hybrid search router combining BM25 exact keyword matching with dense embedding cosine similarity for skill discovery.',
      llmMarkdown: '# Skillmux\nHigh-precision hybrid retrieval ensuring zero missed skills across vast capability catalogs.',
      keyFeatures: ['Hybrid BM25 + dense embedding ranking', 'Zero local vector index memory footprint', 'Sub-second search latency']
    },
    tech: {
      runtime: 'Rust / Python',
      framework: 'PyO3 / FastBM25',
      bundler: 'Maturin',
      styling: 'N/A',
      mcpServers: ['Skillmux MCP'],
      aiGateway: 'Cloud Embedding API',
      keyPackages: ['tantivy', 'pyo3', 'pydantic']
    },
    visual: {
      theme: 'dark',
      primaryBg: '#10141D',
      surfaceCard: '#1C2230',
      accentPrimary: '#F59E0B',
      accentSecondary: '#06B6D4',
      typography: {
        heading: 'Space Grotesk',
        body: 'Inter',
        code: 'JetBrains Mono'
      },
      layoutPattern: 'Ranked search results with score breakdown badges',
      motionStyle: 'Instant filtering'
    }
  },
  {
    id: 'mis-skills',
    name: 'MIS Skills Registry',
    web: {
      title: 'MIS Skills — Multilingual & Multi-Agent Skill Catalog',
      domain: 'github.com/WaltherGL66/mis-skills',
      url: 'https://github.com/WaltherGL66/mis-skills',
      category: 'Skill Routers',
      summary: 'Multilingual and multi-agent skill registry managing distributed agent roles, team routing, and prompt localizations.',
      llmMarkdown: '# MIS Skills\nTeam-scale multi-agent skills directory supporting distributed team collaboration.',
      keyFeatures: ['Multi-agent role definitions', 'Strict linguistic isolation', 'Shared memory synchronization']
    },
    tech: {
      runtime: 'TypeScript',
      framework: 'React / Vite',
      bundler: 'Vite',
      styling: 'Tailwind CSS',
      mcpServers: ['GitHub MCP'],
      aiGateway: 'OpenRouter Multi-Model',
      keyPackages: ['i18next', 'lucide-react', 'clsx']
    },
    visual: {
      theme: 'dark',
      primaryBg: '#0B0F19',
      surfaceCard: '#1E293B',
      accentPrimary: '#10B981',
      accentSecondary: '#6366F1',
      typography: {
        heading: 'Space Grotesk',
        body: 'Inter',
        code: 'JetBrains Mono'
      },
      layoutPattern: 'Multi-lingual matrix grid with locale tags',
      motionStyle: 'Subtle slide-fade'
    }
  },
  {
    id: 'awesome-design',
    name: 'Awesome Design Specs',
    web: {
      title: 'Awesome Design Specs & DESIGN.md Guidelines',
      domain: 'github.com/MarcBender-git/awesome-design',
      url: 'https://github.com/MarcBender-git/awesome-design',
      category: 'Design Taste',
      summary: 'Curated repository of 60+ production DESIGN.md specifications from Linear, Stripe, Raycast, and Vercel.',
      llmMarkdown: '# Awesome Design\nExcellence in software aesthetics: DESIGN.md token contracts, micro-spacing formulas, and dark-mode elegance.',
      keyFeatures: ['Double-bezel elevation math', 'Typography wrapping rules', 'Accessible contrast checklists']
    },
    tech: {
      runtime: 'Design Token Spec',
      framework: 'W3C Design Token Community Group',
      bundler: 'Style Dictionary',
      styling: 'CSS Custom Properties',
      mcpServers: [],
      aiGateway: 'Design contract enforcement',
      keyPackages: ['style-dictionary', 'postcss']
    },
    visual: {
      theme: 'dark',
      primaryBg: '#080808',
      surfaceCard: '#141414',
      accentPrimary: '#FFFFFF',
      accentSecondary: '#707070',
      typography: {
        heading: 'Space Grotesk',
        body: 'Inter',
        code: 'JetBrains Mono'
      },
      layoutPattern: 'Precision editorial design system tokens',
      motionStyle: 'Restrained, cinematic damping'
    }
  },
  {
    id: 'awesome-design-md',
    name: 'Awesome Design MD',
    web: {
      title: 'VoltAgent Awesome DESIGN.md for AI Coding Agents',
      domain: 'github.com/voltagent/awesome-design-md',
      url: 'https://github.com/voltagent/awesome-design-md',
      category: 'Design Taste',
      summary: 'Standardized design specifications designed specifically to prevent AI coding assistants from producing generic slop.',
      llmMarkdown: '# Awesome Design MD\nInject aesthetic conviction into Claude Code, Cursor, and Windsurf via explicit DESIGN.md contracts.',
      keyFeatures: ['Anti-purple gradient rules', 'Mathematical typography scaling', 'Named motion primitive requirements']
    },
    tech: {
      runtime: 'Markdown / YAML Spec',
      framework: 'Design Tokens',
      bundler: 'N/A',
      styling: 'Tailwind CSS',
      mcpServers: ['Filesystem MCP'],
      aiGateway: 'Prompt prefixing',
      keyPackages: ['yaml']
    },
    visual: {
      theme: 'dark',
      primaryBg: '#0B0F19',
      surfaceCard: '#1E293B',
      accentPrimary: '#6366F1',
      accentSecondary: '#06B6D4',
      typography: {
        heading: 'Space Grotesk',
        body: 'Inter',
        code: 'JetBrains Mono'
      },
      layoutPattern: 'Token swatch cards with copyable hex values',
      motionStyle: 'Micro-interaction elevation'
    }
  },
  {
    id: 'ui-ux-pro-max',
    name: 'UI/UX Pro Max',
    web: {
      title: 'UI/UX Pro Max — 161 AI Design Reasoning Rules',
      domain: 'github.com/nextlevelbuilder/ui-ux-pro-max-skill',
      url: 'https://github.com/nextlevelbuilder/ui-ux-pro-max-skill',
      category: 'Design Taste',
      summary: 'Flagship AI design intelligence engine: 161 rules, 67 UI styles, 97 palettes, 57 font pairings, and WCAG AA checklist.',
      llmMarkdown: '# UI/UX Pro Max\nThe definitive frontend design skill forcing AI coding agents to make considered, agency-grade aesthetic choices.',
      keyFeatures: ['161 structured reasoning rules', '67 curated UI styles', 'WCAG AA accessible contrast verification']
    },
    tech: {
      runtime: 'Python / TypeScript',
      framework: 'Tailwind CSS / React',
      bundler: 'Vite',
      styling: 'Tailwind Custom Extended Tokens',
      mcpServers: ['21st.dev Magic MCP', 'shadcn MCP'],
      aiGateway: 'Anthropic Claude 3.5 Sonnet',
      keyPackages: ['lucide-react', 'tailwind-merge', 'clsx']
    },
    visual: {
      theme: 'dark',
      primaryBg: '#0B0F19',
      surfaceCard: '#1E293B',
      accentPrimary: '#6366F1',
      accentSecondary: '#06B6D4',
      typography: {
        heading: 'Space Grotesk',
        body: 'Inter',
        code: 'JetBrains Mono'
      },
      layoutPattern: 'Double-bezel layered card architecture with Bento grids',
      motionStyle: 'Fluid spring physics with prefers-reduced-motion fallback'
    }
  },
  {
    id: 'garden-skills',
    name: 'Garden Skills',
    web: {
      title: 'Garden Skills — 6-Stage Phased Construction Workflow',
      domain: 'github.com/ConardLi/garden-skills',
      url: 'https://github.com/ConardLi/garden-skills',
      category: 'Design Taste',
      summary: 'Aesthetic design workflow enforcing: requirements -> context -> tokens -> draft -> build -> verify.',
      llmMarkdown: '# Garden Skills\nEnforce disciplined step-by-step UI craftsmanship before writing code.',
      keyFeatures: ['6-stage phased construction protocol', 'Design token declaration gate', 'Verification loop recheck']
    },
    tech: {
      runtime: 'Node.js',
      framework: 'React / Vite',
      bundler: 'Vite',
      styling: 'Tailwind CSS',
      mcpServers: ['Filesystem MCP'],
      aiGateway: 'Claude Code',
      keyPackages: ['vite', 'typescript', 'tailwindcss']
    },
    visual: {
      theme: 'dark',
      primaryBg: '#0D1117',
      surfaceCard: '#161B22',
      accentPrimary: '#10B981',
      accentSecondary: '#34D399',
      typography: {
        heading: 'Space Grotesk',
        body: 'Inter',
        code: 'JetBrains Mono'
      },
      layoutPattern: 'Phased workflow tracker with stage badges',
      motionStyle: 'Stage completion pulse'
    }
  },
  {
    id: 'taste-skill',
    name: 'Design Taste Frontend',
    web: {
      title: 'Taste Skill — Anti-Slop Frontend Principles',
      domain: 'github.com/Leonxlnx/taste-skill',
      url: 'https://github.com/Leonxlnx/taste-skill',
      category: 'Design Taste',
      summary: 'Anti-slop frontend principles auditing typography wrapping (text-wrap: balance), eliminating generic purple gradients, and enforcing intentional layout variance.',
      llmMarkdown: '# Taste Skill\nBanish generic AI template aesthetics forever with anti-slop rules and thoughtful layout variance.',
      keyFeatures: ['text-wrap: balance and pretty enforcement', 'Intentional layout variance', 'Elimination of unconsidered purple gradients']
    },
    tech: {
      runtime: 'CSS / TypeScript',
      framework: 'React / Tailwind CSS',
      bundler: 'Vite',
      styling: 'Custom CSS utilities',
      mcpServers: [],
      aiGateway: 'Prompt conditioning',
      keyPackages: ['tailwindcss', 'clsx']
    },
    visual: {
      theme: 'dark',
      primaryBg: '#05070D',
      surfaceCard: '#111827',
      accentPrimary: '#6366F1',
      accentSecondary: '#EC4899',
      typography: {
        heading: 'Space Grotesk',
        body: 'Inter',
        code: 'JetBrains Mono'
      },
      layoutPattern: 'High-variance asymmetric editorial layout',
      motionStyle: 'Weighted organic spring damping'
    }
  },
  {
    id: '21st-dev',
    name: '21st.dev Component Library',
    web: {
      title: '21st.dev — The Open Source Component Library for AI',
      domain: '21st.dev',
      url: 'https://21st.dev/',
      category: 'Component Libraries',
      summary: 'High-end open source component ecosystem built for Claude Code, Cursor, and Windsurf, offering copy-paste React + Tailwind blocks.',
      llmMarkdown: '# 21st.dev\nCurated library of world-class UI components designed to be generated and styled by AI assistants.',
      keyFeatures: ['shadcn /components/ui compatible', 'Magic MCP AI prompt integration', 'Zero bloat standalone components']
    },
    tech: {
      runtime: 'React / Next.js',
      framework: 'React 18 / Tailwind CSS',
      bundler: 'Turbopack / Vite',
      styling: 'Tailwind CSS v3/v4',
      mcpServers: ['21st.dev Magic MCP'],
      aiGateway: 'Component AI synthesizer',
      keyPackages: ['framer-motion', 'lucide-react', 'tailwind-merge']
    },
    visual: {
      theme: 'dark',
      primaryBg: '#000000',
      surfaceCard: '#0A0A0A',
      accentPrimary: '#FFFFFF',
      accentSecondary: '#71717A',
      typography: {
        heading: 'Inter',
        body: 'Inter',
        code: 'JetBrains Mono'
      },
      layoutPattern: 'Interactive component playground with live code toggle',
      motionStyle: 'Precision micro-interactions'
    }
  },
  {
    id: 'skiper-ui',
    name: 'Skiper UI',
    web: {
      title: 'Skiper UI — Premium Animated Landing Page Primitives',
      domain: 'skiper-ui.com',
      url: 'https://skiper-ui.com/',
      category: 'Component Libraries',
      summary: 'Showcase of premium animated landing page components, interactive heroes, and GSAP timeline interactions.',
      llmMarkdown: '# Skiper UI\nHigh-converting animated components with cinematic scroll transitions and micro-interactions.',
      keyFeatures: ['GSAP ScrollTrigger orchestration', 'Swiper cross-fade slideshows', 'High-impact landing hero patterns']
    },
    tech: {
      runtime: 'React 18',
      framework: 'GSAP + Swiper',
      bundler: 'Vite / Next.js',
      styling: 'Tailwind CSS',
      mcpServers: [],
      aiGateway: 'Client-side animation',
      keyPackages: ['gsap', 'swiper', 'framer-motion']
    },
    visual: {
      theme: 'light',
      primaryBg: '#FAFAFA',
      surfaceCard: '#FFFFFF',
      accentPrimary: '#141414',
      accentSecondary: '#F97316',
      typography: {
        heading: 'Space Grotesk',
        body: 'Inter',
        code: 'JetBrains Mono'
      },
      layoutPattern: 'Full-viewport pinned scroll sections with text masks',
      motionStyle: 'GSAP scrub timeline'
    }
  }
];
