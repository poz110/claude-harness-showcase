export interface CodeExample {
  id: string
  label: string
  code: string
  lang: 'bash'
  description?: string
}

export const CODE_EXAMPLES: CodeExample[] = [
  {
    id: 'autopilot',
    label: '/autopilot',
    description: 'Full project from PRD to deployed code',
    lang: 'bash',
    code: `# Start full project automation
$ /autopilot "Build a task management SaaS with team collaboration"

[claude-harness] Starting autopilot workflow...

> IDEA → PRD_DRAFT: Requirements Analysis
  [Product Manager] Running office-hours interrogation...  ✓
  [Product Manager] Generating PRD (MoSCoW + Gherkin)...   ✓

> PRD_REVIEW → ARCH_REVIEW: Architecture
  [Software Architect] Generating ADR + ASCII diagrams...  ✓
  [Software Architect] Writing security baseline...        ✓

> CEO_REVIEW → DESIGN_PHASE: Design
  [UX Designer] Building design system (DESIGN.md)...      ✓
  [UX Designer] Creating design spec (80-item audit)...    ✓

> DESIGN_REVIEW → IMPLEMENTATION: Full-Stack
  [Fullstack Engineer] Writing API spec...                 ✓
  [Fullstack Engineer] Implementing backend (Hono)...      ✓
  [Fullstack Engineer] Implementing frontend (Next.js)...  ✓

> CODE_REVIEW → QA_PHASE → SECURITY_REVIEW
  [Code Reviewer] Two-phase review (spec + quality)...     ✓
  [QA Engineer] Playwright E2E tests...                    ✓
  [Security Auditor] OWASP Top 10 scan...                  ✓

> DEPLOY_PREP_SETUP → DONE
  [DevOps Engineer] CI/CD + Dockerfile...                  ✓

[claude-harness] Workflow complete — 14 states traversed
  Build: SUCCESS | Tests: PASSED | Deploy: Ready`,
  },
  {
    id: 'feature',
    label: '/feature',
    description: 'Add a feature to existing project',
    lang: 'bash',
    code: `# Add a feature to existing codebase
$ /feature "Add real-time notifications with WebSocket"

[claude-harness] Starting feature workflow...
  Skipping: ARCH_REVIEW, CEO_REVIEW, DESIGN_PHASE, DESIGN_REVIEW

> PRD_DRAFT: Requirements
  [Product Manager] Generating feature PRD...              ✓

> IMPLEMENTATION: Full-Stack
  [Fullstack Engineer] Writing API spec...                 ✓
  [Fullstack Engineer] Building notification components..  ✓
  [Fullstack Engineer] Setting up WebSocket routes...      ✓

> CODE_REVIEW → QA_PHASE
  [Code Reviewer] Spec compliance + code quality...        ✓
  [QA Engineer] Playwright E2E: 6 scenarios passed         ✓

> SECURITY_REVIEW → DEPLOY_PREP
  [Security Auditor] OWASP scan...                         ✓
  [DevOps Engineer] Updating deploy config...              ✓

[claude-harness] Feature complete — 10 states traversed`,
  },
  {
    id: 'hotfix',
    label: '/hotfix',
    description: 'Emergency fix with automated testing',
    lang: 'bash',
    code: `# Emergency production fix
$ /hotfix "Payment timeout causing failed checkouts"

[claude-harness] Starting hotfix workflow...
  Mode: Analyze → Fix → CODE_REVIEW (skips all planning/design)

> Analyzing error report...                              ✓
  Error: Promise timeout after 5000ms in /api/checkout
  Frequency: 23% of checkout attempts
  Root cause: Stripe API latency spike under load

> [General Assistant] Preparing targeted fix...
  Strategy: Increase timeout + add retry with backoff

  Modified: src/app/api/checkout/route.ts
  + timeout: 5000 → 30000
  + retry: exponential backoff (3 attempts)
  + circuit breaker: open after 5 failures

> [Code Reviewer] Reviewing fix...                       ✓
  Spec compliance: N/A (hotfix)
  Code quality: PASS

[claude-harness] Hotfix ready
  Risk level: LOW | Review: PASSED | Deploy: Ready`,
  },
]
