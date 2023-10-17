import { ArrowLeft, CheckCircle2 } from 'lucide-react'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'

export default function Page() {
  return (
    <div>
      <div className="p-4">
        <Button asChild variant="secondary" size="icon">
          <a href="/">
            <ArrowLeft className="w-4 h-4" />
          </a>
        </Button>
      </div>
      <div className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-3xl text-base leading-7 ">
          <p className="text-base font-semibold leading-7 text-primary">
            Unlocking YouTube Success
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            YouTube SEO: Optimizing Your Videos for Better Visibility
          </h1>
          <p className="mt-6 text-xl leading-8">
            YouTube is a powerful platform for content creators, but getting
            your videos noticed can be challenging. To maximize your video's
            reach, you need to master YouTube SEO techniques. In this guide,
            we'll walk you through the strategies that can help your videos rank
            higher and attract a larger audience.
          </p>
          <div className="mt-10 max-w-2xl">
            <p>
              When it comes to YouTube SEO, several key factors can
              significantly impact your video's visibility in search results.
              Here are the essential elements to focus on:
            </p>
            <ul role="list" className="mt-8 max-w-xl space-y-8 ">
              <li className="flex gap-x-3">
                <CheckCircle2
                  className="mt-1 h-5 w-5 flex-none text-primary"
                  aria-hidden="true"
                />
                <span>
                  <strong className="font-semibold">Keyword Research:</strong>{' '}
                  Start by researching relevant keywords for your video. Use
                  tools like Google Keyword Planner or YouTube's autocomplete
                  feature to identify high-traffic keywords.
                </span>
              </li>
              <li className="flex gap-x-3">
                <CheckCircle2
                  className="mt-1 h-5 w-5 flex-none text-primary"
                  aria-hidden="true"
                />
                <span>
                  <strong className="font-semibold">Video Title:</strong> Craft
                  a compelling and keyword-rich video title. Ensure that it
                  accurately represents your content and entices viewers to
                  click.
                </span>
              </li>
              <li className="flex gap-x-3">
                <CheckCircle2
                  className="mt-1 h-5 w-5 flex-none text-primary"
                  aria-hidden="true"
                />
                <span>
                  <strong className="font-semibold">Video Description:</strong>{' '}
                  Write a detailed video description that includes your target
                  keywords. This helps YouTube's algorithm understand your
                  content better.
                </span>
              </li>
            </ul>
            <p className="mt-8">
              These are just a few of the critical aspects of YouTube SEO. To
              dive deeper into optimizing your videos and improving your
              channel's visibility, continue reading our comprehensive guide.
            </p>
            <h2 className="mt-16 text-2xl font-bold tracking-tight ">
              From Beginner to YouTube SEO Expert
            </h2>
            <p className="mt-6">
              Whether you're new to YouTube or looking to enhance your video
              optimization skills, our guide will take you from a beginner to a
              YouTube SEO expert in no time. We'll cover advanced strategies,
              tools, and best practices to help you succeed on this platform.
            </p>
            <figure className="mt-10 border-l border-primary pl-9">
              <blockquote className="font-semibold">
                <p>
                  “YouTube SEO is the key to reaching a broader audience and
                  growing your channel. Don't miss out on the opportunity to
                  optimize your videos effectively.”
                </p>
              </blockquote>
              <figcaption className="mt-6 flex gap-x-4">
                <img
                  className="h-6 w-6 flex-none rounded-full "
                  src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Author"
                />
                <div className="text-sm leading-6">
                  <strong className="font-semibold">John Doe</strong> – Digital
                  Marketing Expert
                </div>
              </figcaption>
            </figure>
            <p className="mt-10">
              Ready to unlock the full potential of YouTube SEO? Dive into our
              comprehensive guide and start optimizing your videos for better
              visibility and growth.
            </p>
          </div>
          <div className="mt-16 max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight ">
              Everything You Need to Succeed
            </h2>
            <p className="mt-6">
              Our guide covers everything you need to succeed on YouTube, from
              optimizing your videos to understanding YouTube's algorithm. Get
              ready to take your channel to new heights with our expert advice.
            </p>
            <p className="mt-8">
              Ready to enhance your YouTube presence? Start reading our guide
              now and discover the secrets to YouTube SEO success.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
