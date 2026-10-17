import { motion, useInView, useReducedMotion } from 'framer-motion'
import { ArrowDown, ArrowUpRight, Sparkles } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.21, 0.65, 0.35, 0.99] as const },
})

const stats = [
  { value: 2, suffix: '', label: 'products in market' },
  { value: 6, suffix: '+', label: 'capability areas' },
  { value: 2, suffix: '', label: 'partner institutions' },
]

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    const duration = 1400
    const start = performance.now()
    let raf = 0
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setValue(Math.round(eased * target))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, target])

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  )
}

export default function Hero() {
  const reduce = useReducedMotion()
  const a = reduce ? { initial: {}, animate: {}, transition: {} } : null

  return (
    <section id="top" className="grid-bg relative overflow-hidden pb-24 pt-36 sm:pt-44">
      {/* ambient glows */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="animate-pulse-soft absolute -top-40 left-1/2 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,hsl(258_90%_60%/0.22),transparent_65%)] blur-2xl" />
        <div className="animate-float-slow absolute -left-40 top-1/3 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,hsl(172_80%_45%/0.14),transparent_70%)] blur-2xl" />
        <div className="animate-float-slower absolute -right-40 top-1/4 h-[460px] w-[460px] rounded-full bg-[radial-gradient(circle,hsl(217_90%_60%/0.16),transparent_70%)] blur-2xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <motion.p
            {...(a ?? fade(0))}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-slate-300"
          >
            <Sparkles className="h-3.5 w-3.5 text-[var(--tokaa-teal)]" />
            Practical technology. Real progress.
          </motion.p>

          <motion.h1
            {...(a ?? fade(0.1))}
            className="font-display text-5xl font-bold leading-[1.04] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Let&apos;s build
            <br />
            what&apos;s <span className="text-gradient">next.</span>
          </motion.h1>

          <motion.p {...(a ?? fade(0.2))} className="mt-7 max-w-xl text-lg leading-relaxed text-slate-400">
            Whether you are improving how you work or creating something entirely new, Tokaa Tech
            Consult turns big ideas into technology that makes a real difference — for businesses,
            schools, and the people they serve.
          </motion.p>

          <motion.div {...(a ?? fade(0.3))} className="mt-10 flex flex-wrap items-center gap-5">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-brand-gradient px-7 py-3.5 text-sm font-semibold text-white shadow-[0_12px_40px_hsl(258_90%_50%/0.4)] transition-transform hover:scale-[1.03] active:scale-95"
            >
              Start a conversation
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#services"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-slate-200 transition-colors hover:text-white"
            >
              Explore our services
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </a>
          </motion.div>

          <motion.dl {...(a ?? fade(0.45))} className="mt-14 flex flex-wrap gap-10 border-t border-white/5 pt-8">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-3xl font-bold text-white">
                  <CountUp target={s.value} suffix={s.suffix} />
                </dd>
                <dd className="mt-1 text-xs uppercase tracking-widest text-slate-500">{s.label}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.25, ease: [0.21, 0.65, 0.35, 0.99] }}
          className="relative mx-auto hidden w-full max-w-md lg:block"
        >
          <div className="glow-border relative rounded-[2rem] bg-white/[0.03] p-10 shadow-[0_40px_120px_hsl(258_90%_40%/0.25)]">
            <div className="grid-bg absolute inset-0 rounded-[2rem] opacity-60" />
            <img
              src="images/tokaa-mark.svg"
              alt="Tokaa Tech Consult logo"
              className="animate-float-slow relative mx-auto w-44 drop-shadow-[0_16px_48px_hsl(258_90%_55%/0.45)]"
            />
            <p className="relative mt-6 text-center font-display text-2xl font-bold tracking-[0.28em] text-white">
              TOKAA
            </p>
            <div className="relative mt-3 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-gradient-to-r from-transparent to-[var(--tokaa-teal)]" />
              <p className="font-mono text-[10px] tracking-[0.25em] text-slate-400">
                TECHNOLOGY · DELIVERED WITH CARE
              </p>
              <span className="h-px w-10 bg-gradient-to-l from-transparent to-[var(--tokaa-violet)]" />
            </div>
          </div>

          <div className="glass animate-float-slower absolute -left-10 top-10 rounded-2xl border border-white/10 px-4 py-3 shadow-xl">
            <p className="font-mono text-[10px] tracking-[0.25em] text-slate-400">STRATEGY</p>
            <div className="mt-2 h-1 w-24 overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-3/4 bg-brand-gradient" />
            </div>
          </div>
          <div className="glass animate-float-slow absolute -right-8 bottom-16 rounded-2xl border border-white/10 px-4 py-3 shadow-xl">
            <p className="font-mono text-[10px] tracking-[0.25em] text-slate-400">DELIVERY</p>
            <p className="mt-1 font-display text-sm font-semibold text-white">On time. On point.</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
