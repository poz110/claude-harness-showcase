'use client'

import { useState, useEffect, useCallback } from 'react'
import { Star } from 'lucide-react'
import { NAV_ITEMS, SECTION_IDS, type SectionId } from '@/lib/content/sections'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { useTheme, THEME_DOT_COLORS, THEME_LABELS, type ThemeColor } from '@/lib/theme/ThemeContext'

interface NavbarProps {
  starCount?: number | null
}

const THEME_ORDER: ThemeColor[] = ['purple', 'blue', 'green', 'orange']

export function Navbar({ starCount }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState<SectionId | null>(null)
  const [mounted, setMounted] = useState(false)

  const { language, setLanguage, t } = useLanguage()
  const { theme, setTheme } = useTheme()

  // Delay rendering switchers until after hydration to avoid mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  // Scroll detection for glassmorphism
  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 100)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // IntersectionObserver for active section highlight
  useEffect(() => {
    const sectionIds = Object.values(SECTION_IDS)
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[]

    if (elements.length === 0) return

    const ratios = new Map<string, number>()

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          ratios.set(entry.target.id, entry.intersectionRatio)
        }
        // Find section with highest intersection ratio
        let maxRatio = 0
        let maxId: SectionId | null = null
        for (const [id, ratio] of ratios.entries()) {
          if (ratio > maxRatio) {
            maxRatio = ratio
            maxId = id as SectionId
          }
        }
        if (maxId && maxRatio > 0) {
          setActiveSection(maxId)
        }
      },
      {
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    )

    for (const el of elements) {
      observer.observe(el)
    }
    return () => observer.disconnect()
  }, [])

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault()
      const id = href.slice(1)
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    },
    []
  )

  const starDisplay =
    starCount != null
      ? starCount >= 1000
        ? `${(starCount / 1000).toFixed(1)}k`
        : String(starCount)
      : null

  // Build nav labels from translations, matching by sectionId
  const navLabels: Record<string, string> = {
    [SECTION_IDS.features]: t.nav.features,
    [SECTION_IDS.howItWorks]: t.nav.howItWorks,
    [SECTION_IDS.gettingStarted]: t.nav.getStarted,
    [SECTION_IDS.faq]: t.nav.faq,
  }

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className="fixed top-0 left-0 right-0 z-50 transition-all"
      style={{
        height: '64px',
        background: scrolled
          ? 'rgba(9, 9, 11, 0.75)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(12px) saturate(1.5)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(12px) saturate(1.5)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.06)' : '1px solid transparent',
        transition: 'background 250ms ease, border-color 250ms ease, backdrop-filter 250ms ease',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="flex items-center gap-2 font-semibold text-base transition-opacity hover:opacity-80"
          style={{ color: 'var(--color-zinc-50)', fontFamily: 'var(--font-mono)' }}
          aria-label={t.nav.homeLabel}
        >
          <span
            className="flex items-center justify-center w-7 h-7 rounded-md text-xs font-bold"
            style={{
              background: 'var(--gradient-brand)',
              color: 'white',
            }}
          >
            ch
          </span>
          <span className="hidden sm:inline">claude-harness</span>
        </a>

        {/* Nav links — hidden on mobile */}
        <div className="hidden md:flex items-center gap-1" role="list">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.sectionId
            const label = navLabels[item.sectionId] ?? item.label
            return (
              <a
                key={item.sectionId}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                role="listitem"
                aria-current={isActive ? 'page' : undefined}
                className="relative px-3 py-2 text-sm rounded-md transition-colors"
                style={{
                  color: isActive
                    ? 'var(--color-brand-bright)'
                    : 'var(--color-zinc-400)',
                  transition: 'color 150ms ease',
                }}
              >
                {label}
                {isActive && (
                  <span
                    className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full"
                    style={{ backgroundColor: 'var(--color-brand-bright)' }}
                  />
                )}
              </a>
            )
          })}
        </div>

        {/* Right side controls */}
        <div className="flex items-center gap-3">
          {/* Language switcher — rendered only after mount to avoid hydration mismatch */}
          {mounted && (
            <div
              className="flex items-center text-xs"
              style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-zinc-400)' }}
              aria-label="Language switcher"
            >
              <button
                onClick={() => setLanguage('en')}
                aria-pressed={language === 'en'}
                aria-label="Switch to English"
                className="px-1.5 py-1 rounded transition-colors"
                style={{
                  color: language === 'en' ? 'var(--color-zinc-100)' : 'var(--color-zinc-500)',
                  fontWeight: language === 'en' ? 600 : 400,
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                EN
              </button>
              <span style={{ color: 'var(--color-zinc-700)' }} aria-hidden="true">|</span>
              <button
                onClick={() => setLanguage('zh')}
                aria-pressed={language === 'zh'}
                aria-label="切换为中文"
                className="px-1.5 py-1 rounded transition-colors"
                style={{
                  color: language === 'zh' ? 'var(--color-zinc-100)' : 'var(--color-zinc-500)',
                  fontWeight: language === 'zh' ? 600 : 400,
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                中
              </button>
            </div>
          )}

          {/* Theme color picker — rendered only after mount */}
          {mounted && (
            <div
              className="flex items-center gap-1.5"
              role="radiogroup"
              aria-label="Theme color"
            >
              {THEME_ORDER.map((t2) => {
                const isSelected = theme === t2
                return (
                  <button
                    key={t2}
                    role="radio"
                    aria-checked={isSelected}
                    aria-label={`${THEME_LABELS[t2]} theme`}
                    onClick={() => setTheme(t2)}
                    style={{
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      backgroundColor: THEME_DOT_COLORS[t2],
                      border: 'none',
                      padding: 0,
                      cursor: 'pointer',
                      outline: isSelected
                        ? `2px solid ${THEME_DOT_COLORS[t2]}`
                        : '2px solid transparent',
                      outlineOffset: '2px',
                      transition: 'outline-color 150ms ease',
                      flexShrink: 0,
                    }}
                  />
                )
              })}
            </div>
          )}

          {/* GitHub button */}
          <a
            href="https://github.com/poz110/claude-harness"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.nav.githubLabel}
            className="flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-lg border transition-all"
            style={{
              color: 'var(--color-zinc-100)',
              borderColor: 'var(--color-zinc-700)',
              backgroundColor: 'var(--color-zinc-900)',
              transition: 'border-color 150ms ease, background-color 150ms ease',
              fontFamily: 'var(--font-mono)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-zinc-500)'
              e.currentTarget.style.backgroundColor = 'var(--color-brand-glow)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-zinc-700)'
              e.currentTarget.style.backgroundColor = 'var(--color-zinc-900)'
            }}
          >
            <Star size={14} className="fill-current" style={{ color: 'var(--color-zinc-400)' }} />
            {starDisplay != null ? (
              <span>{starDisplay}</span>
            ) : (
              <span>GitHub</span>
            )}
          </a>
        </div>
      </div>
    </nav>
  )
}
