/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // ARCA brand
        brand: {
          DEFAULT: '#0047E0',
          dark: '#0036CC',
          light: '#4080FF',
        },
        // Surfaces
        ink: '#060D1A',
        'ink-soft': '#0A162C',
        'ink-card': '#121A2A',
        paper: '#FAFCFF',
      },
      fontFamily: {
        sans: ['var(--font-jakarta)', 'Plus Jakarta Sans', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'JetBrains Mono', 'monospace'],
      },
      transitionTimingFunction: {
        lux: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        shine: { '100%': { left: '125%' } },
      },
    },
  },
  plugins: [],
}
