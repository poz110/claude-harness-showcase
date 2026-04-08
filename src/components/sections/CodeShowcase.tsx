'use client'

import { useState } from 'react'
import { CopyButton } from '@/components/shared/CopyButton'
import { CODE_EXAMPLES } from '@/lib/content/code-examples'
import { SECTION_IDS } from '@/lib/content/sections'

export function CodeShowcase() {
  const [activeId, setActiveId] = useState(CODE_EXAMPLES[0].id)

  const activeExample = CODE_EXAMPLES.find((e) => e.id === activeId) ?? CODE_EXAMPLES[0]

  return (
    <section
      id={SECTION_IDS.codeShowcase}
      className="py-24 px-4 sm:px-6 lg:px-8"
      aria-labelledby="code-showcase-heading"
      style={{ backgroundColor: 'var(--color-zinc-900)' }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2
            id="code-showcase-heading"
            className="font-semibold mb-4"
            style={{
              fontSize: '2rem',
              lineHeight: 1.2,
              letterSpacing: '-0.015em',
              color: 'var(--color-zinc-50)',
            }}
          >
            See It In Action
          </h2>
          <p
            style={{
              fontSize: '1.125rem',
              lineHeight: 1.65,
              color: 'var(--color-zinc-400)',
            }}
          >
            Real output from claude-harness workflows.
          </p>
        </div>

        {/* Tab container */}
        <div
          className="p-1 rounded-lg inline-flex gap-1 mb-6"
          role="tablist"
          aria-label="Code examples"
          style={{ backgroundColor: 'var(--color-zinc-800)' }}
        >
          {CODE_EXAMPLES.map((example) => {
            const isActive = example.id === activeId
            return (
              <button
                key={example.id}
                role="tab"
                aria-selected={isActive}
                aria-controls={`panel-${example.id}`}
                id={`tab-${example.id}`}
                onClick={() => setActiveId(example.id)}
                className="px-4 py-1.5 rounded text-sm transition-all focus-visible:outline-2 focus-visible:outline-offset-2"
                style={{
                  backgroundColor: isActive ? 'var(--color-zinc-700)' : 'transparent',
                  color: isActive ? 'var(--color-zinc-100)' : 'var(--color-zinc-400)',
                  fontFamily: 'var(--font-mono)',
                  transition: 'background-color 150ms ease, color 150ms ease',
                  cursor: 'pointer',
                  border: 'none',
                  outlineColor: 'var(--color-border-focus)',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    (e.currentTarget as HTMLElement).style.color = 'var(--color-zinc-300)'
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    (e.currentTarget as HTMLElement).style.color = 'var(--color-zinc-400)'
                  }
                }}
              >
                {example.label}
              </button>
            )
          })}
        </div>

        {/* Description */}
        {activeExample.description && (
          <p
            className="mb-4 text-sm"
            style={{ color: 'var(--color-zinc-400)', fontFamily: 'var(--font-mono)' }}
          >
            # {activeExample.description}
          </p>
        )}

        {/* Code panel */}
        {CODE_EXAMPLES.map((example) => (
          <div
            key={example.id}
            role="tabpanel"
            id={`panel-${example.id}`}
            aria-labelledby={`tab-${example.id}`}
            hidden={example.id !== activeId}
          >
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
                <CopyButton code={example.code} />
              </div>

              {/* Code */}
              <div className="px-5 py-4 overflow-x-auto">
                <pre
                  className="text-sm"
                  style={{
                    lineHeight: 1.7,
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--color-zinc-300)',
                    whiteSpace: 'pre',
                    margin: 0,
                  }}
                  aria-label={`${example.label} example`}
                >
                  <code>{example.code}</code>
                </pre>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
