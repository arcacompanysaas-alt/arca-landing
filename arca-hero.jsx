// arca-hero.jsx — Hero section + ProductMockup (responsive)

function ProductMockup({ t }) {
  const cardBg  = t.isDark ? t.surface  : '#FFFFFF';
  const innerBg = t.isDark ? t.surface2 : '#F0F5FF';
  const accent  = t.primary;

  return (
    <div style={{
      background: cardBg, borderRadius: 20, padding: '22px 22px 18px',
      boxShadow: t.isDark
        ? '0 24px 64px rgba(0,0,0,0.55), 0 0 0 1px rgba(64,128,255,0.12)'
        : '0 24px 64px rgba(0,71,224,0.13), 0 0 0 1px rgba(0,71,224,0.06)',
      maxWidth: 368, width: '100%',
      fontFamily: '"Plus Jakarta Sans", sans-serif',
      position: 'relative',
    }}>
      {/* AI badge */}
      <div style={{
        position: 'absolute', top: -13, right: 18,
        background: t.isDark ? t.surface2 : '#FFFFFF',
        border: `1px solid ${t.border}`, borderRadius: 20,
        padding: '4px 11px', fontSize: 11.5, fontWeight: 600, color: accent,
        boxShadow: t.shadow, display: 'flex', alignItems: 'center', gap: 5,
      }}>
        <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', display: 'inline-block', flexShrink: 0 }}></span>
        IA ativa
      </div>

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14, paddingBottom: 13, borderBottom: `1px solid ${t.border}` }}>
        <div style={{ width: 36, height: 36, borderRadius: 9, background: accent, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: 17, color: '#fff' }}>✈</div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 13.5, fontWeight: 700, color: t.text }}>Europa Clássica</div>
          <div style={{ fontSize: 11.5, color: t.textMuted, marginTop: 1 }}>Silva Turismo · 10 dias</div>
        </div>
        <span style={{ background: 'rgba(34,197,94,0.13)', color: '#16a34a', fontSize: 11, fontWeight: 700, padding: '2px 8px', borderRadius: 20, flexShrink: 0 }}>✓ Aprovada</span>
      </div>

      {/* Destinations */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 5, marginBottom: 12 }}>
        {[
          { city: 'Paris, França',     flag: '🇫🇷', nights: '3 noites' },
          { city: 'Roma, Itália',      flag: '🇮🇹', nights: '3 noites' },
          { city: 'Barcelona',         flag: '🇪🇸', nights: '4 noites' },
        ].map((d, i) => (
          <div key={i} style={{ background: innerBg, borderRadius: 9, padding: '7px 10px', display: 'flex', alignItems: 'center', gap: 8, border: `1px solid ${t.border}` }}>
            <span style={{ fontSize: 14 }}>{d.flag}</span>
            <span style={{ fontSize: 12.5, fontWeight: 600, color: t.text, flex: 1 }}>{d.city}</span>
            <span style={{ fontSize: 11, color: t.textMuted }}>{d.nights}</span>
          </div>
        ))}
      </div>

      {/* Includes */}
      <div style={{ background: t.primaryLight, borderRadius: 9, padding: '8px 11px', marginBottom: 13 }}>
        <div style={{ fontSize: 9.5, fontWeight: 700, color: accent, letterSpacing: '0.07em', textTransform: 'uppercase', marginBottom: 6 }}>Incluso</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
          {['✈ Aéreo', '🏨 Hotel 4★', '🚌 Transfers', '🧳 Bagagem'].map(item => (
            <span key={item} style={{ fontSize: 11, color: t.text, padding: '2px 7px', borderRadius: 5, background: t.isDark ? t.surface : '#FFFFFF', border: `1px solid ${t.border}` }}>{item}</span>
          ))}
        </div>
      </div>

      {/* Price + CTA */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 12, borderTop: `1px solid ${t.border}` }}>
        <div>
          <div style={{ fontSize: 10.5, color: t.textMuted, marginBottom: 2 }}>Total por pessoa</div>
          <div style={{ fontSize: 21, fontWeight: 800, color: t.text, letterSpacing: '-0.02em' }}>R$ 15.900</div>
        </div>
        <button style={{ background: accent, color: '#FFFFFF', border: 'none', borderRadius: 9, padding: '9px 16px', fontSize: 12.5, fontWeight: 700, cursor: 'pointer' }}>Assinar →</button>
      </div>

      {/* Tag */}
      <div style={{ textAlign: 'center', marginTop: 11, paddingTop: 10, borderTop: `1px solid ${t.border}` }}>
        <span style={{ fontSize: 10.5, color: t.textMuted }}>Gerado por <strong style={{ color: accent }}>ARCA</strong> em 3 minutos</span>
      </div>
    </div>
  );
}

