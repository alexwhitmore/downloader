import { AlertTriangle } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from './ui/button'

export function AlertMessage() {
  return (
    <Alert className=" bg-yellow-500/20 border-yellow-500/30 sm:w-96">
      <AlertTriangle className="h-4 w-4 stroke-yellow-500" />
      <AlertTitle className="text-yellow-100">Attention</AlertTitle>
      <AlertDescription className="text-yellow-100">
        This is a new site and it's possible that there are some bugs. Feel free
        to reach out{' '}
        <Button asChild variant="link" className="text-yellow-500 p-0 h-0">
          <a href="https://twitter.com/theAlexWhitmore" target="_blank">
            here
          </a>
        </Button>{' '}
        if you have any issues or feature requests!
      </AlertDescription>
    </Alert>
  )
}
