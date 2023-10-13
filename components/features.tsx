'use client'

import Image from 'next/image'
import { useTheme } from 'next-themes'
import { Zap, LockKeyhole, Video, Layout, LogIn } from 'lucide-react'

const features = [
  {
    name: 'Lightning-Fast Downloads',
    description: 'Get your videos in seconds.',
    icon: Zap,
  },
  {
    name: 'Top-Quality Output',
    description: 'Download videos in HD quality.',
    icon: Video,
  },
  {
    name: 'Safe and Secure',
    description:
      'Your data remains private, and our site is regularly updated to ensure safety.',
    icon: LockKeyhole,
  },
  {
    name: 'User-Friendly Interface',
    description: 'Easy to navigate, even for beginners.',
    icon: Layout,
  },
  {
    name: 'No Registration Required',
    description: 'Use our service without any sign-up hassles.',
    icon: LogIn,
  },
]

export function Features() {
  const { theme = 'dark' } = useTheme()

  return (
    <div className="overflow-hidden pt-24 sm:pt-32 pb-12 sm:pb-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-lg font-semibold leading-7 text-primary">
                Streamlined. Powerful. Free.
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight  sm:text-4xl">
                Your own personal YouTube
              </p>
              <p className="mt-6 text-lg leading-8">
                Your fast and secure YouTube video download tool. Enjoy
                high-quality downloads with peace of mind.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7  lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold ">
                      <feature.icon
                        className="absolute left-1 top-1 h-5 w-5 text-primary"
                        aria-hidden="true"
                      />
                      {feature.name}:{' '}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <Image
            src={`/featured-screenshot-${theme}.webp`}
            alt="Product screenshot"
            width={2432}
            height={1442}
            priority
            className="hidden sm:block w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  )
}
