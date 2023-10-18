import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'YouTube For All',
    short_name: 'YT Downloader',
    description:
      'Download YouTube videos quickly and easily. Choose from three themes: light, dark, or system default.',
    start_url: '/',
    display: 'standalone',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    theme_color: '#ffffff',
    background_color: '#ffffff',
    prefer_related_applications: false,
    orientation: 'any',
    scope: '/',
    dir: 'auto',
    lang: 'en-US',
  }
}
