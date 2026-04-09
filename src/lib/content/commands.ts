export interface SlashCommand {
  id: string
  name: string
  tagline: string
  scenario: string
  exampleCode: string
  lang: 'bash'
  badge?: string
}

export const SLASH_COMMANDS: SlashCommand[] = [
  {
    id: 'autopilot',
    name: '/autopilot',
    tagline: 'Complete project automation from PRD to deployed code',
    scenario: 'New projects, full feature development',
    badge: 'Full Project',
    exampleCode: `$ /autopilot "Build a SaaS dashboard with auth"

> [Product Manager] Generating PRD...                     ✓
> [Software Architect] Generating ADR...                  ✓
> [UX Designer] Building design system...                 ✓
> [Fullstack Engineer] Implementing FE + BE...            ⟳
> [Code Reviewer] Reviewing...                            ·
> [QA Engineer] Testing...                                ·`,
    lang: 'bash',
  },
  {
    id: 'feature',
    name: '/feature',
    tagline: 'Add a new feature following your project\'s architecture',
    scenario: 'Incremental feature additions to existing projects',
    exampleCode: `$ /feature "Add user authentication"

> Skipping: ARCH_REVIEW, CEO_REVIEW, DESIGN_PHASE
> [Product Manager] Generating feature PRD...             ✓
> [Fullstack Engineer] Implementing auth flow...          ⟳`,
    lang: 'bash',
  },
  {
    id: 'hotfix',
    name: '/hotfix',
    tagline: 'Fast-track critical bug fixes with automated testing',
    scenario: 'Production emergency fixes',
    exampleCode: `$ /hotfix "Fix payment timeout on checkout"

> Analyzing root cause...                                ✓
> [General Assistant] Applying targeted fix...            ✓
> [Code Reviewer] Reviewing fix...                        ⟳`,
    lang: 'bash',
  },
]
