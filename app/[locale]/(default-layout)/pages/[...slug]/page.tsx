'use client'

import { Box } from '@chakra-ui/react'
import { useEffect, useState, useRef, useCallback } from 'react'
import { useRouter } from 'src/i18n/router'

type Params = { params: { slug: string; locale: string } }

export default function BlogPostPage({ params }: Params) {
  const router = useRouter()
  const [height, setHeight] = useState('100vh')
  const [isLoading, setIsLoading] = useState(true)
  const lastHeightRef = useRef<number>(0)
  const resizeTimeoutRef = useRef<NodeJS.Timeout>()
  const url = `https://chiri-booking-app.vercel.app/${params.slug.join('/')}`

  // Debounced height update to prevent UI jumping
  const updateHeight = useCallback((newHeight: number) => {
    // Clear any existing timeout
    if (resizeTimeoutRef.current) {
      clearTimeout(resizeTimeoutRef.current)
    }

    // Only update if height difference is significant (more than 10px)
    const heightDifference = Math.abs(newHeight - lastHeightRef.current)
    if (heightDifference < 10) return

    // Debounce the height update
    resizeTimeoutRef.current = setTimeout(() => {
      const heightWithBuffer = Math.max(newHeight + 50, 400) // Add buffer and minimum height
      setHeight(`${heightWithBuffer}px`)
      lastHeightRef.current = heightWithBuffer
      setIsLoading(false)
    }, 300) // Wait 300ms before applying height change
  }, [])

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // Verify the origin for security
      if (event.origin !== 'https://chiri-booking-app.vercel.app') return

      // Handle the message
      console.log('Received message:', event.data)

      if (event.data.type === 'chiri-blogs-button-click') {
        router.push(`/blog`)
      }

      if (event.data.type === 'chiri-home-button-click') {
        router.push(`/`)
      }

      if (
        event.data.type === 'resize' &&
        typeof event.data.height === 'number'
      ) {
        updateHeight(event.data.height)
      }

      // Handle iframe loaded event
      if (event.data.type === 'iframe-loaded') {
        setIsLoading(false)
      }
    }

    window.addEventListener('message', handleMessage)

    // Cleanup timeout on unmount
    return () => {
      window.removeEventListener('message', handleMessage)
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current)
      }
    }
  }, [router, updateHeight])

  return (
    <Box as="iframe" w="100%" h={height} src={url} style={{ border: 'none' }} />
  )
}
