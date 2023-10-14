import '@/styles/globals.css'
import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/theme-provider'
import { Analytics } from '@vercel/analytics/react'

interface RootLayoutProps {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: 'YouTube Video Downloader | Free Download Tool',
  description:
    'YouTube Video Downloader is a free and fast tool for downloading unlimited YouTube videos. Easily save videos for offline viewing. Try it now!',
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head>
          <meta
            name="google-adsense-account"
            content="ca-pub-8041911799229977"
          />
          <link
            rel="icon"
            href="/icon?<generated>"
            type="image/png"
            sizes="32x32"
          />
        </head>
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange>
            {children}
            <Analytics />
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
