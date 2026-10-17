import { Ear, Map, Rocket } from 'lucide-react'
import Reveal from '@/components/Reveal'

const steps = [
  {
    number: '01',
    icon: Ear,
    title: 'Listen',
    body: 'We start by learning about your people, your work, and what success looks like to you.',
  },
  {
    number: '02',
    icon: Map,
    title: 'Plan together',
    body: 'We turn what we have learned into a focused, practical plan that everyone can get behind.',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Make it happen',
    body: 'We stay close throughout delivery, keeping the work moving and the outcome in sight.',
  },
]

export default function Process() {
  return (
    <section id="approach" className="relative mx-auto max-w-7xl px-5 py-28 sm:px-8">
      <Reveal className="text-center">
        <p className="font-mono text-xs tracking-[0.3em] text-[var(--tokaa-teal)]">05 / HOW WE WORK</p>
        <h2 className="mx-auto mt-6 max-w-2xl font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
          A simple way to move things <span className="text-gradient">forward.</span>
        </h2>
      </Reveal>

      <div className="relative mt-16 grid gap-6 md:grid-cols-3">
        <div
          aria-hidden
          className="absolute left-[16%] right-[16%] top-14 hidden h-px bg-gradient-to-r from-[var(--tokaa-teal)] via-[var(--tokaa-blue)] to-[var(--tokaa-violet)] opacity-30 md:block"
        />
        {steps.map((s, i) => (
          <Reveal key={s.number} delay={i * 0.14}>
            <div className="group relative flex h-full flex-col items-center rounded-3xl border border-white/5 bg-white/[0.02] p-9 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-white/10 hover:bg-white/[0.04]">
              <span className="relative inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-[0_10px_36px_hsl(258_90%_50%/0.35)]">
                <s.icon className="h-7 w-7" />
              </span>
              <span className="mt-6 font-mono text-xs tracking-[0.3em] text-slate-500">{s.number}</span>
              <h3 className="mt-2 font-display text-xl font-semibold text-white">{s.title}</h3>
              <p className="mt-3 leading-relaxed text-slate-400">{s.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
