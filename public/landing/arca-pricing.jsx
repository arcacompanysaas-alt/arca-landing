// arca-pricing.jsx — Pricing (responsive)

const PLANS = [
  {
    id: 'free', name: 'Grátis', badge: 'Para começar',
    monthly: 0, annual: 0, unit: 'Para sempre',
    desc: 'Perfeito para testar se ARCA funciona para sua agência.',
    features: ['Até 5 propostas/mês', 'White-label básico', 'Exportar como PDF', 'Suporte por email'],
    cta: 'Comece agora', featured: false,
  },
  {
    id: 'pro', name: 'Pro', badge: 'Mais popular',
    monthly: 399, annual: 332, unit: '/mês',
    annualNote: 'Faturado como R$ 3.984/ano',
    desc: 'Para agências que querem crescer com tecnologia.',
    features: ['Propostas ilimitadas', 'IA para descrições', 'White-label completo', 'Suporte por chat em PT', 'Relatórios automáticos', 'Assinatura eletrônica'],
    cta: 'Começar trial grátis', featured: true,
  },
  {
    id: 'enterprise', name: 'Enterprise', badge: 'Grandes agências',
    monthly: null, annual: null, unit: null,
    desc: 'API customizada, integrações, SLA garantido.',
    features: ['Tudo do Pro', 'API aberta', 'Integrações customizadas', 'Account manager dedicado', 'SLA 99.9% uptime'],
    cta: 'Agendar conversa', featured: false,
  },
];

function PricingBadge({ text, featured, t }) {
  return (
    <span style={{
      display: 'inline-block',
      background: featured ? 'rgba(255,255,255,0.20)' : t.primaryLight,
      color: featured ? '#FFFFFF' : t.primary,
      fontSize: 11, fontWeight: 700,
      padding: '4px 11px', borderRadius: 20, marginBottom: 14,
      textTransform: 'uppercase', letterSpacing: '0.07em',
    }}>{text}</span>
  );
}

function FeaturedPlanCard({ plan, t, billing, delay, isMobile }) {
  const [ref, anim] = useScrollFade(delay);
  const [hover, setHover] = React.useState(false);
  const price = billing === 'annual' ? plan.annual : plan.monthly;
  const scaleDefault = isMobile ? 'scale(1)' : 'scale(1.02)';
  const scaleHover   = isMobile ? 'scale(1) translateY(-4px)' : 'scale(1.04) translateY(-6px)';

  return (
    <div ref={ref}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        ...anim,
        background: t.primary, borderRadius: 20, padding: isMobile ? '28px 22px' : '34px 28px',
        transform: hover ? scaleHover : scaleDefault,
        boxShadow: hover
          ? `0 28px 64px ${t.isDark ? 'rgba(64,128,255,0.38)' : 'rgba(0,71,224,0.38)'}`
          : `0 16px 48px ${t.isDark ? 'rgba(64,128,255,0.22)' : 'rgba(0,71,224,0.22)'}`,
        transition: 'transform 0.28s ease, box-shadow 0.28s ease, opacity 0.65s ease',
        position: 'relative', zIndex: 2,
      }}
    >
      <PricingBadge text={plan.badge} featured t={t} />
      <h3 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: 22, fontWeight: 800, color: '#FFFFFF', marginBottom: 8 }}>{plan.name}</h3>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 3, marginBottom: 2 }}>
        <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.65)', marginRight: 2 }}>R$</span>
        <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: 46, fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.03em', lineHeight: 1 }}>{price}</span>
      </div>
      <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)', marginBottom: billing === 'annual' ? 3 : 18 }}>{plan.unit}</div>
      {billing === 'annual' && <div style={{ fontSize: 11.5, color: 'rgba(255,255,255,0.52)', marginBottom: 16 }}>{plan.annualNote}</div>}
      <p style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.80)', lineHeight: 1.6, marginBottom: 20 }}>{plan.desc}</p>
      <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', display: 'flex', flexDirection: 'column', gap: 8 }}>
        {plan.features.map(f => (
          <li key={f} style={{ display: 'flex', gap: 8, alignItems: 'flex-start', fontSize: 13.5, color: 'rgba(255,255,255,0.88)' }}>
            <span style={{ color: 'rgba(255,255,255,0.62)', marginTop: 1, flexShrink: 0, fontWeight: 700 }}>✓</span>{f}
          </li>
        ))}
      </ul>
      <button
        style={{ width: '100%', background: '#FFFFFF', color: t.primary, border: 'none', borderRadius: 10, padding: '13px 0', fontSize: 14.5, fontWeight: 700, cursor: 'pointer', fontFamily: '"Plus Jakarta Sans", sans-serif', transition: 'background 0.18s' }}
        onMouseEnter={e => { e.currentTarget.style.background = '#EFF4FF'; }}
        onMouseLeave={e => { e.currentTarget.style.background = '#FFFFFF'; }}
      >{plan.cta}</button>
    </div>
  );
}

