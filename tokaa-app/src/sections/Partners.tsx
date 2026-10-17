import Reveal from '@/components/Reveal'

const partners = [
  {
    logo: 'images/logo.png',
    alt: 'Ayirebi Senior High School logo',
    name: 'Ayirebi Senior High School',
    role: 'Educational Technology Partner',
  },
  {
    logo: 'images/aida-logo.png',
    alt: 'Africa Innovative and Development Academy logo',
    name: 'Africa Innovative & Development Academy',
    role: 'Trusted Customer',
  },
]

export default function Partners() {
  return (
    <section className="border-y border-white/5 bg-white/[0.015]">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <Reveal className="flex items-center gap-4">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-white/15" />
          <p className="font-mono text-xs tracking-[0.3em] text-slate-500">TRUSTED CUSTOMERS</p>
          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-white/15" />
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {partners.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.12}>
              <div className="flex items-center gap-5 rounded-3xl border border-white/5 bg-white/[0.02] p-6 transition-colors hover:border-white/10 hover:bg-white/[0.04]">
                <img
                  src={p.logo}
                  alt={p.alt}
                  className="h-14 w-14 rounded-2xl bg-white object-contain p-1.5 shadow-lg"
                />
                <div>
                  <strong className="block font-display text-base font-semibold text-white">{p.name}</strong>
                  <small className="mt-0.5 block text-sm text-slate-500">{p.role}</small>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.25}>
          <p className="mt-10 text-center text-sm text-slate-500">
            Supporting organisations with technology that works in the real world.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
