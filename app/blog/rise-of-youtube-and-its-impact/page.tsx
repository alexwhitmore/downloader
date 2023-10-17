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
            The Power of YouTube: How Content Creators Are Changing the Game
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            The Rise of YouTube and Its Impact on Media
          </h1>
          <p className="mt-6 text-xl leading-8">
            YouTube has transformed the way we consume content and reshaped the
            media landscape. In this blog post, we explore the incredible rise
            of YouTube as a content platform and the profound impact it has had
            on the world of media and entertainment.
          </p>
          <div className="mt-10 max-w-2xl">
            <p>
              YouTube's success is not limited to cat videos and funny sketches.
              It has become a powerhouse for creators, influencers, and
              businesses alike. Here are some key points to consider:
            </p>
            <ul role="list" className="mt-8 max-w-xl space-y-8 ">
              <li className="flex gap-x-3">
                <CheckCircle2
                  className="mt-1 h-5 w-5 flex-none text-primary"
                  aria-hidden="true"
                />
                <span>
                  <strong className="font-semibold">Content Variety:</strong>{' '}
                  YouTube offers a wide range of content genres, from
                  educational tutorials to entertainment, attracting diverse
                  audiences.
                </span>
              </li>
              <li className="flex gap-x-3">
                <CheckCircle2
                  className="mt-1 h-5 w-5 flex-none text-primary"
                  aria-hidden="true"
                />
                <span>
                  <strong className="font-semibold">Global Reach:</strong> With
                  billions of users worldwide, YouTube provides a global stage
                  for creators to showcase their talent and ideas.
                </span>
              </li>
              <li className="flex gap-x-3">
                <CheckCircle2
                  className="mt-1 h-5 w-5 flex-none text-primary"
                  aria-hidden="true"
                />
                <span>
                  <strong className="font-semibold">Monetization:</strong> Many
                  content creators earn a living through YouTube's monetization
                  options, making it a viable career choice.
                </span>
              </li>
            </ul>
            <p className="mt-8">
              Join us on a journey through the success stories of prominent
              YouTubers and explore how businesses can leverage this platform
              for marketing and brand promotion.
            </p>
            <h2 className="mt-16 text-2xl font-bold tracking-tight ">
              Changing the Media Game
            </h2>
            <p className="mt-6">
              YouTube has disrupted traditional media channels and given rise to
              a new generation of digital content creators. We'll delve into
              some of the most influential YouTubers who have made their mark
              and how they are changing the rules of the media game.
            </p>
            <figure className="mt-10 border-l border-primary pl-9">
              <blockquote className="font-semibold">
                <p>
                  “YouTube has democratized content creation and empowered
                  individuals to share their voices and stories with the world.”
                </p>
              </blockquote>
              <figcaption className="mt-6 flex gap-x-4">
                <img
                  className="h-6 w-6 flex-none rounded-full "
                  src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Author"
                />
                <div className="text-sm leading-6">
                  <strong className="font-semibold">Jane Smith</strong> – Media
                  Analyst
                </div>
              </figcaption>
            </figure>
            <p className="mt-10">
              Dive into the world of YouTube and discover how content creators
              are reshaping the media landscape. Learn about the strategies that
              have propelled them to stardom and the lessons businesses can
              glean from their success.
            </p>
          </div>
          <div className="mt-16 max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight ">
              Embracing YouTube's Potential
            </h2>
            <p className="mt-6">
              YouTube's impact on media is undeniable, and businesses can't
              afford to ignore it. Find out how to harness the potential of
              YouTube for marketing, brand building, and reaching a wider
              audience.
            </p>
            <p className="mt-8">
              Whether you're a content creator aiming for stardom or a business
              looking to tap into YouTube's massive user base, this blog post is
              your guide to understanding the power of YouTube.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
