// GitHub SVG icon (lucide-react v1 doesn't include Github)
function GithubIcon({ size = 14 }: { size?: number }) {
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

export function Footer() {
  const year = 2026

  return (
    <footer
      className="border-t py-12"
      style={{
        borderColor: 'var(--color-zinc-800)',
        backgroundColor: 'var(--color-bg-primary)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <span
              className="flex items-center justify-center w-6 h-6 rounded text-xs font-bold"
              style={{ background: 'var(--gradient-brand)', color: 'white' }}
            >
              ch
            </span>
            <span
              className="text-sm font-medium"
              style={{ color: 'var(--color-zinc-300)', fontFamily: 'var(--font-mono)' }}
            >
              claude-harness
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm footer-links" style={{ color: 'var(--color-zinc-400)' }}>
            <a
              href="https://github.com/poz110/claude-harness"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link flex items-center gap-1.5"
            >
              <GithubIcon size={14} />
              GitHub
            </a>
            <a
              href="https://github.com/poz110/claude-harness/blob/main/LICENSE"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              MIT License
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs" style={{ color: 'var(--color-zinc-500)' }}>
            &copy; {year} claude-harness contributors
          </p>
        </div>
      </div>
    </footer>
  )
}
