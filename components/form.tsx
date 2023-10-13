'use client'

import React, { useState } from 'react'
import { Loader2 } from 'lucide-react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { EmptyState } from '@/components/empty-state'

export function Form() {
  const [videoInfo, setVideoInfo] = useState({ url: '', title: '' })
  const [videoUrl, setVideoUrl] = useState('')
  const [searchLoading, setSearchLoading] = useState(false)
  const [downloadLoading, setDownloadLoading] = useState(false)

  const apiUrl = `https://${process.env.NEXT_PUBLIC_AZURE_URL}/api`

  const handleSearch = async () => {
    if (!videoUrl) {
      console.error('No video URL provided.')
      return
    }

    setSearchLoading(true)

    try {
      const thumbnailResponse = await fetch(
        `${apiUrl}/get_thumbnail_url?video_url=${encodeURIComponent(videoUrl)}`
      )

      if (thumbnailResponse.ok) {
        const thumbnailData = await thumbnailResponse.json()
        setVideoInfo(thumbnailData)
      } else {
        console.error('Error fetching thumbnail:', thumbnailResponse.status)
      }

      // Start uploading the video while displaying the thumbnail
      const uploadResponse = await fetch(`${apiUrl}/upload_youtube`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          video_url: videoUrl,
        }),
      })

      if (uploadResponse.ok) {
        console.log('Video upload started successfully.')
        // Optionally, you can update the UI or display a message here.
      } else {
        console.error('Error starting video upload:', uploadResponse.status)
        // Optionally, you can handle and display the error here.
      }
    } catch (error) {
      console.error('Error fetching or uploading:', error)
    }

    setSearchLoading(false)
  }

  const handleDownload = async () => {
    setDownloadLoading(true)

    try {
      const response = await fetch(`${apiUrl}/download_video`, {
        method: 'GET',
      })

      if (response.ok) {
        // Create a Blob object from the response data
        const blob = await response.blob()

        // Create a temporary URL for the Blob
        const url = window.URL.createObjectURL(blob)

        // Create a temporary anchor element to trigger the download
        const a = document.createElement('a')
        a.href = url
        a.download = 'temp.mp4' // Set the desired file name
        a.click()

        // Clean up by revoking the temporary URL
        window.URL.revokeObjectURL(url)
      } else {
        console.error('Error downloading video:', response.status)
      }
    } catch (error) {
      console.error('Error downloading video:', error)
    }

    setDownloadLoading(false)
  }

  return (
    <div className={!videoInfo.url ? 'lg:mt-10' : ''}>
      <form
        action={`${apiUrl}/download`}
        method="post"
        className="grid gap-1.5 mt-0 mb-2 sm:my-10">
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
          <Button type="button" onClick={handleSearch}>
            Search
          </Button>
        ) : (
          <Button disabled>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Searching
          </Button>
        )}
      </form>

      {!videoInfo.url ? (
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
          {/* <p className="mt-5">{videoInfo.title ? videoInfo.title : ''}</p> */}
          <div className="absolute inset-0 flex items-center justify-center bg-background/40">
            {!downloadLoading ? (
              <Button variant="ghost" size="lg" onClick={handleDownload}>
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
