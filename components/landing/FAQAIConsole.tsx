'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/* ─── Hook customizado para efeito de digitação AI ─── */
function useStreamingText(text: string, isActive: boolean, duration: number = 800) {
  const [displayedText, setDisplayedText] = useState('')
  const [isComplete, setIsComplete] = useState(false)
  const animationRef = useRef<number | null>(null)
  const startTimeRef = useRef<number | null>(null)

  useEffect(() => {
    if (!isActive) {
      setDisplayedText('')
      setIsComplete(false)
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
      return
    }

    setDisplayedText('')
    setIsComplete(false)
    startTimeRef.current = Date.now()

    const animate = () => {
      if (!startTimeRef.current) return

      const elapsed = Date.now() - startTimeRef.current
      const progress = Math.min(elapsed / duration, 1)
      const charsToShow = Math.floor(progress * text.length)

      setDisplayedText(text.slice(0, charsToShow))

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate)
      } else {
        setIsComplete(true)
        animationRef.current = null
      }
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
    }
  }, [isActive, text, duration])

  return { displayedText, isComplete }
}

/* ─── FAQ Item ─── */
interface FAQItemData {
  id: string
  question: string
  answer: string
}

function FAQItem({
  item,
  isOpen,
  onClick,
  isDark,
}: {
  item: FAQItemData
  isOpen: boolean
  onClick: () => void
  isDark: boolean
}) {
  const { displayedText, isComplete } = useStreamingText(item.answer, isOpen, 900)

  return (
    <div
      className={`rounded-xl border transition-all duration-300 ${
        isOpen
          ? isDark
            ? 'bg-ink-card border-brand-light/40 shadow-lg shadow-brand/20'
            : 'bg-white border-brand/30 shadow-lg shadow-brand/10'
          : isDark
            ? 'bg-ink-soft/40 border-white/10 hover:border-white/20'
            : 'bg-white border-gray-200 hover:border-gray-300'
      }`}
    >
      {/* Question trigger */}
      <button
        onClick={onClick}
        className={`w-full px-6 py-4 flex items-center justify-between text-left transition-colors ${isDark ? 'hover:bg-ink-card/40' : 'hover:bg-gray-50'}`}
      >
        <span className={`font-bold text-base ${isDark ? 'text-white' : 'text-gray-900'}`}>
          {item.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className={`flex-shrink-0 ml-4 ${isDark ? 'text-brand-light' : 'text-brand'}`}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </motion.div>
      </button>

      {/* Answer animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`border-t ${isDark ? 'border-white/10' : 'border-gray-200'}`}
          >
            <div className="px-6 py-4">
              <div className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                {displayedText}
                {!isComplete && (
                  <motion.span
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 0.6, repeat: Infinity }}
                    className="inline-block ml-0.5 font-bold text-brand-light"
                  >
                    █
                  </motion.span>
                )}
              </div>
              {isComplete && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className={`mt-3 text-[10px] font-bold uppercase tracking-widest ${isDark ? 'text-gray-600' : 'text-gray-400'}`}
                >
                  ✓ Resposta processada
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

/* ─── Main export ─── */
export default function FAQAIConsole({ isDark }: { isDark: boolean }) {
  const [openId, setOpenId] = useState<string | null>(null)

  const faqs: FAQItemData[] = [
    {
      id: 'faq-01',
      question: 'Preciso de conhecimentos de programação para usar a ARCA?',
      answer:
        'Zero. A ARCA foi desenhada com linguagem natural. Se você sabe conversar com o seu cliente e usar o WhatsApp, você sabe operar o nosso Motor Generativo e o Construtor Magnético.',
    },
    {
      id: 'faq-02',
      question: 'O meu cliente vai ver a marca da ARCA no roteiro final?',
      answer:
        'Absolutamente não. A nossa arquitetura é 100% White Label. O roteiro interativo é gerado e hospedado sob o seu domínio próprio (ex: propostas.suaagencia.com.br). O palco é exclusivamente seu.',
    },
    {
      id: 'faq-03',
      question: 'Como funciona a importação dos meus roteiros antigos em Word/PDF?',
      answer:
        'Basta arrastar o seu arquivo legado para o nosso Reconstrutor de IA. O sistema lê o seu texto desestruturado, recorta hotéis, voos e descrições, e monta o itinerário na nossa grade editorial em menos de 10 segundos.',
    },
  ]

  return (
    <section id="faq" className="relative w-full py-24 px-12 z-20">
      <div className="max-w-3xl mx-auto">
        {/* Section header */}
        <div className="mb-16 text-center">
          <span className={`font-bold text-xs tracking-widest uppercase mb-4 block ${isDark ? 'text-brand-light' : 'text-brand'}`}>
            Dúvidas Frequentes
          </span>
          <h2 className={`text-4xl lg:text-5xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Console de IA. <br className="hidden sm:block" />
            Respostas instantâneas.
          </h2>
        </div>

        {/* FAQ list */}
        <div className="space-y-3">
          {faqs.map((faq) => (
            <FAQItem
              key={faq.id}
              item={faq}
              isOpen={openId === faq.id}
              onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
              isDark={isDark}
            />
          ))}
        </div>

        {/* Footer text */}
        <div className={`mt-12 text-center text-sm ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
          Não encontrou sua resposta?{' '}
          <a href="#" className={`font-bold transition-colors hover:text-brand-light`}>
            Contate nosso time
          </a>
        </div>
      </div>
    </section>
  )
}
