import { ReactNode } from 'react'

interface FeatureBlock {
  tag: string
  title: string
  text: string
  visual: ReactNode
  reverse: boolean
}

function MockVisual({ isDark, children }: { isDark: boolean; children: ReactNode }) {
  return (
    <div
      className={`w-full h-64 lg:h-72 rounded-3xl flex items-center justify-center border overflow-hidden relative ${
        isDark
          ? 'bg-ink-card/80 border-white/10'
          : 'bg-white border-gray-200 shadow-xl shadow-brand/5'
      }`}
      style={{
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
      }}
    >
      {/* Glassmorphism accent glow */}
      <div
        className={`absolute inset-0 pointer-events-none rounded-3xl ${
          isDark
            ? 'bg-gradient-to-br from-brand/10 via-transparent to-brand-light/5'
            : 'bg-gradient-to-br from-brand/5 via-transparent to-brand/3'
        }`}
      />
      <div className="relative z-10 w-full h-full p-6 flex flex-col justify-center items-center">
        {children}
      </div>
    </div>
  )
}

/* ── Visual 01: Blocos Magnéticos ── */
function VisualMagnetic({ isDark }: { isDark: boolean }) {
  return (
    <MockVisual isDark={isDark}>
      <div className={`w-full max-w-xs space-y-3`}>
        <div className={`text-[10px] font-bold uppercase tracking-widest mb-4 ${isDark ? 'text-brand-light' : 'text-brand'}`}>
          Construtor ao vivo
        </div>
        <div className="flex gap-3">
          <div className="flex-1 py-3 bg-brand text-white text-center rounded-xl text-xs font-bold shadow-lg shadow-brand/30 -rotate-1">
            🗼 Paris
          </div>
          <div className={`flex-1 py-3 border-2 border-dashed rounded-xl text-center text-xs font-medium ${isDark ? 'border-white/20 text-white/30' : 'border-gray-300 text-gray-400'}`}>
            + Arrastar
          </div>
          <div className="flex-1 py-3 bg-brand text-white text-center rounded-xl text-xs font-bold shadow-lg shadow-brand/30 rotate-1">
            🗾 Kyoto
          </div>
        </div>
        <div className={`flex items-center justify-between px-4 py-2 rounded-xl border text-[10px] font-medium ${isDark ? 'bg-white/5 border-white/10 text-gray-400' : 'bg-gray-50 border-gray-200 text-gray-500'}`}>
          <span>✈️ CDG → NRT</span>
          <span className={`font-bold ${isDark ? 'text-brand-light' : 'text-brand'}`}>Fuso calc. ✓</span>
        </div>
        <div className={`flex items-center gap-2 px-4 py-2 rounded-xl border text-[10px] font-medium ${isDark ? 'bg-white/5 border-white/10 text-gray-400' : 'bg-gray-50 border-gray-200 text-gray-500'}`}>
          <span>🏨 Ritz Paris</span>
          <span className={`ml-auto font-bold ${isDark ? 'text-green-400' : 'text-green-600'}`}>Inserido</span>
        </div>
      </div>
    </MockVisual>
  )
}

