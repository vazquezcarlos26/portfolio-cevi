const projects = [
  {
    number: '01',
    title: 'Sistema de Control Escolar',
    description:
      'Plataforma web fullstack para la administración de control estudiantil. Módulos de usuarios, alumnos, inscripciones y gestión de permisos con roles diferenciados.',
    tags: ['Laravel', 'PHP', 'SQL Server', 'Angular 20', 'Tailwind', 'Docker'],
    type: 'Web app',
    highlight: true,
  },
  {
    number: '02',
    title: 'Sitio Web',
    description:
      'Desarrollo de Sitio web personalizado, negocio de Agua Purificada, desplegado en Vercel. Ir a https://lapoblanitaap.vercel.app/',
    tags: ['Nexts js', 'Vercel', 'TypeScript'],
    type: 'Web App',
    highlight: false,
  },
  {
    number: '03',
    title: 'Aplicacion de MKP y Sitio web',
    description:
      'Liderazgo de equipo: Coordinación de desarrollo para el despliegue de un ecosistema de Marketplace y Delivery. QA & Testing, ejecución de pruebas de casos de uso y validación de APIs para garantizar la estabilidad del panel de logística y la experiencia del usuario.',
    tags: ['Documentacion', 'Pruebas Funcionales', 'Postman', 'Recoleccion de Requisitos funcionales.', 'Jira'],
    type: 'Delivery App',
    highlight: false,
  },
  {
    number: '04',
    title: 'Atención de Incidentes',
    description:
      'Seguridad y Mitigación: Identificación, análisis y corrección de vulnerabilidades críticas para garantizar la integridad y estabilidad del entorno SharePoint. Diseño e implementación de soluciones personalizadas sobre SharePoint 2013 integrando el ecosistema .NET.',
    tags: ['Windows Server', 'Sharepoint 2013'],
    type: 'Servidores',
    highlight: false,
  },
  {
    number: '05',
    title: 'Residencia Profesional CFE-ZIM',
    description:
      'Forme parte del proyecto Parque Vehicular, administracion y control de vehiculos en Comision Federal de Electricidad Zona Izucar de Matamoros.',
    tags: ['Codeigniter 3', 'PHP', 'FTP', 'SQL Server'],
    type: 'Web app',
    highlight: false,
  },
  {
    number: '06',
    title: 'Aplicacion Móvil React Native',
    description:
      'Control de inventario, entradas y salidas de productos de una dulceria.',
    tags: ['React Native', 'TypeScript', 'REST API', 'Expo'],
    type: 'Móvil',
    highlight: false,
  },
  {
    number: '07',
    title: 'Residencia Profesional CFE-ZIM',
    description:
      'Forme parte del proyecto Operdia, control de operaciones diarias, reportes y administracion en Comision Federal de Electricidad Zona Izucar de Matamoros.',
    tags: ['C#', '.NET', 'SQL Server', 'VisualSVN'],
    type: 'Web app',
    highlight: false,
  },
]

const typeColors: Record<string, string> = {
  'Web App': 'bg-brand-500/10 text-brand-400 border-brand-500/20',
  'Mobile App': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  'Backend': 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  'Frontend': 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  'QA': 'bg-rose-500/10 text-rose-400 border-rose-500/20',
}

export default function Projects() {
  return (
    <section id="projects" className="py-28 relative">
      {/* Left glow */}
      <div className="absolute left-0 top-1/3 w-72 h-72 bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-16">
          <p className="section-label mb-4">// proyectos</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white leading-tight">
              Proyectos <span className="text-brand-400">Destacados</span>
            </h2>
            <p className="text-white/40 max-w-xs text-sm leading-relaxed">
              Una selección de proyectos donde apliqué mis habilidades técnicas de inicio a fin.
            </p>
          </div>
        </div>

        {/* Featured project */}
        {projects.filter(p => p.highlight).map(p => (
          <div
            key={p.number}
            className="gradient-border rounded-3xl p-8 md:p-12 mb-6 bg-dark-700 relative overflow-hidden group"
          >
            {/* Background number */}
            <span className="absolute right-8 top-4 font-display font-bold text-[120px] leading-none text-white/[0.03] select-none pointer-events-none">
              {p.number}
            </span>

            <div className="flex flex-col md:flex-row md:items-start gap-8 relative z-10">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`text-xs font-mono px-3 py-1 rounded-full border ${typeColors[p.type]}`}>
                    {p.type}
                  </span>
                  <span className="text-xs font-mono text-white/20">{p.number}</span>
                </div>
                <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-4 leading-tight">
                  {p.title}
                </h3>
                <p className="text-white/50 leading-relaxed mb-6 max-w-lg">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map(tag => (
                    <span key={tag} className="tag-pill">{tag}</span>
                  ))}
                </div>
              </div>

              {/* Visual placeholder */}
              <div className="w-full md:w-64 h-40 rounded-2xl bg-dark-500 border border-white/5
                flex items-center justify-center group-hover:border-brand-500/20 transition-colors flex-shrink-0">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="rgba(99,102,241,0.3)" strokeWidth="1">
                  <rect x="2" y="3" width="20" height="14" rx="2"/>
                  <path d="M8 21h8M12 17v4"/>
                </svg>
              </div>
            </div>
          </div>
        ))}

        {/* Grid projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.filter(p => !p.highlight).map(p => (
            <div
              key={p.number}
              className="gradient-border-hover rounded-2xl p-6 bg-dark-700 flex flex-col gap-4 group relative overflow-hidden"
            >
              {/* Bg number */}
              <span className="absolute right-4 top-2 font-display font-bold text-7xl leading-none text-white/[0.03] select-none pointer-events-none">
                {p.number}
              </span>

              <div className="flex items-center justify-between relative z-10">
                <span className={`text-xs font-mono px-3 py-1 rounded-full border ${typeColors[p.type]}`}>
                  {p.type}
                </span>
                <span className="text-xs font-mono text-white/20">{p.number}</span>
              </div>

              <div className="relative z-10 flex-1">
                <h3 className="font-display font-semibold text-lg text-white mb-2 leading-tight">
                  {p.title}
                </h3>
                <p className="text-sm text-white/40 leading-relaxed">{p.description}</p>
              </div>

              <div className="flex flex-wrap gap-1.5 relative z-10">
                {p.tags.slice(0, 4).map(tag => (
                  <span key={tag} className="text-xs font-mono px-2.5 py-1 rounded-md
                    bg-white/5 text-white/40 border border-white/5 group-hover:border-brand-500/15 transition-colors">
                    {tag}
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