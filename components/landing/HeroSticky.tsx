'use client'

import { useRef, useState } from 'react'
import { motion, AnimatePresence, useMotionValueEvent, useScroll, useTransform, useMotionValue, PanInfo } from 'framer-motion'
import { HERO_DATA } from '@/lib/data'

function getCardStyle(cardIndex: number, active: number, isDark: boolean): React.CSSProperties {
  const diff = cardIndex - active
  if (diff < 0) return { transform: 'translateX(-140%) scale(0.9) rotate(-8deg)', opacity: 0, zIndex: 40 }
  if (diff === 0) return {
    transform: 'translateX(0) scale(1) rotate(0deg)', opacity: 1, zIndex: 30,
    boxShadow: isDark ? '0 40px 90px rgba(0,0,0,0.8)' : '0 40px 90px rgba(0,71,224,0.15)',
  }
  if (diff === 1) return { transform: 'translateX(60px) scale(0.94) translateZ(-60px) rotate(2deg)', opacity: 0.6, zIndex: 20 }
  return { transform: 'translateX(120px) scale(0.88) translateZ(-120px) rotate(4deg)', opacity: 0.25, zIndex: 10 }
}

/* ── Mobile Hero: Keynote carousel com drag ── */
function HeroMobile({ isDark }: { isDark: boolean }) {
  const [active, setActive] = useState(0)
  const dragX = useMotionValue(0)
  const total = HERO_DATA.length

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 50
    if (info.offset.x < -threshold && active < total - 1) {
      setActive((p) => p + 1)
    } else if (info.offset.x > threshold && active > 0) {
      setActive((p) => p - 1)
    }
    dragX.set(0)
  }

  const item = HERO_DATA[active]

  return (
    <section className="relative w-full pt-10 pb-10 flex flex-col min-h-screen overflow-hidden">

      {/* 1 — Título Focus: palavra grande com vertical slide + fade */}
      <div className="px-6 mb-2 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.p
            key={item.bg}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className={`text-[11vw] font-extrabold tracking-tighter leading-none select-none ${
              isDark
                ? 'text-transparent [-webkit-text-stroke:1.5px_rgba(255,255,255,0.12)]'
                : 'text-transparent [-webkit-text-stroke:1.5px_rgba(0,71,224,0.2)]'
            }`}
          >
            {item.bg}
          </motion.p>
        </AnimatePresence>
      </div>

      {/* 2 — Carrossel de profundidade com drag */}
      <div className="relative w-full flex items-center justify-center mb-6" style={{ height: '56vw', maxHeight: 280 }}>
        {HERO_DATA.map((slide, i) => {
          const diff = i - active
          // Só renderiza o card ativo e os vizinhos imediatos
          if (Math.abs(diff) > 1) return null
          const isActive = diff === 0
          return (
            <motion.div
              key={i}
              drag={isActive ? 'x' : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              style={{ x: isActive ? dragX : 0, width: '75vw', maxWidth: 300, height: '100%', left: '50%', marginLeft: '-37.5vw' }}
              onDragEnd={isActive ? handleDragEnd : undefined}
              animate={{
                scale: isActive ? 1 : 0.8,
                opacity: isActive ? 1 : 0.35,
                x: isActive ? 0 : diff * 260,
                zIndex: isActive ? 20 : 10,
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="absolute"
            >
              <div className={`relative w-full h-full rounded-2xl overflow-hidden border ${
                isDark ? 'border-white/10' : 'border-gray-200'
              }`}
                style={{
                  boxShadow: isActive
                    ? isDark ? '0 24px 60px rgba(0,0,0,0.8)' : '0 24px 60px rgba(0,71,224,0.18)'
                    : 'none',
                }}
              >
                <div className={`absolute inset-0 z-10 ${isDark ? 'bg-gradient-to-t from-ink/80 via-ink/10 to-transparent' : 'bg-gradient-to-t from-[#0C1524]/60 via-transparent to-transparent'}`} />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={slide.img} alt={slide.title} className="absolute inset-0 w-full h-full object-cover" />
                {isActive && (
                  <div className={`absolute inset-x-3 bottom-3 p-2.5 rounded-xl backdrop-blur-md z-20 border ${isDark ? 'bg-ink-soft/90 border-white/10' : 'bg-white/95 border-gray-200 shadow-md'}`}>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-brand-light animate-pulse flex-shrink-0" />
                      <div>
                        <div className="text-[8px] font-bold uppercase tracking-wider text-gray-500">Engine Editorial</div>
                        <div className={`text-[11px] font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{slide.status}</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Dots de paginação */}
      <div className="flex items-center justify-center gap-2 mb-6">
        {HERO_DATA.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`rounded-full transition-all duration-300 ${
              i === active
                ? 'w-5 h-1.5 bg-brand'
                : isDark ? 'w-1.5 h-1.5 bg-white/20' : 'w-1.5 h-1.5 bg-gray-300'
            }`}
          />
        ))}
      </div>

      {/* 3 — Copy de suporte: tag + título + texto com AnimatePresence */}
      <div className="px-6 flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
          >
            <span className={`inline-block px-3 py-1 rounded-full font-bold text-[10px] tracking-widest uppercase mb-3 border ${
              isDark ? 'bg-brand/20 text-brand-light border-brand/30' : 'bg-brand/10 text-brand border-brand/20'
            }`}>
              Módulo {item.step}
            </span>
            <h2 className={`text-2xl font-extrabold tracking-tight mb-3 leading-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {item.title}
            </h2>
            <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              {item.text}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 4 — CTA sempre ancorado */}
      <div className="px-6 mt-6">
        <button className={`w-full btn-shine relative overflow-hidden px-8 py-4 font-extrabold text-base rounded-xl transition-all duration-300 active:scale-[0.98] ${
          isDark ? 'bg-white text-brand shadow-[0_0_30px_rgba(255,255,255,0.15)]' : 'bg-brand text-white shadow-xl shadow-brand/30'
        }`}>
          Começar Grátis Agora →
        </button>
        <div className="flex items-center gap-3 mt-4 justify-center">
          {['✓ 14 Dias Grátis', '⚡ Setup 3 Min'].map((t) => (
            <span key={t} className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-[10px] font-bold tracking-widest uppercase ${
              isDark ? 'bg-white/5 border-white/10 text-white/70' : 'bg-gray-100 border-gray-200 text-gray-600'
            }`}>
              <span className={isDark ? 'text-brand-light' : 'text-brand'}>{t[0]}</span> {t.slice(2)}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Desktop Hero: scroll-sticky 300vh com card deck ── */
function HeroDesktop({ isDark }: { isDark: boolean }) {
  const sectionRef = useRef<HTMLElement>(null)
  const [active, setActive] = useState(0)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  useMotionValueEvent(scrollYProgress, 'change', (p) => {
    const next = Math.min(2, Math.max(0, Math.round(p * 2)))
    setActive((prev) => (prev === next ? prev : next))
  })

  const railHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
  const bgY = `calc(-50% + ${(active - 1) * -80}px)`

  return (
    <section ref={sectionRef} className="relative w-full h-[300vh]">
      <div className="sticky top-0 w-full h-screen flex justify-center overflow-hidden">
        <div className="relative w-full max-w-6xl h-full flex items-center px-8 z-10">
          {/* Background keyword */}
          <div
            className={`absolute left-0 top-1/2 text-[14vw] font-extrabold tracking-tighter select-none transition-all duration-1000 ease-out whitespace-nowrap pointer-events-none ${
              isDark ? 'text-transparent [-webkit-text-stroke:1.5px_rgba(255,255,255,0.04)]' : 'text-transparent [-webkit-text-stroke:1.5px_rgba(0,71,224,0.15)]'
            }`}
            style={{ transform: `translateY(${bgY})` }}
          >
            {HERO_DATA[active].bg}
          </div>

          {/* Progress rail */}
          <div className="relative h-[50%] w-6 flex flex-col items-center mr-8 z-20">
            <div className={`absolute top-0 bottom-0 w-[1.5px] rounded-full ${isDark ? 'bg-white/10' : 'bg-brand/10'}`} />
            <motion.div
              className={`absolute top-0 w-[1.5px] rounded-full ${isDark ? 'bg-brand-light shadow-[0_0_10px_rgba(64,128,255,0.8)]' : 'bg-brand'}`}
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
                  <span className={`inline-block px-3 py-1 rounded-full font-bold text-[10px] tracking-widest uppercase mb-4 border ${
                    isDark ? 'bg-brand/20 text-brand-light border-brand/30' : 'bg-brand/10 text-brand border-brand/20'
                  }`}>
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
              <button className={`btn-shine relative overflow-hidden px-8 py-4 font-extrabold text-base rounded-xl transition-all duration-300 hover:scale-[1.02] ${
                isDark ? 'bg-white text-brand shadow-[0_0_30px_rgba(255,255,255,0.15)]' : 'bg-brand text-white shadow-xl shadow-brand/30'
              }`}>
                Começar Grátis Agora →
              </button>
              <div className="flex items-center gap-3 mt-5">
                {['✓ 14 Dias Grátis', '⚡ Setup 3 Min'].map((t) => (
                  <span key={t} className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-[10px] font-bold tracking-widest uppercase ${
                    isDark ? 'bg-white/5 border-white/10 text-white/70' : 'bg-gray-100 border-gray-200 text-gray-600'
                  }`}>
                    <span className={isDark ? 'text-brand-light' : 'text-brand'}>{t[0]}</span> {t.slice(2)}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Card deck */}
          <div className="relative w-7/12 h-[550px] [perspective:1500px] flex items-center justify-center z-10">
            {HERO_DATA.map((item, i) => (
              <div
                key={i}
                className={`absolute w-full max-w-sm aspect-[3/4] rounded-2xl overflow-hidden border transition-all duration-700 ease-lux ${isDark ? 'border-white/10' : 'border-gray-200'}`}
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

/* ── Export: renderiza Mobile ou Desktop com base no breakpoint ── */
export default function HeroSticky({ isDark }: { isDark: boolean }) {
  return (
    <>
      {/* Mobile: scroll nativo com fade-in-up */}
      <div className="md:hidden">
        <HeroMobile isDark={isDark} />
      </div>
      {/* Desktop: scroll-jacking sticky */}
      <div className="hidden md:block">
        <HeroDesktop isDark={isDark} />
      </div>
    </>
  )
}
