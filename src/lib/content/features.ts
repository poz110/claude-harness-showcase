export interface Feature {
  id: string
  iconName: string
  title: string
  description: string
}

export const FEATURES: Feature[] = [
  {
    id: 'full-auto',
    iconName: 'Zap',
    title: 'Full Workflow Automation',
    description: 'From PRD to deployed code in one command. No manual handoffs, no context switching.',
  },
  {
    id: 'multi-agent',
    iconName: 'Users2',
    title: 'Multi-Agent Orchestration',
    description: 'PM, Architect, Designer, FE, BE, QA agents work in concert — each expert in their role.',
  },
  {
    id: 'slash-commands',
    iconName: 'Terminal',
    title: 'Slash Commands',
    description: '/autopilot, /feature, /hotfix — each command triggers a complete, tested workflow.',
  },
  {
    id: 'prd-to-code',
    iconName: 'FileCode2',
    title: 'PRD to Code',
    description: 'Write your requirements in natural language. claude-harness handles the rest.',
  },
  {
    id: 'extensible',
    iconName: 'Puzzle',
    title: 'Extensible Plugin System',
    description: 'Built on Claude Code\'s MCP protocol. Add custom agents, extend workflows, own your pipeline.',
  },
  {
    id: 'zero-config',
    iconName: 'PackageCheck',
    title: 'Zero Config Start',
    description: 'One install, one command. Works with your existing Next.js, Node, or TypeScript project.',
  },
]
