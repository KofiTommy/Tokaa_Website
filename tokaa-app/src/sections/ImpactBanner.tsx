import { ArrowUpRight, School } from 'lucide-react'
import Reveal from '@/components/Reveal'

export default function ImpactBanner() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-28 sm:px-8">
      <Reveal>
        <div className="glow-border relative overflow-hidden rounded-[2rem] bg-white/[0.03] px-8 py-12 sm:px-14">
          <div
            aria-hidden
            className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,hsl(172_80%_45%/0.18),transparent_70%)] blur-2xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,hsl(258_90%_60%/0.18),transparent_70%)] blur-2xl"
          />
          <div className="relative flex flex-wrap items-center justify-between gap-8">
            <div className="flex items-start gap-5">
              <span className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-[0_10px_36px_hsl(258_90%_50%/0.35)] sm:inline-flex">
                <School className="h-7 w-7" />
              </span>
              <div>
                <p className="font-mono text-[10px] tracking-[0.3em] text-[var(--tokaa-teal)]">
                  LIVECAMPUS IN ACTION
                </p>
                <h3 className="mt-3 max-w-xl font-display text-2xl font-bold leading-snug text-white sm:text-3xl">
                  Powering the day-to-day operations of Ayirebi Senior High School.
                </h3>
                <p className="mt-3 max-w-lg leading-relaxed text-slate-400">
                  From student records to results and reporting, LiveCampus keeps the whole school
                  organised in one place — a practical example of technology that works in the real
                  world.
                </p>
              </div>
            </div>
            <a
              href="https://ayirebishs.com/index.php"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition-all hover:border-transparent hover:bg-brand-gradient"
            >
              See it live
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
