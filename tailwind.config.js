/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0052FF',
        'primary-dark': '#003FCC',
        secondary: '#9CA3AF',
        'bg-light': '#F3F4F6',
        'text-dark': '#1F2937',
      },
    },
  },
  plugins: [],
}
