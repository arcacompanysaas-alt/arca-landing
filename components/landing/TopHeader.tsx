'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { motion, AnimatePresence } from 'framer-motion'

export default function TopHeader() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Fecha o menu ao redimensionar para desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const isDark = !mounted || resolvedTheme === 'dark'

  const navLinks = [
    { label: 'Motor IA', href: '#ai-tools' },
    { label: 'Funcionalidades', href: '#features' },
    { label: 'Preços', href: '#pricing' },
  ]

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 border-b backdrop-blur-md ${
          isDark ? 'bg-ink-soft/80 border-white/5 shadow-2xl' : 'bg-white/90 border-gray-200 shadow-sm'
        }`}
      >
        <div className="flex items-center justify-between px-6 md:px-12 py-4">
          {/* Logo */}
          <div className={`font-extrabold text-lg tracking-widest ${isDark ? 'text-white' : 'text-brand'}`}>
            ARCA
          </div>

          {/* Desktop nav */}
          <nav className={`hidden md:flex items-center gap-8 text-sm font-medium ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
            {navLinks.map(l => (
              <a key={l.href} href={l.href} className="hover:text-brand transition-colors">{l.label}</a>
            ))}
          </nav>

          {/* Desktop actions */}
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => setTheme(isDark ? 'light' : 'dark')}
              aria-label="Alternar tema"
              className={`p-2 rounded-full border transition-all duration-300 ${
                isDark ? 'border-white/10 text-white/70 hover:text-white' : 'border-gray-200 text-gray-500 hover:text-brand bg-gray-50'
              }`}
            >
              {mounted ? (isDark ? '☀️' : '🌙') : '☀️'}
            </button>
            <a href="#login" className={`text-sm font-bold transition-colors duration-300 ${isDark ? 'text-white/80 hover:text-white' : 'text-gray-600 hover:text-brand'}`}>
              Login
            </a>
            <a href="#pricing" className="px-5 py-2 text-sm font-bold rounded-lg bg-brand text-white hover:bg-brand-dark transition-colors shadow-md">
              Começar Grátis
            </a>
          </div>

          {/* Mobile: toggle tema + hamburguer */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={() => setTheme(isDark ? 'light' : 'dark')}
              aria-label="Alternar tema"
              className={`p-2 rounded-full border transition-all duration-300 ${
                isDark ? 'border-white/10 text-white/70' : 'border-gray-200 text-gray-500 bg-gray-50'
              }`}
            >
              {mounted ? (isDark ? '☀️' : '🌙') : '☀️'}
            </button>
            <button
              onClick={() => setMenuOpen(o => !o)}
              aria-label="Menu"
              className={`p-2 rounded-lg border transition-all duration-300 ${
                isDark ? 'border-white/10 text-white/70' : 'border-gray-200 text-gray-600 bg-gray-50'
              }`}
            >
              <motion.div animate={menuOpen ? 'open' : 'closed'} className="w-5 h-4 flex flex-col justify-between">
                <motion.span
                  variants={{ open: { rotate: 45, y: 7 }, closed: { rotate: 0, y: 0 } }}
                  transition={{ duration: 0.25 }}
                  className={`block h-0.5 rounded-full ${isDark ? 'bg-white/80' : 'bg-gray-700'}`}
                />
                <motion.span
                  variants={{ open: { opacity: 0, scaleX: 0 }, closed: { opacity: 1, scaleX: 1 } }}
                  transition={{ duration: 0.2 }}
                  className={`block h-0.5 rounded-full ${isDark ? 'bg-white/80' : 'bg-gray-700'}`}
                />
                <motion.span
                  variants={{ open: { rotate: -45, y: -7 }, closed: { rotate: 0, y: 0 } }}
                  transition={{ duration: 0.25 }}
                  className={`block h-0.5 rounded-full ${isDark ? 'bg-white/80' : 'bg-gray-700'}`}
                />
              </motion.div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className={`fixed top-[61px] inset-x-0 z-40 md:hidden border-b px-6 py-6 flex flex-col gap-5 backdrop-blur-md ${
              isDark ? 'bg-ink-soft/95 border-white/10' : 'bg-white/95 border-gray-200 shadow-lg'
            }`}
          >
            {navLinks.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
                className={`text-base font-bold transition-colors ${isDark ? 'text-white/80 hover:text-white' : 'text-gray-700 hover:text-brand'}`}
              >
                {l.label}
              </motion.a>
            ))}
            <div className={`h-px ${isDark ? 'bg-white/10' : 'bg-gray-200'}`} />
            <div className="flex flex-col gap-3">
              <a href="#login" className={`text-sm font-bold text-center py-2.5 rounded-xl border transition-colors ${isDark ? 'border-white/20 text-white' : 'border-gray-300 text-gray-700'}`}>
                Login
              </a>
              <a href="#pricing" className="text-sm font-bold text-center py-3 rounded-xl bg-brand text-white shadow-lg shadow-brand/30">
                Começar Grátis →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
