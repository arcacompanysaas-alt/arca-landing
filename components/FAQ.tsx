'use client'

import { useState } from 'react'

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  const faqs = [
    {
      q: 'Preciso fazer treinamento para usar ARCA?',
      a: 'Não. A interface é simples o suficiente para seus consultores usarem em minutos. Você recebe um guia rápido por email + acesso a vídeos no app. Se precisar, temos suporte por chat.',
    },
    {
      q: 'Meus dados de proposta ficam seguros em ARCA?',
      a: 'Sim. Seus dados são criptografados e armazenados em servidores seguros. Você é o dono. Pode exportar tudo a qualquer momento em PDF ou arquivo.',
    },
    {
      q: 'Posso colocar meu logo e cores na proposta?',
      a: '100%. White-label completo. Logo, cores, fontes — customiza tudo. Proposta fica com cara de profissional mesmo da sua agência.',
    },
    {
      q: 'E se meu cliente não gostar de usar o link? Posso enviar PDF?',
      a: 'Claro. Você pode compartilhar por link (melhor) ou enviar como PDF. Tem opção de assinatura eletrônica no link para cliente aprovar direto lá.',
    },
    {
      q: 'Quanto custa?',
      a: 'Plano Free: 5 propostas/mês, sem IA — R$ 0. Plano Pro: Propostas ilimitadas + IA + white-label — R$ 399/mês. Comece grátis por 14 dias sem cartão de crédito.',
    },
  ]

  return (
    <section className="py-24 px-4 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Dúvidas frequentes
          </h2>
        </div>

        <div className="max-w-2xl mx-auto space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-gray-200 pb-4">
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full flex justify-between items-center py-4 text-left hover:opacity-70"
              >
                <span className="font-semibold text-primary text-base md:text-lg">
                  {faq.q}
                </span>
                <span className="text-primary text-xl">
                  {openIdx === idx ? '▲' : '▼'}
                </span>
              </button>
              {openIdx === idx && (
                <p className="pb-4 text-text-dark text-base leading-relaxed">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
