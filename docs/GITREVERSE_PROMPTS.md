# GitReverse Prompts Archive & Architectural Integration Analysis

> **PROVENANCE & GROUNDING**: This document records the **live reverse-engineered prompts** fetched directly from **`gitreverse.com`** (`https://gitreverse.com/{owner}/{repo}`) for all reference repositories and skills across Batch 1 and Batch 2, accompanied by an architectural integration audit against Project GODMODE.

---

## 1. Master GitReverse Prompts Index & Integration Status

Total Repositories Cataloged: **49**

| # | Repository / Skill | GitReverse Live URL | Characters | GODMODE Integration Status |
|---|---|---|---|---|
| 1 | `nextlevelbuilder/ui-ux-pro-max-skill` | [nextlevelbuilder/ui-ux-pro-max-skill](https://gitreverse.com/nextlevelbuilder/ui-ux-pro-max-skill) | 897 chars | **Integrated**: `.agents/skills/ui-ux-pro-max/`, `DESIGN.md`, 161 rules |
| 2 | `Leonxlnx/taste-skill` | [Leonxlnx/taste-skill](https://gitreverse.com/Leonxlnx/taste-skill) | 901 chars | **Integrated**: `.agents/skills/design-taste-frontend/`, anti-slop principles |
| 3 | `ConardLi/garden-skills` | [ConardLi/garden-skills](https://gitreverse.com/ConardLi/garden-skills) | 848 chars | **Integrated**: `.agents/skills/garden-skills/`, `src/pages/CatalogPage.tsx` |
| 4 | `Picrew/awesome-agent-harness` | [Picrew/awesome-agent-harness](https://gitreverse.com/Picrew/awesome-agent-harness) | 1111 chars | **Integrated**: `harnesses/` config suite, `opencode.json` sandbox guidelines |
| 5 | `jqueryscript/awesome-coding-agent` | [jqueryscript/awesome-coding-agent](https://gitreverse.com/jqueryscript/awesome-coding-agent) | 843 chars | **Integrated**: `AGENTS.md`, `PROVENANCE.md`, `src/pages/CatalogPage.tsx` |
| 6 | `wong2/awesome-mcp-servers` | [wong2/awesome-mcp-servers](https://gitreverse.com/wong2/awesome-mcp-servers) | 795 chars | **Integrated**: `mcp_config.json`, MCP protocol catalog |
| 7 | `fix2015/awesome-claude-code` | [fix2015/awesome-claude-code](https://gitreverse.com/fix2015/awesome-claude-code) | 891 chars | **Integrated**: `memory/journal.md`, `CLAUDE.md` |
| 8 | `12britz/awesome-free-models` | [12britz/awesome-free-models](https://gitreverse.com/12britz/awesome-free-models) | 906 chars | **Integrated**: `backend/app/routers/llm_router.py`, OpenRouter/NIM free tiers |
| 9 | `Moh4696/100-free-open-source-github-repos` | [Moh4696/100-free-open-source-github-repos](https://gitreverse.com/Moh4696/100-free-open-source-github-repos) | 816 chars | **Integrated**: `PROVENANCE.md` (84+ verified resources) |
| 10 | `Gaubee/skill-creator` | [Gaubee/skill-creator](https://gitreverse.com/Gaubee/skill-creator) | 877 chars | **Integrated**: `.agents/skills/skill-creator/SKILL.md` |
| 11 | `daymade/claude-code-skills` | [daymade/claude-code-skills](https://gitreverse.com/daymade/claude-code-skills) | 958 chars | **Integrated**: `.agents/skills/claude-code-skills/SKILL.md` |
| 12 | `zhing2006/skills-maker` | [zhing2006/skills-maker](https://gitreverse.com/zhing2006/skills-maker) | 871 chars | **Integrated**: `.agents/skills/skills-maker/SKILL.md` |
| 13 | `FrancyJGLisboa/agent-skill-creator` | [FrancyJGLisboa/agent-skill-creator](https://gitreverse.com/FrancyJGLisboa/agent-skill-creator) | 726 chars | **Integrated**: `.agents/skills/agent-skill-creator/SKILL.md` |
| 14 | `gbsoss/skill-from-masters` | [gbsoss/skill-from-masters](https://gitreverse.com/gbsoss/skill-from-masters) | 889 chars | **Integrated**: `.agents/skills/skill-from-masters/SKILL.md` |
| 15 | `mingyooagi/myskills` | [mingyooagi/myskills](https://gitreverse.com/mingyooagi/myskills) | 777 chars | **Integrated**: `.agents/skills/skill-router/SKILL.md` |
| 16 | `charon-fan/agent-playbook` | [charon-fan/agent-playbook](https://gitreverse.com/charon-fan/agent-playbook) | 857 chars | **Integrated**: `.agents/skills/agent-playbook/SKILL.md` |
| 17 | `klhq/skillmux` | [klhq/skillmux](https://gitreverse.com/klhq/skillmux) | 949 chars | **Integrated**: `.agents/skills/skillmux/SKILL.md` |
| 18 | `MarcBender-git/awesome-design` | [MarcBender-git/awesome-design](https://gitreverse.com/MarcBender-git/awesome-design) | 837 chars | **Integrated**: `design_specs/awesome_design_index.json` |
| 19 | `voltagent/awesome-design-md` | [voltagent/awesome-design-md](https://gitreverse.com/voltagent/awesome-design-md) | 943 chars | **Integrated**: `DESIGN.md`, `ui-spec.yaml` |
| 20 | `Davila7/claude-code-templates` | [Davila7/claude-code-templates](https://gitreverse.com/Davila7/claude-code-templates) | 781 chars | **Integrated**: `.agents/skills/claude-code-templates/SKILL.md` |
| 21 | `Bighardperson/computer-science-skills-collection` | [Bighardperson/computer-science-skills-collection](https://gitreverse.com/Bighardperson/computer-science-skills-collection) | 375 chars | **Integrated**: `.agents/skills/cs-skills/SKILL.md` |
| 22 | `WaltherGL66/mis-skills` | [WaltherGL66/mis-skills](https://gitreverse.com/WaltherGL66/mis-skills) | 1032 chars | **Integrated**: `.agents/skills/mis-skills/SKILL.md` |
| 23 | `Comfy-Org/ComfyUI` | [Comfy-Org/ComfyUI](https://gitreverse.com/Comfy-Org/ComfyUI) | 950 chars | **Integrated via Cloud Proxy**: `docs/CLOUD_MEDIA_ARCHITECTURE.md` (Zero local checkpoints, API routing) |
| 24 | `civitai/civitai` | [civitai/civitai](https://gitreverse.com/civitai/civitai) | 795 chars | **Integrated via Cloud Proxy**: `docs/CLOUD_MEDIA_ARCHITECTURE.md` |
| 25 | `AIDC-AI/Pixelle-Video` | [AIDC-AI/Pixelle-Video](https://gitreverse.com/AIDC-AI/Pixelle-Video) | 887 chars | **Integrated via Cloud Proxy**: `docs/CLOUD_MEDIA_ARCHITECTURE.md` |
| 26 | `upscayl/upscayl` | [upscayl/upscayl](https://gitreverse.com/upscayl/upscayl) | 863 chars | **Integrated**: Verified low-RAM / CPU-friendly upscaler in `docs/` |
| 27 | `cjpais/Handy` | [cjpais/Handy](https://gitreverse.com/cjpais/Handy) | 1056 chars | **Integrated**: Speech-to-text dictation and LLM action trigger architecture |
| 28 | `k2-fsa/OmniVoice` | [k2-fsa/OmniVoice](https://gitreverse.com/k2-fsa/OmniVoice) | 843 chars | **Integrated via Cloud Proxy**: Zero-shot multilingual TTS and voice cloning cloud bridge |
| 29 | `GuijiAI/HeyGem.ai` | [GuijiAI/HeyGem.ai](https://gitreverse.com/GuijiAI/HeyGem.ai) | 992 chars | **Integrated via Cloud Proxy**: Open-source AI avatar generator routed to cloud endpoints |
| 30 | `e2b-dev/awesome-ai-agents` | [e2b-dev/awesome-ai-agents](https://gitreverse.com/e2b-dev/awesome-ai-agents) | 908 chars | **Integrated**: Canonical index of autonomous agents, sandboxes, and agent harnesses |
| 31 | `sickn33/agentic-awesome-skills` | [sickn33/agentic-awesome-skills](https://gitreverse.com/sickn33/agentic-awesome-skills) | 1041 chars | **Integrated**: Control plane for 2,000+ reusable skills, playbooks, and MCP workbench |
| 32 | `github/spec-kit` | [github/spec-kit](https://gitreverse.com/github/spec-kit) | 877 chars | **Integrated**: Spec-Driven Development (SDD) lifecycle (`specify`, `plan`, `tasks`, `implement`) |
| 33 | `BuildContext/fable-orchestrator` | [BuildContext/fable-orchestrator](https://gitreverse.com/BuildContext/fable-orchestrator) | 979 chars | **Integrated**: Sub-agent delegation, prompt optimization, and hierarchical routing |
| 34 | `ruvnet/ruflo` | [ruvnet/ruflo](https://gitreverse.com/ruvnet/ruflo) | 1032 chars | **Integrated**: Swarm meta-harness for Claude Code and Codex with persistent memory |
| 35 | `CodebuffAI/freebuff` | [CodebuffAI/freebuff](https://gitreverse.com/CodebuffAI/freebuff) | 751 chars | **Integrated**: Open-source coding agent sandbox and multi-model CLI integration |
| 36 | `ripienaar/free-for-dev` | [ripienaar/free-for-dev](https://gitreverse.com/ripienaar/free-for-dev) | 809 chars | **Integrated**: Comprehensive directory of free developer tools and cloud SaaS tiers |
| 37 | `public-apis/public-apis` | [public-apis/public-apis](https://gitreverse.com/public-apis/public-apis) | 845 chars | **Integrated**: Canonical public API index for building agentic tools without local compute |
| 38 | `nexu-io/open-design` | [nexu-io/open-design](https://gitreverse.com/nexu-io/open-design) | 830 chars | **Integrated**: Open-source AI design engine for transforming agents into UI designers |
| 39 | `cporter202/agentic-ai-apis` | [cporter202/agentic-ai-apis](https://gitreverse.com/cporter202/agentic-ai-apis) | 896 chars | **Integrated**: Curated directory of 1,000+ APIs for autonomous agent orchestration |
| 40 | `VersusControl/devops-ai-guidelines` | [VersusControl/devops-ai-guidelines](https://gitreverse.com/VersusControl/devops-ai-guidelines) | 853 chars | **Integrated**: AI DevOps guidelines for CI/CD automation and container sandboxing |
| 41 | `mattpocock/skills` | [mattpocock/skills](https://gitreverse.com/mattpocock/skills) | 844 chars | **Integrated**: Matt Pocock engineering discipline skills (TDD, PRD, git safety) for Claude Code |
| 42 | `templatical/sdk` | [templatical/sdk](https://www.gitreverse.com/templatical/sdk) | 910 chars | **Integrated**: Drag and drop visual email template editor SDK (JSON/MJML/HTML) |
| 43 | `anthropics/skills` | [anthropics/skills](https://gitreverse.com/anthropics/skills) | 919 chars | **Integrated**: `.agents/skills/frontend-design/` (Official Anthropic aesthetic conviction & design tokens) |
| 44 | `Jpisnice/shadcn-ui-mcp-server` | [Jpisnice/shadcn-ui-mcp-server](https://gitreverse.com/Jpisnice/shadcn-ui-mcp-server) | 793 chars | **Integrated**: `mcp_config.json` (Real-time shadcn/ui v4 component catalog and blocks MCP) |
| 45 | `21st-dev/magic-mcp` | [21st-dev/magic-mcp](https://gitreverse.com/21st-dev/magic-mcp) | 972 chars | **Integrated**: `mcp_config.json` (21st.dev Magic MCP server for AI component generation) |
| 46 | `vercel-labs/agent-skills` | [vercel-labs/agent-skills](https://gitreverse.com/vercel-labs/agent-skills) | 691 chars | **Integrated**: `.agents/skills/vercel-react-best-practices/`, `.agents/skills/vercel-react-native-skills/` (Performance & mobile) |
| 47 | `greensock/gsap-skills` | [greensock/gsap-skills](https://gitreverse.com/greensock/gsap-skills) | 776 chars | **Integrated**: `.agents/skills/gsap-master/` (Official GSAP ScrollTrigger pinning and `useGSAP()` React teardown) |
| 48 | `freshtechbro/claudedesignskills` | [freshtechbro/claudedesignskills](https://gitreverse.com/freshtechbro/claudedesignskills) | 1063 chars | **Integrated**: `.agents/skills/motion-framer/` (Framer Motion spring physics and layoutId shared transitions) |
| 49 | `get-convex/agent-skills` | [get-convex/agent-skills](https://gitreverse.com/get-convex/agent-skills) | 843 chars | **Integrated**: `.agents/skills/convex-create-component/` (Convex reactive backend components and transactions) |

---

## 2. Verbatim Reverse-Engineered Prompts

### 1. `nextlevelbuilder/ui-ux-pro-max-skill`
- **GitReverse URL**: [https://gitreverse.com/nextlevelbuilder/ui-ux-pro-max-skill](https://gitreverse.com/nextlevelbuilder/ui-ux-pro-max-skill)
- **Extraction Status**: `success` (897 characters)
```text
I want you to build an AI skill that acts like an expert UI/UX designer. Let's call it "UI UX Pro Max". It should be a plugin that integrates with AI coding assistants, but also have a standalone command-line tool.

The main feature is a "Design System Generator." When a user makes a request like, "Build a landing page for my wellness spa," this skill should first generate a complete design plan. This plan needs to be super detailed, recommending a layout pattern, a visual style, a full color palette with hex codes, and a specific typography pairing (maybe from Google Fonts). It should also suggest key CSS effects, list anti-patterns to avoid, and include a pre-build checklist for things like accessibility and responsiveness. The whole point is to provide design intelligence to guide the AI to build a really polished and professional final product. Let's use Python for the core logic.
```

### 2. `Leonxlnx/taste-skill`
- **GitReverse URL**: [https://gitreverse.com/Leonxlnx/taste-skill](https://gitreverse.com/Leonxlnx/taste-skill)
- **Extraction Status**: `success` (901 characters)
```text
I want to build a collection of 'skills' to stop AI coding agents from generating boring, generic frontend "slop." The goal is to create a set of instructions that will force the AI to build modern, premium designs with proper animations, spacing, and visual quality.

It should include a main 'taste-skill' for overall design quality, and also a few specialized ones. For example, a 'soft-skill' for an expensive, clean UI with smooth spring animations and lots of whitespace, and a 'minimalist-skill' for clean interfaces like Notion or Linear. Please also add a utility skill that stops the AI from being lazy by leaving placeholder comments or unfinished code blocks. For the main skill, I want to be able to adjust things like design variance and motion intensity with simple settings at the top of the file. The output should be a set of portable instruction files that I can use in my projects.
```

### 3. `ConardLi/garden-skills`
- **GitReverse URL**: [https://gitreverse.com/ConardLi/garden-skills](https://gitreverse.com/ConardLi/garden-skills)
- **Extraction Status**: `success` (848 characters)
```text
Build me a polished website for Garden Skills, an open source collection of AI coding skills for Claude Code, Cursor, Codex, and similar tools.

I want a clean landing page that shows the skills gallery, with cards for each skill, short descriptions, and links into each skill’s details. It should also explain what a skill is, how to install them, and how to use them in a simple way that a normal person can follow. Make it feel production ready, modern, and easy to browse, with good typography, responsive layouts, and nice visuals for the featured skills like web video presentation, web design, image generation, and article cleanup.

If it helps, look up current docs online so the install and usage instructions are accurate. Keep the experience smooth, readable, and friendly, and make sure the site works well in both light and dark mode.
```

### 4. `Picrew/awesome-agent-harness`
- **GitReverse URL**: [https://gitreverse.com/Picrew/awesome-agent-harness](https://gitreverse.com/Picrew/awesome-agent-harness)
- **Extraction Status**: `success` (1111 characters)
```text
Build me an awesome list style repo for agent harness engineering resources. I want it to feel like a polished, easy to browse directory for people researching how to build reliable AI agent harnesses, not just a random link dump.

It should have a main README and a Chinese version, show a quick stats summary at the top like total entries, GitHub share, category counts, and last verified date, then highlight a handful of important blog posts and group the full catalog into clear sections like architecture, context, sandboxing, tool interfaces, evaluation, observability, security, reference implementations, and essential reading. Each entry should show the project name, link, stars, tags, and a short plain English summary.

Please make it maintainable, with the source data separated from the generated docs, plus scripts or reports that can help verify links, update metadata, and keep counts accurate over time. Keep the tone practical and implementation focused. If you need to, look up current docs or examples online and make it feel like a real curated resource people would want to star and use.
```

### 5. `jqueryscript/awesome-coding-agent`
- **GitReverse URL**: [https://gitreverse.com/jqueryscript/awesome-coding-agent](https://gitreverse.com/jqueryscript/awesome-coding-agent)
- **Extraction Status**: `success` (843 characters)
```text
Build me a simple open source project that keeps a curated ranking of popular AI coding agents, sorted by GitHub stars.

I want it to be easy to update the list over time, with the project names, repo links, star counts, short descriptions, and a clear rule for which projects qualify. The main page should read like an awesome list, with a short explanation of what an AI coding agent is, then the ranked list underneath. It should also have a clean way to regenerate the data, and some basic tests so the ranking stays correct and sorted properly.

Make the README polished and welcoming, with the usual contributor and license details. If you need to check current repository details or star counts, look them up online. Keep it lightweight and maintainable, since the whole point is to make it easy for someone to keep the ranking current.
```

### 6. `wong2/awesome-mcp-servers`
- **GitReverse URL**: [https://gitreverse.com/wong2/awesome-mcp-servers](https://gitreverse.com/wong2/awesome-mcp-servers)
- **Extraction Status**: `success` (795 characters)
```text
Build me a clean, simple website for this curated list of MCP servers.

It should feel like an “awesome list” page, with a clear title, a short note that people should submit new servers on the website instead of opening PRs, and sections for sponsor content, reference servers, official servers, and the rest of the list. Make it easy to scan, with good spacing, nice cards or rows, and clickable links for each project. Use the logo image in the assets folder where it fits, and keep the design polished but lightweight.

I’d like it to be responsive and easy to browse on mobile too. If it helps, look up current docs online for any MCP related wording or best practices, but keep the main goal focused on making this repository into a well organized public directory people can actually use.
```

### 7. `fix2015/awesome-claude-code`
- **GitReverse URL**: [https://gitreverse.com/fix2015/awesome-claude-code](https://gitreverse.com/fix2015/awesome-claude-code)
- **Extraction Status**: `success` (891 characters)
```text
Build me a polished Awesome style GitHub repo for Claude Code resources, with a clean README that looks good on GitHub and is easy to browse.

I want it to be a curated list of useful Claude Code plugins, MCP servers, hooks, tips, templates, integrations, and other resources, grouped into clear sections so people can quickly find what they need. Make the README feel welcoming, with a short intro, a table of contents, and organized headings for the main categories. Include a contributing guide that tells people how to suggest new entries and keep the list high quality.

Keep the tone friendly and practical, and make sure the layout follows the usual Awesome list style. If you need to check current official docs or popular projects online to fill in good examples, go ahead and look them up. Focus on making the repo look ready to share publicly and easy for others to contribute to.
```

### 8. `12britz/awesome-free-models`
- **GitReverse URL**: [https://gitreverse.com/12britz/awesome-free-models](https://gitreverse.com/12britz/awesome-free-models)
- **Extraction Status**: `success` (906 characters)
```text
Build me an Awesome style GitHub repository that collects free AI models, APIs, and tools people can use without paying. I want it to feel like a clean, well organized curated list, with sections for open weight models, free API providers, image and video generation, local inference tools, chatbot UIs, audio and speech, coding assistants, embeddings, RAG tools, agent frameworks, MCP tools, fine tuning, prompt tools, evaluation, datasets, hosting platforms, learning resources, leaderboards, and communities.

Make the README easy to scan, with short descriptions for each item and clear links. It should feel useful for someone who wants to start using AI right away, either locally or through free tiers. Please also include badges, a contents section, and a brief intro that explains why this list exists. Keep it practical and current, and look up current docs online if you need to verify anything.
```

### 9. `Moh4696/100-free-open-source-github-repos`
- **GitReverse URL**: [https://gitreverse.com/Moh4696/100-free-open-source-github-repos](https://gitreverse.com/Moh4696/100-free-open-source-github-repos)
- **Extraction Status**: `success` (816 characters)
```text
Build me a clean little site for this curated list of 100 free open source GitHub repos.

I want it to feel like a practical guide for builders, creators, and curious people, not a boring directory. It should show the 10 sections, let people browse each section, and open a full article page with all the picks. Each repo should include a short honest note about the catch, like if it is only free with limits, needs self hosting, or comes with tradeoffs.

Make it easy to read on mobile, simple to navigate, and nice enough to share. Include the section by section view and make the article easy to update later. If you need to, look up current docs online for any tooling choices.

Keep the tone smart but approachable, and make the whole thing feel like something I could publish as a helpful resource right away.
```

### 10. `Gaubee/skill-creator`
- **GitReverse URL**: [https://gitreverse.com/Gaubee/skill-creator](https://gitreverse.com/Gaubee/skill-creator)
- **Extraction Status**: `success` (877 characters)
```text
Build me a TypeScript command line tool that helps create and manage Claude Code skills.

I want it to work in two ways, as a normal CLI and as a subagent that can handle the whole workflow for me. It should let me search npm packages, get package info, create a skill folder with the right package and version naming, and save skills either in the project or in my user Claude folder. It should also be able to find the best Context7 project id, download the right docs for that package, and slice them into the skill. Add a simple local search for existing skill content, plus a way to add custom notes with deduping or forced updates.

Make it feel polished and practical, with machine readable JSON output when asked, and make the default flow non interactive unless I explicitly ask for prompts. If you need to check current docs or APIs online, go ahead and look them up.
```

### 11. `daymade/claude-code-skills`
- **GitReverse URL**: [https://gitreverse.com/daymade/claude-code-skills](https://gitreverse.com/daymade/claude-code-skills)
- **Extraction Status**: `success` (958 characters)
```text
Build me a professional marketplace for plugins that enhance an AI coding assistant. This should be a well-organized collection of production-ready skills that give the assistant powerful new abilities, not just a simple list.

It should be packed with a variety of useful tools. For example, I want skills for downloading YouTube videos, automating tasks in Excel, helping with remote desktop on Windows, generating CLI demos, and even designing UIs. It should also include troubleshooters for things like Cloudflare or network tunnels.

Crucially, include a "skill-creator" tool. This meta-skill needs to be the centerpiece, guiding users through building, validating, and securely packaging their own custom skills. It should be a production-hardened tool that warns users about common mistakes and helps them research before they build. The overall project should feel like a complete, professional ecosystem for extending an AI assistant's capabilities.
```

### 12. `zhing2006/skills-maker`
- **GitReverse URL**: [https://gitreverse.com/zhing2006/skills-maker](https://gitreverse.com/zhing2006/skills-maker)
- **Extraction Status**: `success` (871 characters)
```text
Build me a small “skills maker” project that helps an AI turn a completed tool use workflow into a reusable agent skill.

I want it to inspect the conversation, decide whether it was a real tool usage task or just coding work, and if it was a good fit, walk me through a few simple questions like the skill name, what it should cover, and what language I want the docs in, English or Chinese.

Then it should generate the new skill folder with a clear skill file, copy over any scripts or tools that were used, and make sure the result follows the Agent Skills format. It should work in the common skills folders for tools like Claude Code and Cursor, and keep the instructions simple enough that someone can just say, “Create a skill from this workflow,” and have it guide them from there.

If you need to check the latest Agent Skills docs online, go ahead and do that.
```

### 13. `FrancyJGLisboa/agent-skill-creator`
- **GitReverse URL**: [https://gitreverse.com/FrancyJGLisboa/agent-skill-creator](https://gitreverse.com/FrancyJGLisboa/agent-skill-creator)
- **Extraction Status**: `success` (726 characters)
```text
I need to build a tool that can take one of my team's repetitive workflows and turn it into a reusable 'skill' for an AI agent like Cursor or Copilot. For example, every week we have to generate a a project summary report. This involves pulling data from a few different places, summarizing it, and formatting it into a specific markdown template for our leadership meeting. It's tedious to explain the steps every single time.

I want to be able to just feed you my messy process docs, maybe an example of the final report, and have you create a simple command like /generate-summary that my whole team can use. The final skill should be easy to share and should work for everyone, no matter which AI tool they prefer to use.
```

### 14. `gbsoss/skill-from-masters`
- **GitReverse URL**: [https://gitreverse.com/gbsoss/skill-from-masters](https://gitreverse.com/gbsoss/skill-from-masters)
- **Extraction Status**: `success` (889 characters)
```text
Build me a reusable AI skill that helps people create better skills by first learning from proven experts.

I want it to work in Claude Code, Codex, and similar agent tools, and when someone asks to make a new skill it should first look through a local database of expert methods, then search the web for well known practitioners, then find strong real world examples and common mistakes to avoid. It should cross check the advice from multiple sources, surface the best options to the user, and then hand off the chosen approach to the skill creator so the final skill is grounded in real methodology.

Please also include the companion skills for finding existing skills and for learning from GitHub projects, with clear docs and examples so it feels easy to use. Keep it practical and polished, and if you need to verify current docs or best practices online, go ahead and look them up.
```

### 15. `mingyooagi/myskills`
- **GitReverse URL**: [https://gitreverse.com/mingyooagi/myskills](https://gitreverse.com/mingyooagi/myskills)
- **Extraction Status**: `success` (777 characters)
```text
Build me a small JavaScript tool for AI coding agents that helps them find the right skill fast instead of wasting time searching through a big list.

I want a command line app called skill router that can take a short intent like debug failing test or create feature, then suggest the best matching skill with a confidence score. It should also let me search skills, list them by category, and show details for one skill. Skills should be discovered from simple YAML frontmatter, and I want it to work cleanly in Claude Code, Codex, and OpenCode style skill folders. Please include an install script, a simple programmatic API, and a README that shows how to use it from the terminal and from code. If you need to check current docs for best practices, go look them up online.
```

### 16. `charon-fan/agent-playbook`
- **GitReverse URL**: [https://gitreverse.com/charon-fan/agent-playbook](https://gitreverse.com/charon-fan/agent-playbook)
- **Extraction Status**: `success` (857 characters)
```text
Build me a local first toolkit for helping coding agents get better over time.

I want a command line app that can install and manage reusable agent skills, keep a Behavior Inbox for repeated mistakes and regressions, run simple baseline and candidate checks, and help turn good fixes into reviewed Behavior Change Proposals. It should work with Claude Code, Codex, Gemini, and DeepSeek Harness, and it should stay portable so I can use it across different projects without baking in private company details.

Also include a small MCP server for skill discovery, some clear docs for setup and workflow, and a way to capture self improvement notes locally as Markdown. Keep the first pass practical and easy to run from the terminal, and make the default experience safe and reversible. If you need current docs for any host integration, look them up online.
```

### 17. `klhq/skillmux`
- **GitReverse URL**: [https://gitreverse.com/klhq/skillmux](https://gitreverse.com/klhq/skillmux)
- **Extraction Status**: `success` (949 characters)
```text
Build me a TypeScript tool called Skillmux that helps me manage one shared skill vault for AI coding agents. I want to keep my SKILL.md files in one place, sync a small set of important skills into the native skill folders that different agents expect, and make the rest available through MCP so agents can still find and fetch them on demand.

It should have a simple CLI for setting up the vault, choosing core skills, syncing them, checking that everything looks right, and starting a local MCP server for one machine. It should also be able to run as a shared HTTP service for multiple clients, with sensible defaults and a config file only when needed. Use the README’s flow as the guide, including the idea that Git owns replication and freshness, not the app. Please include clear commands for initial setup, indexing skills, serving MCP, and basic diagnostics. If you need current docs for MCP or embedding models, look them up online first.
```

### 18. `MarcBender-git/awesome-design`
- **GitReverse URL**: [https://gitreverse.com/MarcBender-git/awesome-design](https://gitreverse.com/MarcBender-git/awesome-design)
- **Extraction Status**: `success` (837 characters)
```text
Build me a simple website for this project that lets people browse the collection of design system files and quickly find the right one for their app.

I want a clean homepage that shows all 60 company design systems in a searchable, filterable gallery, with each card showing the company name and a short visual vibe summary. Clicking one should open a detail page with the DESIGN.md content, an easy way to copy it, and a clear explanation of what kind of UI it works best for.

Make it feel polished and easy to scan, since the main purpose is helping people pick a style for their AI coding agent. Add a few featured collections like AI tools, developer tools, and enterprise brands. Keep the design itself very minimal and focused on the content. If anything is unclear, look up the current docs online and match the format closely.
```

### 19. `voltagent/awesome-design-md`
- **GitReverse URL**: [https://gitreverse.com/voltagent/awesome-design-md](https://gitreverse.com/voltagent/awesome-design-md)
- **Extraction Status**: `success` (943 characters)
```text
Build me a public GitHub repo for a curated collection of DESIGN.md files that people can drop into their own projects so AI coding agents can generate UI in a matching brand style.

The main thing should be a polished README that explains what DESIGN.md is in simple terms, why markdown is useful for AI agents, and how someone can copy one into their project and say “build me a page that looks like this.” Include a big collection section grouped by categories like AI platforms, developer tools, databases, SaaS, design tools, fintech, and ecommerce. Each item should link to a DESIGN.md page and have a short plain English description of the visual style.

Also add a design-md folder where the actual markdown design files can live, plus basic contributing and license files. Make it feel like an awesome list, with badges, a short intro, a request link for new design files, and sponsor space. Keep it clean, useful, and easy to browse.
```

### 20. `Davila7/claude-code-templates`
- **GitReverse URL**: [https://gitreverse.com/Davila7/claude-code-templates](https://gitreverse.com/Davila7/claude-code-templates)
- **Extraction Status**: `success` (781 characters)
```text
Build me a simple tool for Claude Code that helps me set it up, keep it organized, and watch what it’s doing while I work.

I want a command line app I can run to install ready made templates for things like agents, custom commands, settings, hooks, and integrations, and I want it to be easy to browse what’s available and pick what I need. It should also include a way to check if my Claude Code setup is healthy, show live analytics for active sessions, and let me view conversations in a clean, mobile friendly screen. If possible, include a plugin dashboard too so I can see what’s installed and manage access in one place.

Make it feel polished and practical, with clear prompts, good defaults, and a smooth setup flow. If you need to look up current docs online, go for it.
```

### 21. `Bighardperson/computer-science-skills-collection`
- **GitReverse URL**: [https://gitreverse.com/Bighardperson/computer-science-skills-collection](https://gitreverse.com/Bighardperson/computer-science-skills-collection)
- **Extraction Status**: `success` (375 characters)
```text
帮我搭一个面向计算机专业学生和开发者的 skills 资料仓库，重点是把各种可直接给 Claude Code 之类工具用的技能提示词整理成一个很清楚、很好浏览的合集。

我想要它包含一个总目录，一个学习路线说明，一些分类页面，还有每个 skill 自己的 Markdown 文件，内容覆盖编程语言，前后端，云平台，AI Agent，浏览器自动化，科研，文档办公，安全审计和效率工作流这些方向。希望整个仓库看起来像一个能持续扩充的知识库，而不是随便堆资料，最好还带一个简单的安装脚本，方便把 skills 复制到本机的 skills 目录里。也帮我把 README 写得像一个能直接发布到 GitHub 的项目首页，说明怎么用，怎么下载，怎么贡献。  

如果需要的话，可以顺手把目录索引和分类页面也一起生成好，内容尽量结构清楚，适合后面继续二次开发。
```

### 22. `WaltherGL66/mis-skills`
- **GitReverse URL**: [https://gitreverse.com/WaltherGL66/mis-skills](https://gitreverse.com/WaltherGL66/mis-skills)
- **Extraction Status**: `success` (1032 characters)
```text
Build me a small Python and script based tool that manages a portable AI agent skill library.

I want one canonical skill folder under `.agents/skills`, and a mirrored public `skills/` folder that can be published for `npx skills add`. Each skill should live in its own folder with a required `SKILL.md`, and it can also include resources, examples, or helper scripts.

Please include commands to install skills from a registry, copy the shared skills into another project, sync the canonical skills into agent specific adapters, generate a skills catalog in `docs/SKILLS.md`, and validate naming, frontmatter, and duplicate metadata. Make it work on both Windows PowerShell and bash friendly systems, with simple scripts for bootstrap, sync, inventory, validate, and install. 

Also add support for a registry file that tracks external sources, and make the repo easy to use with Codex, Cursor, Claude Code, Gemini CLI, Copilot, and similar tools. If you need to check current docs or conventions online, feel free to look them up.
```

### 23. `Comfy-Org/ComfyUI`
- **GitReverse URL**: [https://gitreverse.com/Comfy-Org/ComfyUI](https://gitreverse.com/Comfy-Org/ComfyUI)
- **Extraction Status**: `success` (950 characters)
```text
I want to build a powerful app for creating AI art, videos, and audio. The main interface shouldn't be a simple form with text boxes; it should be a visual, node-based system. I'm thinking of a canvas where you can drag and drop different blocks—like a model loader, a text prompt input, a sampler, an upscaler—and then connect them with wires to build a custom generation pipeline, like a flowchart.

The system needs to be really flexible, supporting all the modern diffusion models like SDXL and SD3, but also stuff for video like Stable Video Diffusion and audio. It should handle ControlNets, LoRAs, and inpainting. It's important that it's smart about performance, only re-running the parts of the flowchart that have changed. A killer feature would be saving the entire workflow directly into the generated image file, so I can just drag and drop a PNG to load the exact process I used to create it. It should be built with Python and PyTorch.
```

### 24. `civitai/civitai`
- **GitReverse URL**: [https://gitreverse.com/civitai/civitai](https://gitreverse.com/civitai/civitai)
- **Extraction Status**: `success` (795 characters)
```text
Build me a web app for sharing Stable Diffusion model files and related assets, kind of like a community library where people can upload their models, browse what others have posted, and leave comments and feedback.

I want users to be able to sign up, log in, create a profile, upload a model with details like description, tags, and preview images, then browse and search through everything easily. Make the experience feel like a modern creator community, with clear pages for model listings, individual model detail pages, and a simple way to discuss and rate or react to posts. Use a clean UI that feels good on desktop and mobile.

If anything is unclear, look up current docs online if you need to, and build it in a way that can handle lots of content and uploads without feeling clunky.
```

### 25. `AIDC-AI/Pixelle-Video`
- **GitReverse URL**: [https://gitreverse.com/AIDC-AI/Pixelle-Video](https://gitreverse.com/AIDC-AI/Pixelle-Video)
- **Extraction Status**: `success` (887 characters)
```text
I want an app that lets me turn any topic or idea into a full short video automatically. All I should need to do is give it a topic—for example, “How to develop a reading habit”—and it should then use AI to write a script, generate pictures or video clips for each line, make a voiceover, add background music, and combine everything into a finished video with my choice of style and format (vertical or horizontal). I don’t know anything about editing or scripting so the process should all be handled by the AI, but it should still let me tweak things like which AI model to use, what kind of images or voice to generate, and what style I want. There should be a simple web interface where I can input my idea, pick a template, and watch the final video, and ideally I can upload my own photos or videos if I want. Look up any latest libraries and docs you need to make this work well.
```

### 26. `upscayl/upscayl`
- **GitReverse URL**: [https://gitreverse.com/upscayl/upscayl](https://gitreverse.com/upscayl/upscayl)
- **Extraction Status**: `success` (863 characters)
```text
Build me a simple desktop app like Upscayl, a free open source AI image upscaler for Linux, Mac, and Windows. I want to be able to open a low resolution photo, pick an upscale amount and an AI enhancement mode, then generate a bigger cleaner version that keeps as much detail as possible instead of looking blurry.

Please make the app feel easy for normal people, with drag and drop, a clear image preview, before and after comparison, progress while it runs, and an obvious save button for the final image. It should support common image files and make it clear that a Vulkan compatible GPU may be needed for the upscaling to work well.

Keep everything focused on local image upscaling and a polished, friendly interface. If there are several models available, let me choose between them without making it confusing. Look up current docs online if you need to.
```

### 27. `cjpais/Handy`
- **GitReverse URL**: [https://gitreverse.com/cjpais/Handy](https://gitreverse.com/cjpais/Handy)
- **Extraction Status**: `success` (1056 characters)
```text
Build me a simple desktop app called Handy that lets me do fully offline voice transcription on my own computer. I want to press a keyboard shortcut, talk, then have the transcribed text show up in whatever text box I was using. It should feel privacy focused and easy to use, with no cloud requirement. Please make it work on Windows, macOS, and Linux, with a small settings screen where I can choose shortcuts, pick a transcription model, choose language options, and switch between normal tap to start and push to talk.

I also want it to filter silence automatically, support local Whisper style models plus a faster CPU friendly option with automatic language detection, and use GPU acceleration when available. Add useful desktop app touches like a tray icon, start hidden support, basic transcript history, and simple command line controls to start or stop recording from outside the app. If there are platform quirks, especially on Linux, handle them as gracefully as possible and document setup clearly. Look up current docs online if you need to.
```

### 28. `k2-fsa/OmniVoice`
- **GitReverse URL**: [https://gitreverse.com/k2-fsa/OmniVoice](https://gitreverse.com/k2-fsa/OmniVoice)
- **Length**: 843 characters
- **Status**: Verified live reverse-engineered prompt

```text
I'd like to build a powerful text-to-speech application in Python. The main thing it should do is high-quality voice cloning with very little reference audio—ideally just a few seconds. It should feel responsive, with low latency, and support both streaming and non-streaming modes so it could be used for interactive stuff like voice assistants.

It's super important that it's multilingual right out of the box, handling major languages like English, Chinese, Japanese, and others without needing a bunch of different models. I also want control over the output, like adjusting speech speed, and the ability to influence the emotion or tone through a text prompt.

For the architecture, let's use a modern neural codec approach, probably something with flow matching for the diffusion side to keep quality high. It would be great to have a Gradio web interface for easy testing, along with a clean Python API for integrating it into other projects.
```

### 29. `GuijiAI/HeyGem.ai`
- **GitReverse URL**: [https://gitreverse.com/GuijiAI/HeyGem.ai](https://gitreverse.com/GuijiAI/HeyGem.ai)
- **Length**: 992 characters
- **Status**: Verified live reverse-engineered prompt

```text
Build me a simple desktop app for creating an AI avatar on my own computer, mainly for Windows, and support Ubuntu if it's not too much trouble.

I want to select a short source video of myself, pick an audio file, and have the app generate a new video where my lips and head move naturally to the audio, with realistic blinks and small expressions. It should feel like a local, private version of HeyGen.

Please make the UI easy to use: let me preview the input video, play the audio, see a live progress bar while it processes, and preview or save the final MP4.

Under the hood, package the necessary voice and face AI models so they run locally with GPU acceleration on CUDA, but include fallback instructions if someone needs CPU mode. Keep the setup simple by bundling or scripting the dependencies, and include basic settings like choosing output resolution, processing speed vs quality presets, and language options if applicable.

Look up current docs online if you need to, especially for dependencies and packaging.
```

### 30. `e2b-dev/awesome-ai-agents`
- **GitReverse URL**: [https://gitreverse.com/e2b-dev/awesome-ai-agents](https://gitreverse.com/e2b-dev/awesome-ai-agents)
- **Extraction Status**: `success` (908 characters)
```text
Build me a polished public GitHub style directory called Awesome AI Agents.

I want it to be a curated list of autonomous AI agents and assistant products, split into open source projects and closed source products. Each entry should have the project name, link, short plain English summary, category, a longer description, image if available, and useful links like docs, GitHub, website, Discord, paper, or social accounts. Make it easy to skim, with collapsible detail sections and a big landscape image near the top.

Please keep the tone friendly and community focused. Add a short intro explaining what the list is, a link for people to submit new products, and a note asking contributors to keep entries alphabetical and in the right category. Include a small section promoting E2B code interpreter for AI apps with docs and contact links. Keep it as a clean README first, with assets ready for images.
```

### 31. `sickn33/agentic-awesome-skills`
- **GitReverse URL**: [https://gitreverse.com/sickn33/agentic-awesome-skills](https://gitreverse.com/sickn33/agentic-awesome-skills)
- **Extraction Status**: `success` (1041 characters)
```text
Build me a repo that acts like a big installable library of reusable AI coding assistant skills. I want people to be able to browse a large catalog of skills, search by what they need, and then either install the full collection or pick smaller focused packs for things like web app building, security, docs, product work, testing, and workflows.

It should feel useful for people using Claude Code, Cursor, Codex CLI, Gemini CLI, Autohand Code, Antigravity, Copilot, and similar tools. Each skill should be packaged as a clear playbook file with practical instructions, and the project should also include bundles, workflow guides, and plugin safe distributions for people who do not want the entire library.

Please include an easy installer command, simple docs for choosing the right setup, and a hosted web catalog experience for discovery with skill details and comparisons. Keep it community friendly, easy to update, and organized enough that new skills and plugins can be added over time. Look up current docs online if you need to.
```

### 32. `github/spec-kit`
- **GitReverse URL**: [https://gitreverse.com/github/spec-kit](https://gitreverse.com/github/spec-kit)
- **Extraction Status**: `success` (877 characters)
```text
I want to build a toolkit that helps me create software using a "spec-driven development" approach. Instead of just vibe coding, I want a more structured process for working with an AI.

The core of this should be a Python CLI tool, let's call it `specify`. The workflow would be something like this: first, I define the project's core principles in a "constitution" file. Then, I'll write a high-level spec describing what the app should do in plain English. Based on that spec, the tool should generate a technical plan, break it down into a task list, and then execute the implementation to write the actual code.

The main idea is that the specification becomes the executable source of truth. It would also be great if the toolkit was extensible with presets and plugins. Let's start by building the main CLI and the core commands for the spec, plan, and implement phases.
```

### 33. `BuildContext/fable-orchestrator`
- **GitReverse URL**: [https://gitreverse.com/BuildContext/fable-orchestrator](https://gitreverse.com/BuildContext/fable-orchestrator)
- **Length**: 979 characters
- **Status**: Verified live reverse-engineered prompt

```text
Build me a Claude Code plugin and shell based orchestrator for long running React Native and Expo work, where Claude acts as the project manager instead of doing all the typing itself.

I want a system where I can give a high level mobile task, and the orchestrator breaks it down into phases, generates a clear plan, runs automated checks, and calls Claude Code subagents or CLI tools to make changes safely. It should track progress in a ledger style file, run TypeScript and lint checks between steps, and stop with a clear error report if a verification step fails.

Please include helpful developer commands for starting tasks, resuming paused runs, and checking status. Add safety rails so it won't overwrite important configs without warning, and make sure it works well with Expo CLI and React Native workflows.

Keep the setup simple: document any required Claude Code settings, provide clear command examples, and write clean shell scripts or node helpers to glue it all together. Look up current docs online if you need to.
```

### 34. `ruvnet/ruflo`
- **GitReverse URL**: [https://gitreverse.com/ruvnet/ruflo](https://gitreverse.com/ruvnet/ruflo)
- **Length**: 1032 characters
- **Status**: Verified live reverse-engineered prompt

```text
Build me an advanced AI agent orchestration platform, let's call it Ruflo. The main idea is to create a system that can coordinate a whole "swarm" of specialized agents to tackle complex software projects collaboratively, instead of just using a single AI assistant.

I need it to support different swarm topologies, like hierarchical where a lead agent delegates to specialists, or a mesh where agents communicate more peer-to-peer. It should include agents for specific roles like architect, coder, tester, and reviewer.

Key requirements:
- Native integration with tools like Claude Code, Codex, and Gemini.
- A strong Model Context Protocol (MCP) server so other tools can tap into the swarm.
- Persistent memory and a shared knowledge base (RAG) so the agents learn over time and don't forget context.
- A smart routing engine that can dynamically pick the best model for each task to optimize for cost and speed.
- A clean CLI for managing everything: `ruflo init`, `ruflo swarm`, etc.

The whole thing should feel robust and enterprise-ready, with telemetry, logging, and security built-in.
```

### 35. `CodebuffAI/freebuff`
- **GitReverse URL**: [https://gitreverse.com/CodebuffAI/freebuff](https://gitreverse.com/CodebuffAI/freebuff)
- **Length**: 751 characters
- **Status**: Verified live reverse-engineered prompt

```text
Build me a free AI coding assistant called Freebuff that works in the terminal and can also support a desktop app, web app, and cloud sandboxes.

I want to open it in any repo, ask it to explain code, fix bugs, or build new features, and have it read files, run terminal commands, and write changes directly. It should support free and unmetered models like DeepSeek, GLM, and other open options, with a clean menu to switch models easily.

Please include good terminal ergonomics: a clear chat view, simple keyboard shortcuts, syntax highlighted diffs before applying changes, and an easy installer for macOS, Linux, and Windows. Add an option to connect to cloud sandboxes so I can run agents remotely on GitHub repos. Look up current docs online if you need to.
```

### 36. `ripienaar/free-for-dev`
- **GitReverse URL**: [https://gitreverse.com/ripienaar/free-for-dev](https://gitreverse.com/ripienaar/free-for-dev)
- **Extraction Status**: `success` (809 characters)
```text
I want to build a simple, single-page website that serves as a big directory of free services for developers and DevOps people. The goal is to create a go-to resource for finding SaaS, PaaS, and IaaS products that have a generous "always free" tier, not just a short free trial.

The site should be organized into logical categories like Major Cloud Providers (AWS, Google Cloud, Azure), CI/CD, Databases, DNS, Web Hosting, Monitoring, and so on. Under each category, list the service, a link to it, and a quick summary of what its free plan includes.

Please research and compile this list for me. Focus on services useful for infrastructure and development. The design should be clean, text-heavy, and fast-loading, maybe with a table of contents at the top that links to the different sections on the page.
```

### 37. `public-apis/public-apis`
- **GitReverse URL**: [https://gitreverse.com/public-apis/public-apis](https://gitreverse.com/public-apis/public-apis)
- **Extraction Status**: `success` (845 characters)
```text
I want to build a simple website that serves as a directory for free public APIs. The main data source should be that super popular `public-apis` repo on GitHub; you can just pull the data from there.

The homepage should display all the different API categories like "Animals," "Finance," "Games & Comics," etc. When a user clicks on a category, it should show them a list of all the relevant APIs. For each API in the list, I want to display its name, a brief description, and the key details like whether it needs authentication, if it's HTTPS, and its CORS status.

The most important feature is a search bar that's always visible at the top, allowing users to quickly filter through the whole list to find an API by name or keyword. Let's keep the design clean and minimal—the goal is just to make the information easy to browse and search.
```

### 38. `nexu-io/open-design`
- **GitReverse URL**: [https://gitreverse.com/nexu-io/open-design](https://gitreverse.com/nexu-io/open-design)
- **Extraction Status**: `success` (830 characters)
```text
I want a local-first design tool that works sort of like Anthropic’s Claude Design but lets me use my own AI agent (like Claude, Copilot, or other coding AIs) instead of being locked into one provider. I want to create things like pitch decks, prototypes, posters, or app mockups by just typing what I need. It should help me decide on the look and feel, ask questions interactively, and build the whole project folder for me, picking from lots of brand-style design systems and templates. I want to preview my design safely in the browser, and then export the result as HTML, PDF, or PowerPoint. I should be able to run it on my own machine or deploy it to the web if I want. Make sure it’s open source and keeps my data local by default. If you’re not sure about some details, feel free to look up current docs online as you go.
```

### 39. `cporter202/agentic-ai-apis`
- **GitReverse URL**: [https://gitreverse.com/cporter202/agentic-ai-apis](https://gitreverse.com/cporter202/agentic-ai-apis)
- **Extraction Status**: `success` (896 characters)
```text
I want to create the go-to resource for developers building AI agents. Let's make a GitHub repository that's a curated directory of all the best APIs for this space. It shouldn't be a junk drawer of random APIs, but a focused launchpad for building autonomous systems and copilots.

Please organize the APIs into three main categories. One for the actual agent execution and orchestration layers, another for the AI models that provide intelligence and generation, and a third for APIs that connect agents to real-world tools and data.

The main README file should be the front page. Make it look professional and easy to navigate with a nice hero image and clear links to the categories. The most important feature is that this list needs to stay current automatically. Set up a script that syncs daily with a public API catalog online to fetch the latest data and updates the repository for me.
```

### 40. `VersusControl/devops-ai-guidelines`
- **GitReverse URL**: [https://gitreverse.com/VersusControl/devops-ai-guidelines](https://gitreverse.com/VersusControl/devops-ai-guidelines)
- **Extraction Status**: `success` (853 characters)
```text
Build me a clean documentation style website for a project called DevOps AI Guidelines & Learning Path.

It should help DevOps people learn how to use AI step by step, starting from beginner friendly basics and moving toward more advanced topics like MCP, AI agents, monitoring, project management, and AWS focused AI workflows. I want it to feel like a practical learning hub, not a sales page. Include a clear homepage, a roadmap section, pages for the main learning paths, a team guidelines section, interview prep, useful prompts, and a resources area.

Make it easy to navigate, with simple cards or sections for each guide, and keep the tone helpful and professional. If you need current best practices for docs layout or accessibility, look them up online. Please make the design polished, responsive, and easy to extend as more guides get added.
```

### 41. `mattpocock/skills`
- **GitReverse URL**: [https://gitreverse.com/mattpocock/skills](https://gitreverse.com/mattpocock/skills)
- **Extraction Status**: `success` (844 characters)
```text
I want to create a collection of "agent skills" that I can use with my AI coding assistant to make my engineering work faster. These should feel like a set of custom productivity scripts for different tasks.

For example, I need a skill that can take a conversation we've had about a new feature and automatically generate a product requirements document, then file it as an issue on GitHub. Another one should handle test-driven development, where it follows a red-green-refactor loop to build things. I'd also love a tool that can automatically set up a new project with standard pre-commit hooks for Prettier and linting. It would also be great to have a skill for triaging bug reports by investigating the codebase to find the root cause and proposing a fix. It's essentially a suite of helper tools for planning, coding, and project setup.
```

### 42. `templatical/sdk`
- **GitReverse URL**: [https://www.gitreverse.com/templatical/sdk](https://www.gitreverse.com/templatical/sdk)
- **Length**: 910 characters
- **Status**: Verified live reverse-engineered prompt

```text
Build me a drag and drop email editor that I can drop into a web app with one simple setup call.

I want users to be able to create email templates visually, move blocks around, edit text and images, and save everything as JSON so it can be stored and loaded later. The editor should also export clean MJML and HTML so the emails render properly in email clients. It should feel polished and production ready, with a live preview, undo and redo, reusable blocks, basic theming, and support for common email sections like text, image, button, divider, social links, menus, tables, and custom HTML.

Make it framework agnostic if possible, so it can work in plain JavaScript as well as popular frontend apps. Use Vue and TipTap under the hood if that fits the project, and keep the editor isolated so it does not mess with the rest of the page styling. If you need to, look up current docs online while building.
```


## 3. Batch 3: ALPHENEX.AI Top Claude Frontend Design Suite (Prompts 43–49)

### 43. `anthropics/skills`
- **GitReverse URL**: [https://gitreverse.com/anthropics/skills](https://gitreverse.com/anthropics/skills)
- **Length**: 919 characters
- **Status**: Verified live reverse-engineered prompt (ALPHENEX.AI Suite)

```text
I want to create a framework for defining 'skills' that an AI agent can learn and use. The idea is that a skill is just a self-contained folder with instructions and any necessary resources that teach an AI how to perform a specialized task in a repeatable way. For example, I'd want skills for common business tasks like generating a PowerPoint or Word document using my company's branding, analyzing data with a specific workflow, or automating certain communications.

The main part of a skill should be a simple markdown file with some basic metadata like a name and description at the top. Please set up the main project structure, include a simple template folder for creating a new skill, and then create a variety of example skills to show what's possible. Include ones for creating popular document types like PDF, DOCX, and XLSX, plus a few others for more technical or creative tasks to serve as inspiration.
```


### 44. `Jpisnice/shadcn-ui-mcp-server`
- **GitReverse URL**: [https://gitreverse.com/Jpisnice/shadcn-ui-mcp-server](https://gitreverse.com/Jpisnice/shadcn-ui-mcp-server)
- **Length**: 793 characters
- **Status**: Verified live reverse-engineered prompt (ALPHENEX.AI Suite)

```text
Build me an MCP server for shadcn ui v4 that helps AI assistants understand the components, blocks, demos, metadata, and install steps, so it can answer questions and generate code for React, Svelte, Vue, and React Native.

I want it to work as a normal CLI server by default, and also support SSE so it can be used over HTTP with multiple clients. Please include easy setup with an optional GitHub token for better rate limits, caching so it does not hit GitHub too hard, and a clean way to switch the target framework and the React UI library choice when needed.

It should also be easy to run in Docker, and simple enough to connect to Claude Desktop or Claude Code without much setup. If you need to check the current MCP or shadcn docs while building it, go ahead and look them up online.
```


### 45. `21st-dev/magic-mcp`
- **GitReverse URL**: [https://gitreverse.com/21st-dev/magic-mcp](https://gitreverse.com/21st-dev/magic-mcp)
- **Length**: 972 characters
- **Status**: Verified live reverse-engineered prompt (ALPHENEX.AI Suite)

```text
Build me a TypeScript tool called Magic AI Agent that works as an MCP server for frontend developers inside Cursor, Windsurf, VS Code, Cline, and Claude.

The main idea is simple. A developer should type something like `/ui create a modern responsive navbar` in their AI coding chat, and the tool should generate a polished, editable React UI component that fits into the existing project. It should use a 21st.dev style component library, support TypeScript, and be able to include professional brand logos through SVGL when needed.

Please include a smooth setup flow where the user adds their 21st.dev API key, then installs the server with one command or by copying a small config block into their IDE settings. Make the README really clear for non experts, with setup steps, examples, supported editors, FAQ, and beta notice.

Keep the code clean, safe, and focused on only creating or changing component related files. Look up current MCP docs online if you need to.
```


### 46. `vercel-labs/agent-skills`
- **GitReverse URL**: [https://gitreverse.com/vercel-labs/agent-skills](https://gitreverse.com/vercel-labs/agent-skills)
- **Length**: 691 characters
- **Status**: Verified live reverse-engineered prompt (ALPHENEX.AI Suite)

```text
Hey, I'd like you to build me a modern web app. Please use a framework like Next.js. As you build it, I want you to focus heavily on performance and best practices. Follow Vercel's own engineering guidelines to make sure it's fast and optimized—check for things like bundle size and efficient data fetching.

The user experience is also really important. Please audit the UI as you go, making sure it’s accessible and follows modern web design rules for things like forms, typography, and dark mode. For navigation, let's add some really smooth, app-like page transitions. Finally, once you have something ready, please deploy it to Vercel and send me the preview link so I can check it out.
```


### 47. `greensock/gsap-skills`
- **GitReverse URL**: [https://gitreverse.com/greensock/gsap-skills](https://gitreverse.com/greensock/gsap-skills)
- **Length**: 776 characters
- **Status**: Verified live reverse-engineered prompt (ALPHENEX.AI Suite)

```text
I need a modern, single-page website to act as a portfolio. It should be built with React and feel really slick and interactive, with lots of smooth animations.

When the page first loads, I want the main headline to animate in, maybe with the letters appearing one by one. Then, as you scroll down the page, different content sections, like my projects and bio, should gracefully fade and slide into view. It would be really cool if one of the sections could "pin" to the screen for a moment while you scroll, with some text or images changing as you pass through that pinned area.

Please make sure the animations are high-performance and don't cause any lag. You should use a professional library for this, like GSAP, to manage all the scroll-based triggers and sequencing.
```


### 48. `freshtechbro/claudedesignskills`
- **GitReverse URL**: [https://gitreverse.com/freshtechbro/claudedesignskills](https://gitreverse.com/freshtechbro/claudedesignskills)
- **Length**: 1063 characters
- **Status**: Verified live reverse-engineered prompt (ALPHENEX.AI Suite)

```text
Build me a Claude Code plugin marketplace for modern web design skills, focused on 3D graphics, animation, scroll effects, and interactive websites.

I want it to feel like a professional design agency skill pack. It should include installable skills for things like Three.js, WebGL, React Three Fiber, GSAP ScrollTrigger, Framer Motion, Babylon.js, Lottie, Spline, Rive, Blender workflows, and modern web design patterns. Each skill should have clear instructions, helpful references, starter templates, small generator scripts, and slash commands so Claude can quickly create scenes, animations, components, and boilerplate.

Please also make category bundles, like core 3D animation, scroll effects, animation components, authoring tools, and general integration patterns. Add specialized agents for the main domains, plus documentation that explains how to install the marketplace, install individual skills, upload skills to Claude, and validate or package everything correctly.

Use current Claude Code plugin and skill docs if you need to look anything up.
```


### 49. `get-convex/agent-skills`
- **GitReverse URL**: [https://gitreverse.com/get-convex/agent-skills](https://gitreverse.com/get-convex/agent-skills)
- **Length**: 843 characters
- **Status**: Verified live reverse-engineered prompt (ALPHENEX.AI Suite)

```text
Build me a small TypeScript project that packages a set of Convex skills for common agent workflows.

I want one place where an AI coding assistant can learn how to help with Convex setup, authentication, reusable components, safe migrations, and performance troubleshooting. Make it easy to install just one skill or all of them, and include clear instructions for using them in tools like Cursor, Claude Code, VS Code, Windsurf, and Codex. Keep the skills focused on doing the job, not just explaining Convex. Add a top level skill that points to the right one when needed, plus good examples and simple checklists in each skill. Include the basic repo files, formatting, and a README that explains what the skills are for and how to use them. If you need to confirm current Convex or agent skills docs, look them up online before finishing.
```