/* ── Badge / Title / Sub / CTAs / Proof ── */

function HeroBadge({ t }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <span style={{
        display: 'inline-flex', alignItems: 'center', gap: 7,
        background: t.badge, color: t.badgeText,
        padding: '6px 13px', borderRadius: 20,
        fontSize: 12, fontWeight: 600,
        border: `1px solid ${t.badgeBorder}`,
        fontFamily: '"Plus Jakarta Sans", sans-serif',
      }}>
        <span style={{ color: '#F59E0B' }}>⚡</span>
        Mais de 100 agências confiam na ARCA
      </span>
    </div>
  );
}

function HeroTitle({ t, centered, large }) {
  const isBoldHero = t.isBoldNav;
  return (
    <h1 style={{
      fontFamily: '"Plus Jakarta Sans", sans-serif',
      fontSize: large ? 'clamp(36px, 5.5vw, 66px)' : 'clamp(30px, 4.5vw, 58px)',
      fontWeight: 800, color: t.heroText,
      lineHeight: 1.10, marginBottom: 18,
      letterSpacing: '-0.025em',
      textAlign: centered ? 'center' : 'left',
      textWrap: 'pretty',
    }}>
      Propostas que vendem{' '}
      <em style={{ fontStyle: 'italic', color: isBoldHero ? 'rgba(255,255,255,0.72)' : t.primary }}>
        em 3 minutos
      </em>
    </h1>
  );
}

function HeroSub({ t, centered }) {
  return (
    <p style={{
      fontSize: 'clamp(14px, 1.8vw, 17.5px)', color: t.heroSub, lineHeight: 1.7,
      marginBottom: 28, textAlign: centered ? 'center' : 'left',
      maxWidth: centered ? 560 : '100%',
      margin: centered ? '0 auto 28px' : '0 0 28px',
    }}>
      Seus consultores ainda gastam horas no Word? ARCA gera propostas
      profissionais com sua marca em 3 minutos. Mais tempo vendendo, menos papelada.
    </p>
  );
}

function HeroCTAs({ t, centered }) {
  const [h1, sH1] = React.useState(false);
  const [h2, sH2] = React.useState(false);
  const isBold = t.isBoldNav;
  const w = useWindowWidth();
  const isMobile = w < 768;
  return (
    <div style={{
      display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 22,
      justifyContent: centered ? 'center' : 'flex-start',
      flexDirection: isMobile ? 'column' : 'row',
    }}>
      <button
        onMouseEnter={() => sH1(true)} onMouseLeave={() => sH1(false)}
        style={{
          background: isBold ? '#FFFFFF' : t.primary,
          color: isBold ? t.primary : '#FFFFFF',
          border: 'none', borderRadius: 10, padding: '13px 26px',
          fontSize: 15, fontWeight: 700, cursor: 'pointer',
          fontFamily: '"Plus Jakarta Sans", sans-serif',
          transition: 'transform 0.18s, box-shadow 0.18s',
          transform: h1 ? 'translateY(-2px)' : 'translateY(0)',
          boxShadow: h1 ? (isBold ? '0 8px 28px rgba(0,0,0,0.22)' : t.shadowMd) : 'none',
          width: isMobile ? '100%' : 'auto',
        }}
      >Começar grátis agora</button>
      <button
        onMouseEnter={() => sH2(true)} onMouseLeave={() => sH2(false)}
        style={{
          background: 'transparent',
          color: isBold ? 'rgba(255,255,255,0.88)' : t.text,
          border: `1.5px solid ${isBold ? 'rgba(255,255,255,0.32)' : t.border}`,
          borderRadius: 10, padding: '12px 22px',
          fontSize: 15, fontWeight: 600, cursor: 'pointer',
          fontFamily: '"Plus Jakarta Sans", sans-serif',
          transition: 'transform 0.18s',
          transform: h2 ? 'translateY(-2px)' : 'translateY(0)',
          width: isMobile ? '100%' : 'auto',
        }}
      >Ver demo de 2 min →</button>
    </div>
  );
}

