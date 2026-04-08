export const SECTION_IDS = {
  hero: 'hero',
  features: 'features',
  howItWorks: 'how-it-works',
  slashCommands: 'slash-commands',
  codeShowcase: 'code-showcase',
  gettingStarted: 'getting-started',
  faq: 'faq',
} as const

export type SectionId = typeof SECTION_IDS[keyof typeof SECTION_IDS]

export const NAV_ITEMS = [
  { label: 'Features', href: '#features', sectionId: SECTION_IDS.features },
  { label: 'How It Works', href: '#how-it-works', sectionId: SECTION_IDS.howItWorks },
  { label: 'Get Started', href: '#getting-started', sectionId: SECTION_IDS.gettingStarted },
  { label: 'FAQ', href: '#faq', sectionId: SECTION_IDS.faq },
] as const
