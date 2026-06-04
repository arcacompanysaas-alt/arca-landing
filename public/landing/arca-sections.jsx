// arca-sections.jsx — Features + Como Funciona (responsive)

const IconSpeed = ({ color }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill={color}><path d="M13 2L4 13.5H11L10 22L20 10.5H13L13 2Z"/></svg>
);
const IconBrand = ({ color }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="8.5" stroke={color} strokeWidth="2"/>
    <circle cx="12" cy="7.5" r="1.8" fill={color}/>
    <circle cx="7.5" cy="15" r="1.8" fill={color}/>
    <circle cx="16.5" cy="15" r="1.8" fill={color}/>
  </svg>
);
const IconAI = ({ color }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round">
    <rect x="3" y="6" width="18" height="13" rx="3"/>
    <circle cx="9" cy="12.5" r="1.4" fill={color} stroke="none"/>
    <circle cx="15" cy="12.5" r="1.4" fill={color} stroke="none"/>
    <path d="M9 6V4.5M15 6V4.5"/>
  </svg>
);
const IconLink = ({ color }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round">
    <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/>
    <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/>
  </svg>
);
const IconSign = ({ color }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 17.5l3.5-3.5 3.5 3.5 8-9"/><path d="M3 21h18"/>
  </svg>
);
const IconDash = ({ color }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill={color}>
    <rect x="2" y="14" width="5" height="8" rx="1"/>
    <rect x="9.5" y="9" width="5" height="13" rx="1"/>
    <rect x="17" y="4" width="5" height="18" rx="1"/>
  </svg>
);
const ICON_MAP = { speed: IconSpeed, brand: IconBrand, ai: IconAI, link: IconLink, sign: IconSign, dash: IconDash };

const FEATURES = [
  { key: 'speed', title: 'Crie em 3 minutos',       desc: 'Seus consultores não precisam de horas no Word. ARCA gera proposta profissional em 180 segundos, pronta para compartilhar.' },
  { key: 'brand', title: 'Sua marca, não a nossa',   desc: '100% white-label. Logo, cores, fontes, assinatura. Cliente recebe proposta que parece que você fez em horas.' },
  { key: 'ai',    title: 'IA completa sua proposta', desc: 'Digitou o destino? IA completa automaticamente: itinerário, benefícios, inclui/não inclui. Seu consultor aprova em 10 segundos.' },
  { key: 'link',  title: 'Cliente aprova ali mesmo', desc: 'Sem email spam, sem vai e vem. Compartilhe o link → Cliente abre → Lê → Aprova ali mesmo. Tudo rastreado em tempo real.' },
  { key: 'sign',  title: 'Assinatura digital',       desc: 'Sem imprimir, sem PDF separado. Cliente assina direto na proposta online. Juridicamente válido, rastreado, simples.' },
  { key: 'dash',  title: 'Tudo em um lugar',         desc: 'Todas as propostas em um dashboard. Rascunhos, enviadas, aprovadas. Busca rápida por cliente, destino ou data.' },
];

function FeatureCard({ feature, t, delay }) {
  const [ref, anim] = useScrollFade(delay);
  const [hover, setHover] = React.useState(false);
  const Icon = ICON_MAP[feature.key];
  return (
    <div ref={ref}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        ...anim,
        background: t.surface,
        border: `1.5px solid ${hover ? t.primary : t.border}`,
        borderRadius: 16, padding: '24px 22px',
        boxShadow: hover ? t.shadowMd : t.shadow,
        transform: hover ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'border-color 0.22s, box-shadow 0.22s, transform 0.22s, opacity 0.65s, transform 0.65s',
      }}
    >
      <div style={{
        width: 46, height: 46, borderRadius: 12,
        background: hover ? t.primary : t.primaryLight,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: 16, flexShrink: 0,
        transition: 'background 0.22s',
      }}>
        <Icon color={hover ? '#FFFFFF' : t.primary} />
      </div>
      <h3 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: 15.5, fontWeight: 700, color: t.text, marginBottom: 8, letterSpacing: '-0.01em' }}>
        {feature.title}
      </h3>
      <p style={{ fontSize: 14, color: t.textMuted, lineHeight: 1.65 }}>{feature.desc}</p>
    </div>
  );
}

function SectionLabel({ t, children }) {
  return (
    <span style={{
      display: 'inline-block',
      background: t.primaryLight, color: t.primary,
      fontSize: 11.5, fontWeight: 700, padding: '5px 13px', borderRadius: 20, marginBottom: 14,
      letterSpacing: '0.07em', textTransform: 'uppercase',
      fontFamily: '"Plus Jakarta Sans", sans-serif',
    }}>{children}</span>
  );
}

