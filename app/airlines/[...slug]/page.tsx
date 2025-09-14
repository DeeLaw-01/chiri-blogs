'use client'

import { Box } from '@chakra-ui/react'
import { useEffect, useState, useRef, useCallback } from 'react'

type Params = { params: { slug: string[] } }

/**
 * Dynamic blog post page that displays individual blog posts in an iframe
 * Handles routes like /airline/1755716035990-00snux
 * Embedded from the external blog application at chiri-booking-app.vercel.app
 */
export default function AirlineBlogPage({ params }: Params) {
  const [height, setHeight] = useState('100vh')
  const lastHeightRef = useRef<number>(0)
  const resizeTimeoutRef = useRef<ReturnType<typeof setTimeout>>()

  // Construct the URL for the external blog post (direct path without /pages/ prefix)
  const url = `https://chiri-booking-app.vercel.app/airline/${params.slug.join(
    '/'
  )}`

  /**
   * Debounced height update to prevent UI jumping during iframe resize
   * Only updates if height difference is significant (more than 10px)
   */
  const updateHeight = useCallback((newHeight: number) => {
    // Clear any existing timeout to prevent multiple updates
    if (resizeTimeoutRef.current) {
      clearTimeout(resizeTimeoutRef.current)
    }

    // Only update if height difference is significant to avoid unnecessary re-renders
    const heightDifference = Math.abs(newHeight - lastHeightRef.current)
    if (heightDifference < 10) return

    // Debounce the height update to smooth out rapid changes
    resizeTimeoutRef.current = setTimeout(() => {
      const heightWithBuffer = Math.max(newHeight + 50, 400) // Add buffer and minimum height
      setHeight(`${heightWithBuffer}px`)
      lastHeightRef.current = heightWithBuffer
    }, 300) // Wait 300ms before applying height change
  }, [])

  useEffect(() => {
    /**
     * Handle messages from the iframe
     * Supports navigation and dynamic height adjustment
     */
    const handleMessage = (event: MessageEvent) => {
      // Security check: only accept messages from the trusted origin
      if (event.origin !== 'https://chiri-booking-app.vercel.app') return

      console.log('Received message:', event.data)

      // Handle navigation back to blogs listing (no locale prefix)
      if (event.data.type === 'chiri-blogs-button-click') {
        window.location.href = '/blogs'
      }

      // Handle navigation to home page
      if (event.data.type === 'chiri-home-button-click') {
        window.location.href = '/'
      }

      // Handle dynamic iframe height updates
      if (
        event.data.type === 'resize' &&
        typeof event.data.height === 'number'
      ) {
        updateHeight(event.data.height)
      }

      // Handle iframe loaded event
      if (event.data.type === 'iframe-loaded') {
        console.log('Iframe loaded successfully')
      }
    }

    // Register message listener
    window.addEventListener('message', handleMessage)

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('message', handleMessage)
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current)
      }
    }
  }, [updateHeight])

  return (
    <Box
      as="iframe"
      w="100%"
      h={height}
      src={url}
      style={{ border: 'none' }}
      title={`Airline Blog Post: ${params.slug.join('/')}`}
      loading="lazy"
    />
  )
}
