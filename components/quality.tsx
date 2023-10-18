'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { track } from '@vercel/analytics'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const FormSchema = z.object({
  email: z
    .string({
      required_error: 'Please select an email to display.',
    })
    .email(),
})

export function QualityDropdownMenu() {
  const [videoInfo, setVideoInfo] = useState({ url: '', title: '' })
  const [videoUrl, setVideoUrl] = useState('')
  const [searchLoading, setSearchLoading] = useState(false)
  const [downloadLoading, setDownloadLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const apiUrl = process.env.NEXT_PUBLIC_AZURE_URL

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
        setError('Error downloading video.')
        setDownloadLoading(false)
      }
    } catch (error) {
      console.error('Error downloading video:', error)
      setError('Network error occurred.')
      setDownloadLoading(false)
    }
    setDownloadLoading(false)
  }

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  // function onSubmit(data: z.infer<typeof FormSchema>) {
  //   toast({
  //     title: 'You submitted the following values:',
  //     description: (
  //       <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
  //         <code className="text-white">{JSON.stringify(data, null, 2)}</code>
  //       </pre>
  //     ),
  //   })
  // }

  return (
    <Form {...form} action={`${apiUrl}/download`} method="post">
      <form className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a verified email to display" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="m@example.com">m@example.com</SelectItem>
                  <SelectItem value="m@google.com">m@google.com</SelectItem>
                  <SelectItem value="m@support.com">m@support.com</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>
                You can manage email addresses in your{' '}
                <Link href="/examples/forms">email settings</Link>.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          variant="ghost"
          size="lg"
          onClick={() => {
            track('Download', { url: videoInfo.title })
            handleDownload()
          }}>
          Download
        </Button>
      </form>
    </Form>
  )
}
