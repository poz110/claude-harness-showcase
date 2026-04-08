import { SLASH_COMMANDS, type SlashCommand } from '@/lib/content/commands'
import { SECTION_IDS } from '@/lib/content/sections'

export function SlashCommands() {
  return (
    <section
      id={SECTION_IDS.slashCommands}
      className="py-24 px-4 sm:px-6 lg:px-8"
      aria-labelledby="slash-commands-heading"
      style={{ backgroundColor: 'var(--color-bg-primary)' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2
            id="slash-commands-heading"
            className="font-semibold mb-4"
            style={{
              fontSize: '2rem',
              lineHeight: 1.2,
              letterSpacing: '-0.015em',
              color: 'var(--color-zinc-50)',
            }}
          >
            Slash Commands
          </h2>
          <p
            style={{
              fontSize: '1.125rem',
              lineHeight: 1.65,
              color: 'var(--color-zinc-400)',
            }}
          >
            Three commands. Every scenario.
          </p>
        </div>

        {/* Commands layout: first card full-width on desktop, remaining 2 side-by-side */}
        <div className="space-y-6">
          {/* First command — featured */}
          <CommandCard command={SLASH_COMMANDS[0]} />

          {/* Remaining commands — side by side on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SLASH_COMMANDS.slice(1).map((cmd) => (
              <CommandCard key={cmd.id} command={cmd} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function CommandCard({ command }: { command: SlashCommand }) {
  return (
    <div
      className="slash-cmd-card rounded-xl p-6 border"
      style={{
        backgroundColor: 'var(--color-zinc-900)',
        borderColor: 'var(--color-brand-subtle)',
        borderLeftWidth: '4px',
        borderTopWidth: '1px',
        borderRightWidth: '1px',
        borderBottomWidth: '1px',
        borderLeftColor: 'var(--color-brand-muted)',
      }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3
            className="font-semibold mb-1"
            style={{
              fontSize: '1.25rem',
              color: 'var(--color-brand-bright)',
              fontFamily: 'var(--font-mono)',
            }}
          >
            {command.name}
          </h3>
          <p style={{ fontSize: '0.9375rem', color: 'var(--color-zinc-300)', lineHeight: 1.5 }}>
            {command.tagline}
          </p>
        </div>
        {command.badge && (
          <span
            className="shrink-0 ml-4 px-2.5 py-0.5 rounded-full text-xs font-medium"
            style={{
              backgroundColor: 'var(--color-zinc-800)',
              color: 'var(--color-zinc-300)',
              fontFamily: 'var(--font-mono)',
            }}
          >
            {command.badge}
          </span>
        )}
      </div>

      {/* Scenario */}
      <p
        className="mb-4 text-xs"
        style={{ color: 'var(--color-zinc-500)', fontFamily: 'var(--font-mono)' }}
      >
        Use case: {command.scenario}
      </p>

      {/* Divider */}
      <div
        className="mb-4"
        style={{ borderTop: '1px solid var(--color-zinc-800)' }}
        aria-hidden="true"
      />

      {/* Code example */}
      <pre
        className="rounded-lg px-4 py-3 text-xs overflow-x-auto"
        style={{
          backgroundColor: 'var(--color-code-bg)',
          color: 'var(--color-zinc-300)',
          fontFamily: 'var(--font-mono)',
          lineHeight: 1.7,
          whiteSpace: 'pre',
        }}
        aria-label={`${command.name} example output`}
      >
        <code>{command.exampleCode}</code>
      </pre>
    </div>
  )
}
