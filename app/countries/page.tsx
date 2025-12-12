'use client'

import { Box } from '@chakra-ui/react'
import { useEffect, useState, useRef, useCallback } from 'react'
import { useRouter } from 'next/navigation'

/**
 * Countries listing page that displays all country blogs in an iframe
 * Embedded from the external blog application at chiri-booking-app.vercel.app
 */
export default function CountriesPage() {
  const router = useRouter()
  const [height, setHeight] = useState('100vh')
  const lastHeightRef = useRef<number>(0)
  const resizeTimeoutRef = useRef<ReturnType<typeof setTimeout>>()

  // URL to the external countries listing page
  // Use environment variable for local development, fallback to production
  const baseUrl = process.env.NEXT_PUBLIC_SITE_A_URL || 'https://chiri-booking-app.vercel.app'
  const url = `${baseUrl}/countries`

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
      const allowedOrigins = [
        'https://chiri-booking-app.vercel.app',
        'http://localhost:3000',
        process.env.NEXT_PUBLIC_SITE_A_URL
      ].filter(Boolean)
      
      if (!allowedOrigins.some(origin => event.origin === origin)) return

      console.log('Received message:', event.data)

      // Handle navigation to individual country posts
      if (event.data.type === 'chiri-payload' && event.data.payload?.url) {
        console.log('Navigating to country:', event.data.payload.url)

        // Ensure we navigate within the current domain
        const url = event.data.payload.url

        // If URL already starts with http/https, it's absolute - convert to relative
        if (url.startsWith('http://') || url.startsWith('https://')) {
          try {
            const urlObj = new URL(url)
            router.push(urlObj.pathname) // Use only the path part
          } catch (e) {
            console.error('Invalid URL received:', url)
          }
        } else {
          // URL is relative, ensure it starts with /
          const relativePath = url.startsWith('/') ? url : `/${url}`
          router.push(relativePath)
        }
      }

      // Handle navigation back to countries listing
      if (event.data.type === 'chiri-countries-button-click') {
        // Already on countries page, no navigation needed
        console.log('Already on countries page')
      }

      // Handle navigation to home page
      if (event.data.type === 'chiri-home-button-click') {
        router.push('/')
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
  }, [router, updateHeight])

  return (
    <Box
      as="iframe"
      w="100%"
      h={height}
      src={url}
      style={{ border: 'none' }}
      title="Countries Listing"
      loading="lazy"
    />
  )
}
