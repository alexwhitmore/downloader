import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export function FAQs() {
  return (
    <div className="mx-auto max-w-7xl px-6 pt-24 sm:pt-32 pb-12 sm:pb-16">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>What is YouTube For All?</AccordionTrigger>
          <AccordionContent>
            YouTube For All is a user-friendly online tool designed for fast and
            secure YouTube video downloads. You can easily access your favorite
            videos while enjoying a free and reliable service.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>How do I download YouTube videos?</AccordionTrigger>
          <AccordionContent>
            <ol className="pb-2">
              <li>
                1. Copy the URL of the YouTube video you want to download.
              </li>
              <li>
                2. Paste the copied URL into the search bar on our website and
                click 'Search'.
              </li>
              <li>3. Click the 'Download' button.</li>
            </ol>
            That's it! Your video will be processed and ready for download in no
            time.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is YouTube For All safe to use?</AccordionTrigger>
          <AccordionContent>
            Yes, YouTube For All is completely safe to use. We do not require
            any login or credit card information, and we do not use cookies.
            Your personal information is never stored on our platform.
            Furthermore, our website undergoes regular updates to maintain a
            secure and malware-free environment.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
