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
    <main>
      <div className="fixed top-0 right-0 mt-4 mr-4 z-50 w-96 hidden md:block">
        <Alert className="bg-yellow-500/20 border-yellow-500/30">
          <AlertTriangle className="h-4 w-4 stroke-yellow-500" />
          <AlertTitle className="text-yellow-100">Use with caution</AlertTitle>
          <AlertDescription className="text-yellow-100/90">
            This is a new application so it's possible that there are some bugs.
            Feel free to reach out{' '}
            <Button asChild variant="link" className="p-0 h-0 text-yellow-500">
              <a href="#">here</a>
            </Button>{' '}
            if you have any issues or feature requests!
          </AlertDescription>
        </Alert>
      </div>

      <Hero />
      <Features />
      <Instructions />
      <FAQs />
      <Footer />
    </main>
  )
}
