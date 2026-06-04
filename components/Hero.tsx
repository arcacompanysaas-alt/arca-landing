export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-24 px-4">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            ⚡ Reduz tempo em 80%
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Propostas que vendem em 3 minutos
          </h1>

          <h2 className="text-lg md:text-xl font-normal mb-6 opacity-95">
            Seus consultores ainda gastam 3-4 horas criando propostas no Word? Enquanto isso, ARCA gera proposta profissional + sua marca em 3 minutos.
          </h2>

          <p className="text-base md:text-lg mb-8 opacity-85">
            Mais tempo vendendo. Menos tempo em papelada.
          </p>

          <div className="flex justify-center gap-6 mb-8 flex-wrap text-sm opacity-90">
            <span className="flex items-center gap-2">✓ 100+ agências já usam</span>
            <span className="flex items-center gap-2">✓ 4.8★ em avaliações</span>
            <span className="flex items-center gap-2">✓ Suporte em português</span>
          </div>

          <button className="bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl mb-4">
            Começar grátis agora
          </button>

          <a href="#" className="block text-white text-sm border-b border-white pb-2 inline-block opacity-90 hover:opacity-100">
            ou assistir demo de 2 minutos →
          </a>
        </div>
      </div>
    </section>
  )
}
