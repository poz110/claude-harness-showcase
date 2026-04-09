export interface FAQItem {
  id: string
  question: string
  answer: string
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'what-is',
    question: 'What is claude-harness?',
    answer: 'claude-harness is an open-source plugin for Claude Code that orchestrates multiple AI agents to automate your entire development workflow. From writing PRDs to deploying code, it replaces hours of manual work with a single command.',
  },
  {
    id: 'vs-cursor',
    question: 'How is this different from Cursor or GitHub Copilot?',
    answer: 'Cursor and Copilot assist with single-turn code completions — they help you write individual functions or files. claude-harness operates at the project level: it coordinates 12 specialized agents (PM, Architect, Designer, Fullstack Engineer, Reviewer, QA, Security Auditor, DevOps) through a 14-state pipeline to deliver complete, tested features across your entire stack. It\'s the difference between a coding assistant and an AI development team.',
  },
  {
    id: 'existing-project',
    question: 'Can I use claude-harness on an existing project?',
    answer: 'Yes. The /feature and /hotfix commands are designed for existing codebases. claude-harness analyzes your current architecture and produces changes that follow your conventions, naming patterns, and tech stack.',
  },
  {
    id: 'requirements',
    question: 'What do I need to get started?',
    answer: 'You need Node.js 18+, an Anthropic API key (for Claude), and Claude Code installed. The plugin works with any TypeScript, JavaScript, or Python project. No additional configuration required.',
  },
  {
    id: 'cost',
    question: 'How much does it cost?',
    answer: 'claude-harness itself is free and open-source (MIT license). You pay Anthropic for Claude API usage. A typical /autopilot run for a medium feature costs approximately $0.50–$2.00 in API credits, depending on project complexity.',
  },
  {
    id: 'safety',
    question: 'Is it safe to run on my codebase?',
    answer: 'claude-harness creates a git worktree for every workflow run, so your main branch is never touched until you review and merge. Every generated change is isolated, reviewable, and reversible. The system also includes a built-in security audit at every phase.',
  },
  {
    id: 'customize',
    question: 'Can I customize the workflow?',
    answer: 'Yes. The Skill system (21 built-in skills) lets you add custom workflow nodes, replace existing agents with your own implementations, or create entirely new commands. Skills are defined as Markdown files, and the core workflow engine is JavaScript — readable, extensible, and version-controlled.',
  },
]
