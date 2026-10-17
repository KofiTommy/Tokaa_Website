import { ArrowUpRight } from 'lucide-react'
import Reveal from '@/components/Reveal'

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-7xl px-5 py-28 sm:px-8">
      <Reveal>
        <p className="font-mono text-xs tracking-[0.3em] text-[var(--tokaa-teal)]">01 / WHO WE ARE</p>
      </Reveal>
      <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <Reveal delay={0.1}>
          <h2 className="font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
            Technology consulting that feels <span className="text-gradient">personal.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2} className="flex flex-col items-start gap-6">
          <p className="text-lg leading-relaxed text-slate-400">
            Tokaa Tech Consult works alongside businesses, schools, and teams that want to do more
            with technology. We bring clear thinking, hands-on expertise, and a genuine commitment
            to getting things done well.
          </p>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-[var(--tokaa-teal)]"
          >
            Get to know Tokaa
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
