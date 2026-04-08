'use client'

import { useState, useCallback } from 'react'
import { Copy, Check, Loader2 } from 'lucide-react'

type CopyState = 'IDLE' | 'COPYING' | 'COPIED' | 'FALLBACK'

interface CopyButtonProps {
  code: string
  className?: string
}

export function CopyButton({ code, className }: CopyButtonProps) {
  const [state, setState] = useState<CopyState>('IDLE')
  const [showFallback, setShowFallback] = useState(false)

  const handleCopy = useCallback(async () => {
    if (state !== 'IDLE') return
    setState('COPYING')
    setShowFallback(false)

    // Minimum spinner display time
    const minDelay = new Promise<void>((resolve) => setTimeout(resolve, 300))

    try {
      await Promise.all([navigator.clipboard.writeText(code), minDelay])
      setState('COPIED')
      setTimeout(() => setState('IDLE'), 2000)
    } catch {
      await minDelay
      setState('FALLBACK')
      setShowFallback(true)
      setTimeout(() => {
        setState('IDLE')
      }, 0)
    }
  }, [code, state])

  const ariaLabel =
    state === 'COPYING' ? 'Copying...' : state === 'COPIED' ? 'Copied!' : state === 'FALLBACK' ? 'Copy failed' : 'Copy code'

  return (
    <div className={className}>
      <button
        onClick={handleCopy}
        aria-label={ariaLabel}
        className="flex items-center justify-center w-8 h-8 rounded-md transition-colors duration-150 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2"
        style={{
          outlineColor: 'var(--color-border-focus)',
          color: state === 'COPIED' ? 'var(--color-success)' : 'var(--color-zinc-400)',
        }}
      >
        {state === 'COPYING' ? (
          <Loader2 size={16} className="animate-spin" />
        ) : state === 'COPIED' ? (
          <Check size={16} />
        ) : (
          <Copy size={16} />
        )}
      </button>
      {showFallback && (
        <p
          className="mt-2 text-xs"
          style={{ color: 'var(--color-zinc-500)', fontSize: '13px' }}
        >
          Could not copy. Please select and copy manually.
        </p>
      )}
    </div>
  )
}
