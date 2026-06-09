'use client'

import { motion } from 'framer-motion'

export default function FinalCTA({ isDark }: { isDark: boolean }) {
  return (
    <section className="relative w-full py-20 md:py-32 overflow-hidden px-4 md:px-12 z-20">
      {/* Ambient glow background */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[200px] pointer-events-none ${
          isDark ? 'bg-brand/20' : 'bg-brand/10'
        }`}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Animated heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={`text-3xl md:text-5xl lg:text-7xl font-extrabold tracking-tight mb-6 md:mb-8 leading-tight ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}
        >
          Sua agência merece a <br className="hidden lg:block" />
          Alta Costura Digital.
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className={`text-base md:text-xl mb-10 md:mb-12 max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
        >
          Junte-se à nova classe de agências que fecham propostas de luxo em minutos, não em dias.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col items-stretch sm:flex-row sm:items-center sm:justify-center gap-4 sm:gap-6"
        >
          {/* Primary CTA */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`relative overflow-hidden w-full sm:w-auto px-10 py-4 sm:py-5 font-extrabold text-base sm:text-lg rounded-2xl transition-all duration-300 shadow-2xl ${
              isDark
                ? 'bg-white text-brand shadow-white/10 hover:shadow-white/20'
                : 'bg-brand text-white shadow-brand/30 hover:shadow-brand/50'
            }`}
          >
            {/* Shine effect */}
            <div className="absolute inset-0 pointer-events-none">
              <div
                className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
                style={{
                  animation: 'shine 4s infinite linear',
                  transform: 'skewX(-25deg)',
                }}
              />
            </div>
            <span className="relative">Inicie seu Trial Gratuito →</span>
          </motion.button>

          {/* Secondary CTA */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full sm:w-auto px-10 py-4 sm:py-5 font-bold text-base sm:text-lg rounded-2xl border transition-all ${
              isDark
                ? 'border-white/20 text-white hover:bg-white/5'
                : 'border-gray-300 text-gray-700 hover:bg-gray-50 bg-white'
            }`}
          >
            Agendar Demonstração
          </motion.button>
        </motion.div>

        {/* Trust text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className={`mt-8 text-sm font-medium ${isDark ? 'text-gray-500' : 'text-gray-400'}`}
        >
          14 dias grátis. Cancela quando quiser. Sem cartão de crédito.
        </motion.p>
      </div>

      {/* CSS for shine animation */}
      <style jsx>{`
        @keyframes shine {
          100% {
            left: 125%;
          }
        }
      `}</style>
    </section>
  )
}
