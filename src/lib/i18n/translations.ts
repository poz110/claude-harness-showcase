export type Language = 'en' | 'zh'

export interface Translations {
  nav: {
    features: string
    howItWorks: string
    getStarted: string
    faq: string
    githubLabel: string
    homeLabel: string
  }
  hero: {
    badge: string
    titleLine1: string
    titleLine2: string
    subtitle: string
    ctaPrimary: string
    ctaPrimaryLabel: string
    ctaSecondary: string
    terminalLabel: string
  }
  features: {
    heading: string
    subheading: string
    items: Record<string, { title: string; description: string }>
  }
  howItWorks: {
    heading: string
    subheading: string
    steps: Record<string, { title: string; description: string }>
  }
  gettingStarted: {
    heading: string
    subheading: string
    steps: Record<string, { title: string; description: string }>
    footerNote: string
    footerLink: string
  }
  slashCommands: {
    heading: string
    subheading: string
    useCase: string
    items: Record<string, { tagline: string; scenario: string; badge?: string }>
  }
  codeShowcase: {
    heading: string
    subheading: string
    items: Record<string, { label: string; description: string }>
  }
  faq: {
    heading: string
    subheading: string
    items: Record<string, { question: string; answer: string }>
  }
  footer: {
    copyright: string
    github: string
    license: string
  }
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      features: 'Features',
      howItWorks: 'How It Works',
      getStarted: 'Get Started',
      faq: 'FAQ',
      githubLabel: 'View claude-harness on GitHub',
      homeLabel: 'claude-harness home',
    },
    hero: {
      badge: 'Open Source · Claude Code Plugin',
      titleLine1: 'Ship Production-Ready Code',
      titleLine2: 'with AI Agent Orchestration',
      subtitle:
        'From PRD to deployed code — in minutes, not weeks. claude-harness orchestrates multiple Claude Code agents to automate your entire development workflow.',
      ctaPrimary: 'Get Started',
      ctaPrimaryLabel: 'Get started with claude-harness',
      ctaSecondary: 'View on GitHub',
      terminalLabel: 'claude-harness autopilot workflow demonstration',
    },
    features: {
      heading: 'Core Features',
      subheading:
        'Everything you need to automate your development workflow — from requirements to deployed code.',
      items: {
        'full-auto': {
          title: 'Full Workflow Automation',
          description:
            'From PRD to deployed code in one command. No manual handoffs, no context switching.',
        },
        'multi-agent': {
          title: 'Multi-Agent Orchestration',
          description:
            'PM, Architect, Designer, FE, BE, QA agents work in concert — each expert in their role.',
        },
        'slash-commands': {
          title: 'Slash Commands',
          description:
            '/autopilot, /feature, /hotfix — each command triggers a complete, tested workflow.',
        },
        'prd-to-code': {
          title: 'PRD to Code',
          description:
            'Write your requirements in natural language. claude-harness handles the rest.',
        },
        extensible: {
          title: 'Extensible Plugin System',
          description:
            "Built on Claude Code's MCP protocol. Add custom agents, extend workflows, own your pipeline.",
        },
        'zero-config': {
          title: 'Zero Config Start',
          description:
            'One install, one command. Works with your existing Next.js, Node, or TypeScript project.',
        },
      },
    },
    howItWorks: {
      heading: 'How It Works',
      subheading: 'Four steps from zero to a running AI-powered development workflow.',
      steps: {
        install: {
          title: 'Install',
          description: 'One line to install Claude Code globally.',
        },
        clone: {
          title: 'Install Plugin',
          description: 'Clone the claude-harness plugin into Claude Code.',
        },
        prd: {
          title: 'Write Your PRD',
          description:
            'Use natural language to describe requirements. harness understands structure.',
        },
        autopilot: {
          title: 'Run Autopilot',
          description:
            'Multi-Agent collaboration takes your requirements to code automatically.',
        },
      },
    },
    gettingStarted: {
      heading: 'Get Started',
      subheading: 'From zero to autopilot in 3 steps.',
      steps: {
        'install-claude': {
          title: 'Install Claude Code',
          description: 'Install the Claude Code CLI globally. Requires Node.js 18+.',
        },
        'clone-plugin': {
          title: 'Install claude-harness Plugin',
          description: "Clone the plugin into Claude Code's plugin directory.",
        },
        run: {
          title: 'Start Autopilot',
          description:
            'Run /autopilot with your project description and let the agents do the work.',
        },
      },
      footerNote: "That's it. The agents will take care of the rest.",
      footerLink: 'View full documentation on GitHub →',
    },
    slashCommands: {
      heading: 'Slash Commands',
      subheading: 'Three commands. Every scenario.',
      useCase: 'Use case',
      items: {
        autopilot: {
          tagline: 'Complete project automation from PRD to deployed code',
          scenario: 'New projects, full feature development',
          badge: 'Full Project',
        },
        feature: {
          tagline: "Add a new feature following your project's architecture",
          scenario: 'Incremental feature additions to existing projects',
        },
        hotfix: {
          tagline: 'Fast-track critical bug fixes with automated testing',
          scenario: 'Production emergency fixes',
        },
      },
    },
    codeShowcase: {
      heading: 'See It In Action',
      subheading: 'Real output from claude-harness workflows.',
      items: {
        autopilot: {
          label: '/autopilot',
          description: 'Full project from PRD to deployed code',
        },
        feature: {
          label: '/feature',
          description: 'Add a feature to existing project',
        },
        hotfix: {
          label: '/hotfix',
          description: 'Emergency fix with automated testing',
        },
      },
    },
    faq: {
      heading: 'Frequently Asked Questions',
      subheading: 'Everything you need to know about claude-harness.',
      items: {
        'what-is': {
          question: 'What is claude-harness?',
          answer:
            'claude-harness is an open-source plugin for Claude Code that orchestrates multiple AI agents to automate your entire development workflow. From writing PRDs to deploying code, it replaces hours of manual work with a single command.',
        },
        'vs-cursor': {
          question: 'How is this different from Cursor or GitHub Copilot?',
          answer:
            "Cursor and Copilot assist with single-turn code completions — they help you write individual functions or files. claude-harness operates at the project level: it coordinates specialized agents (PM, Architect, Designer, Engineer, QA) to deliver complete, tested features across your entire stack. It's the difference between a coding assistant and an AI development team.",
        },
        'existing-project': {
          question: 'Can I use claude-harness on an existing project?',
          answer:
            'Yes. The /feature and /hotfix commands are designed for existing codebases. claude-harness analyzes your current architecture and produces changes that follow your conventions, naming patterns, and tech stack.',
        },
        requirements: {
          question: 'What do I need to get started?',
          answer:
            'You need Node.js 18+, an Anthropic API key (for Claude), and Claude Code installed. The plugin works with any TypeScript, JavaScript, or Python project. No additional configuration required.',
        },
        cost: {
          question: 'How much does it cost?',
          answer:
            'claude-harness itself is free and open-source (MIT license). You pay Anthropic for Claude API usage. A typical /autopilot run for a medium feature costs approximately $0.50–$2.00 in API credits, depending on project complexity.',
        },
        safety: {
          question: 'Is it safe to run on my codebase?',
          answer:
            'claude-harness creates a git worktree for every workflow run, so your main branch is never touched until you review and merge. Every generated change is isolated, reviewable, and reversible. The system also includes a built-in security audit at every phase.',
        },
        customize: {
          question: 'Can I customize the workflow?',
          answer:
            'Yes. The Skill system lets you add custom workflow nodes, replace existing agents with your own implementations, or create entirely new commands. Everything is TypeScript — readable, extensible, and version-controlled.',
        },
      },
    },
    footer: {
      copyright: 'claude-harness contributors',
      github: 'GitHub',
      license: 'MIT License',
    },
  },

  zh: {
    nav: {
      features: '功能特性',
      howItWorks: '工作原理',
      getStarted: '快速开始',
      faq: '常见问题',
      githubLabel: '在 GitHub 上查看 claude-harness',
      homeLabel: 'claude-harness 首页',
    },
    hero: {
      badge: '开源 · Claude Code 插件',
      titleLine1: '交付生产就绪的代码',
      titleLine2: '由 AI Agent 编排驱动',
      subtitle:
        '从需求文档到部署上线，只需数分钟而非数周。claude-harness 编排多个 Claude Code Agent，全自动完成整个开发流程。',
      ctaPrimary: '立即开始',
      ctaPrimaryLabel: '开始使用 claude-harness',
      ctaSecondary: '查看 GitHub',
      terminalLabel: 'claude-harness autopilot 工作流演示',
    },
    features: {
      heading: '核心功能',
      subheading: '从需求到部署，自动化开发流程所需的一切。',
      items: {
        'full-auto': {
          title: '全流程自动化',
          description: '一条命令，从需求文档到部署上线。无需人工交接，无需切换上下文。',
        },
        'multi-agent': {
          title: '多 Agent 编排',
          description: 'PM、架构师、设计师、前端、后端、QA 协同工作，各司其职。',
        },
        'slash-commands': {
          title: 'Slash 命令',
          description: '/autopilot、/feature、/hotfix — 每条命令触发完整、经过测试的工作流。',
        },
        'prd-to-code': {
          title: '需求到代码',
          description: '用自然语言描述需求，剩下的交给 claude-harness。',
        },
        extensible: {
          title: '可扩展插件系统',
          description: '基于 Claude Code 的 MCP 协议构建。添加自定义 Agent，扩展工作流，掌控你的流水线。',
        },
        'zero-config': {
          title: '零配置启动',
          description: '一次安装，一条命令。适配你现有的 Next.js、Node 或 TypeScript 项目。',
        },
      },
    },
    howItWorks: {
      heading: '工作原理',
      subheading: '四个步骤，从零搭建 AI 驱动的开发工作流。',
      steps: {
        install: {
          title: '安装',
          description: '一行命令全局安装 Claude Code。',
        },
        clone: {
          title: '安装插件',
          description: '将 claude-harness 插件克隆到 Claude Code 中。',
        },
        prd: {
          title: '编写需求文档',
          description: '用自然语言描述需求，harness 能理解文档结构。',
        },
        autopilot: {
          title: '运行 Autopilot',
          description: '多 Agent 协作，自动将你的需求转化为代码。',
        },
      },
    },
    gettingStarted: {
      heading: '快速开始',
      subheading: '三步完成从零到 autopilot。',
      steps: {
        'install-claude': {
          title: '安装 Claude Code',
          description: '全局安装 Claude Code CLI，需要 Node.js 18+。',
        },
        'clone-plugin': {
          title: '安装 claude-harness 插件',
          description: '将插件克隆到 Claude Code 的插件目录。',
        },
        run: {
          title: '启动 Autopilot',
          description: '运行 /autopilot 并附上项目描述，让 Agent 完成所有工作。',
        },
      },
      footerNote: '就这些，Agent 会处理剩余的一切。',
      footerLink: '在 GitHub 上查看完整文档 →',
    },
    slashCommands: {
      heading: 'Slash 命令',
      subheading: '三条命令，覆盖所有场景。',
      useCase: '适用场景',
      items: {
        autopilot: {
          tagline: '从需求文档到部署上线的完整项目自动化',
          scenario: '新项目、完整功能开发',
          badge: '完整项目',
        },
        feature: {
          tagline: '按照项目架构添加新功能',
          scenario: '在现有项目上增量添加功能',
        },
        hotfix: {
          tagline: '快速修复关键 Bug 并自动化测试',
          scenario: '生产环境紧急修复',
        },
      },
    },
    codeShowcase: {
      heading: '实际效果',
      subheading: 'claude-harness 工作流的真实输出。',
      items: {
        autopilot: {
          label: '/autopilot',
          description: '从需求文档到部署上线的完整项目',
        },
        feature: {
          label: '/feature',
          description: '在现有项目中添加功能',
        },
        hotfix: {
          label: '/hotfix',
          description: '自动化测试保障的紧急修复',
        },
      },
    },
    faq: {
      heading: '常见问题',
      subheading: '关于 claude-harness 你需要了解的一切。',
      items: {
        'what-is': {
          question: 'claude-harness 是什么？',
          answer:
            'claude-harness 是 Claude Code 的开源插件，编排多个 AI Agent 自动化完成整个开发流程。从编写需求文档到部署代码，用一条命令替代数小时的手工操作。',
        },
        'vs-cursor': {
          question: '与 Cursor 或 GitHub Copilot 有何不同？',
          answer:
            'Cursor 和 Copilot 专注于单轮代码补全，帮你编写单个函数或文件。claude-harness 在项目层面运作：协调专业 Agent（PM、架构师、设计师、工程师、QA），跨整个技术栈交付完整的、经过测试的功能。这是编码助手与 AI 开发团队的本质区别。',
        },
        'existing-project': {
          question: '可以在现有项目上使用 claude-harness 吗？',
          answer:
            '可以。/feature 和 /hotfix 命令专为现有代码库设计。claude-harness 会分析你现有的架构，生成符合你的规范、命名模式和技术栈的变更。',
        },
        requirements: {
          question: '开始使用需要什么？',
          answer:
            '你需要 Node.js 18+、Anthropic API Key（用于 Claude）以及已安装的 Claude Code。该插件适用于任何 TypeScript、JavaScript 或 Python 项目，无需额外配置。',
        },
        cost: {
          question: '费用是多少？',
          answer:
            'claude-harness 本身免费开源（MIT 协议）。你向 Anthropic 支付 Claude API 的使用费用。一次中等规模功能的 /autopilot 运行大约消耗 $0.50–$2.00 的 API 额度，具体取决于项目复杂度。',
        },
        safety: {
          question: '在我的代码库上运行安全吗？',
          answer:
            'claude-harness 为每次工作流运行创建 git worktree，在你审查并合并之前，主分支不会被触碰。每个生成的变更都是隔离的、可审查的、可回滚的。系统还在每个阶段内置了安全审计。',
        },
        customize: {
          question: '可以自定义工作流吗？',
          answer:
            '可以。Skill 系统允许你添加自定义工作流节点、用自己的实现替换现有 Agent，或创建全新的命令。一切都是 TypeScript —— 可读、可扩展、版本可控。',
        },
      },
    },
    footer: {
      copyright: 'claude-harness 贡献者',
      github: 'GitHub',
      license: 'MIT 许可证',
    },
  },
}
