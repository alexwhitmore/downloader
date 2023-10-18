import { AlertMessage } from '@/components/alert'
import { Hero } from '@/components/hero'
import { Features } from '@/components/features'
import { Instructions } from '@/components/instructions'
import { FAQs } from '@/components/faqs'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <div className="md:relative">
      <div className="flex justify-end md:absolute top-0 right-0 mt-4 px-4 z-10">
        <AlertMessage />
      </div>
      <main>
        <Hero />
        <Features />
        <Instructions />
        <FAQs />
        <Footer />
      </main>
    </div>
  )
}
