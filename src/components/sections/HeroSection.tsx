'use client'

import { ArrowRight } from 'lucide-react'
import { SECTION_IDS } from '@/lib/content/sections'
import { useLanguage } from '@/lib/i18n/LanguageContext'

// GitHub SVG icon (lucide-react v1 doesn't include Github)
function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section
      id={SECTION_IDS.hero}
      className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8"
      aria-label="Hero"
      style={{
        background: 'var(--gradient-hero-bg)',
      }}
    >
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M0 0h40v40H0z' fill='none'/%3E%3Cpath d='M0 40L40 0M-5 5L5 -5M35 45L45 35' stroke='rgba(255,255,255,0.03)' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px',
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-8"
          style={{
            backgroundColor: 'var(--color-brand-glow)',
            color: 'var(--color-brand-bright)',
            border: '1px solid var(--color-brand-subtle)',
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: 'var(--color-brand-bright)' }}
            aria-hidden="true"
          />
          {t.hero.badge}
        </div>

        {/* Main title */}
        <h1
          className="font-bold mb-6 tracking-tight"
          style={{
            fontSize: 'clamp(2.25rem, 6vw, 4rem)',
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            color: 'var(--color-zinc-50)',
          }}
        >
          {t.hero.titleLine1}
          <br />
          <span className="gradient-text">{t.hero.titleLine2}</span>
        </h1>

        {/* Subtitle */}
        <p
          className="max-w-2xl mx-auto mb-10"
          style={{
            fontSize: '1.125rem',
            lineHeight: 1.65,
            color: 'var(--color-zinc-300)',
          }}
        >
          {t.hero.subtitle}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Primary CTA: Get Started */}
          <a
            href={`#${SECTION_IDS.gettingStarted}`}
            aria-label={t.hero.ctaPrimaryLabel}
            className="hero-cta-primary flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium text-white w-full sm:w-auto justify-center"
            style={{ background: 'var(--gradient-brand)' }}
          >
            {t.hero.ctaPrimary}
            <ArrowRight size={16} />
          </a>

          {/* Secondary CTA: GitHub */}
          <a
            href="https://github.com/poz110/claude-harness"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-cta-secondary flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium border w-full sm:w-auto justify-center"
            style={{
              color: 'var(--color-zinc-100)',
              borderColor: 'var(--color-zinc-700)',
              backgroundColor: 'var(--color-zinc-900)',
            }}
          >
            <GithubIcon size={16} />
            {t.hero.ctaSecondary}
          </a>
        </div>
      </div>

      {/* Terminal mock */}
      <div className="relative w-full max-w-4xl mx-auto mt-16 px-4">
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            backgroundColor: 'var(--color-zinc-900)',
            boxShadow: 'var(--shadow-code)',
            border: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          {/* Window chrome */}
          <div
            className="flex items-center justify-between px-4"
            style={{
              height: '40px',
              backgroundColor: 'var(--color-zinc-800)',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            <div className="flex items-center gap-1.5" aria-hidden="true">
              <span className="w-3 h-3 rounded-full" style={{ backgroundColor: 'rgba(239,68,68,0.7)' }} />
              <span className="w-3 h-3 rounded-full" style={{ backgroundColor: 'rgba(234,179,8,0.7)' }} />
              <span className="w-3 h-3 rounded-full" style={{ backgroundColor: 'rgba(34,197,94,0.7)' }} />
            </div>
            <span
              className="text-xs"
              style={{ color: 'var(--color-zinc-500)', fontFamily: 'var(--font-mono)' }}
            >
              claude-harness
            </span>
            <div style={{ width: '48px' }} />
          </div>

          {/* Terminal content */}
          <div
            className="px-5 py-5"
            style={{ fontFamily: 'var(--font-mono)', fontSize: '0.875rem', lineHeight: 1.7 }}
            aria-label={t.hero.terminalLabel}
          >
            <div className="terminal-line" style={{ color: 'var(--color-zinc-300)' }}>
              <span style={{ color: 'var(--color-brand-bright)' }}>$</span>{' '}
              <span>/autopilot</span>
            </div>
            <div className="terminal-line mt-1 flex items-center gap-2" style={{ color: 'var(--color-zinc-400)' }}>
              <span style={{ color: 'var(--color-zinc-500)' }}>&gt;</span>
              <span>Analyzing PRD...</span>
              <span
                className="inline-block h-2 rounded-sm terminal-progress"
                style={{
                  background: 'var(--gradient-brand)',
                  width: '0%',
                  maxWidth: '100px',
                  minWidth: '0px',
                }}
                role="progressbar"
                aria-valuenow={80}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label="Analysis progress"
              />
              <span>80%</span>
            </div>
            <div className="terminal-line mt-1" style={{ color: 'var(--color-zinc-400)' }}>
              <span style={{ color: 'var(--color-zinc-500)' }}>&gt;</span>{' '}
              <span style={{ color: 'var(--color-info)' }}>[PM]</span> Writing user stories...
              <span className="ml-4" style={{ color: 'var(--color-success)' }}>&#10003;</span>
            </div>
            <div className="terminal-line mt-1" style={{ color: 'var(--color-zinc-400)' }}>
              <span style={{ color: 'var(--color-zinc-500)' }}>&gt;</span>{' '}
              <span style={{ color: 'var(--color-info)' }}>[Architect]</span> Generating ADR...
              <span className="ml-4" style={{ color: 'var(--color-success)' }}>&#10003;</span>
            </div>
            <div className="terminal-line mt-1" style={{ color: 'var(--color-zinc-400)' }}>
              <span style={{ color: 'var(--color-zinc-500)' }}>&gt;</span>{' '}
              <span style={{ color: 'var(--color-info)' }}>[Designer]</span> Building design system...
              <span className="ml-4" style={{ color: 'var(--color-success)' }}>&#10003;</span>
            </div>
            <div className="terminal-line mt-1" style={{ color: 'var(--color-zinc-400)' }}>
              <span style={{ color: 'var(--color-zinc-500)' }}>&gt;</span>{' '}
              <span style={{ color: 'var(--color-info)' }}>[FE]</span> Implementing components...
              <span className="ml-3" style={{ color: 'var(--color-warning)' }}>&#10227;</span>
            </div>
            <div className="terminal-line mt-1" style={{ color: 'var(--color-zinc-400)' }}>
              <span style={{ color: 'var(--color-zinc-500)' }}>&gt;</span>{' '}
              <span style={{ color: 'var(--color-info)' }}>[BE]</span> Setting up API routes...
              <span className="ml-4" style={{ color: 'var(--color-warning)' }}>&#10227;</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
