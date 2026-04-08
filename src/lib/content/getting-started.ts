export interface GettingStartedStep {
  id: string
  stepNumber: number
  title: string
  description: string
  code: string
  lang: 'bash'
}

export const GETTING_STARTED_STEPS: GettingStartedStep[] = [
  {
    id: 'install-claude',
    stepNumber: 1,
    title: 'Install Claude Code',
    description: 'Install the Claude Code CLI globally. Requires Node.js 18+.',
    code: 'npm install -g @anthropic-ai/claude-code',
    lang: 'bash',
  },
  {
    id: 'clone-plugin',
    stepNumber: 2,
    title: 'Install claude-harness Plugin',
    description: 'Clone the plugin into Claude Code\'s plugin directory.',
    code: 'git clone https://github.com/poz110/claude-harness \\\n  ~/.claude/plugins/marketplaces/claude-harness',
    lang: 'bash',
  },
  {
    id: 'run',
    stepNumber: 3,
    title: 'Start Autopilot',
    description: 'Run /autopilot with your project description and let the agents do the work.',
    code: '/autopilot "your project description here"',
    lang: 'bash',
  },
]
