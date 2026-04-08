'use client'

import { Zap, Users2, Terminal, FileCode2, Puzzle, PackageCheck, type LucideIcon } from 'lucide-react'
import { motion, MotionConfig, useReducedMotion } from 'framer-motion'
import { FEATURES, type Feature } from '@/lib/content/features'
import { SECTION_IDS } from '@/lib/content/sections'
import { useLanguage } from '@/lib/i18n/LanguageContext'

const ICON_MAP: Record<string, LucideIcon> = {
  Zap,
  Users2,
  Terminal,
  FileCode2,
  Puzzle,
  PackageCheck,
}

function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  const Icon = ICON_MAP[feature.iconName] ?? Zap
  const shouldReduceMotion = useReducedMotion()
  const { t } = useLanguage()

  const i18nItem = t.features.items[feature.id]
  const title = i18nItem?.title ?? feature.title
  const description = i18nItem?.description ?? feature.description

  return (
    <motion.div
      className="group relative rounded-lg p-6 border transition-all duration-[250ms] cursor-default overflow-hidden"
      style={{
        backgroundColor: 'var(--color-zinc-900)',
        borderColor: 'var(--color-zinc-700)',
      }}
      initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.4, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      whileHover={shouldReduceMotion ? {} : {
        y: -4,
        transition: { duration: 0.25, ease: [0.4, 0, 0.2, 1] },
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement
        el.style.borderColor = 'var(--color-brand-subtle)'
        el.style.backgroundColor = 'var(--color-zinc-800)'
        el.style.boxShadow = 'var(--shadow-md)'
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement
        el.style.borderColor = 'var(--color-zinc-700)'
        el.style.backgroundColor = 'var(--color-zinc-900)'
        el.style.boxShadow = 'none'
      }}
    >
      {/* Hover glow */}
      <div
        className="absolute inset-x-0 top-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-[250ms]"
        style={{ background: 'var(--gradient-brand)' }}
        aria-hidden="true"
      />

      {/* Icon */}
      <div
        className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
        style={{ backgroundColor: 'var(--color-brand-glow)' }}
        aria-hidden="true"
      >
        <Icon size={20} style={{ color: 'var(--color-brand-bright)' }} />
      </div>

      {/* Title */}
      <h3
        className="font-semibold mb-2"
        style={{ fontSize: '1.25rem', lineHeight: 1.3, color: 'var(--color-zinc-50)' }}
      >
        {title}
      </h3>

      {/* Description */}
      <p style={{ fontSize: '0.9375rem', lineHeight: 1.6, color: 'var(--color-zinc-400)' }}>
        {description}
      </p>
    </motion.div>
  )
}

export function FeaturesGrid() {
  const { t } = useLanguage()

  return (
    <MotionConfig reducedMotion="user">
      <section
        id={SECTION_IDS.features}
        className="py-24 px-4 sm:px-6 lg:px-8"
        aria-labelledby="features-heading"
        style={{ backgroundColor: 'var(--color-bg-primary)' }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2
              id="features-heading"
              className="font-semibold mb-4"
              style={{
                fontSize: '2rem',
                lineHeight: 1.2,
                letterSpacing: '-0.015em',
                color: 'var(--color-zinc-50)',
              }}
            >
              {t.features.heading}
            </h2>
            <p
              className="max-w-2xl mx-auto"
              style={{
                fontSize: '1.125rem',
                lineHeight: 1.65,
                color: 'var(--color-zinc-400)',
              }}
            >
              {t.features.subheading}
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((feature, i) => (
              <FeatureCard key={feature.id} feature={feature} index={i} />
            ))}
          </div>
        </div>
      </section>
    </MotionConfig>
  )
}
