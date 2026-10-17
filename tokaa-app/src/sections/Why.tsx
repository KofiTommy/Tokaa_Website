import Reveal from '@/components/Reveal'

const reasons = [
  {
    number: '01',
    title: 'Built around your reality',
    body: 'We take time to understand your team and the way you work before suggesting a solution.',
  },
  {
    number: '02',
    title: 'Clear, practical advice',
    body: 'We make technology easier to understand, so you can make decisions with confidence.',
  },
  {
    number: '03',
    title: 'Support that continues',
    body: 'Launching is only the start. We stay available to help your technology keep delivering value.',
  },
]

export default function Why() {
  return (
    <section className="border-y border-white/5 bg-white/[0.015]">
      <div className="mx-auto grid max-w-7xl gap-16 px-5 py-28 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.3em] text-[var(--tokaa-teal)]">03 / WHY TOKAA</p>
          <h2 className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
            A team that stays
            <br />
            close to the <span className="text-gradient">work.</span>
          </h2>
        </Reveal>
        <div>
          {reasons.map((r, i) => (
            <Reveal key={r.number} delay={i * 0.1}>
              <div className="group flex gap-8 border-t border-white/5 py-8 transition-colors last:border-b hover:bg-white/[0.02]">
                <span className="font-mono text-sm text-slate-500 transition-colors group-hover:text-[var(--tokaa-teal)]">
                  {r.number}
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold text-white">{r.title}</h3>
                  <p className="mt-2 max-w-lg leading-relaxed text-slate-400">{r.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
