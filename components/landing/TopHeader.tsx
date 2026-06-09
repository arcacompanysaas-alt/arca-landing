'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

export default function TopHeader() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    setMounted(true)
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isDark = !mounted || resolvedTheme === 'dark'

  return (
    <header
      className={`fixed top-0 w-full px-12 py-4 flex items-center justify-between z-50 transition-all duration-500 border-b backdrop-blur-md ${
        isDark
          ? 'bg-ink-soft/80 border-white/5 shadow-2xl'
          : 'bg-white/90 border-gray-200 shadow-sm'
      }`}
    >
      {/* Logo + Nav */}
      <div className="flex items-center gap-10">
        <div className={`font-extrabold text-lg tracking-widest ${isDark ? 'text-white' : 'text-brand'}`}>
          ARCA
        </div>
        <nav className={`hidden md:flex items-center gap-8 text-sm font-medium ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
          <a href="#ai-tools" className="hover:text-brand transition-colors">Motor IA</a>
          <a href="#features" className="hover:text-brand transition-colors">Funcionalidades</a>
          <a href="#pricing" className="hover:text-brand transition-colors">Preços</a>
        </nav>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-6">
        <button
          onClick={() => setTheme(isDark ? 'light' : 'dark')}
          aria-label="Alternar tema"
          className={`p-2 rounded-full border transition-all duration-300 ${
            isDark
              ? 'border-white/10 text-white/70 hover:text-white'
              : 'border-gray-200 text-gray-500 hover:text-brand bg-gray-50'
          }`}
        >
          {mounted ? (isDark ? '☀️' : '🌙') : '☀️'}
        </button>
        <a
          href="#login"
          className={`text-sm font-bold transition-colors duration-300 ${
            isDark ? 'text-white/80 hover:text-white' : 'text-gray-600 hover:text-brand'
          }`}
        >
          Login
        </a>
        <a
          href="#pricing"
          className="px-5 py-2 text-sm font-bold rounded-lg bg-brand text-white hover:bg-brand-dark transition-colors shadow-md"
        >
          Começar Grátis
        </a>
      </div>
    </header>
  )
}
