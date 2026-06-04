'use client'

export default function Features() {
  const features = [
    {
      title: 'Crie em 3 minutos',
      description: 'Seus consultores não precisam de mais 3-4 horas. ARCA gera proposta profissional em 180 segundos. Pronto para compartilhar.',
      emoji: '⚡',
    },
    {
      title: 'Sua marca, não a nossa',
      description: '100% white-label. Logo, cores, fontes, assinatura. Cliente recebe proposta que parece que você fez em 8 horas.',
      emoji: '🎨',
    },
    {
      title: 'IA gera descrição da viagem',
      description: 'Digitou o destino? IA completa automaticamente. Itinerário, benefícios, inclui/não inclui. Seu consultor aprova em 10 segundos.',
      emoji: '🤖',
    },
    {
      title: 'Cliente aprova ali mesmo',
      description: 'Sem email spam. Sem volta e meia. Compartilhe link → Cliente abre → Lê → Aprova ali mesmo. Tudo rastreado.',
      emoji: '🔗',
    },
    {
      title: 'Cliente assina digitalmente',
      description: 'Não precisa imprimir. Não precisa PDF separado. Cliente assina direto na proposta online. Tudo legal, válido, rastreado.',
      emoji: '✍️',
    },
    {
      title: 'Organize tudo em um lugar',
      description: 'Todas as propostas em um dashboard. Rascunhos, enviadas, aprovadas. Busca rápida por cliente ou data.',
      emoji: '📊',
    },
  ]

  return (
    <section className="py-24 px-4 bg-bg-light">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            O que faz ARCA diferente
          </h2>
        </div>

        <div className="space-y-20">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                idx % 2 === 1 ? 'md:grid-cols-2 md:direction-rtl' : ''
              }`}
            >
              <div className={idx % 2 === 1 ? 'md:order-2' : ''}>
                <h3 className="text-3xl font-bold text-primary mb-4">
                  {feature.title}
                </h3>
                <p className="text-lg text-text-dark leading-relaxed">
                  {feature.description}
                </p>
              </div>
              <div className={`bg-white border border-gray-200 rounded-lg h-64 flex items-center justify-center text-6xl ${idx % 2 === 1 ? 'md:order-1' : ''}`}>
                {feature.emoji}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
