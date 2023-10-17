import { ModeToggle } from './theme-toggle'

const navigation = {
  social: [
    {
      name: 'Twitter',
      href: 'https://twitter.com/theAlexWhitmore',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          {/* Twitter icon SVG */}
        </svg>
      ),
    },
    {
      name: 'GitHub',
      href: 'https://github.com/alexwhitmore/downloader/tree/main',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          {/* GitHub icon SVG */}
        </svg>
      ),
    },
  ],
}

export function Footer() {
  return (
    <footer aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="px-6 pb-8 pt-16 sm:pt-24 lg:px-0 lg:pt-32 mx-auto">
        <div className="text-center">
          <div className="space-y-8">
            <p className="text-sm leading-6">
              One-stop solution to give you control over your YouTube digital
              media, making it accessible and enjoyable whenever you want.
            </p>
            <div className="flex justify-center space-x-6">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs text-center text-muted-foreground">
            &copy; {new Date().getFullYear()} Downloader. All rights reserved.
          </p>
        </div>
        <div className="flex justify-center mt-5">
          <ModeToggle />
        </div>
      </div>
    </footer>
  )
}
