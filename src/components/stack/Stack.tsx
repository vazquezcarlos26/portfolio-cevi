const stackCategories = [
  {
    label: 'Frontend',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
      </svg>
    ),
    items: ['Next.js', 'React', 'TypeScript', 'JavaScript', 'Angular 20'],
  },
  {
    label: 'Backend',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M5 12h14M12 5l7 7-7 7"/>
      </svg>
    ),
    items: ['Laravel', 'PHP', 'Node.js', 'REST APIs'],
  },
  {
    label: 'Mobile',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="7" y="2" width="10" height="20" rx="2"/>
        <path d="M11 18h2"/>
      </svg>
    ),
    items: ['React Native', 'Expo'],
  },
  {
    label: 'Base de Datos',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <ellipse cx="12" cy="5" rx="9" ry="3"/>
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
      </svg>
    ),
    items: ['SQL Server', 'MySQL', 'Firebase'],
  },
  {
    label: 'DevOps & Tools',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    ),
    items: ['Docker', 'Git', 'Postman', 'Jira'],
  },
  {
    label: 'QA & Testing',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 12l2 2 4-4"/>
        <circle cx="12" cy="12" r="10"/>
      </svg>
    ),
    items: ['Pruebas funcionales', 'Pruebas de integración', 'Postman Tests'],
  },
]

export default function Stack() {
  return (
    <section id="stack" className="py-28 relative">
      {/* Background accent */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-80 h-80 bg-brand-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label mb-4">// tecnologías</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white leading-tight">
            Mi <span className="text-brand-400">Stack</span> Tecnológico
          </h2>
          <p className="mt-4 text-white/40 max-w-xl mx-auto">
            Herramientas y tecnologías que uso para construir productos digitales completos.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {stackCategories.map((cat) => (
            <div
              key={cat.label}
              className="gradient-border-hover rounded-2xl p-6 bg-dark-700 group"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-lg bg-brand-600/15 flex items-center justify-center
                  text-brand-400 group-hover:bg-brand-600/25 transition-colors">
                  {cat.icon}
                </div>
                <span className="font-display font-semibold text-sm text-white/80 group-hover:text-white transition-colors">
                  {cat.label}
                </span>
              </div>

              {/* Items */}
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs font-mono px-3 py-1.5 rounded-lg
                      bg-white/5 text-white/50 border border-white/5
                      group-hover:border-brand-500/20 group-hover:text-white/70
                      transition-all duration-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}