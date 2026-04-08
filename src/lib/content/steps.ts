export interface HowItWorksStep {
  id: string
  stepNumber: string
  title: string
  code: string
  description: string
  lang: 'bash'
}

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    id: 'install',
    stepNumber: '01',
    title: 'Install',
    code: 'npm install -g @anthropic-ai/claude-code',
    description: 'One line to install Claude Code globally.',
    lang: 'bash',
  },
  {
    id: 'clone',
    stepNumber: '02',
    title: 'Install Plugin',
    code: 'git clone https://github.com/poz110/claude-harness\n    ~/.claude/plugins/marketplaces/claude-harness',
    description: 'Clone the claude-harness plugin into Claude Code.',
    lang: 'bash',
  },
  {
    id: 'prd',
    stepNumber: '03',
    title: 'Write Your PRD',
    code: '# Create docs/prd.md\n# Describe your requirements in natural language',
    description: 'Use natural language to describe requirements. harness understands structure.',
    lang: 'bash',
  },
  {
    id: 'autopilot',
    stepNumber: '04',
    title: 'Run Autopilot',
    code: '/autopilot',
    description: 'Multi-Agent collaboration takes your requirements to code automatically.',
    lang: 'bash',
  },
]
