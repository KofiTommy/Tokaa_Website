import { ArrowUpRight, CalendarCheck, Mail } from 'lucide-react'
import Reveal from '@/components/Reveal'

const WHATSAPP = 'https://wa.me/233245067195?text=Hello%20Tokaa%20Tech%20Consult%2C%20I%27d%20like%20to%20book%20a%20consultation.'

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-white/5">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-0 left-1/2 h-[480px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,hsl(258_90%_55%/0.14),transparent_65%)] blur-2xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-16 px-5 py-28 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.3em] text-[var(--tokaa-teal)]">07 / LET&apos;S TALK</p>
          <h2 className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
            Got something
            <br />
            you want to <span className="text-gradient">improve?</span>
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-slate-400">
            Tell us what you have in mind. We&apos;d love to hear about it and explore how we can
            help.
          </p>
          <div className="mt-10 flex flex-col gap-4">
            <a
              href="mailto:appiahthomas97@gmail.com"
              className="group inline-flex w-fit items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm font-semibold text-white transition-colors hover:border-white/20"
            >
              <Mail className="h-4 w-4 text-[var(--tokaa-teal)]" />
              appiahthomas97@gmail.com
              <ArrowUpRight className="h-4 w-4 text-slate-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-fit items-center gap-3 rounded-2xl bg-brand-gradient px-5 py-4 text-sm font-semibold text-white shadow-[0_10px_36px_hsl(258_90%_50%/0.35)] transition-transform hover:scale-[1.02] active:scale-95"
            >
              <CalendarCheck className="h-4 w-4" />
              Book a consultation
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <form
            className="glass glow-border rounded-[2rem] p-7 sm:p-9"
            action="https://formsubmit.co/appiahthomas97@gmail.com"
            method="POST"
          >
            <input type="hidden" name="_subject" value="New Tokaa Tech Consult website enquiry" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Full name
                </span>
                <input
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Your name"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition-colors focus:border-[var(--tokaa-blue)]"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Email address
                </span>
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@company.com"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition-colors focus:border-[var(--tokaa-blue)]"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Phone number <span className="normal-case text-slate-600">(optional)</span>
                </span>
                <input
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="+233 ..."
                  className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition-colors focus:border-[var(--tokaa-blue)]"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400">
                  I&apos;m interested in
                </span>
                <select
                  name="interest"
                  required
                  defaultValue=""
                  className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition-colors focus:border-[var(--tokaa-blue)] [&>option]:bg-[#10152b]"
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option>LiveCampus</option>
                  <option>CediTill</option>
                  <option>Technology consulting</option>
                  <option>Other</option>
                </select>
              </label>
            </div>
            <label className="mt-5 block">
              <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400">
                How can we help?
              </span>
              <textarea
                name="message"
                rows={4}
                placeholder="Tell us a little about your project or enquiry"
                required
                className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition-colors focus:border-[var(--tokaa-blue)]"
              />
            </label>
            <div className="mt-7 flex flex-wrap items-center gap-5">
              <button
                type="submit"
                className="group inline-flex items-center gap-2 rounded-full bg-brand-gradient px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_36px_hsl(258_90%_50%/0.35)] transition-transform hover:scale-[1.03] active:scale-95"
              >
                Send enquiry
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
              <p className="text-xs text-slate-500">Your enquiry will be sent securely to our team.</p>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
