export async function getGitHubStarCount(): Promise<number | null> {
  try {
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 5000)
    const res = await fetch('https://api.github.com/repos/poz110/claude-harness', {
      next: { revalidate: 0 },
      signal: controller.signal,
      headers: {
        Accept: 'application/vnd.github.v3+json',
        ...(process.env.GITHUB_TOKEN
          ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
          : {}),
      },
    })
    clearTimeout(timeoutId)
    if (!res.ok) return null
    const data = await res.json() as { stargazers_count?: number }
    return typeof data.stargazers_count === 'number' ? data.stargazers_count : null
  } catch {
    return null
  }
}
