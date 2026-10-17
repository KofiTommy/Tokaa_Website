import { HelpCircle } from 'lucide-react'
import Reveal from '@/components/Reveal'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    q: 'How do we start working with Tokaa?',
    a: 'Simply send an enquiry through the contact form or book a free consultation on WhatsApp. We start by listening — understanding your people, your work, and what success looks like to you — before we recommend anything.',
  },
  {
    q: 'What products do you offer off the shelf?',
    a: 'We build and support two products: LiveCampus, a complete school management system, and CediTill, a point-of-sale system for modern businesses. Both are live in use today and can be explored from the Products section above.',
  },
  {
    q: 'Do you work with schools and institutions?',
    a: 'Yes. Education technology is one of our core focus areas — LiveCampus is currently powering operations at Ayirebi Senior High School, and we partner with institutions that want to do more with technology.',
  },
  {
    q: 'What happens after a project launches?',
    a: 'Launching is only the start. We stay available to support, maintain, and improve your technology as your needs grow, so it keeps delivering value long after go-live.',
  },
  {
    q: 'How much does a project cost?',
    a: 'It depends on scope, but we keep our advice clear and practical. Tell us what you have in mind through the contact form and we will come back to you with an honest, no-obligation conversation about options and next steps.',
  },
]

export default function Faq() {
  return (
    <section id="faq" className="border-t border-white/5 bg-white/[0.015]">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 py-28 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-[var(--tokaa-teal)]">
            <HelpCircle className="h-6 w-6" />
          </span>
          <p className="mt-6 font-mono text-xs tracking-[0.3em] text-[var(--tokaa-teal)]">
            06 / QUESTIONS
          </p>
          <h2 className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
            Things people
            <br />
            often <span className="text-gradient">ask us.</span>
          </h2>
          <p className="mt-6 max-w-sm leading-relaxed text-slate-400">
            Can&apos;t find your answer here? Send us an enquiry — we respond to every message.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-white/5">
                <AccordionTrigger className="text-left font-display text-base font-semibold text-white transition-colors hover:text-[var(--tokaa-teal)] hover:no-underline sm:text-lg">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="leading-relaxed text-slate-400">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  )
}
