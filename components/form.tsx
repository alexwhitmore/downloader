'use client'

import React, { useState } from 'react'
import { Loader2 } from 'lucide-react'
import { track } from '@vercel/analytics'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { EmptyState } from '@/components/empty-state'

export function Form() {
  const [videoInfo, setVideoInfo] = useState({ url: '', title: '' })
  const [videoUrl, setVideoUrl] = useState('')
  const [searchLoading, setSearchLoading] = useState(false)
  const [downloadLoading, setDownloadLoading] = useState(false)
  const [error, setError] = useState(null) // Add error state

  const apiUrl = process.env.NEXT_PUBLIC_AZURE_URL

  const handleSearch = async () => {
    if (!videoUrl) return

    setSearchLoading(true)
    setError(null)

    try {
      const thumbnailResponse = await fetch(
        `${apiUrl}/get_thumbnail_url?video_url=${encodeURIComponent(videoUrl)}`
      )

      if (thumbnailResponse.ok) {
        const thumbnailData = await thumbnailResponse.json()
        setVideoInfo(thumbnailData)
        setSearchLoading(false)
      } else {
        console.error('Error fetching thumbnail:', thumbnailResponse.status)
        setError('Invalid video URL or other error occurred.')
        setSearchLoading(false)
      }
    } catch (error) {
      console.error('Error fetching thumbnail:', error)
      setError('Network error occurred.')
    }
  }

  const handleDownload = async () => {
    setDownloadLoading(true)
    const requestData = { video_url: videoUrl }

    try {
      const downloadResponse = await fetch(`${apiUrl}/upload_youtube`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      })

      if (downloadResponse.ok) {
        const blob = await downloadResponse.blob()
        const url = window.URL.createObjectURL(blob)

        const a = document.createElement('a')
        a.href = url
        a.download = `${videoInfo.title}.mp4`
        a.click()
      } else {
        console.error('Error downloading video:', downloadResponse.status)
        setError('Error downloading video.') // Set error message
        setDownloadLoading(false)
      }
    } catch (error) {
      console.error('Error downloading video:', error)
      setError('Network error occurred.') // Set error message
      setDownloadLoading(false)
    }
    setDownloadLoading(false)
  }

  return (
    <div className={!videoInfo.url ? 'lg:mt-10' : ''}>
      <form
        action={`${apiUrl}/download`}
        method="post"
        className={`grid gap-1.5 mt-0 mb-2 mx-auto ${
          !error ? 'sm:my-10' : 'sm:my-0'
        }`}>
        <Label htmlFor="url">Enter Video URL:</Label>
        <Input
          type="text"
          id="url"
          name="url"
          placeholder="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          required
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
        />

        {!searchLoading ? (
          <Button
            type="button"
            onClick={() => {
              track('Search')
              handleSearch()
            }}>
            Search
          </Button>
        ) : (
          <Button disabled>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Searching
          </Button>
        )}
      </form>

      {error ? (
        <div>
          <div className="text-red-500 mb-5 mt-1">{error}</div>
          <EmptyState />
        </div>
      ) : !videoInfo.url ? (
        <EmptyState />
      ) : (
        <div className="relative rounded-lg overflow-hidden">
          <img
            src={videoInfo.url}
            alt="Video Thumbnail"
            width={500}
            height={176}
            className="rounded-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-background/40">
            {!downloadLoading ? (
              <Button
                variant="ghost"
                size="lg"
                onClick={() => {
                  track('Download')
                  handleDownload()
                }}>
                Download
              </Button>
            ) : (
              <Button variant="secondary" disabled>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Downloading
              </Button>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
