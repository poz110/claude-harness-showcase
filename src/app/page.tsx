import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/sections/HeroSection'
import { FeaturesGrid } from '@/components/sections/FeaturesGrid'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { SlashCommands } from '@/components/sections/SlashCommands'
import { CodeShowcase } from '@/components/sections/CodeShowcase'
import { GettingStarted } from '@/components/sections/GettingStarted'
import { FAQ } from '@/components/sections/FAQ'
import { getGitHubStarCount } from '@/lib/github'

export default async function Home() {
  // Fetch star count at build time; fails gracefully
  const starCount = await getGitHubStarCount()

  return (
    <>
      {/* Skip to content */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm"
        style={{
          backgroundColor: 'var(--color-brand)',
          color: 'white',
        }}
      >
        Skip to content
      </a>

      {/* Sticky Navbar */}
      <Navbar starCount={starCount} />

      {/* Main content */}
      <main id="main">
        {/* Section order per CEO Review:
            1. Hero
            2. Features
            3. How It Works
            4. Slash Commands
            5. Code Showcase  (before Getting Started per CEO decision)
            6. Getting Started
            7. FAQ
        */}
        <HeroSection />
        <FeaturesGrid />
        <HowItWorks />
        <SlashCommands />
        <CodeShowcase />
        <GettingStarted />
        <FAQ />
      </main>

      <Footer />
    </>
  )
}
