import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'YouTube Video Downloader',
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
        src: '/icon-192x192.png', // Replace with your 192x192 app icon
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png', // Replace with your 512x512 app icon
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    theme_color: '#ffffff', // Replace with your primary theme color
    background_color: '#ffffff', // Replace with your background color
    prefer_related_applications: false,
    orientation: 'any',
    scope: '/',
    dir: 'auto',
    lang: 'en-US',
  }
}
