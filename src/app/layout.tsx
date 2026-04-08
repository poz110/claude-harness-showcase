import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/lib/i18n/LanguageContext'
import { ThemeProvider } from '@/lib/theme/ThemeContext'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'claude-harness — AI Workflow Engine for Claude Code',
  description:
    'claude-harness orchestrates multiple Claude Code agents to take your project from PRD to deployed code — automatically. From PRD to deployed code in minutes, not weeks.',
  keywords: ['claude', 'AI', 'automation', 'workflow', 'developer tools', 'multi-agent'],
  authors: [{ name: 'claude-harness contributors' }],
  openGraph: {
    title: 'claude-harness — AI Workflow Engine for Claude Code',
    description:
      'From PRD to deployed code in minutes, not weeks. /autopilot handles the entire development workflow automatically.',
    type: 'website',
    url: 'https://claude-harness.dev',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'claude-harness — AI Workflow Engine for Claude Code',
    description: 'From PRD to deployed code in minutes, not weeks.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      style={{ colorScheme: 'dark' }}
      suppressHydrationWarning
    >
      <body
        className="min-h-screen antialiased"
        style={{ backgroundColor: 'var(--color-bg-primary)', color: 'var(--color-text-primary)' }}
      >
        <ThemeProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