function FeaturesSection({ t }) {
  const [titleRef, titleAnim] = useScrollFade(0);
  const w = useWindowWidth();
  const isMobile = w < 640;
  const isTablet = w < 1024;
  const cols = isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)';

  return (
    <section id="features" style={{ background: t.bgAlt, padding: `${isMobile ? 64 : 100}px 0` }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: isMobile ? '0 18px' : '0 32px' }}>
        <div ref={titleRef} style={{ ...titleAnim, textAlign: 'center', marginBottom: isMobile ? 40 : 64 }}>
          <SectionLabel t={t}>Funcionalidades</SectionLabel>
          <h2 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: 'clamp(26px, 3.5vw, 44px)', fontWeight: 800, color: t.text, letterSpacing: '-0.022em', lineHeight: 1.14 }}>
            O que faz ARCA diferente
          </h2>
          <p style={{ fontSize: 16, color: t.textMuted, marginTop: 12, maxWidth: 480, margin: '12px auto 0' }}>
            Ferramentas que seus consultores vão amar. Resultados que seus clientes vão notar.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: cols, gap: isMobile ? 14 : 22 }}>
          {FEATURES.map((f, i) => <FeatureCard key={f.key} feature={f} t={t} delay={isMobile ? 0 : i * 75} />)}
        </div>
      </div>
    </section>
  );
}

/* ── Como Funciona ── */

const STEPS = [
  { num: '01', title: 'Configure sua agência', desc: 'Faça upload do logo, escolha suas cores e adicione a assinatura dos consultores. Pronto em 5 minutos, uma vez só.', tag: '5 minutos' },
  { num: '02', title: 'Crie a proposta',        desc: 'Informe o destino e a IA completa o conteúdo automaticamente. Revise, ajuste e aprove com um clique.',           tag: '3 minutos' },
  { num: '03', title: 'Cliente assina na hora', desc: 'Compartilhe o link por WhatsApp ou email. O cliente abre, lê e assina digitalmente — tudo rastreado.',            tag: '1 clique'  },
];

function StepCard({ step, t, delay, isMobile }) {
  const [ref, anim] = useScrollFade(delay);
  return (
    <div ref={ref} style={{
      ...anim,
      padding: isMobile ? '0 0 32px' : '0 24px',
      textAlign: isMobile ? 'left' : 'center',
      display: isMobile ? 'flex' : 'block',
      gap: isMobile ? 20 : 0,
      alignItems: isMobile ? 'flex-start' : undefined,
    }}>
      {/* Circle */}
      <div style={{
        width: isMobile ? 56 : 70,
        height: isMobile ? 56 : 70,
        borderRadius: '50%', background: t.primary,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        margin: isMobile ? '0' : '0 auto 16px',
        flexShrink: 0,
        boxShadow: `0 8px 28px ${t.isDark ? 'rgba(64,128,255,0.22)' : 'rgba(0,71,224,0.20)'}`,
        position: 'relative', zIndex: 1,
      }}>
        <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: isMobile ? 16 : 19, fontWeight: 800, color: '#FFFFFF' }}>{step.num}</span>
      </div>
      <div>
        <div style={{ display: 'inline-block', background: t.primaryLight, color: t.primary, fontSize: 11.5, fontWeight: 700, padding: '3px 10px', borderRadius: 20, marginBottom: 10 }}>
          {step.tag}
        </div>
        <h3 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: 17, fontWeight: 700, color: t.text, marginBottom: 8, letterSpacing: '-0.01em' }}>
          {step.title}
        </h3>
        <p style={{ fontSize: 14, color: t.textMuted, lineHeight: 1.65, maxWidth: isMobile ? '100%' : 260, margin: isMobile ? '0' : '0 auto' }}>
          {step.desc}
        </p>
      </div>
    </div>
  );
}

function HowItWorksSection({ t }) {
  const [titleRef, titleAnim] = useScrollFade(0);
  const w = useWindowWidth();
  const isMobile = w < 768;

  return (
    <section id="howto" style={{ background: t.bg, padding: `${isMobile ? 64 : 100}px 0` }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: isMobile ? '0 18px' : '0 32px' }}>
        <div ref={titleRef} style={{ ...titleAnim, textAlign: 'center', marginBottom: isMobile ? 40 : 72 }}>
          <SectionLabel t={t}>Como Funciona</SectionLabel>
          <h2 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: 'clamp(26px, 3.5vw, 44px)', fontWeight: 800, color: t.text, letterSpacing: '-0.022em', lineHeight: 1.14 }}>
            Do zero à proposta<br />em 3 passos
          </h2>
          <p style={{ fontSize: 16, color: t.textMuted, marginTop: 12, maxWidth: 420, margin: '12px auto 0' }}>
            Simples para o consultor. Impressionante para o cliente.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: isMobile ? 0 : 0, position: 'relative' }}>
          {/* Desktop connector line */}
          {!isMobile && (
            <div style={{
              position: 'absolute', top: 35, left: '18%', right: '18%', height: 2,
              borderTop: `2px dashed ${t.primary}28`, pointerEvents: 'none',
            }} />
          )}
          {STEPS.map((step, i) => (
            <StepCard key={i} step={step} t={t} delay={isMobile ? 0 : i * 130} isMobile={isMobile} />
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { FeaturesSection, HowItWorksSection });
