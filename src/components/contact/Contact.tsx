const contactLinks = [
  {
    label: 'GitHub',
    handle: 'github.com/vazquezcarlos26',
    href: 'https://github.com/vazquezcarlos26',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
      </svg>
    ),
    color: 'hover:border-white/20 hover:bg-white/5',
  },
  {
    label: 'LinkedIn',
    handle: 'linkedin.com/in/c-e-v-i/',
    href: 'https://linkedin.com',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    color: 'hover:border-blue-500/30 hover:bg-blue-500/5',
  },
  {
    label: 'Email',
    handle: 'vazquez.carlos.26em@gmail.com',
    href: 'mailto:vazquez.carlos.26em@gmail.com',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
    color: 'hover:border-brand-500/30 hover:bg-brand-500/5',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      {/* Central glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] rounded-full bg-brand-600/8 blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        {/* Label */}
        <p className="section-label mb-4">// contacto</p>

        {/* Headline */}
        <h2 className="font-display font-bold text-4xl md:text-6xl text-white leading-tight mb-6">
          ¿Tienes un proyecto{' '}
          <span className="text-brand-400">en mente?</span>
        </h2>

        <p className="text-white/40 text-lg mb-12 max-w-xl mx-auto leading-relaxed">
          Estoy disponible para oportunidades laborales, freelance o colaboraciones.
          No dudes en escribirme.
        </p>

        {/* Main CTA */}
        <a
          href="mailto:vazquez.carlos.26em@gmail.com"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-base font-medium
            bg-brand-600 hover:bg-brand-500 text-white transition-all duration-200
            hover:shadow-2xl hover:shadow-brand-600/30 hover:-translate-y-1 mb-16"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="2" y="4" width="20" height="16" rx="2"/>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
          </svg>
          Enviar mensaje
        </a>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-12 max-w-xs mx-auto">
          <div className="flex-1 h-px bg-white/10" />
          <span className="text-xs text-white/20 font-mono">o encuéntrame en</span>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        {/* Links grid */}
        <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex flex-col items-center gap-3 p-5 rounded-2xl
                border border-white/8 text-white/50 transition-all duration-200
                hover:text-white hover:-translate-y-1 ${link.color}`}
            >
              <span className="text-white/40 group-hover:text-white transition-colors">
                {link.icon}
              </span>
              <span className="text-sm font-medium">{link.label}</span>
              <span className="text-xs font-mono text-white/30">{link.handle}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}