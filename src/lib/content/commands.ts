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

> Analyzing PRD...                    ████████████████░░░░ 80%
> [PM] Writing user stories...                            ✓
> [Architect] Generating ADR...                           ✓
> [Designer] Building design system...                    ✓
> [FE Engineer] Implementing components...                ⟳
> [BE Engineer] Setting up API routes...                  ⟳`,
    lang: 'bash',
  },
  {
    id: 'feature',
    name: '/feature',
    tagline: 'Add a new feature following your project\'s architecture',
    scenario: 'Incremental feature additions to existing projects',
    exampleCode: `$ /feature "Add user authentication"

> Analyzing existing codebase...                         ✓
> [Architect] Planning auth flow...                       ✓
> [FE Engineer] Building login UI...                      ⟳`,
    lang: 'bash',
  },
  {
    id: 'hotfix',
    name: '/hotfix',
    tagline: 'Fast-track critical bug fixes with automated testing',
    scenario: 'Production emergency fixes',
    exampleCode: `$ /hotfix "Fix payment timeout on checkout"

> Identifying root cause...                              ✓
> [Engineer] Applying targeted fix...                     ✓
> [QA] Running regression tests...                        ⟳`,
    lang: 'bash',
  },
]
