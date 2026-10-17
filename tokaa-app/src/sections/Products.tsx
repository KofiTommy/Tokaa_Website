import { motion } from 'framer-motion'
import { ArrowUpRight, GraduationCap, ShoppingCart } from 'lucide-react'
import Reveal from '@/components/Reveal'

type Product = {
  tag: string
  tagIcon: typeof GraduationCap
  name: string
  logo: string
  headline: string
  blurb: string
  url: string
  urlLabel: string
  accent: string
  stats: { value: string; label: string }[]
  bars: number[]
  navItems: string[]
  screenTitle: string
  screenValue: string
}

const products: Product[] = [
  {
    tag: 'EDUCATION TECHNOLOGY',
    tagIcon: GraduationCap,
    name: 'LiveCampus',
    logo: 'images/LiveCampus.png',
    headline: 'Your complete school management system.',
    blurb: 'Student records, results and reporting, attendance, and school communication — one calm, organised place for your whole school.',
    url: 'https://ayirebishs.com/index.php',
    urlLabel: 'Visit LiveCampus',
    accent: 'var(--tokaa-teal)',
    stats: [
      { value: '1,248', label: 'Students' },
      { value: '96%', label: 'Attendance' },
      { value: '14', label: 'Classes' },
    ],
    bars: [42, 68, 55, 80, 62, 90, 74, 58, 84, 70, 95, 78],
    navItems: ['Overview', 'Students', 'Attendance', 'Results'],
    screenTitle: 'Good morning, Admin',
    screenValue: '2026 / 27',
  },
  {
    tag: 'RETAIL TECHNOLOGY',
    tagIcon: ShoppingCart,
    name: 'CediTill',
    logo: 'images/CediTill.png',
    headline: 'A smarter point-of-sale for modern businesses.',
    blurb: 'Fast checkout, stock control, and clear sales insight — spend less time at the till and more time growing the business.',
    url: 'https://ceditill.com',
    urlLabel: 'Visit CediTill',
    accent: 'var(--tokaa-violet)',
    stats: [
      { value: '48', label: 'Orders today' },
      { value: '₵259', label: 'Average sale' },
      { value: '₵12.4k', label: "Today's sales" },
    ],
    bars: [55, 40, 72, 64, 88, 52, 76, 92, 60, 82, 48, 86],
    navItems: ['New sale', 'Products', 'Sales', 'Settings'],
    screenTitle: "Today's sales",
    screenValue: '₵ 12,450',
  },
]

function DashboardMock({ p }: { p: Product }) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#10152b] shadow-2xl">
      <div className="flex items-center gap-1.5 border-b border-white/5 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="ml-3 font-mono text-[10px] tracking-widest text-slate-500">
          {p.name.toLowerCase()}.app
        </span>
      </div>
      <div className="flex">
        <aside className="hidden w-36 flex-col gap-1 border-r border-white/5 p-4 sm:flex">
          <img src={p.logo} alt={`${p.name} logo`} className="mb-3 h-9 w-9 rounded-lg object-cover" />
          {p.navItems.map((n, i) => (
            <span
              key={n}
              className={`rounded-lg px-3 py-2 text-xs ${
                i === 0 ? 'font-semibold text-white' : 'text-slate-500'
              }`}
              style={i === 0 ? { background: `color-mix(in srgb, ${p.accent} 18%, transparent)` } : undefined}
            >
              {n}
            </span>
          ))}
        </aside>
        <div className="flex-1 p-5">
          <div className="flex items-center justify-between">
            <strong className="text-sm text-white">{p.screenTitle}</strong>
            <span className="font-mono text-xs" style={{ color: p.accent }}>
              {p.screenValue}
            </span>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-3">
            {p.stats.map((s) => (
              <div key={s.label} className="rounded-xl border border-white/5 bg-white/[0.03] p-3">
                <p className="font-display text-lg font-bold text-white">{s.value}</p>
                <p className="mt-0.5 text-[10px] uppercase tracking-wider text-slate-500">{s.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 flex h-24 items-end gap-1.5 rounded-xl border border-white/5 bg-white/[0.02] p-3">
            {p.bars.map((h, i) => (
              <motion.div
                key={i}
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.05, ease: [0.21, 0.65, 0.35, 0.99] }}
                className="flex-1 origin-bottom rounded-sm"
                style={{
                  height: `${h}%`,
                  background: `linear-gradient(to top, color-mix(in srgb, ${p.accent} 25%, transparent), ${p.accent})`,
                  opacity: 0.85,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Products() {
  return (
    <section id="products" className="relative mx-auto max-w-7xl px-5 py-28 sm:px-8">
      <div className="grid items-end gap-8 lg:grid-cols-2">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.3em] text-[var(--tokaa-teal)]">04 / OUR PRODUCTS</p>
          <h2 className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
            Tools made for
            <br />
            real <span className="text-gradient">work.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="max-w-md text-lg leading-relaxed text-slate-400 lg:ml-auto">
            We build products around the everyday work of the people who use them — simple, useful,
            and ready when you need them.
          </p>
        </Reveal>
      </div>

      <div className="mt-16 grid gap-8 lg:grid-cols-2">
        {products.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.12}>
            <article className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-white/5 bg-white/[0.02] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-white/10 sm:p-9">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full blur-3xl transition-opacity duration-500 opacity-20 group-hover:opacity-40"
                style={{ background: `radial-gradient(circle, ${p.accent}, transparent 70%)` }}
              />
              <div className="relative flex items-center justify-between">
                <span
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3.5 py-1.5 font-mono text-[10px] tracking-[0.2em]"
                  style={{ color: p.accent }}
                >
                  <p.tagIcon className="h-3.5 w-3.5" />
                  {p.tag}
                </span>
                <img src={p.logo} alt={`${p.name} logo`} className="h-11 w-11 rounded-xl object-cover shadow-lg" />
              </div>

              <h3 className="relative mt-7 font-display text-2xl font-bold text-white sm:text-3xl">{p.name}</h3>
              <p className="relative mt-2 text-base font-medium text-slate-200">{p.headline}</p>
              <p className="relative mt-3 leading-relaxed text-slate-400">{p.blurb}</p>

              <div className="relative mt-8">
                <DashboardMock p={p} />
              </div>

              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition-all hover:border-transparent hover:bg-brand-gradient"
              >
                {p.urlLabel}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
