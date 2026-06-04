// arca-bottom.jsx — CTA + Footer (responsive)

function CTASection({ t }) {
  const [ref, anim] = useScrollFade(0);
  const [hover, setHover] = React.useState(false);
  const w = useWindowWidth();
  const isMobile = w < 768;

  return (
    <section style={{ background: t.primary, padding: `${isMobile ? 72 : 100}px 0`, position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '-40%', right: '-8%', width: '50%', height: '180%', background: 'radial-gradient(ellipse, rgba(255,255,255,0.06) 0%, transparent 65%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-50%', left: '-5%', width: '40%', height: '160%', background: 'radial-gradient(ellipse, rgba(255,255,255,0.04) 0%, transparent 65%)', pointerEvents: 'none' }} />

      <div ref={ref} style={{
        ...anim,
        maxWidth: 680, margin: '0 auto',
        padding: isMobile ? '0 18px' : '0 32px',
        textAlign: 'center', position: 'relative',
      }}>
        <h2 style={{
          fontFamily: '"Plus Jakarta Sans", sans-serif',
          fontSize: isMobile ? 'clamp(28px, 8vw, 40px)' : 'clamp(32px, 4.5vw, 54px)',
          fontWeight: 800, color: '#FFFFFF',
          letterSpacing: '-0.026em', lineHeight: 1.10, marginBottom: 14,
        }}>
          Comece seu trial<br />agora mesmo
        </h2>
        <p style={{ fontSize: isMobile ? 16 : 18, color: 'rgba(255,255,255,0.75)', marginBottom: 36, lineHeight: 1.6 }}>
          14 dias grátis. Sem cartão de crédito. Sem compromisso.
        </p>
        <button
          onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
          style={{
            background: '#FFFFFF', color: t.primary,
            border: 'none', borderRadius: 12,
            padding: isMobile ? '14px 28px' : '15px 38px',
            fontSize: isMobile ? 15 : 16, fontWeight: 800,
            cursor: 'pointer', fontFamily: '"Plus Jakarta Sans", sans-serif',
            display: 'block', margin: '0 auto 22px',
            transition: 'transform 0.2s, box-shadow 0.2s',
            transform: hover ? 'translateY(-3px)' : 'translateY(0)',
            boxShadow: hover ? '0 14px 36px rgba(0,0,0,0.22)' : '0 4px 16px rgba(0,0,0,0.12)',
            width: isMobile ? '100%' : 'auto',
          }}
        >Criar conta grátis →</button>
        <div style={{ display: 'flex', gap: isMobile ? 12 : 22, justifyContent: 'center', flexWrap: 'wrap' }}>
          {['✓ Acesso imediato', '✓ Suporte em português', '✓ Cancelar a qualquer momento'].map(item => (
            <span key={item} style={{ fontSize: isMobile ? 12 : 13, color: 'rgba(255,255,255,0.65)', fontFamily: '"Plus Jakarta Sans", sans-serif' }}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer({ t }) {
  const w = useWindowWidth();
  const isMobile = w < 768;

  const linkStyle = { fontSize: 13.5, color: 'rgba(255,255,255,0.48)', textDecoration: 'none', transition: 'color 0.18s', fontFamily: '"Plus Jakarta Sans", sans-serif' };
  const hoverLink = e => { e.currentTarget.style.color = 'rgba(255,255,255,0.82)'; };
  const leaveLink = e => { e.currentTarget.style.color = 'rgba(255,255,255,0.48)'; };
  const headStyle = { fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.30)', letterSpacing: '0.09em', textTransform: 'uppercase', marginBottom: 14, fontFamily: '"Plus Jakarta Sans", sans-serif' };

  const cols = [
    { title: 'Produto',  links: ['Funcionalidades', 'Como Funciona', 'Preços', 'Demo'] },
    { title: 'Empresa',  links: ['Sobre nós', 'Blog', 'Carreiras', 'Contato'] },
    { title: 'Legal',    links: ['Privacidade', 'Termos de uso', 'Cookies'] },
  ];

  return (
    <footer style={{ background: t.footerBg, padding: `${isMobile ? 48 : 60}px 0 32px`, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: isMobile ? '0 18px' : '0 32px' }}>

        {/* Brand + columns */}
        <div style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: isMobile ? 36 : 52,
          gap: isMobile ? 32 : 36,
        }}>
          {/* Brand */}
          <div style={{ maxWidth: isMobile ? '100%' : 240 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 12 }}>
              <div style={{ width: 28, height: 28, borderRadius: 6, overflow: 'hidden', flexShrink: 0 }}>
                <img src="uploads/logo-1780595526670.png" alt="ARCA" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: 14.5, color: '#FFFFFF', letterSpacing: '0.05em' }}>ARCA</span>
            </div>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.40)', lineHeight: 1.65 }}>
              Propostas profissionais para agências de turismo. Em 3 minutos.
            </p>
          </div>

          {/* Link columns */}
          <div style={{
            display: 'flex',
            gap: isMobile ? 28 : 64,
            flexWrap: 'wrap',
            width: isMobile ? '100%' : 'auto',
          }}>
            {cols.map(col => (
              <div key={col.title}>
                <div style={headStyle}>{col.title}</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
                  {col.links.map(l => (
                    <a key={l} href="#" style={linkStyle} onMouseEnter={hoverLink} onMouseLeave={leaveLink}>{l}</a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          paddingTop: 20, borderTop: '1px solid rgba(255,255,255,0.07)',
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          justifyContent: 'space-between', alignItems: isMobile ? 'flex-start' : 'center',
          gap: 8,
        }}>
          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.28)', fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
            © 2026 ARCA Company. Todos os direitos reservados.
          </span>
          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.28)', fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
            Feito com ♥ no Brasil
          </span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { CTASection, Footer });
