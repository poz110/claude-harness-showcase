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
    description: '12 specialized agents — PM, Architect, Designer, Fullstack Engineer, Reviewer, QA, Security, DevOps — each expert in their role.',
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
    description: 'Add custom skills, extend workflows, own your pipeline. 21 built-in skills covering the full development lifecycle.',
  },
  {
    id: 'zero-config',
    iconName: 'PackageCheck',
    title: 'Zero Config Start',
    description: 'One install, one command. Works with your existing Next.js, Node, or TypeScript project.',
  },
]
