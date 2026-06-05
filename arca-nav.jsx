// arca-nav.jsx — Navbar (responsive, with hamburger menu)

function NavLink({ label, id, color, onClick }) {
  const [hover, setHover] = React.useState(false);
  return (
    <button
      onClick={() => { onClick && onClick(); scrollToId(id); }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: 'none', border: 'none', cursor: 'pointer',
        color, fontSize: 14.5, fontWeight: 500, padding: '4px 0',
        fontFamily: '"Plus Jakarta Sans", sans-serif',
        opacity: hover ? 1 : 0.78,
        transition: 'opacity 0.18s',
      }}
    >{label}</button>
  );
}

function DarkModeBtn({ darkMode, setDarkMode, t }) {
  const [hover, setHover] = React.useState(false);
  const isBold = t.isBoldNav;
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      title={darkMode ? 'Modo claro' : 'Modo escuro'}
      style={{
        background: isBold
          ? (hover ? 'rgba(255,255,255,0.25)' : 'rgba(255,255,255,0.14)')
          : (hover ? t.surface2 : t.surface2),
        border: `1px solid ${isBold ? 'rgba(255,255,255,0.24)' : t.border}`,
        borderRadius: 8, cursor: 'pointer',
        color: isBold ? '#FFFFFF' : t.text,
        width: 36, height: 36,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 15, transition: 'background 0.18s', flexShrink: 0,
      }}
    >{darkMode ? '○' : '◑'}</button>
  );
}

function NavCTABtn({ t, fullWidth }) {
  const [hover, setHover] = React.useState(false);
  const isBold = t.isBoldNav;
  return (
    <button
      onClick={() => window.open(ARCA_URLS.signup, '_blank')}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: isBold ? '#FFFFFF' : t.primary,
        color: isBold ? t.primary : '#FFFFFF',
        border: 'none', borderRadius: 9,
        padding: '10px 22px', fontSize: 14, fontWeight: 700,
        cursor: 'pointer', fontFamily: '"Plus Jakarta Sans", sans-serif',
        transition: 'transform 0.18s, box-shadow 0.18s',
        transform: hover ? 'translateY(-1px)' : 'translateY(0)',
        boxShadow: hover ? t.shadowMd : 'none',
        whiteSpace: 'nowrap',
        width: fullWidth ? '100%' : 'auto',
      }}
    >Começar grátis</button>
  );
}

function Navbar({ t, variant, darkMode, setDarkMode }) {
  const [scrolled, setScrolled]   = React.useState(false);
  const [menuOpen, setMenuOpen]   = React.useState(false);
  const w = useWindowWidth();
  const isMobile = w < 768;

  React.useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 28);
    window.addEventListener('scroll', fn, { passive: true });
    fn();
    return () => window.removeEventListener('scroll', fn);
  }, []);

  // Close menu on scroll
  React.useEffect(() => {
    if (scrolled && menuOpen) setMenuOpen(false);
  }, [scrolled]);

  const isBold   = t.isBoldNav;
  const active   = scrolled || isBold;
  const linkColor = isBold ? '#FFFFFF' : t.text;
  const links    = [
    { label: 'Funcionalidades', id: 'features' },
    { label: 'Como Funciona',   id: 'howto'    },
    { label: 'Preços',          id: 'pricing'  },
  ];

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      background: (active || menuOpen) ? t.navBg : 'transparent',
      backdropFilter: (active || menuOpen) ? 'blur(16px)' : 'none',
      WebkitBackdropFilter: (active || menuOpen) ? 'blur(16px)' : 'none',
      borderBottom: (scrolled && !isBold) ? `1px solid ${t.border}` : '1px solid transparent',
      transition: 'background 0.32s ease, border-color 0.32s ease',
    }}>
      {/* Main bar */}
      <div style={{
        maxWidth: 1200, margin: '0 auto',
        padding: isMobile ? '0 18px' : '0 32px',
        display: 'flex', alignItems: 'center',
        height: isMobile ? 60 : 68, gap: 0,
      }}>

        {/* Logo */}
        <a
          href="#top"
          onClick={e => { e.preventDefault(); setMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          style={{ display: 'flex', alignItems: 'center', gap: 9, textDecoration: 'none', flexShrink: 0 }}
        >
          <div style={{ width: 30, height: 30, borderRadius: 7, overflow: 'hidden', flexShrink: 0 }}>
            <img src="uploads/logo-1780595526670.png" alt="ARCA" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <span style={{
            fontFamily: '"Plus Jakarta Sans", sans-serif',
            fontWeight: 800, fontSize: 15.5,
            color: isBold ? '#FFFFFF' : t.primary,
            letterSpacing: '0.05em',
          }}>ARCA</span>
        </a>

        {/* Desktop nav links */}
        {!isMobile && (
          <div style={{ display: 'flex', gap: 30, marginLeft: 48, flex: 1 }}>
            {links.map(l => <NavLink key={l.id} label={l.label} id={l.id} color={linkColor} />)}
          </div>
        )}
        {!isMobile && <div style={{ flex: isMobile ? 0 : 1 }} />}

        {/* Desktop actions */}
        {!isMobile && (
          <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
            <DarkModeBtn darkMode={darkMode} setDarkMode={setDarkMode} t={t} />
            <NavCTABtn t={t} />
          </div>
        )}

        {/* Mobile: dark mode + hamburger */}
        {isMobile && (
          <div style={{ marginLeft: 'auto', display: 'flex', gap: 8, alignItems: 'center' }}>
            <DarkModeBtn darkMode={darkMode} setDarkMode={setDarkMode} t={t} />
            <button
              onClick={() => setMenuOpen(o => !o)}
              style={{
                background: isBold ? 'rgba(255,255,255,0.14)' : t.surface2,
                border: `1px solid ${isBold ? 'rgba(255,255,255,0.24)' : t.border}`,
                borderRadius: 8, cursor: 'pointer',
                color: isBold ? '#FFFFFF' : t.text,
                width: 36, height: 36,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: menuOpen ? 16 : 18,
                flexShrink: 0,
              }}
            >{menuOpen ? '✕' : '☰'}</button>
          </div>
        )}
      </div>

      {/* Mobile dropdown menu */}
      {isMobile && menuOpen && (
        <div style={{
          background: t.isDark ? t.surface : (isBold ? t.navBg : 'rgba(248,250,255,0.97)'),
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderTop: `1px solid ${t.border}`,
          padding: '8px 18px 20px',
        }}>
          {links.map(l => (
            <button key={l.id}
              onClick={() => { setMenuOpen(false); scrollToId(l.id); }}
              style={{
                display: 'block', width: '100%', textAlign: 'left',
                background: 'none', border: 'none', cursor: 'pointer',
                color: isBold ? '#FFFFFF' : t.text,
                fontSize: 16, fontWeight: 500,
                padding: '14px 4px',
                fontFamily: '"Plus Jakarta Sans", sans-serif',
                borderBottom: `1px solid ${t.border}`,
              }}
            >{l.label}</button>
          ))}
          <div style={{ marginTop: 16 }}>
            <NavCTABtn t={t} fullWidth />
          </div>
        </div>
      )}
    </nav>
  );
}

Object.assign(window, { Navbar });
