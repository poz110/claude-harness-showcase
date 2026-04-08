'use client'

import { useState, useEffect, useCallback } from 'react'
import { Star } from 'lucide-react'
import { NAV_ITEMS, SECTION_IDS, type SectionId } from '@/lib/content/sections'

interface NavbarProps {
  starCount?: number | null
}

export function Navbar({ starCount }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState<SectionId | null>(null)

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
          aria-label="claude-harness home"
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
                {item.label}
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

        {/* GitHub button */}
        <a
          href="https://github.com/poz110/claude-harness"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View claude-harness on GitHub"
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
    </nav>
  )
}
