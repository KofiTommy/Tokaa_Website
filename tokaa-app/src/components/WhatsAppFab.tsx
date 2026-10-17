export default function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/233245067195?text=Hello%20Tokaa%20Tech%20Consult%2C%20I%27d%20like%20to%20make%20an%20enquiry."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Tokaa Tech Consult on WhatsApp"
      title="Chat with us on WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25d366] py-3 pl-3 pr-4 text-sm font-semibold text-white shadow-[0_12px_40px_hsl(140_70%_40%/0.45)] transition-transform hover:scale-105 active:scale-95"
    >
      <svg viewBox="0 0 32 32" className="h-6 w-6" fill="currentColor" aria-hidden="true">
        <path d="M16 3a12.7 12.7 0 0 0-10.9 19.2L3.5 28.5l6.5-1.7A12.7 12.7 0 1 0 16 3Zm0 23.1c-1.8 0-3.6-.5-5.1-1.5l-.4-.2-3.9 1 1-3.8-.3-.4A10.3 10.3 0 1 1 16 26.1Zm5.6-7.7c-.3-.1-1.8-.9-2.1-1s-.5-.1-.7.2-.8 1-.9 1.2-.3.2-.6.1a8.4 8.4 0 0 1-2.5-1.5 9.4 9.4 0 0 1-1.7-2.1c-.2-.3 0-.4.1-.5l.5-.6c.1-.2.2-.3.3-.5s0-.4 0-.5l-1-2.3c-.3-.7-.6-.6-.8-.6h-.7c-.2 0-.5.1-.8.4s-1 1-1 1.2 1 2.4 1.1 2.5a11.7 11.7 0 0 0 4.5 4.1c.6.3 1 .5 1.4.6.6.2 1.1.2 1.5.1.5-.1 1.8-.7 2-1.4s.3-1.3.2-1.4-.2-.2-.5-.3Z" />
      </svg>
      <span className="hidden sm:inline">Chat with us</span>
    </a>
  )
}
