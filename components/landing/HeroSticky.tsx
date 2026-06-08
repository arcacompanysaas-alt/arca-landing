'use client'

import { useRef, useState } from 'react'
import { motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion'
import { useTheme } from 'next-themes'
import { HERO_DATA } from '@/lib/data'

/**
 * Card stacking transform for the editorial preview deck.
 * Identical geometry to the reference prototype's getCardStyle().
 */
function getCardStyle(cardIndex: number, active: number, isDark: boolean): React.CSSProperties {
  const diff = cardIndex - active
  if (diff < 0) {
    return { transform: 'translateX(-140%) scale(0.9) rotate(-8deg)', opacity: 0, zIndex: 40 }
  }
  if (diff === 0) {
    return {
      transform: 'translateX(0) scale(1) rotate(0deg)',
      opacity: 1,
      zIndex: 30,
      boxShadow: isDark ? '0 40px 90px rgba(0,0,0,0.8)' : '0 40px 90px rgba(0,71,224,0.15)',
    }
  }
  if (diff === 1) {
    return { transform: 'translateX(60px) scale(0.94) translateZ(-60px) rotate(2deg)', opacity: 0.6, zIndex: 20 }
  }
  return { transform: 'translateX(120px) scale(0.88) translateZ(-120px) rotate(4deg)', opacity: 0.25, zIndex: 10 }
}

export default function HeroSticky({ isDark }: { isDark: boolean }) {
  const sectionRef = useRef<HTMLElement>(null)
  const [active, setActive] = useState(0)

  // scrollYProgress runs 0 -> 1 across the 300vh section while the inner
  // panel is pinned. This replaces the manual scroll-math from the prototype.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  // Drive the active slide (0..2) from scroll progress, bucketed like the original.
  useMotionValueEvent(scrollYProgress, 'change', (p) => {
    const next = Math.min(2, Math.max(0, Math.round(p * 2)))
    setActive((prev) => (prev === next ? prev : next))
  })

  // Progress rail fill (0 -> 100%).
  const railHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
  // Outlined background word drifts vertically with the active slide.
  const bgY = `calc(-50% + ${(active - 1) * -80}px)`

  return (
    <section ref={sectionRef} className="relative w-full h-[300vh]">
      <div className="sticky top-0 w-full h-screen flex justify-center overflow-hidden">
        <div className="relative w-full max-w-6xl h-full flex items-center px-8 z-10">
          {/* Giant outlined keyword */}
          <div
            className={`absolute left-0 top-1/2 text-[14vw] font-extrabold tracking-tighter select-none transition-all duration-1000 ease-out whitespace-nowrap pointer-events-none ${
              isDark ? 'text-transparent [-webkit-text-stroke:1.5px_rgba(255,255,255,0.04)]' : 'text-transparent [-webkit-text-stroke:1.5px_rgba(0,71,224,0.15)]'
            }`}
            style={{ transform: `translateY(${bgY})` }}
          >
            {HERO_DATA[active].bg}
          </div>

          {/* Progress rail with step nodes */}
          <div className="relative h-[50%] w-6 flex flex-col items-center mr-8 z-20">
            <div className={`absolute top-0 bottom-0 w-[1.5px] rounded-full ${isDark ? 'bg-white/10' : 'bg-brand/10'}`} />
            <motion.div
              className={`absolute top-0 w-[1.5px] rounded-full ${
                isDark ? 'bg-brand-light shadow-[0_0_10px_rgba(64,128,255,0.8)]' : 'bg-brand'
              }`}
              style={{ height: railHeight }}
            />
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={`absolute w-2.5 h-2.5 rounded-full border-2 transition-colors duration-500 ${isDark ? 'bg-ink' : 'bg-white'}`}
                style={{
                  top: `${(i / 2) * 100}%`,
                  transform: 'translateY(-50%)',
                  borderColor: active >= i ? (isDark ? '#4080FF' : '#0047E0') : isDark ? 'rgba(255,255,255,0.2)' : '#cbd5e1',
                  boxShadow: active === i ? (isDark ? '0 0 0 4px rgba(64,128,255,0.2)' : '0 0 0 4px rgba(0,71,224,0.15)') : 'none',
                }}
              />
            ))}
          </div>

          {/* Copy column */}
          <div className="relative w-5/12 pr-6 z-20 flex flex-col justify-center">
            <div className="relative h-[240px] mb-8">
              {HERO_DATA.map((item, i) => (
                <div
                  key={i}
                  className="absolute top-0 left-0 w-full transition-all duration-700"
                  style={{
                    opacity: active === i ? 1 : 0,
                    transform: active === i ? 'translateY(0)' : 'translateY(20px)',
                    pointerEvents: active === i ? 'auto' : 'none',
                  }}
                >
                  <span
                    className={`inline-block px-3 py-1 rounded-full font-bold text-[10px] tracking-widest uppercase mb-4 border ${
                      isDark ? 'bg-brand/20 text-brand-light border-brand/30' : 'bg-brand/10 text-brand border-brand/20'
                    }`}
                  >
                    Módulo {item.step}
                  </span>
                  <h2 className={`text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 leading-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {item.title}
                  </h2>
                  <p className={`text-base leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{item.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <button
                className={`btn-shine relative overflow-hidden px-8 py-4 font-extrabold text-base rounded-xl transition-all duration-300 hover:scale-[1.02] ${
                  isDark ? 'bg-white text-brand shadow-[0_0_30px_rgba(255,255,255,0.15)]' : 'bg-brand text-white shadow-xl shadow-brand/30'
                }`}
              >
                Começar Grátis Agora →
              </button>
              <div className="flex items-center gap-3 mt-5">
                {['✓ 14 Dias Grátis', '⚡ Setup 3 Min'].map((t) => (
                  <span
                    key={t}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-[10px] font-bold tracking-widest uppercase ${
                      isDark ? 'bg-white/5 border-white/10 text-white/70' : 'bg-gray-100 border-gray-200 text-gray-600'
                    }`}
                  >
                    <span className={isDark ? 'text-brand-light' : 'text-brand'}>{t[0]}</span> {t.slice(2)}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Editorial card deck */}
          <div className="relative w-7/12 h-[550px] [perspective:1500px] flex items-center justify-center z-10">
            {HERO_DATA.map((item, i) => (
              <div
                key={i}
                className={`absolute w-full max-w-sm aspect-[3/4] rounded-2xl overflow-hidden border transition-all duration-700 ease-lux ${
                  isDark ? 'border-white/10' : 'border-gray-200'
                }`}
                style={getCardStyle(i, active, isDark)}
              >
                <div className={`absolute inset-0 z-10 ${isDark ? 'bg-gradient-to-t from-ink/90 via-ink/40 to-transparent' : 'bg-gradient-to-t from-[#0C1524]/60 via-transparent to-transparent'}`} />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover" />
                <div className={`absolute inset-x-6 bottom-6 p-4 rounded-xl backdrop-blur-md z-20 border ${isDark ? 'bg-ink-soft/90 border-white/10' : 'bg-white/95 border-gray-200 shadow-lg'}`}>
                  <div className="flex items-center gap-3">
                    <div className={`w-2.5 h-2.5 rounded-full ${i === active ? 'bg-brand-light animate-pulse' : 'bg-brand'}`} />
                    <div>
                      <div className="text-[9px] font-bold uppercase tracking-wider text-gray-500">Engine Editorial</div>
                      <div className={`text-sm font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{item.status}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
