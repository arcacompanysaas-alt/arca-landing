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
}: {
  plan: PricingPlan
  isAnnual: boolean
  isDark: boolean
  highlight: boolean
}) {
  const price = isAnnual ? plan.yearlyPrice : plan.monthlyPrice
  const showAnnualSavings = isAnnual && plan.yearlyPrice < plan.monthlyPrice * 12

  return (
    <motion.div
      layout
      className={`relative rounded-3xl border p-8 transition-all duration-300 ${
        highlight
          ? isDark
            ? 'bg-ink-soft/90 border-brand-light/40 shadow-2xl shadow-brand/30 scale-105'
            : 'bg-white border-brand/30 shadow-2xl shadow-brand/20 scale-105'
          : isDark
            ? 'bg-ink-soft/40 border-white/10'
            : 'bg-white border-gray-200 shadow-lg shadow-gray-200/50'
      }`}
    >
      {/* Badge */}
      {plan.badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-brand text-white text-[10px] font-bold tracking-widest uppercase">
          {plan.badge}
        </div>
      )}

      {/* Plan name */}
      <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
        {plan.name}
      </h3>
      <p className={`text-xs mb-6 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{plan.description}</p>

      {/* Pricing */}
      <div className="mb-6">
        <div className="flex items-baseline gap-1">
          <span className={`text-5xl font-extrabold ${isDark ? 'text-white' : isDark ? 'text-gray-900' : 'text-brand'}`}>
            R$ {price}
          </span>
          <span className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>/mês</span>
        </div>
        {showAnnualSavings && (
          <p className={`text-[10px] mt-2 font-bold uppercase tracking-widest ${isDark ? 'text-green-400' : 'text-green-600'}`}>
            ✓ Economiza R$ {(plan.monthlyPrice * 12 - plan.yearlyPrice).toLocaleString('pt-BR')} / ano
          </p>
        )}
      </div>

      {/* CTA */}
      <button
        className={`w-full py-3 rounded-xl text-sm font-bold transition-all duration-300 mb-8 ${
          highlight
            ? 'bg-brand text-white hover:scale-[1.02] shadow-lg shadow-brand/30'
            : isDark
              ? 'border border-white/20 text-white hover:bg-white/10'
              : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
        }`}
      >
        {plan.cta}
      </button>

      {/* Features */}
      <ul className="space-y-3">
        {plan.features.map((feature, idx) => (
          <li key={idx} className={`flex items-start gap-3 text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            <span className={`flex-shrink-0 font-bold mt-0.5 ${isDark ? 'text-brand-light' : 'text-brand'}`}>
              ✓
            </span>
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
    <section id="pricing" className="relative w-full py-24 px-12 z-20">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl lg:text-5xl font-extrabold tracking-tight mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Um investimento invisível perto <br className="hidden sm:block" />
            do retorno operacional.
          </h2>

          {/* Toggle */}
          <div className={`inline-flex items-center p-1 rounded-full border mx-auto mt-8 ${isDark ? 'bg-ink-soft/60 border-white/10' : 'bg-white border-gray-200 shadow-sm'}`}>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-full text-xs font-bold transition-all ${
                isAnnual
                  ? isDark
                    ? 'bg-brand-light text-white shadow-lg'
                    : 'bg-brand text-white shadow-md'
                  : isDark
                    ? 'text-gray-400 hover:text-white'
                    : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              Anual (20% Off)
            </button>
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-full text-xs font-bold transition-all ${
                !isAnnual
                  ? isDark
                    ? 'bg-brand-light text-white shadow-lg'
                    : 'bg-brand text-white shadow-md'
                  : isDark
                    ? 'text-gray-400 hover:text-white'
                    : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              Mensal
            </button>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, idx) => (
            <PricingCard
              key={idx}
              plan={plan}
              isAnnual={isAnnual}
              isDark={isDark}
              highlight={plan.highlight || false}
            />
          ))}
        </div>

        {/* Footer text */}
        <p className={`text-center mt-12 text-sm font-medium ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
          14 dias grátis. Cancela quando quiser. Sem cartão de crédito.
        </p>
      </div>
    </section>
  )
}
