import { highlight } from '@/lib/highlight'
import { CopyButton } from './CopyButton'

interface CodeBlockProps {
  code: string
  lang: 'bash' | 'typescript' | 'json' | 'text'
  showCopy?: boolean
  ariaLabel?: string
  title?: string
}

export async function CodeBlock({
  code,
  lang,
  showCopy = true,
  ariaLabel,
  title,
}: CodeBlockProps) {
  const highlightedHtml = await highlight(code, lang)
  const langLabel = (title ?? lang).toUpperCase()
  const a11yLabel = ariaLabel ?? `${lang} code example`

  return (
    <div
      role="region"
      aria-label={a11yLabel}
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
          backgroundColor: 'var(--color-zinc-800)',
          height: '36px',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <span
          className="font-mono text-xs tracking-wider"
          style={{ color: 'var(--color-zinc-400)', fontFamily: 'var(--font-mono)' }}
        >
          {langLabel}
        </span>
        {showCopy && (
          <div className="relative">
            <CopyButton code={code} />
          </div>
        )}
      </div>

      {/* Code area */}
      <div className="px-5 py-4 overflow-x-auto">
        <div
          className="text-sm"
          style={{ lineHeight: '1.7', fontFamily: 'var(--font-mono)' }}
          // Shiki output is server-side generated trusted content, not user input
          dangerouslySetInnerHTML={{ __html: highlightedHtml }}
        />
      </div>
    </div>
  )
}
