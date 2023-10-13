import Image from 'next/image'

const instructions = [
  {
    step: 1,
    name: 'Copy the URL of the YouTube video you want to download.',
    alt: 'A screenshot of the first YouTube video download instruction which is to copy the URL of the YouTube video you want to download.',
  },
  {
    step: 2,
    name: "Paste the copied URL into the search bar on our website and click 'Search'.",
    alt: 'A screenshot of the second YouTube video download instruction which is to paste the YouTube video URL into the search bar, and select the button that says "Search".',
  },
  {
    step: 3,
    name: "Click the 'Download' button on the YouTube video thumbnail.",
    alt: 'A screenshot of the third YouTube video download instruction which is click the button that appears over the YouTube video thumbnail that says "Download".',
  },
]

export function Instructions() {
  return (
    <div className="flex justify-center">
      <div className="mx-auto max-w-7xl px-6 pt-24 sm:pt-32 pb-12 sm:pb-16">
        <ul role="list" className="divide-y divide-border">
          {instructions.map((instruction) => (
            <li
              key={instruction.step}
              className="flex justify-center gap-x-10 py-10 lg:flex-row flex-col lg:justify-between">
              <div className="flex min-w-0 gap-x-4">
                <p className="bg-primary flex h-8 w-8 flex-none rounded-full items-center justify-center text-white">
                  {instruction.step}
                </p>
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6">
                    {instruction.name}
                  </p>
                </div>
              </div>
              <Image
                src={`/step-${instruction.step}.png`}
                width={800}
                height={800}
                alt={instruction.alt}
                className="rounded-xl shadow-xl ring-1 ring-gray-400/10 mt-5 lg:mt-0"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
