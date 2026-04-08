'use client'

import { motion, MotionConfig, useReducedMotion } from 'framer-motion'
import { CopyButton } from '@/components/shared/CopyButton'
import { GETTING_STARTED_STEPS } from '@/lib/content/getting-started'
import { SECTION_IDS } from '@/lib/content/sections'
import { useLanguage } from '@/lib/i18n/LanguageContext'

export function GettingStarted() {
  const shouldReduceMotion = useReducedMotion()
  const { t } = useLanguage()

  return (
    <MotionConfig reducedMotion="user">
      <section
        id={SECTION_IDS.gettingStarted}
        className="py-24 px-4 sm:px-6 lg:px-8"
        aria-labelledby="getting-started-heading"
        style={{ backgroundColor: 'var(--color-bg-primary)' }}
      >
        <div className="max-w-3xl mx-auto">
          {/* Section header — left aligned */}
          <div className="mb-12">
            <h2
              id="getting-started-heading"
              className="font-semibold mb-4"
              style={{
                fontSize: '2rem',
                lineHeight: 1.2,
                letterSpacing: '-0.015em',
                color: 'var(--color-zinc-50)',
              }}
            >
              {t.gettingStarted.heading}
            </h2>
            <p
              style={{
                fontSize: '1.125rem',
                lineHeight: 1.65,
                color: 'var(--color-zinc-400)',
              }}
            >
              {t.gettingStarted.subheading}
            </p>
          </div>

          {/* Steps */}
          <div className="space-y-12">
            {GETTING_STARTED_STEPS.map((step, i) => {
              const i18nStep = t.gettingStarted.steps[step.id]
              const stepTitle = i18nStep?.title ?? step.title
              const stepDescription = i18nStep?.description ?? step.description

              return (
                <motion.div
                  key={step.id}
                  className="flex gap-6"
                  initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.4, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  {/* Step indicator + vertical line */}
                  <div className="flex flex-col items-center">
                    <div
                      className="flex items-center justify-center w-8 h-8 rounded-full shrink-0 text-sm font-semibold"
                      style={{
                        backgroundColor: 'var(--color-brand-glow)',
                        color: 'var(--color-brand-bright)',
                        fontFamily: 'var(--font-mono)',
                        border: '1px solid var(--color-brand-subtle)',
                      }}
                      aria-label={`Step ${step.stepNumber}`}
                    >
                      {step.stepNumber}
                    </div>
                    {i < GETTING_STARTED_STEPS.length - 1 && (
                      <div
                        className="flex-1 w-0.5 mt-3"
                        style={{ backgroundColor: 'var(--color-zinc-700)', minHeight: '48px' }}
                        aria-hidden="true"
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-4">
                    <h3
                      className="font-semibold mb-1"
                      style={{ fontSize: '1.25rem', lineHeight: 1.3, color: 'var(--color-zinc-50)' }}
                    >
                      {stepTitle}
                    </h3>
                    <p
                      className="mb-4"
                      style={{ fontSize: '0.9375rem', lineHeight: 1.6, color: 'var(--color-zinc-400)' }}
                    >
                      {stepDescription}
                    </p>

                    {/* Code block */}
                    <div
                      className="rounded-xl overflow-hidden"
                      style={{
                        backgroundColor: 'var(--color-code-bg)',
                        boxShadow: 'var(--shadow-code)',
                      }}
                    >
                      {/* Top bar */}
                      <div
                        className="flex items-center justify-between px-4"
                        style={{
                          height: '36px',
                          backgroundColor: 'var(--color-zinc-800)',
                          borderBottom: '1px solid rgba(255,255,255,0.06)',
                        }}
                      >
                        <span
                          className="text-xs tracking-wider"
                          style={{ color: 'var(--color-zinc-400)', fontFamily: 'var(--font-mono)' }}
                        >
                          BASH
                        </span>
                        <CopyButton code={step.code} />
                      </div>

                      {/* Code */}
                      <div className="px-5 py-4">
                        <pre
                          className="text-sm overflow-x-auto"
                          style={{
                            lineHeight: 1.7,
                            fontFamily: 'var(--font-mono)',
                            color: 'var(--color-zinc-300)',
                            whiteSpace: 'pre',
                            margin: 0,
                          }}
                          aria-label={`Step ${step.stepNumber} code`}
                        >
                          <code>{step.code}</code>
                        </pre>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Footer CTA */}
          <div
            className="mt-12 p-6 rounded-xl border"
            style={{
              backgroundColor: 'var(--color-zinc-900)',
              borderColor: 'var(--color-zinc-700)',
            }}
          >
            <p className="text-sm mb-3" style={{ color: 'var(--color-zinc-400)' }}>
              {t.gettingStarted.footerNote}
            </p>
            <a
              href="https://github.com/poz110/claude-harness"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm transition-colors"
              style={{
                color: 'var(--color-brand-bright)',
                transition: 'color 150ms ease',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = 'var(--color-zinc-50)'
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = 'var(--color-brand-bright)'
              }}
            >
              {t.gettingStarted.footerLink}
            </a>
          </div>
        </div>
      </section>
    </MotionConfig>
  )
}
