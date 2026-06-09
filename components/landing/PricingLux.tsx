'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface PricingPlan {
  name: string
  description: string
  monthlyPrice: number
  yearlyPrice: number
  cta: string
  badge?: string
  features: string[]
  highlight?: boolean
}

function PricingCard({
  plan,
  isAnnual,
  isDark,
  highlight,
  index,
}: {
  plan: PricingPlan
  isAnnual: boolean
  isDark: boolean
  highlight: boolean
  index: number
}) {
  const price = isAnnual ? plan.yearlyPrice : plan.monthlyPrice
  const showAnnualSavings = isAnnual && plan.yearlyPrice < plan.monthlyPrice * 12

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: '-40px' }}
      className={`relative rounded-3xl border p-8 transition-all duration-300 ${
        highlight
          ? isDark
            ? 'bg-ink-soft/90 border-brand-light/40 shadow-2xl shadow-brand/30 md:scale-105'
            : 'bg-white border-brand/30 shadow-2xl shadow-brand/20 md:scale-105'
          : isDark
            ? 'bg-ink-soft/40 border-white/10'
            : 'bg-white border-gray-200 shadow-lg shadow-gray-200/50'
      }`}
    >
      {plan.badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-brand text-white text-[10px] font-bold tracking-widest uppercase whitespace-nowrap">
          {plan.badge}
        </div>
      )}

      <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
        {plan.name}
      </h3>
      <p className={`text-xs mb-6 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{plan.description}</p>

      <div className="mb-6">
        <div className="flex items-baseline gap-1">
          <span className={`text-5xl font-extrabold ${isDark ? 'text-white' : 'text-brand'}`}>
            {price === 0 ? 'Custom' : `R$ ${price}`}
          </span>
          {price !== 0 && <span className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>/mês</span>}
        </div>
        {showAnnualSavings && (
          <p className={`text-[10px] mt-2 font-bold uppercase tracking-widest ${isDark ? 'text-green-400' : 'text-green-600'}`}>
            ✓ Economiza R$ {(plan.monthlyPrice * 12 - plan.yearlyPrice * 12).toLocaleString('pt-BR')} / ano
          </p>
        )}
      </div>

      <button
        className={`w-full py-3 rounded-xl text-sm font-bold transition-all duration-300 mb-8 active:scale-95 ${
          highlight
            ? 'bg-brand text-white hover:scale-[1.02] shadow-lg shadow-brand/30'
            : isDark
              ? 'border border-white/20 text-white hover:bg-white/10'
              : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
        }`}
      >
        {plan.cta}
      </button>

      <ul className="space-y-3">
        {plan.features.map((feature, idx) => (
          <li key={idx} className={`flex items-start gap-3 text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            <span className={`flex-shrink-0 font-bold mt-0.5 ${isDark ? 'text-brand-light' : 'text-brand'}`}>✓</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default function PricingLux({ isDark }: { isDark: boolean }) {
  const [isAnnual, setIsAnnual] = useState(true)

  const plans: PricingPlan[] = [
    {
      name: 'Boutique',
      description: 'Para consultores independentes escalando vendas.',
      monthlyPrice: 497,
      yearlyPrice: 397,
      cta: 'Testar 14 Dias',
      features: ['10 Propostas/mês', 'Construtor Magnético', 'Assinatura Digital'],
    },
    {
      name: 'Agency',
      description: 'O motor completo para agências que faturam alto.',
      monthlyPrice: 997,
      yearlyPrice: 797,
      cta: 'Começar Teste Grátis',
      badge: 'Acesso Total IA',
      highlight: true,
      features: [
        'Propostas Ilimitadas',
        'Toolkit IA (Voos, PDF, Prompt)',
        '100% White Label Personalizado',
      ],
    },
    {
      name: 'Enterprise',
      description: 'Operadoras e DMCs com alta volumetria.',
      monthlyPrice: 0,
      yearlyPrice: 0,
      cta: 'Falar com Executivo',
      features: ['Integração via API', 'Concierge de Onboarding', 'SLA Garantido'],
    },
  ]

  return (
    <section id="pricing" className="relative w-full py-20 px-4 md:px-12 z-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Um investimento invisível perto{' '}
            <br className="hidden sm:block" />
            do retorno operacional.
          </h2>

          {/* Toggle anual/mensal */}
          <div className={`inline-flex items-center p-1 rounded-full border mx-auto mt-8 ${isDark ? 'bg-ink-soft/60 border-white/10' : 'bg-white border-gray-200 shadow-sm'}`}>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                isAnnual
                  ? isDark ? 'bg-brand-light text-white shadow-lg' : 'bg-brand text-white shadow-md'
                  : isDark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              Anual (20% Off)
            </button>
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                !isAnnual
                  ? isDark ? 'bg-brand-light text-white shadow-lg' : 'bg-brand text-white shadow-md'
                  : isDark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              Mensal
            </button>
          </div>
        </motion.div>

        {/* Cards: coluna no mobile, 3 colunas no desktop */}
        <div className="flex flex-col md:grid md:grid-cols-3 gap-6 md:gap-8 md:items-center">
          {/* Mobile: Agency (destaque) aparece primeiro */}
          {[plans[1], plans[0], plans[2]].map((plan, mobileIdx) => {
            const desktopIdx = plans.indexOf(plan)
            return (
              <div
                key={plan.name}
                className={`${
                  plan.highlight
                    ? 'order-first md:order-none'
                    : mobileIdx === 1 ? 'md:order-first' : ''
                }`}
              >
                <PricingCard
                  plan={plan}
                  isAnnual={isAnnual}
                  isDark={isDark}
                  highlight={plan.highlight || false}
                  index={desktopIdx}
                />
              </div>
            )
          })}
        </div>

        <p className={`text-center mt-10 text-sm font-medium ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
          14 dias grátis. Cancela quando quiser. Sem cartão de crédito.
        </p>
      </div>
    </section>
  )
}
