'use client'

import { motion, MotionConfig, useReducedMotion } from 'framer-motion'
import { HOW_IT_WORKS_STEPS } from '@/lib/content/steps'
import { SECTION_IDS } from '@/lib/content/sections'
import { useLanguage } from '@/lib/i18n/LanguageContext'

export function HowItWorks() {
  const shouldReduceMotion = useReducedMotion()
  const { t } = useLanguage()

  return (
    <MotionConfig reducedMotion="user">
      <section
        id={SECTION_IDS.howItWorks}
        className="py-24 px-4 sm:px-6 lg:px-8"
        aria-labelledby="how-it-works-heading"
        style={{ backgroundColor: 'var(--color-zinc-900)' }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2
              id="how-it-works-heading"
              className="font-semibold mb-4"
              style={{
                fontSize: '2rem',
                lineHeight: 1.2,
                letterSpacing: '-0.015em',
                color: 'var(--color-zinc-50)',
              }}
            >
              {t.howItWorks.heading}
            </h2>
            <p
              className="max-w-2xl mx-auto"
              style={{
                fontSize: '1.125rem',
                lineHeight: 1.65,
                color: 'var(--color-zinc-400)',
              }}
            >
              {t.howItWorks.subheading}
            </p>
          </div>

          {/* Steps — desktop: horizontal, mobile: vertical */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6 items-start">
            {HOW_IT_WORKS_STEPS.map((step, i) => {
              const i18nStep = t.howItWorks.steps[step.id]
              const stepTitle = i18nStep?.title ?? step.title
              const stepDescription = i18nStep?.description ?? step.description

              return (
                <div key={step.id} className="flex flex-col md:flex-row lg:flex-col gap-4">
                  <motion.div
                    className="flex-1"
                    initial={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.4, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {/* Step number */}
                    <div
                      className="font-bold mb-3"
                      style={{
                        fontSize: '3.5rem',
                        lineHeight: 1,
                        fontWeight: 700,
                        color: 'oklch(0.68 0.24 285 / 0.4)',
                        fontFamily: 'var(--font-mono)',
                      }}
                      aria-label={`Step ${step.stepNumber}`}
                    >
                      {step.stepNumber}
                    </div>

                    {/* Title */}
                    <h3
                      className="font-semibold mb-2"
                      style={{ fontSize: '1.25rem', lineHeight: 1.3, color: 'var(--color-zinc-50)' }}
                    >
                      {stepTitle}
                    </h3>

                    {/* Description */}
                    <p
                      className="mb-4"
                      style={{ fontSize: '0.9375rem', lineHeight: 1.6, color: 'var(--color-zinc-400)' }}
                    >
                      {stepDescription}
                    </p>

                    {/* Code line */}
                    <code
                      className="block px-3 py-2 rounded-md text-xs"
                      style={{
                        backgroundColor: 'var(--color-code-bg)',
                        color: 'var(--color-brand-bright)',
                        fontFamily: 'var(--font-mono)',
                        lineHeight: 1.6,
                        whiteSpace: 'pre-wrap',
                        wordBreak: 'break-all',
                      }}
                    >
                      {step.code}
                    </code>
                  </motion.div>

                  {/* Connector — visible on desktop between steps */}
                  {i < HOW_IT_WORKS_STEPS.length - 1 && (
                    <div
                      className="hidden lg:flex items-start justify-center pt-14"
                      aria-hidden="true"
                    >
                      <motion.div
                        className="h-px"
                        style={{
                          background: 'linear-gradient(90deg, var(--color-brand-bright), var(--color-brand-muted) 80%, transparent)',
                          width: '100%',
                          minWidth: '24px',
                        }}
                        initial={{ scaleX: 0, originX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.12 + 0.2 }}
                      />
                    </div>
                  )}

                  {/* Mobile connector (vertical) */}
                  {i < HOW_IT_WORKS_STEPS.length - 1 && (
                    <div
                      className="flex lg:hidden items-center justify-center"
                      aria-hidden="true"
                    >
                      <div
                        className="w-0.5 h-8"
                        style={{
                          background: 'linear-gradient(180deg, var(--color-brand-bright), var(--color-brand-muted))',
                        }}
                      />
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </MotionConfig>
  )
}
