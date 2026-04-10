export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-display font-semibold text-sm">
            <span className="text-brand-400">C</span>
            <span className="text-white">EVI</span>
            <span className="text-white/30">.</span>
            <span className="text-brand-500 font-mono text-xs ml-1">dev</span>
          </span>
        </div>
        <p className="text-xs text-white/20 font-mono">
          © {new Date().getFullYear()} Carlos Enrique Vázquez Iglesias — Hecho con Next.js
        </p>
        <div className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs text-white/30 font-mono">Disponible</span>
        </div>
      </div>
    </footer>
  )
}