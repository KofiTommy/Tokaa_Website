export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-white/5 bg-white/[0.015]">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-5 py-14 sm:px-8">
        <a href="#top" className="flex items-center gap-3" aria-label="Back to top">
          <img
            src="images/tokaa-mark.svg"
            alt="Tokaa Tech Consult"
            className="h-12 w-12 drop-shadow-[0_0_20px_hsl(258_90%_66%/0.35)]"
          />
          <span className="text-center">
            <span className="block font-display text-base font-semibold tracking-tight text-white">
              Tokaa Tech Consult
            </span>
            <span className="block font-mono text-[10px] tracking-[0.3em] text-slate-500">
              INNOVATE · SOLVE · ELEVATE
            </span>
          </span>
        </a>
        <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-slate-400" aria-label="Footer navigation">
          <a href="#services" className="transition-colors hover:text-white">Services</a>
          <a href="#products" className="transition-colors hover:text-white">Products</a>
          <a href="#approach" className="transition-colors hover:text-white">Our approach</a>
          <a href="#faq" className="transition-colors hover:text-white">FAQ</a>
          <a href="#about" className="transition-colors hover:text-white">About</a>
          <a href="#contact" className="transition-colors hover:text-white">Contact</a>
        </nav>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-slate-500">
          <a href="mailto:appiahthomas97@gmail.com" className="transition-colors hover:text-white">appiahthomas97@gmail.com</a>
          <a href="https://wa.me/233245067195" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">WhatsApp</a>
          <a href="privacy.html" className="transition-colors hover:text-white">Privacy</a>
          <a href="terms.html" className="transition-colors hover:text-white">Terms</a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            LinkedIn
          </a>
        </div>
        <p className="text-xs text-slate-600">© {year} Tokaa Tech Consult. All rights reserved.</p>
      </div>
    </footer>
  )
}
