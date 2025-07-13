'use client'

import { Box } from '@chakra-ui/react'
import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'src/i18n/router'

export default async function BlogPage () {
  const router = useRouter()
  const [height, setHeight] = useState('100vh')
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // Verify the origin for security
      if (event.origin !== 'https://chiri-booking-app.vercel.app') return

      // Handle the message
      console.log('Received message:', event.data)
      if (event.data.type === 'chiri-payload') {
        router.push(`/pages/${event.data.payload.url}`)
      }

      if (event.data.type === 'resize') {
        setHeight(event.data.height)
      }
    }

    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [])

  return (
    <Box
      as='iframe'
      ref={iframeRef}
      w='100%'
      h={height}
      style={{ border: 'none' }}
      src='https://chiri-booking-app.vercel.app/blogs'
    />
  )
}
