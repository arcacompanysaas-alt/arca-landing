'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import NetworkCoreBackground from '@/components/effects/NetworkCoreBackground'
import TopHeader from '@/components/landing/TopHeader'
import HeroSticky from '@/components/landing/HeroSticky'

export default function LandingShell() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const isDark = !mounted || resolvedTheme === 'dark'

  return (
    <div className="relative w-full">
      <NetworkCoreBackground isDark={isDark} />
      <div
        className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-700"
        style={{
          backgroundImage: `radial-gradient(${isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,71,224,0.08)'} 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <TopHeader />

      {/* pt-20 compensa a altura do header fixo */}
      <div className="pt-20">
        <HeroSticky isDark={isDark} />
      </div>
    </div>
  )
}
