'use client'
import { useEffect, useRef } from 'react'

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animFrame: number
    let t = 0

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }
    resize()
    window.addEventListener('resize', resize)

    const particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number }[] = []
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * (canvas.offsetWidth),
        y: Math.random() * (canvas.offsetHeight),
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
      })
    }

    const draw = () => {
      t += 0.01
      const W = canvas.offsetWidth
      const H = canvas.offsetHeight
      ctx.clearRect(0, 0, W, H)

      // Connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(99, 102, 241, ${0.08 * (1 - dist / 120)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      // Particles
      particles.forEach(p => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > W) p.vx *= -1
        if (p.y < 0 || p.y > H) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(129, 140, 248, ${p.opacity})`
        ctx.fill()
      })

      animFrame = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animFrame)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Canvas background */}
      <canvas
      
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-70 pointer-events-none z-0"
      />

      {/* Radial glow center */}
      <div  className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-brand-600/5 blur-[120px]" />
      </div>
      <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-purple-600/5 blur-[100px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col items-center text-center">
        {/* Badge */}
        <div className="flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full
          border border-brand-500/30 bg-brand-600/10 text-brand-400 text-sm font-mono
          animate-fade-up opacity-0-init"
          style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-slow" />
          Disponible para nuevas oportunidades
        </div>

        {/* Name */}
        <h1
          className="font-display font-bold text-5xl md:text-7xl lg:text-8xl leading-none tracking-tight mb-4
            animate-fade-up opacity-0-init"
          style={{ animationDelay: '350ms', animationFillMode: 'forwards' }}
        >
          <span className="text-white">Carlos </span>
          <span className="text-brand-400 glow-text">Vázquez</span>
        </h1>

        {/* Title */}
        <p
          className="font-display text-xl md:text-2xl font-light text-white/50 mb-6 tracking-wide
            animate-fade-up opacity-0-init"
          style={{ animationDelay: '500ms', animationFillMode: 'forwards' }}
        >
          Desarrollador{' '}
          <span className="text-white/80">Fullstack</span>
          {' '}·{' '}
          <span className="text-white/80">+2 años de experiencia</span>
        </p>

        {/* Description */}
        <p
          className="max-w-xl text-base md:text-lg text-white/40 leading-relaxed mb-10
            animate-fade-up opacity-0-init"
          style={{ animationDelay: '650ms', animationFillMode: 'forwards' }}
        >
          Construyo aplicaciones web y móviles robustas, escalables y bien diseñadas.
          Especializado en el ecosistema Laravel, Next.js y React Native.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-wrap items-center justify-center gap-4
            animate-fade-up opacity-0-init"
          style={{ animationDelay: '800ms', animationFillMode: 'forwards' }}
        >
          <a
            href="#projects"
            className="flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm
              bg-brand-600 hover:bg-brand-500 text-white transition-all duration-200
              hover:shadow-xl hover:shadow-brand-600/30 hover:-translate-y-0.5"
          >
            Ver proyectos
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#contact"
            className="flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm
              border border-white/10 text-white/70 hover:text-white hover:border-white/20
              transition-all duration-200 hover:-translate-y-0.5 backdrop-blur-sm"
          >
            Contáctame
          </a>

          <a href="/img/cv.pdf" download="cv.pdf"
            className="flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm
              border border-white/10 text-white/70 hover:text-white hover:border-white/20
              transition-all duration-200 hover:-translate-y-0.5 backdrop-blur-sm"
          >
            <button>Descargar CV</button>
          </a>
        </div>

        {/* Tech pills */}
        <div
          className="flex flex-wrap justify-center gap-2 mt-14
            animate-fade-up opacity-0-init"
          style={{ animationDelay: '1000ms', animationFillMode: 'forwards' }}
        >
          {['Laravel', 'Next.js', 'React Native', 'TypeScript', 'Docker'].map(tech => (
            <span key={tech} className="tag-pill">{tech}</span>
          ))}
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2
            animate-fade-in opacity-0-init"
          style={{ animationDelay: '1400ms', animationFillMode: 'forwards' }}
        >
          <span className="text-xs text-white/20 font-mono tracking-widest uppercase">scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-brand-500/50 to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  )
}