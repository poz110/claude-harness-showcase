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

> Phase 1: Requirements Analysis
  [PM Agent] Parsing PRD...                              ✓
  [PM Agent] Writing user stories...                     ✓
  [PM Agent] Creating acceptance criteria...             ✓

> Phase 2: Architecture
  [Architect Agent] Analyzing tech stack...              ✓
  [Architect Agent] Generating ADR...                    ✓
  [Architect Agent] Designing data models...             ✓

> Phase 3: Design
  [Designer Agent] Building design tokens...             ✓
  [Designer Agent] Creating component specs...           ✓

> Phase 4: Implementation
  [FE Engineer] Implementing Next.js components...       ✓
  [BE Engineer] Setting up Hono API routes...            ✓
  [BE Engineer] Writing database migrations...           ✓

> Phase 5: Quality Assurance
  [QA Agent] Running E2E tests...                        ✓
  [QA Agent] Performance audit: Lighthouse 94/100        ✓

[claude-harness] Workflow complete in 8m 42s
  Build: SUCCESS | Tests: 47 passed | Deploy: Ready`,
  },
  {
    id: 'feature',
    label: '/feature',
    description: 'Add a feature to existing project',
    lang: 'bash',
    code: `# Add a feature to existing codebase
$ /feature "Add real-time notifications with WebSocket"

[claude-harness] Starting feature workflow...

> Analyzing existing codebase...                         ✓
  Found: Next.js 14, TypeScript, Drizzle ORM

> [Architect Agent] Planning integration...              ✓
  Strategy: WebSocket server + client hooks
  Files affected: 12 components, 3 API routes

> [FE Engineer] Building notification components...      ✓
  - NotificationBell.tsx
  - NotificationDropdown.tsx
  - useNotifications.ts (React hook)

> [BE Engineer] Setting up WebSocket routes...           ✓
  - /api/ws/notifications
  - Drizzle schema: notifications table
  - Migration: 0042_add_notifications.sql

> [QA Agent] Running feature tests...                    ✓
  Playwright E2E: 6 scenarios passed

[claude-harness] Feature complete in 3m 18s`,
  },
  {
    id: 'hotfix',
    label: '/hotfix',
    description: 'Emergency fix with automated testing',
    lang: 'bash',
    code: `# Emergency production fix
$ /hotfix "Payment timeout causing failed checkouts"

[claude-harness] Starting hotfix workflow...

> Analyzing error report...                              ✓
  Error: Promise timeout after 5000ms in /api/checkout
  Frequency: 23% of checkout attempts
  Root cause: Stripe API latency spike under load

> [Engineer Agent] Preparing targeted fix...
  Strategy: Increase timeout + add retry with backoff

  Modified: src/app/api/checkout/route.ts
  - timeout: 5000 → 30000
  + retry: exponential backoff (3 attempts)
  + circuit breaker: open after 5 failures

> [QA Agent] Running regression tests...                 ✓
  Payment flow: 12 scenarios passed
  Load test: 100 concurrent users — 0 timeouts

> Preparing rollout plan...                              ✓
  Deployment: Zero-downtime (Vercel)
  Rollback: Previous deploy preserved

[claude-harness] Hotfix ready in 1m 52s
  Risk level: LOW | Tests: PASSED | Deploy: Ready`,
  },
]
