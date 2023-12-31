import { Form } from './form'

export function Hero() {
  return (
    <div className="relative isolate overflow-hidden">
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-border [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true">
        <defs>
          <pattern
            id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse">
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          strokeWidth={0}
          fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
        />
      </svg>
      <div className="pt-5 mx-auto max-w-6xl px-6 md:pt-40 pb-0 sm:pb-12 lg:flex lg:px-8 lg:py-40 lg:items-center lg:justify-between">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-6xl">
            Personal YouTube videos at your fingertips
          </h1>
          <p className="mt-10 mb-5 text-lg leading-8 text-foreground/90">
            In just a matter of clicks you can have your own personal database
            of YouTube videos.
          </p>
        </div>
        <div className="flex flex-col items-center mt-5 sm:mt-5 lg:mt-0 w-full">
          <Form />
        </div>
      </div>
    </div>
  )
}
