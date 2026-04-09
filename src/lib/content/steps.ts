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
    id: 'install-plugin',
    stepNumber: '02',
    title: 'Install Plugin',
    code: 'claude plugin marketplace add poz110/claude-harness\nclaude plugin install claude-harness',
    description: 'Install the claude-harness plugin from the marketplace.',
    lang: 'bash',
  },
  {
    id: 'autopilot',
    stepNumber: '03',
    title: 'Run Autopilot',
    code: '/autopilot "Build a task management app with auth"',
    description: 'Describe your requirements — the PM agent generates the PRD automatically.',
    lang: 'bash',
  },
]
