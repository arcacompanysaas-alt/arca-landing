'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import NetworkCoreBackground from '@/components/effects/NetworkCoreBackground'
import HeroSticky from '@/components/landing/HeroSticky'

/**
 * Client shell that owns the resolved theme and renders the global ambient
 * background + the hero. Additional sections (AIToolkit, BentoFeatures, …)
 * will be slotted in here as they are built.
 */
export default function LandingShell() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  // Default to the dark visual treatment until the theme is resolved to avoid
  // a hydration flash; matches defaultTheme="dark".
  const isDark = !mounted || resolvedTheme === 'dark'

  return (
    <div className="relative w-full">
      <NetworkCoreBackground isDark={isDark} />
      <div
        className="absolute inset-0 pointer-events-none z-0 transition-opacity duration-700"
        style={{
          backgroundImage: `radial-gradient(${isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,71,224,0.08)'} 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Temporary theme toggle — will move into TopHeader when that component lands. */}
      <button
        onClick={() => setTheme(isDark ? 'light' : 'dark')}
        aria-label="Alternar tema"
        className={`fixed top-6 right-6 z-50 p-2 rounded-full border transition-all duration-300 ${
          isDark ? 'border-white/10 text-white/70 hover:text-white bg-ink-soft/60' : 'border-gray-200 text-gray-500 hover:text-brand bg-white/80'
        }`}
      >
        {isDark ? '☀️' : '🌙'}
      </button>

      <HeroSticky isDark={isDark} />
    </div>
  )
}
