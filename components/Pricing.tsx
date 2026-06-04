export default function Pricing() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Simples. Transparente. Sem surpresas.
          </h2>
          <p className="text-secondary text-lg">
            Comece grátis e escale conforme sua agência cresce.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Free Plan */}
          <div className="bg-bg-light border border-gray-200 rounded-2xl p-10">
            <div className="text-sm font-semibold text-secondary mb-2">Popular para começar</div>
            <h3 className="text-2xl font-bold text-text-dark mb-2">Grátis</h3>
            <div className="text-4xl font-bold text-primary mb-2">R$ 0</div>
            <div className="text-sm text-secondary mb-6">Para sempre</div>
            <p className="text-sm text-text-dark mb-8">
              Perfeito para testar se ARCA funciona para sua agência.
            </p>
            <ul className="space-y-3 mb-8 text-sm">
              <li className="text-text-dark">✓ Até 5 propostas por mês</li>
              <li className="text-text-dark">✓ White-label básico</li>
              <li className="text-text-dark">✓ Exportar como PDF</li>
              <li className="text-text-dark">✓ Suporte por email</li>
            </ul>
            <button className="w-full border-2 border-primary text-primary font-bold py-3 rounded-lg hover:bg-primary/5">
              Comece agora
            </button>
          </div>

          {/* Pro Plan - Featured */}
          <div className="bg-primary text-white rounded-2xl p-10 scale-105 shadow-lg">
            <div className="text-sm font-semibold bg-white/20 text-white px-3 py-1 rounded-full inline-block mb-4 uppercase">
              Mais Popular
            </div>
            <h3 className="text-2xl font-bold mb-2">Pro</h3>
            <div className="text-5xl font-bold mb-2">R$ 399</div>
            <div className="text-sm opacity-80 mb-2">/mês</div>
            <div className="text-xs opacity-70 mb-6">Faturado anualmente = R$ 3.990</div>
            <p className="text-sm mb-8 opacity-90">
              Para agências que querem crescer com tecnologia.
            </p>
            <ul className="space-y-3 mb-8 text-sm">
              <li>✓ Propostas ilimitadas</li>
              <li>✓ IA para descrições</li>
              <li>✓ White-label completo</li>
              <li>✓ Suporte por chat em português</li>
              <li>✓ Relatórios automáticos</li>
              <li>✓ Assinatura eletrônica</li>
            </ul>
            <button className="w-full bg-white text-primary font-bold py-3 rounded-lg hover:bg-gray-100">
              Começar trial grátis
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-bg-light border border-gray-200 rounded-2xl p-10">
            <div className="text-sm font-semibold text-secondary mb-2">Para grandes agências</div>
            <h3 className="text-2xl font-bold text-text-dark mb-2">Enterprise</h3>
            <div className="text-4xl font-bold text-primary mb-2">Personalizado</div>
            <div className="text-sm text-secondary mb-6">&nbsp;</div>
            <p className="text-sm text-text-dark mb-8">
              API customizada, integrações, SLA garantido.
            </p>
            <ul className="space-y-3 mb-8 text-sm">
              <li className="text-text-dark">✓ Tudo do Pro</li>
              <li className="text-text-dark">✓ API aberta</li>
              <li className="text-text-dark">✓ Integrações customizadas</li>
              <li className="text-text-dark">✓ Dedicated account manager</li>
              <li className="text-text-dark">✓ SLA 99.9% uptime</li>
            </ul>
            <button className="w-full border-2 border-primary text-primary font-bold py-3 rounded-lg hover:bg-primary/5">
              Agendar conversa
            </button>
          </div>
        </div>

        <div className="text-center text-sm text-secondary">
          Todos os planos incluem 14 dias de trial gratuito. Sem cartão de crédito. Cancele a qualquer momento. Sem multa.
        </div>
      </div>
    </section>
  )
}
