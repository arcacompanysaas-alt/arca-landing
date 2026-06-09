export default function Footer({ isDark }: { isDark: boolean }) {
  return (
    <footer
      className={`relative w-full py-12 border-t text-center text-sm z-20 ${
        isDark
          ? 'border-white/10 text-gray-500 bg-ink'
          : 'border-gray-200 text-gray-400 bg-white'
      }`}
    >
      <p>© 2026 ARCA AI System. Elevando o padrão de viagens B2B.</p>
    </footer>
  )
}
