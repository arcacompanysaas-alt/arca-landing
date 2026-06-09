'use client'

import { useState } from 'react'

/* ─── Scanner line animation (CSS-in-JS, isolado no componente) ─── */
const scannerStyle = `
  @keyframes scan {
    0%   { top: -10%; opacity: 0; }
    10%  { opacity: 1; }
    90%  { opacity: 1; }
    100% { top: 100%; opacity: 0; }
  }
  .scanner-line {
    position: absolute; left: 0; width: 100%; height: 40px;
    background: linear-gradient(to bottom, transparent, rgba(64,128,255,0.2) 80%, rgba(64,128,255,0.8) 100%);
    border-bottom: 2px solid #4080FF;
    animation: scan 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
    z-index: 10; pointer-events: none;
  }
  @keyframes drop-bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
  .animate-drop { animation: drop-bounce 2s infinite ease-in-out; }
  @keyframes slide-in-block { 0% { opacity: 0; transform: translateX(-20px); } 100% { opacity: 1; transform: translateX(0); } }
  .block-1 { animation: slide-in-block 0.5s ease-out 0.2s both; }
  .block-2 { animation: slide-in-block 0.5s ease-out 0.5s both; }
  .block-3 { animation: slide-in-block 0.5s ease-out 0.8s both; }
  .block-4 { animation: slide-in-block 0.5s ease-out 1.1s both; }
  @keyframes pulse-skeleton { 0%, 100% { opacity: 0.5; } 50% { opacity: 1; } }
  .skeleton { animation: pulse-skeleton 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
`

const TABS = [
  { label: '01. Cotação Aérea' },
  { label: '02. Migração PDF' },
  { label: '03. Prompt Generativo' },
]

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}

