'use client'

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react'

export type ThemeColor = 'purple' | 'blue' | 'green' | 'orange'

interface ThemeVars {
  brand: string
  brandBright: string
  brandMuted: string
  brandSubtle: string
  brandGlow: string
  gradientBrand: string
  gradientBrandText: string
  gradientHeroBg: string
  shadowBrand: string
  colorBorderFocus: string
  colorTextBrand: string
  primary: string
  ring: string
  colorBorderBrand: string
}

const THEME_VARS: Record<ThemeColor, ThemeVars> = {
  purple: {
    brand: 'oklch(0.60 0.24 285)',
    brandBright: 'oklch(0.68 0.24 285)',
    brandMuted: 'oklch(0.55 0.18 285)',
    brandSubtle: 'oklch(0.35 0.10 285)',
    brandGlow: 'oklch(0.60 0.24 285 / 0.15)',
    gradientBrand: 'linear-gradient(135deg, oklch(0.60 0.24 285), oklch(0.65 0.22 260))',
    gradientBrandText: 'linear-gradient(135deg, #a78bfa, #818cf8)',
    gradientHeroBg: 'radial-gradient(ellipse 90% 50% at 50% -5%, rgba(124,58,237,0.35), transparent)',
    shadowBrand: '0 0 0 1px oklch(0.60 0.24 285 / 0.3), 0 4px 24px oklch(0.60 0.24 285 / 0.15)',
    colorBorderFocus: 'oklch(0.68 0.24 285)',
    colorTextBrand: 'oklch(0.78 0.16 285)',
    primary: 'oklch(0.60 0.24 285)',
    ring: 'oklch(0.68 0.24 285)',
    colorBorderBrand: 'oklch(0.35 0.10 285)',
  },
  blue: {
    brand: 'oklch(0.58 0.22 250)',
    brandBright: 'oklch(0.66 0.22 250)',
    brandMuted: 'oklch(0.53 0.16 250)',
    brandSubtle: 'oklch(0.33 0.09 250)',
    brandGlow: 'oklch(0.58 0.22 250 / 0.15)',
    gradientBrand: 'linear-gradient(135deg, oklch(0.58 0.22 250), oklch(0.63 0.20 230))',
    gradientBrandText: 'linear-gradient(135deg, #93c5fd, #60a5fa)',
    gradientHeroBg: 'radial-gradient(ellipse 90% 50% at 50% -5%, rgba(37,99,235,0.30), transparent)',
    shadowBrand: '0 0 0 1px oklch(0.58 0.22 250 / 0.3), 0 4px 24px oklch(0.58 0.22 250 / 0.15)',
    colorBorderFocus: 'oklch(0.66 0.22 250)',
    colorTextBrand: 'oklch(0.76 0.15 250)',
    primary: 'oklch(0.58 0.22 250)',
    ring: 'oklch(0.66 0.22 250)',
    colorBorderBrand: 'oklch(0.33 0.09 250)',
  },
  green: {
    brand: 'oklch(0.60 0.20 160)',
    brandBright: 'oklch(0.68 0.20 160)',
    brandMuted: 'oklch(0.55 0.15 160)',
    brandSubtle: 'oklch(0.35 0.08 160)',
    brandGlow: 'oklch(0.60 0.20 160 / 0.15)',
    gradientBrand: 'linear-gradient(135deg, oklch(0.60 0.20 160), oklch(0.65 0.18 140))',
    gradientBrandText: 'linear-gradient(135deg, #6ee7b7, #34d399)',
    gradientHeroBg: 'radial-gradient(ellipse 90% 50% at 50% -5%, rgba(16,185,129,0.28), transparent)',
    shadowBrand: '0 0 0 1px oklch(0.60 0.20 160 / 0.3), 0 4px 24px oklch(0.60 0.20 160 / 0.15)',
    colorBorderFocus: 'oklch(0.68 0.20 160)',
    colorTextBrand: 'oklch(0.76 0.14 160)',
    primary: 'oklch(0.60 0.20 160)',
    ring: 'oklch(0.68 0.20 160)',
    colorBorderBrand: 'oklch(0.35 0.08 160)',
  },
  orange: {
    brand: 'oklch(0.65 0.20 50)',
    brandBright: 'oklch(0.73 0.20 50)',
    brandMuted: 'oklch(0.60 0.15 50)',
    brandSubtle: 'oklch(0.38 0.09 50)',
    brandGlow: 'oklch(0.65 0.20 50 / 0.15)',
    gradientBrand: 'linear-gradient(135deg, oklch(0.65 0.20 50), oklch(0.70 0.18 35))',
    gradientBrandText: 'linear-gradient(135deg, #fdba74, #fb923c)',
    gradientHeroBg: 'radial-gradient(ellipse 90% 50% at 50% -5%, rgba(234,88,12,0.28), transparent)',
    shadowBrand: '0 0 0 1px oklch(0.65 0.20 50 / 0.3), 0 4px 24px oklch(0.65 0.20 50 / 0.15)',
    colorBorderFocus: 'oklch(0.73 0.20 50)',
    colorTextBrand: 'oklch(0.80 0.14 50)',
    primary: 'oklch(0.65 0.20 50)',
    ring: 'oklch(0.73 0.20 50)',
    colorBorderBrand: 'oklch(0.38 0.09 50)',
  },
}

// Dot colors for the picker (approximate visible CSS colors)
export const THEME_DOT_COLORS: Record<ThemeColor, string> = {
  purple: '#a78bfa',
  blue: '#60a5fa',
  green: '#34d399',
  orange: '#fb923c',
}

export const THEME_LABELS: Record<ThemeColor, string> = {
  purple: 'Purple',
  blue: 'Blue',
  green: 'Green',
  orange: 'Orange',
}

function applyTheme(theme: ThemeColor) {
  const vars = THEME_VARS[theme]
  const root = document.documentElement
  root.style.setProperty('--color-brand', vars.brand)
  root.style.setProperty('--color-brand-bright', vars.brandBright)
  root.style.setProperty('--color-brand-muted', vars.brandMuted)
  root.style.setProperty('--color-brand-subtle', vars.brandSubtle)
  root.style.setProperty('--color-brand-glow', vars.brandGlow)
  root.style.setProperty('--gradient-brand', vars.gradientBrand)
  root.style.setProperty('--gradient-brand-text', vars.gradientBrandText)
  root.style.setProperty('--gradient-hero-bg', vars.gradientHeroBg)
  root.style.setProperty('--shadow-brand', vars.shadowBrand)
  root.style.setProperty('--color-border-focus', vars.colorBorderFocus)
  root.style.setProperty('--color-text-brand', vars.colorTextBrand)
  root.style.setProperty('--primary', vars.primary)
  root.style.setProperty('--ring', vars.ring)
  root.style.setProperty('--color-border-brand', vars.colorBorderBrand)
}

interface ThemeContextValue {
  theme: ThemeColor
  setTheme: (theme: ThemeColor) => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

const STORAGE_KEY = 'ch-theme'

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeColor>('purple')

  // Load from localStorage on mount and apply
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as ThemeColor | null
      if (stored && stored in THEME_VARS) {
        setThemeState(stored)
        applyTheme(stored)
      }
    } catch {
      // localStorage unavailable
    }
  }, [])

  const setTheme = useCallback((t: ThemeColor) => {
    setThemeState(t)
    applyTheme(t)
    try {
      localStorage.setItem(STORAGE_KEY, t)
    } catch {
      // ignore
    }
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext)
  if (!ctx) {
    throw new Error('useTheme must be used inside ThemeProvider')
  }
  return ctx
}
