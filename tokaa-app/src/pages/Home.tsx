import Navbar from '@/sections/Navbar'
import Hero from '@/sections/Hero'
import Ticker from '@/sections/Ticker'
import About from '@/sections/About'
import Services from '@/sections/Services'
import Why from '@/sections/Why'
import Products from '@/sections/Products'
import ImpactBanner from '@/sections/ImpactBanner'
import Partners from '@/sections/Partners'
import Process from '@/sections/Process'
import Faq from '@/sections/Faq'
import Contact from '@/sections/Contact'
import Footer from '@/sections/Footer'
import WhatsAppFab from '@/components/WhatsAppFab'
import ScrollProgress from '@/components/ScrollProgress'
import BackToTop from '@/components/BackToTop'

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <About />
        <Services />
        <Why />
        <Products />
        <ImpactBanner />
        <Partners />
        <Process />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
      <BackToTop />
    </>
  )
}
