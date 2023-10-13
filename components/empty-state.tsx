import { Image as Thumbnail } from 'lucide-react'

export function EmptyState() {
  return (
    <div className="relative block rounded-lg border-2 border-dashed px-12 py-12 sm:py-16 text-center mb-10">
      <Thumbnail className="mx-auto h-12 w-12 text-foreground" />
      <span className="mt-2 block text-sm font-semibold text-muted-foreground">
        Enter a YouTube video URL to view the thumbnail
      </span>
    </div>
  )
}