function TabButton({ label, active, onClick, isDark }: { label: string; active: boolean; onClick: () => void; isDark: boolean }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
        active
          ? isDark ? 'bg-brand-light text-white shadow-lg' : 'bg-brand text-white shadow-md'
          : isDark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'
      }`}
    >
      {label}
    </button>
  )
}

function ArrowDivider({ isDark }: { isDark: boolean }) {
  return (
    <div className={`hidden md:flex absolute left-[41.66%] top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-brand border-[3px] items-center justify-center text-white ${isDark ? 'border-ink' : 'border-white shadow-md'}`}>
      <ArrowIcon />
    </div>
  )
}

/* ── Tab 01: Cotação Aérea ── */
function TabFlightParsing({ isDark }: { isDark: boolean }) {
  return (
    <>
      <div className={`w-full md:w-5/12 p-6 relative overflow-hidden flex flex-col justify-center ${isDark ? 'bg-black/40 border-r border-white/5' : 'bg-gray-50 border-r border-gray-200'}`}>
        <div className="scanner-line" />
        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-3 block">Antes</span>

        {/* Arquivo anexado */}
        <div className={`flex items-center gap-3 p-3 rounded-xl border mb-3 w-fit ${isDark ? 'bg-ink-card border-white/10' : 'bg-white border-gray-200 shadow-sm'}`}>
          <div className={`w-9 h-10 rounded-lg flex items-center justify-center text-lg ${isDark ? 'bg-white/5' : 'bg-gray-100'}`}>
            🖼️
          </div>
          <div>
            <p className={`text-[10px] font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>print_voo_operadora.jpeg</p>
            <p className={`text-[9px] ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>Imagem · 284 KB</p>
          </div>
        </div>

        {/* Mensagem WhatsApp/email */}
        <div className={`text-xs leading-relaxed p-3 rounded-xl border ${isDark ? 'bg-ink-card border-white/5 text-gray-300' : 'bg-white border-gray-200 text-gray-600 shadow-sm'}`}>
          "Mano, o cliente quer o voo saindo de SP pra NY no dia 12 de agosto. Ele prefere de noite, acho que o G3 1862 serve, classe econômica mesmo. A volta é dia 20 de agosto às 20h. Vê o preço aí, deu uns <span className={`font-bold ${isDark ? 'text-green-400' : 'text-green-600'}`}>1450 dólares</span> com as taxas."
        </div>
        <p className={`mt-3 text-[9px] italic ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>*A IA extrai de qualquer fonte.</p>
      </div>
      <ArrowDivider isDark={isDark} />
      <div className="w-full md:w-7/12 p-8 flex flex-col justify-center items-center">
        <div className="w-full max-w-sm">
          <div className="mb-4">
            <span className={`text-[10px] font-bold uppercase tracking-widest ${isDark ? 'text-brand-light' : 'text-brand'}`}>Depois: Card Renderizado</span>
          </div>
          <div className={`w-full rounded-2xl p-5 border ${isDark ? 'bg-ink-card border-white/10 shadow-lg' : 'bg-white border-gray-200 shadow-xl shadow-gray-200/50'}`}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-brand/10 flex items-center justify-center text-brand">✈️</div>
                <p className={`text-xs font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Gol Linhas Aéreas</p>
              </div>
              <span className={`px-2 py-1 text-[9px] font-bold rounded uppercase ${isDark ? 'bg-white/10 text-white' : 'bg-gray-100 text-gray-600 border border-gray-200'}`}>Econômica</span>
            </div>
            <div className="flex items-center justify-between mt-6">
              <div className="text-left">
                <p className={`text-2xl font-extrabold ${isDark ? 'text-white' : 'text-gray-900'}`}>22:30</p>
                <p className={`text-xs font-bold ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>GRU</p>
              </div>
              <div className="flex-1 px-4 text-center">
                <div className={`w-full h-px border-t border-dashed ${isDark ? 'border-gray-600' : 'border-gray-300'}`} />
              </div>
              <div className="text-right">
                <p className={`text-2xl font-extrabold ${isDark ? 'text-white' : 'text-gray-900'}`}>06:15</p>
                <p className={`text-xs font-bold ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>JFK</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

/* ── Tab 02: Migração PDF ── */
function TabPdfMigration({ isDark }: { isDark: boolean }) {
  return (
    <>
      <div className={`w-full md:w-5/12 p-8 relative flex flex-col justify-center items-center text-center ${isDark ? 'bg-black/40 border-r border-white/5' : 'bg-gray-50 border-r border-gray-200'}`}>
        <div className={`w-full max-w-[200px] aspect-square rounded-2xl border-2 border-dashed flex flex-col items-center justify-center p-4 transition-all ${isDark ? 'border-brand-light/50 bg-brand-light/5' : 'border-brand/30 bg-brand/5'}`}>
          <div className={`w-12 h-14 rounded bg-white border shadow-md animate-drop flex items-center justify-center mb-3 ${isDark ? 'border-gray-700 shadow-black' : 'border-gray-200 shadow-gray-200'}`}>
            <span className="text-brand text-[10px] font-bold">.DOCX</span>
          </div>
          <p className={`text-xs font-bold ${isDark ? 'text-brand-light' : 'text-brand'}`}>Arrastar Legado</p>
        </div>
      </div>
      <ArrowDivider isDark={isDark} />
      <div className="w-full md:w-7/12 p-8 flex flex-col justify-center items-center">
        <div className="w-full max-w-sm flex flex-col gap-3">
          <div className="mb-2">
            <span className={`text-[10px] font-bold uppercase tracking-widest ${isDark ? 'text-brand-light' : 'text-brand'}`}>Depois: Estrutura Modular</span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className={`block-1 flex items-center gap-3 p-3 rounded-xl border ${isDark ? 'bg-ink-card border-white/10' : 'bg-white border-gray-200 shadow-sm'}`}>
              <div className="w-8 h-8 rounded bg-orange-500/10 flex items-center justify-center text-orange-500 text-xs">🏨</div>
              <div><p className={`text-xs font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Hotel</p><p className={`text-[9px] ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Extraído</p></div>
            </div>
            <div className={`block-2 flex items-center gap-3 p-3 rounded-xl border ${isDark ? 'bg-ink-card border-white/10' : 'bg-white border-gray-200 shadow-sm'}`}>
              <div className="w-8 h-8 rounded bg-blue-500/10 flex items-center justify-center text-blue-500 text-xs">✈️</div>
              <div><p className={`text-xs font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Voo</p><p className={`text-[9px] ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Extraído</p></div>
            </div>
            <div className={`block-3 flex items-center gap-3 p-3 rounded-xl border ${isDark ? 'bg-ink-card border-white/10' : 'bg-white border-gray-200 shadow-sm'}`}>
              <div className="w-8 h-8 rounded bg-purple-500/10 flex items-center justify-center text-purple-500 text-xs">🚗</div>
              <div><p className={`text-xs font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Transfer</p><p className={`text-[9px] ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>VIP</p></div>
            </div>
            <div className={`block-4 flex items-center gap-3 p-3 rounded-xl border ${isDark ? 'bg-ink-card border-white/10' : 'bg-white border-gray-200 shadow-sm'}`}>
              <div className="w-8 h-8 rounded bg-amber-500/10 flex items-center justify-center text-amber-500 text-xs">⭐</div>
              <div><p className={`text-xs font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Experiência</p><p className={`text-[9px] ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Michelin</p></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

/* ── Tab 03: Prompt Generativo ── */
function TabPromptGen({ isDark }: { isDark: boolean }) {
  const [isGenerating, setIsGenerating] = useState(false)

  return (
    <>
      <div className={`w-full md:w-5/12 p-8 relative flex flex-col justify-center ${isDark ? 'bg-black/40 border-r border-white/5' : 'bg-gray-50 border-r border-gray-200'}`}>
        <div className="mb-4">
          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Antes: Prompt</span>
        </div>
        <div className={`p-4 rounded-xl border mb-4 ${isDark ? 'bg-ink-card border-white/10' : 'bg-white border-gray-200 shadow-sm'}`}>
          <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            "Casal VIP, 5 dias em Roma. Foco em{' '}
            <strong className={isDark ? 'text-brand-light' : 'text-brand'}>Gastronomia Michelin</strong>."
          </p>
        </div>
        <button
          onClick={() => setIsGenerating(true)}
          disabled={isGenerating}
          className={`w-full py-3 rounded-lg text-xs font-bold transition-all bg-brand text-white ${isGenerating ? 'opacity-50' : 'hover:scale-[1.02]'}`}
        >
          {isGenerating ? 'Gerando...' : '✨ Gerar Roteiro Zero'}
        </button>
      </div>
      <ArrowDivider isDark={isDark} />
      <div className="w-full md:w-7/12 p-8 flex flex-col justify-center items-center">
        <div className="w-full max-w-sm">
          <div className="mb-4">
            <span className={`text-[10px] font-bold uppercase tracking-widest ${isDark ? 'text-brand-light' : 'text-brand'}`}>Depois: IA Generativa</span>
          </div>
          {!isGenerating ? (
            <div className={`w-full h-40 rounded-2xl border border-dashed flex items-center justify-center ${isDark ? 'border-white/10 text-white/20' : 'border-gray-300 text-gray-400 bg-gray-50'}`}>
              <span className="text-xs">Aguardando comando...</span>
            </div>
          ) : (
            <div className={`w-full rounded-2xl border overflow-hidden shadow-lg ${isDark ? 'border-white/10 bg-ink-card' : 'border-gray-200 bg-white shadow-xl shadow-gray-200/50'}`}>
              <div className="h-24 w-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=400&q=80')" }} />
              <div className="p-4 space-y-3 max-h-[200px] overflow-y-auto" style={{ scrollbarWidth: 'none' }}>
                <h4 className={`font-bold text-sm mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>Roma: Gastronomia ★</h4>

                <div className={`border-l-2 pl-3 ${isDark ? 'border-brand-light' : 'border-brand'}`}>
                  <p className={`text-[10px] font-bold uppercase tracking-wider ${isDark ? 'text-brand-light' : 'text-brand'}`}>Dia 01</p>
                  <p className={`text-xs leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>A Roma Clássica & Gastronomia</p>
                  <ul className={`text-[9px] space-y-1 mt-1 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    <li>• Check-in Hotel de la Ville</li>
                    <li>• Jantar La Pergola (3★) com sommelier</li>
                  </ul>
                </div>

                <div className={`border-l-2 pl-3 ${isDark ? 'border-brand-light' : 'border-brand'}`}>
                  <p className={`text-[10px] font-bold uppercase tracking-wider ${isDark ? 'text-brand-light' : 'text-brand'}`}>Dia 02</p>
                  <p className={`text-xs leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Segredos do Vaticano</p>
                  <ul className={`text-[9px] space-y-1 mt-1 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    <li>• Tour privado Capela Sistina</li>
                    <li>• Almoço Piazza Navona</li>
                  </ul>
                </div>

                <div className={`border-l-2 pl-3 ${isDark ? 'border-brand-light' : 'border-brand'}`}>
                  <p className={`text-[10px] font-bold uppercase tracking-wider ${isDark ? 'text-brand-light' : 'text-brand'}`}>Dia 03</p>
                  <p className={`text-xs leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Dolce Vita & Villa d'Este</p>
                  <ul className={`text-[9px] space-y-1 mt-1 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    <li>• Passeio Trastevere</li>
                    <li>• Ceia no Heinz Beck</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

/* ── Main export ── */
export default function AIToolkit({ isDark }: { isDark: boolean }) {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section id="ai-tools" className="relative w-full pt-20 pb-16 px-12 z-20">
      <style dangerouslySetInnerHTML={{ __html: scannerStyle }} />
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div>
            <span className={`font-bold text-xs tracking-widest uppercase mb-4 block ${isDark ? 'text-brand-light' : 'text-brand'}`}>
              O Motor de Automação
            </span>
            <h2 className={`text-3xl lg:text-4xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
              O Fim do Trabalho Braçal.
            </h2>
          </div>
          <div className={`flex items-center p-1.5 rounded-xl border ${isDark ? 'bg-ink-soft/60 border-white/10' : 'bg-gray-100 border-gray-200'}`}>
            {TABS.map((tab, i) => (
              <TabButton
                key={i}
                label={tab.label}
                active={activeTab === i}
                onClick={() => { setActiveTab(i); }}
                isDark={isDark}
              />
            ))}
          </div>
        </div>

        {/* Panel */}
        <div className={`w-full h-[400px] rounded-3xl border overflow-hidden flex flex-col md:flex-row relative transition-all duration-500 ${isDark ? 'bg-ink-soft/40 border-white/10 shadow-2xl' : 'bg-white border-gray-200 shadow-[0_10px_40px_rgba(0,71,224,0.06)]'}`}>
          {activeTab === 0 && <TabFlightParsing isDark={isDark} />}
          {activeTab === 1 && <TabPdfMigration isDark={isDark} />}
          {activeTab === 2 && <TabPromptGen isDark={isDark} />}
        </div>
      </div>
    </section>
  )
}