function RegularPlanCard({ plan, t, billing, delay }) {
  const [ref, anim] = useScrollFade(delay);
  const [hover, setHover] = React.useState(false);
  const price    = billing === 'annual' ? plan.annual : plan.monthly;
  const hasPrice = price !== null;

  return (
    <div ref={ref}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        ...anim,
        background: t.surface,
        border: `1.5px solid ${hover ? t.primary : t.border}`,
        borderRadius: 20, padding: '34px 28px',
        boxShadow: hover ? t.shadowMd : t.shadow,
        transform: hover ? 'translateY(-5px)' : 'translateY(0)',
        transition: 'border-color 0.22s, box-shadow 0.22s, transform 0.22s, opacity 0.65s',
      }}
    >
      <PricingBadge text={plan.badge} featured={false} t={t} />
      <h3 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: 22, fontWeight: 800, color: t.text, marginBottom: 8 }}>{plan.name}</h3>
      {hasPrice ? (
        <>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 3, marginBottom: 2 }}>
            {price > 0 && <span style={{ fontSize: 12, color: t.textMuted, marginRight: 2 }}>R$</span>}
            <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: price === 0 ? 32 : 44, fontWeight: 800, color: t.text, letterSpacing: '-0.02em', lineHeight: 1 }}>
              {price === 0 ? 'Grátis' : price}
            </span>
          </div>
          <div style={{ fontSize: 13, color: t.textMuted, marginBottom: 18 }}>{plan.unit}</div>
        </>
      ) : (
        <>
          <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: 28, fontWeight: 800, color: t.text, letterSpacing: '-0.02em', lineHeight: 1, marginBottom: 2 }}>Personalizado</div>
          <div style={{ fontSize: 13, color: t.textMuted, marginBottom: 18 }}>Fale com a gente</div>
        </>
      )}
      <p style={{ fontSize: 13.5, color: t.textMuted, lineHeight: 1.6, marginBottom: 20 }}>{plan.desc}</p>
      <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', display: 'flex', flexDirection: 'column', gap: 8 }}>
        {plan.features.map(f => (
          <li key={f} style={{ display: 'flex', gap: 8, alignItems: 'flex-start', fontSize: 13.5 }}>
            <span style={{ color: t.primary, marginTop: 1, flexShrink: 0, fontWeight: 700 }}>✓</span>
            <span style={{ color: t.text }}>{f}</span>
          </li>
        ))}
      </ul>
      <button
        style={{ width: '100%', background: 'transparent', color: t.primary, border: `2px solid ${t.primary}`, borderRadius: 10, padding: '12px 0', fontSize: 14.5, fontWeight: 700, cursor: 'pointer', fontFamily: '"Plus Jakarta Sans", sans-serif', transition: 'background 0.18s' }}
        onMouseEnter={e => { e.currentTarget.style.background = t.primaryLight; }}
        onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
      >{plan.cta}</button>
    </div>
  );
}

function PricingSection({ t, billing, setBilling }) {
  const [titleRef, titleAnim] = useScrollFade(0);
  const w = useWindowWidth();
  const isMobile = w < 768;

  return (
    <section id="pricing" style={{ background: t.bgAlt, padding: `${isMobile ? 64 : 100}px 0` }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: isMobile ? '0 18px' : '0 32px' }}>

        <div ref={titleRef} style={{ ...titleAnim, textAlign: 'center', marginBottom: isMobile ? 36 : 52 }}>
          <span style={{ display: 'inline-block', background: t.primaryLight, color: t.primary, fontSize: 11.5, fontWeight: 700, padding: '5px 13px', borderRadius: 20, marginBottom: 14, letterSpacing: '0.07em', textTransform: 'uppercase' }}>Preços</span>
          <h2 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: 'clamp(26px, 3.5vw, 44px)', fontWeight: 800, color: t.text, letterSpacing: '-0.022em', marginBottom: 12 }}>
            Simples. Transparente. Sem surpresas.
          </h2>
          <p style={{ fontSize: 16, color: t.textMuted, maxWidth: 440, margin: '0 auto 24px' }}>
            Comece grátis e escale conforme sua agência cresce.
          </p>

          {/* Billing toggle */}
          <div style={{ display: 'inline-flex', background: t.surface2, borderRadius: 11, padding: 4, border: `1px solid ${t.border}` }}>
            {[{ val: 'monthly', label: 'Mensal' }, { val: 'annual', label: 'Anual' }].map(opt => (
              <button key={opt.val}
                onClick={() => setBilling(opt.val)}
                style={{
                  padding: '8px 18px', borderRadius: 8, border: 'none', cursor: 'pointer',
                  background: billing === opt.val ? t.primary : 'transparent',
                  color: billing === opt.val ? '#FFFFFF' : t.textMuted,
                  fontSize: 13, fontWeight: 600,
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  transition: 'background 0.22s, color 0.22s',
                  display: 'flex', alignItems: 'center', gap: 6,
                }}
              >
                {opt.val === 'annual'
                  ? <>{opt.label}<span style={{ fontSize: 10.5, background: '#22c55e', color: '#fff', padding: '1px 6px', borderRadius: 10, fontWeight: 700 }}>-17%</span></>
                  : opt.label}
              </button>
            ))}
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
          gap: isMobile ? 16 : 22,
          alignItems: 'stretch',
        }}>
          {PLANS.map((plan, i) =>
            plan.featured
              ? <FeaturedPlanCard key={plan.id} plan={plan} t={t} billing={billing} delay={i * 100} isMobile={isMobile} />
              : <RegularPlanCard  key={plan.id} plan={plan} t={t} billing={billing} delay={i * 100} />
          )}
        </div>

        <p style={{ textAlign: 'center', marginTop: 32, fontSize: 13, color: t.textMuted }}>
          Todos os planos incluem 14 dias de trial gratuito · Sem cartão de crédito · Cancele a qualquer momento
        </p>
      </div>
    </section>
  );
}

Object.assign(window, { PricingSection });
