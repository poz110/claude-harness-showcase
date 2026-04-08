import { createHighlighter, type Highlighter } from 'shiki'

let highlighterPromise: Promise<Highlighter> | null = null

function getHighlighter(): Promise<Highlighter> {
  if (!highlighterPromise) {
    highlighterPromise = createHighlighter({
      themes: ['github-dark'],
      langs: ['bash', 'typescript', 'json', 'text'],
    })
  }
  return highlighterPromise
}

export async function highlight(code: string, lang: string): Promise<string> {
  try {
    const highlighter = await getHighlighter()
    const supportedLang = ['bash', 'typescript', 'json'].includes(lang) ? lang : 'text'
    return highlighter.codeToHtml(code, {
      lang: supportedLang,
      theme: 'github-dark',
    })
  } catch {
    // Fallback to plain text
    const escaped = code
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
    return `<pre><code>${escaped}</code></pre>`
  }
}
