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
            Exploring New Marketing Frontiers
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Social Media Influencers: A New Frontier for Marketing
          </h1>
          <p className="mt-6 text-xl leading-8">
            Social media influencers have revolutionized the world of marketing.
            They are not just content creators; they are powerful marketing
            tools that can drive brand success. In this guide, we'll delve into
            the realm of social media influencers, exploring the benefits of
            influencer marketing, strategies for finding the right influencers,
            and real-world case studies that showcase the impact of this
            innovative approach.
          </p>
          <div className="mt-10 max-w-2xl">
            <p>
              When it comes to influencer marketing, several key factors can
              significantly impact your brand's success. Here are the essential
              elements to focus on:
            </p>
            <ul role="list" className="mt-8 max-w-xl space-y-8 ">
              <li className="flex gap-x-3">
                <CheckCircle2
                  className="mt-1 h-5 w-5 flex-none text-primary"
                  aria-hidden="true"
                />
                <span>
                  <strong className="font-semibold">
                    Identifying the Right Influencers:
                  </strong>{' '}
                  Start by understanding your target audience and their
                  preferences. Choose influencers whose content aligns with your
                  brand and resonates with your audience.
                </span>
              </li>
              <li className="flex gap-x-3">
                <CheckCircle2
                  className="mt-1 h-5 w-5 flex-none text-primary"
                  aria-hidden="true"
                />
                <span>
                  <strong className="font-semibold">
                    Crafting Authentic Partnerships:
                  </strong>{' '}
                  Focus on building genuine relationships with influencers.
                  Authentic collaborations lead to content that feels natural
                  and is more likely to engage and convert.
                </span>
              </li>
              <li className="flex gap-x-3">
                <CheckCircle2
                  className="mt-1 h-5 w-5 flex-none text-primary"
                  aria-hidden="true"
                />
                <span>
                  <strong className="font-semibold">Measuring Impact:</strong>{' '}
                  Use analytics and key performance indicators to track the
                  effectiveness of influencer campaigns. Data-driven insights
                  can help refine your marketing strategies.
                </span>
              </li>
            </ul>
            <p className="mt-8">
              Harnessing the power of social media influencers can lead to
              increased brand visibility, engagement, and ultimately, success.
            </p>
            <h2 className="mt-16 text-2xl font-bold tracking-tight ">
              Real-World Success Stories
            </h2>
            <p className="mt-6">
              Let's dive into some real-world case studies that illustrate the
              impact of influencer marketing. These success stories demonstrate
              how brands leveraged influencers to achieve their marketing goals
              and reach new heights.
            </p>
            <figure className="mt-10 border-l border-primary pl-9">
              <blockquote className="font-semibold">
                <p>
                  "Social media influencers have redefined our marketing
                  strategies. Their authenticity and reach have allowed us to
                  connect with our audience in ways we never imagined."
                </p>
              </blockquote>
              <figcaption className="mt-6 flex gap-x-4">
                <img
                  className="h-6 w-6 flex-none rounded-full "
                  src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Author"
                />
                <div className="text-sm leading-6">
                  <strong className="font-semibold">Jane Smith</strong> –
                  Marketing Director, XYZ Company
                </div>
              </figcaption>
            </figure>
            <p className="mt-10">
              Are you ready to explore the new frontier of marketing with social
              media influencers? Dive into our comprehensive guide and unlock
              the potential of influencer marketing for your brand.
            </p>
          </div>
          <div className="mt-16 max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight ">
              Elevate Your Marketing Strategy
            </h2>
            <p className="mt-6">
              Our guide covers everything you need to succeed with influencer
              marketing, from identifying the right influencers to measuring
              your campaign's impact. Get ready to elevate your marketing
              strategy and achieve remarkable results.
            </p>
            <p className="mt-8">
              Ready to embrace the power of social media influencers? Start
              reading our guide now and discover the secrets to influencer
              marketing success.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
