'use client'

import React, { useState } from 'react'
import { Loader2 } from 'lucide-react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { EmptyState } from '@/components/empty-state'

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://hhltmpiizvmmcjlkxeos.supabase.co'
const supabaseKey = 'YOUR_SUPABASE_API_KEY'

const supabase = createClient(supabaseUrl, supabaseKey)

export function Form() {
  const [videoInfo, setVideoInfo] = useState({ url: '', title: '' })
  const [videoUrl, setVideoUrl] = useState('')
  const [searchLoading, setSearchLoading] = useState(false)
  const [downloadLoading, setDownloadLoading] = useState(false)
  const [isUploadComplete, setIsUploadComplete] = useState(false)

  const apiUrl = 'http://localhost:3000/api'
  // const apiUrl =
  //   'https://yellow-pond-3c4e32a61b6f43eb84b9e861cea86b25.azurewebsites.net/api'

  const handleSearch = async () => {
    setSearchLoading(true)

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
      }

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
        setIsUploadComplete(true)
      } else {
        setIsUploadComplete(true)
        console.error('Error starting video upload:', uploadResponse.status)
      }
    } catch (error) {
      console.error('Error fetching or uploading:', error)
    }
  }

  const handleDownload = async () => {
    setDownloadLoading(true)

    try {
      const { data } = await supabase.storage
        .from('images')
        .getPublicUrl(`${videoInfo.title}.mp4`, {
          download: true,
        })

      setTimeout(() => {
        setDownloadLoading(false)
      }, 1000)

      const publicUrl = data.publicUrl

      const a = document.createElement('a')
      a.href = publicUrl
      a.download = `${videoInfo.title}.mp4`
      a.click()
    } catch (error) {
      console.log('Error downloading video:', error)
      setDownloadLoading(false)
    }
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
          <div className="absolute inset-0 flex items-center justify-center bg-background/40">
            {!isUploadComplete ? (
              <Button variant="ghost" disabled>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Preparing download
              </Button>
            ) : !downloadLoading ? (
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
