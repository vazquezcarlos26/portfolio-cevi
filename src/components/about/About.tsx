export default function About() {
  const stats = [
    { value: '2+', label: 'Años de experiencia' },
    { value: '5+', label: 'Proyectos' },
    { value: '5+', label: 'Tecnologías' },
    { value: '100%', label: 'Compromiso' },
  ]

  return (
    <section id="about" className="relative py-10 overflow-hidden">
      {/* Decorative line */}
      <div className="absolute left-0 top-1/2 w-full h-px bg-gradient-to-r from-transparent via-brand-500/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <p className="section-label mb-4">// sobre mí</p>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6 leading-tight">
              Creando soluciones{' '}
              <span className="text-brand-400">que importan</span>
            </h2>
            <div className="space-y-4 text-white/50 leading-relaxed">
              <p>
                Soy Carlos Enrique Vázquez Iglesias, desarrollador Fullstack con base en México.
                Me especializo en construir sistemas web y aplicaciones móviles de alto rendimiento,
                desde el backend hasta la interfaz de usuario.
              </p>
              <p>
                Con más de 2 años de experiencia profesional, he trabajado con stacks modernos
                como Laravel + Angular 20, integrando bases de datos relacionales, servicios en la nube
                y herramientas de contenedores como Docker.
              </p>
              <p>
                Me apasiona el crecimiento continuo, las buenas prácticas de desarrollo y la
                entrega de productos que realmente funcionen para los usuarios finales.
              </p>
            </div>

            {/* Links */}
            <div className="flex gap-4 mt-8">
              <a
                href="https://github.com/vazquezcarlos26"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors group"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-white/30 group-hover:text-brand-400 transition-colors">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                GitHub
              </a>
              <a
                href="mailto:vazquez.carlos.26em@gmail.com"
                className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors group"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/30 group-hover:text-brand-400 transition-colors">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                Email
              </a>
            </div>
          </div>

          {/* Right: Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="gradient-border rounded-2xl p-6 flex flex-col gap-2 bg-dark-700"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <span className="font-display font-bold text-4xl text-brand-400">{stat.value}</span>
                <span className="text-sm text-white/40 leading-tight">{stat.label}</span>
              </div>
            ))}

            {/* Extra card */}
            <div className="col-span-2 gradient-border rounded-2xl p-5 bg-dark-700 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-brand-600/20 flex items-center justify-center flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#818CF8" strokeWidth="1.5">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-white">En constante aprendizaje</p>
                <p className="text-xs text-white/40 mt-0.5">Angular 20, pruebas de software, arquitectura de sistemas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}