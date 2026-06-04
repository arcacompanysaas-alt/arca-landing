import Hero from '@/components/Hero'
import Pricing from '@/components/Pricing'
import Features from '@/components/Features'
import Testimonial from '@/components/Testimonial'
import FAQ from '@/components/FAQ'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Pricing />
      <Features />
      <Testimonial />
      <CTA />
      <FAQ />
      <Footer />
    </main>
  )
}
