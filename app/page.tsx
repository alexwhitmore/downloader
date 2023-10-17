import { AlertTriangle } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Hero } from '@/components/hero'
import { Features } from '@/components/features'
import { Instructions } from '@/components/instructions'
import { FAQs } from '@/components/faqs'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <div className="relative">
      <div className="absolute top-0 right-0 mt-4 mr-4 z-10">
        <Alert className="bg-yellow-500/20 border-yellow-500/30 hidden md:block w-96">
          <AlertTriangle className="h-4 w-4 stroke-yellow-500" />
          <AlertTitle className="text-yellow-100">Use with caution</AlertTitle>
          <AlertDescription className="text-yellow-100">
            This is a new application so it's possible that there are some bugs.
            Feel free to reach out <a href="#">here</a> if you have any issues
            or feature requests!
          </AlertDescription>
        </Alert>
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
