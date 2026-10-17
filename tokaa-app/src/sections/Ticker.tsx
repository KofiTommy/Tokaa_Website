const items = ['INNOVATE', 'SOLVE', 'ELEVATE']

export default function Ticker() {
  const row = [...items, ...items, ...items, ...items]
  return (
    <div className="relative overflow-hidden border-y border-white/5 bg-white/[0.02] py-5" aria-label="Core values">
      <div className="animate-marquee flex w-max items-center gap-10 whitespace-nowrap">
        {[...row, ...row].map((word, i) => (
          <span key={i} className="flex items-center gap-10 font-display text-sm font-semibold tracking-[0.35em] text-slate-500">
            {word}
            <span className="text-gradient text-base">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
