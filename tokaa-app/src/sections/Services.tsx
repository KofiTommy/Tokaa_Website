import { ArrowUpRight, BarChart3, Code2, Compass } from 'lucide-react'
import Reveal from '@/components/Reveal'

const services = [
  {
    number: '01',
    icon: Compass,
    title: 'Digital Strategy',
    body: 'Not sure where to start? We help you make sense of the options and choose a path that supports your goals.',
    accent: 'var(--tokaa-teal)',
  },
  {
    number: '02',
    icon: Code2,
    title: 'Software & Systems',
    body: 'We create reliable digital tools that make life easier for your customers, your staff, and your business.',
    accent: 'var(--tokaa-blue)',
    featured: true,
  },
  {
    number: '03',
    icon: BarChart3,
    title: 'Data & Intelligence',
    body: 'Put your information to better use with simple reporting, smart automation, and insights you can act on.',
    accent: 'var(--tokaa-violet)',
  },
]

const capabilities = [
  'Web applications',
  'Cloud solutions',
  'Mobile systems',
  'Data & analytics',
  'AI readiness',
  'Cybersecurity',
]

export default function Services() {
  return (
    <section id="services" className="relative mx-auto max-w-7xl px-5 py-28 sm:px-8">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.3em] text-[var(--tokaa-teal)]">02 / WHAT WE DO</p>
          <h2 className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
            Help where you
            <br />
            need it <span className="text-gradient">most.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="max-w-sm text-slate-400">
            Three core ways we work with you — from first idea to running system.
          </p>
        </Reveal>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.number} delay={i * 0.12}>
            <article
              className={`group relative flex h-full flex-col rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-1.5 ${
                s.featured
                  ? 'glow-border border-transparent bg-white/[0.05] shadow-[0_24px_80px_hsl(217_90%_50%/0.15)]'
                  : 'border-white/5 bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.04]'
              }`}
            >
              <div className="flex items-start justify-between">
                <span
                  className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10"
                  style={{ color: s.accent, background: `color-mix(in srgb, ${s.accent} 10%, transparent)` }}
                >
                  <s.icon className="h-6 w-6" />
                </span>
                <span className="font-mono text-sm text-slate-600">{s.number}</span>
              </div>
              <h3 className="mt-8 font-display text-xl font-semibold text-white">{s.title}</h3>
              <p className="mt-3 flex-1 leading-relaxed text-slate-400">{s.body}</p>
              <a
                href="#contact"
                aria-label={`Discuss ${s.title}`}
                className="mt-8 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-300 transition-all group-hover:border-transparent group-hover:bg-brand-gradient group-hover:text-white"
              >
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2} className="mt-16">
        <div className="flex flex-wrap items-center gap-3">
          <span className="mr-2 font-mono text-xs tracking-[0.3em] text-slate-500">OUR CAPABILITIES</span>
          {capabilities.map((c) => (
            <span
              key={c}
              className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-300 transition-colors hover:border-[var(--tokaa-blue)]/50 hover:text-white"
            >
              {c}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
