import { Hero } from '@/components/hero'
import { Features } from '@/components/features'
import { Instructions } from '@/components/instructions'
import { FAQs } from '@/components/faqs'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Instructions />
      <FAQs />
      <Footer />
    </main>
  )
}