function HeroProof({ t, centered }) {
  const w = useWindowWidth();
  const isMobile = w < 768;
  return (
    <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: centered ? 'center' : 'flex-start' }}>
      {['100+ agências', '4.8★ avaliações', 'Suporte em PT'].map(item => (
        <span key={item} style={{ fontSize: 12.5, color: t.heroSub, display: 'flex', alignItems: 'center', gap: 5, fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
          <span style={{ color: '#22c55e', fontWeight: 700 }}>✓</span>{item}
        </span>
      ))}
    </div>
  );
}

function HeroSection({ t, variant }) {
  const mounted = true;
  const w = useWindowWidth();
  const isMobile = w < 768;
  const isBoldHero = t.isBoldNav;
  const hasBgGlow  = variant === 'dark';

  return (
    <section id="top" style={{
      background: t.heroBg,
      paddingTop: isMobile ? 84 : 112,
      paddingBottom: isBoldHero ? (isMobile ? 56 : 80) : (isMobile ? 52 : 72),
      position: 'relative', overflow: 'hidden',
    }}>
      {hasBgGlow && (
        <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '55%', height: '110%', background: 'radial-gradient(ellipse at top right, rgba(64,128,255,0.09) 0%, transparent 65%)', pointerEvents: 'none' }} />
      )}
      {isBoldHero && (
        <>
          <div style={{ position: 'absolute', bottom: '-80px', right: '-80px', width: 420, height: 420, background: 'rgba(255,255,255,0.04)', borderRadius: '50%', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', top: '15%', left: '-100px', width: 320, height: 320, background: 'rgba(255,255,255,0.03)', borderRadius: '50%', pointerEvents: 'none' }} />
        </>
      )}

      <div style={{
        maxWidth: 1200, margin: '0 auto',
        padding: isMobile ? '0 18px' : '0 32px',
        opacity: mounted ? 1 : 0, transition: 'opacity 0.75s ease',
      }}>
        {variant === 'moderno' ? (
          /* Split → stack on mobile */
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
            gap: isMobile ? 40 : 60,
            alignItems: 'center',
          }}>
            <div>
              <HeroBadge t={t} />
              <HeroTitle t={t} />
              <HeroSub t={t} />
              <HeroCTAs t={t} />
              <HeroProof t={t} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <ProductMockup t={t} />
            </div>
          </div>
        ) : variant === 'dark' ? (
          <div>
            <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto', marginBottom: isMobile ? 36 : 52 }}>
              <HeroBadge t={t} />
              <HeroTitle t={t} centered large />
              <HeroSub t={t} centered />
              <HeroCTAs t={t} centered />
              <HeroProof t={t} centered />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ transform: isMobile ? 'none' : 'perspective(1400px) rotateX(5deg)', transformOrigin: 'top center' }}>
                <ProductMockup t={t} />
              </div>
            </div>
          </div>
        ) : (
          /* bold */
          <div>
            <div style={{ textAlign: 'center', maxWidth: 740, margin: '0 auto', marginBottom: isMobile ? 36 : 56 }}>
              <HeroBadge t={t} />
              <HeroTitle t={t} centered large />
              <HeroSub t={t} centered />
              <HeroCTAs t={t} centered />
              <HeroProof t={t} centered />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <ProductMockup t={t} />
            </div>
          </div>
        )}
      </div>

      {isBoldHero && (
        <div style={{ position: 'absolute', bottom: -1, left: 0, right: 0 }}>
          <svg viewBox="0 0 1440 56" preserveAspectRatio="none" style={{ width: '100%', height: 56, display: 'block' }}>
            <path d="M0 56 Q360 0 720 28 Q1080 56 1440 10 L1440 56 Z" fill={t.bg} />
          </svg>
        </div>
      )}
    </section>
  );
}

Object.assign(window, { HeroSection, ProductMockup });
