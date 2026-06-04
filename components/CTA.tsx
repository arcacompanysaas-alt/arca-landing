export default function CTA() {
  return (
    <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-24 px-4">
      <div className="container text-center max-w-2xl mx-auto">
        <h2 className="text-5xl font-bold mb-6">
          Comece seu trial agora
        </h2>
        <p className="text-xl opacity-85 mb-12">
          14 dias grátis. Sem cartão de crédito. Sem compromisso.
        </p>
        <button className="bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl mb-8">
          Criar conta grátis
        </button>
        <div className="flex justify-center gap-6 flex-wrap text-sm opacity-80">
          <span>✓ Acesso imediato</span>
          <span>✓ Suporte em português</span>
          <span>✓ Cancelar a qualquer momento</span>
        </div>
      </div>
    </section>
  )
}
