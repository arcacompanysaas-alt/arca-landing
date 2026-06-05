// arca-tokens.jsx — Theme tokens + shared hooks for ARCA Landing Page

const THEMES = {
  moderno: {
    bg: '#F5F8FF', bgAlt: '#FFFFFF', surface: '#FFFFFF', surface2: '#EEF3FF',
    primary: '#0047E0', primaryLight: 'rgba(0,71,224,0.08)', primaryDark: '#0036CC',
    text: '#0C1524', textMuted: '#536880', border: '#DCE5F5',
    navBg: 'rgba(245,248,255,0.90)',
    shadow: '0 2px 12px rgba(0,71,224,0.06)',
    shadowMd: '0 6px 24px rgba(0,71,224,0.11)',
    shadowLg: '0 20px 60px rgba(0,71,224,0.14)',
    badge: '#EEF3FF', badgeText: '#0047E0', badgeBorder: '#C8D8F5',
    footerBg: '#060D1C',
    heroBg: '#F5F8FF', heroText: '#0C1524', heroSub: '#536880',
    sectionAlt: '#F5F8FF',
    isDark: false, isBoldNav: false,
  },
  moderno_dark: {
    bg: '#060D1A', bgAlt: '#0B1628', surface: '#0F1D34', surface2: '#162540',
    primary: '#4080FF', primaryLight: 'rgba(64,128,255,0.10)', primaryDark: '#2468F0',
    text: '#EBF2FF', textMuted: '#668AAE', border: '#1B2D47',
    navBg: 'rgba(6,13,26,0.92)',
    shadow: '0 2px 12px rgba(0,0,0,0.38)',
    shadowMd: '0 6px 24px rgba(0,0,0,0.45)',
    shadowLg: '0 20px 60px rgba(0,0,0,0.55)',
    badge: 'rgba(64,128,255,0.13)', badgeText: '#7EAEFF', badgeBorder: 'rgba(64,128,255,0.22)',
    footerBg: '#030A14',
    heroBg: '#060D1A', heroText: '#EBF2FF', heroSub: '#668AAE',
    sectionAlt: '#0B1628',
    isDark: true, isBoldNav: false,
  },
};

function getTheme(variant, darkMode) {
  const key = darkMode ? 'moderno_dark' : 'moderno';
  return THEMES[key];
}

function useScrollFade(delay) {
  const d = delay || 0;
  const ref = React.useRef(null);
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    // Fallback: guarantee visibility after 1.8 s so nothing stays hidden
    const fallback = setTimeout(() => setVisible(true), 1800 + d);
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          clearTimeout(fallback);
        }
      },
      { threshold: 0.01, rootMargin: '0px 0px 60px 0px' }
    );
    if (ref.current) obs.observe(ref.current);
    return () => { obs.disconnect(); clearTimeout(fallback); };
  }, []);
  const animStyle = {
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(22px)',
    transition: `opacity 0.65s ${d}ms ease, transform 0.65s ${d}ms ease`,
  };
  return [ref, animStyle];
}

function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.pageYOffset - 76;
  window.scrollTo({ top, behavior: 'smooth' });
}

function useWindowWidth() {
  const [w, setW] = React.useState(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );
  React.useEffect(() => {
    const fn = () => setW(window.innerWidth);
    window.addEventListener('resize', fn, { passive: true });
    return () => window.removeEventListener('resize', fn);
  }, []);
  return w;
}

const ARCA_URLS = {
  signup:           'https://app.arca.com/signup',
  signupStarter:    'https://app.arca.com/signup?plan=starter',
  signupPro:        'https://app.arca.com/signup?plan=professional',
  signupEnterprise: 'https://app.arca.com/signup?plan=enterprise',
  whatsapp:         'https://wa.me/5500000000000',
  demo:             'https://www.youtube.com/watch?v=SEU_VIDEO',
};

Object.assign(window, { THEMES, getTheme, useScrollFade, scrollToId, useWindowWidth, ARCA_URLS });