/* ── Visual 02: White Label ── */
function VisualWhiteLabel({ isDark }: { isDark: boolean }) {
  return (
    <MockVisual isDark={isDark}>
      <div className="w-full max-w-xs">
        {/* Fake browser chrome */}
        <div className={`rounded-t-xl border border-b-0 px-4 py-2 flex items-center gap-2 ${isDark ? 'bg-ink-soft border-white/10' : 'bg-gray-100 border-gray-200'}`}>
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
          </div>
          <div className={`flex-1 text-center text-[9px] font-mono rounded px-2 py-0.5 ${isDark ? 'bg-black/40 text-gray-400' : 'bg-white text-gray-500 border border-gray-200'}`}>
            roteiros.suaagencia.com
          </div>
        </div>
        {/* Fake page content */}
        <div className={`rounded-b-xl border px-4 py-4 ${isDark ? 'bg-ink-card border-white/10' : 'bg-white border-gray-200'}`}>
          <div className={`w-16 h-3 rounded mb-3 ${isDark ? 'bg-white/20' : 'bg-gray-200'}`} />
          <div className={`w-full h-20 rounded-lg mb-3 ${isDark ? 'bg-brand/10' : 'bg-brand/5'}`} />
          <div className="space-y-1.5">
            <div className={`w-full h-2 rounded ${isDark ? 'bg-white/10' : 'bg-gray-100'}`} />
            <div className={`w-3/4 h-2 rounded ${isDark ? 'bg-white/10' : 'bg-gray-100'}`} />
          </div>
          <div className="mt-3 w-24 py-1.5 bg-brand rounded-lg text-white text-[9px] font-bold text-center mx-auto">
            Aprovar ✓
          </div>
        </div>
        <p className={`text-center text-[9px] mt-2 ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
          ARCA invisível. Sua marca em destaque.
        </p>
      </div>
    </MockVisual>
  )
}

/* ── Visual 03: Assinatura Digital ── */
function VisualSignature({ isDark }: { isDark: boolean }) {
  return (
    <MockVisual isDark={isDark}>
      <div className="w-full max-w-xs space-y-3">
        <div className={`rounded-xl border p-4 ${isDark ? 'bg-ink-soft/60 border-white/10' : 'bg-white border-gray-200 shadow-sm'}`}>
          <div className={`text-[10px] font-bold uppercase tracking-wider mb-2 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
            Proposta #2408 · Roma VIP
          </div>
          <div className="space-y-1.5 mb-4">
            <div className={`w-full h-2 rounded ${isDark ? 'bg-white/10' : 'bg-gray-100'}`} />
            <div className={`w-4/5 h-2 rounded ${isDark ? 'bg-white/10' : 'bg-gray-100'}`} />
          </div>
          {/* Fake signature */}
          <div className={`border rounded-lg p-3 mb-3 ${isDark ? 'border-brand-light/30 bg-brand/5' : 'border-brand/20 bg-brand/3'}`}>
            <p className={`font-mono text-lg text-center italic ${isDark ? 'text-brand-light' : 'text-brand'}`}>
              Bianca Rossi ✍
            </p>
          </div>
          <div className="flex items-center gap-2 px-3 py-2 bg-brand rounded-lg text-white text-xs font-bold justify-center shadow-lg shadow-brand/30">
            <span>✓</span>
            <span>Proposta Assinada!</span>
          </div>
        </div>
        <p className={`text-center text-[9px] ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
          Sem PDF. Sem impressão. 1 clique.
        </p>
      </div>
    </MockVisual>
  )
}

/* ── Feature row ── */
function FeatureRow({
  isDark,
  tag,
  title,
  text,
  visual,
  reverse,
}: {
  isDark: boolean
  tag: string
  title: string
  text: string
  visual: ReactNode
  reverse: boolean
}) {
  return (
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 lg:gap-20`}>
      {/* Visual half */}
      <div className="w-full md:w-1/2">
        {visual}
      </div>

      {/* Copy half */}
      <div className="w-full md:w-1/2">
        <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase mb-5 border ${
          isDark ? 'bg-brand/20 text-brand-light border-brand/30' : 'bg-brand/10 text-brand border-brand/20'
        }`}>
          {tag}
        </span>
        <h3 className={`text-2xl lg:text-3xl font-extrabold tracking-tight leading-tight mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          {title}
        </h3>
        <p className={`text-base leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          {text}
        </p>
      </div>
    </div>
  )
}

/* ── Main export ── */
export default function FeaturesBenefits({ isDark }: { isDark: boolean }) {
  return (
    <section id="features" className="relative w-full py-24 px-12 z-20">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <div className="mb-20">
          <span className={`font-bold text-xs tracking-widest uppercase mb-4 block ${isDark ? 'text-brand-light' : 'text-brand'}`}>
            Estrutura Base
          </span>
          <h2 className={`text-4xl lg:text-5xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Engenharia de propostas <br className="hidden lg:block" />
            elevada ao estado de arte.
          </h2>
        </div>

        {/* Z-Pattern rows */}
        <div className="space-y-28">
          <FeatureRow
            isDark={isDark}
            reverse={false}
            tag="Construtor de Roteiros Magnético"
            title="Sua agência operando 10x mais rápido."
            text="Arraste destinos, voos e hotéis. A nossa interface organiza a logística e calcula fusos horários automaticamente. O que levava 12 horas, agora leva 3 minutos."
            visual={<VisualMagnetic isDark={isDark} />}
          />
          <FeatureRow
            isDark={isDark}
            reverse={true}
            tag="Experiência 100% White Label"
            title="O cliente não vê um sistema. Ele vê a sua excelência."
            text="Links interativos rodando sob o seu domínio próprio. A ARCA fica oculta nos bastidores enquanto a sua marca recebe todo o crédito pelo design de alta costura."
            visual={<VisualWhiteLabel isDark={isDark} />}
          />
          <FeatureRow
            isDark={isDark}
            reverse={false}
            tag="Assinatura Digital Integrada"
            title="Feche o negócio enquanto o cliente ainda está emocionado."
            text="Sem fricção de imprimir PDFs ou trocar de abas. O seu cliente desliza pela proposta interativa e assina digitalmente no final da página com apenas um clique."
            visual={<VisualSignature isDark={isDark} />}
          />
        </div>

      </div>
    </section>
  )
}
