'use client'

import { Box } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useRouter } from 'src/i18n/router'

type Params = { params: { slug: string; locale: string } }

export default async function BlogPostPage({ params }: Params) {
  const router = useRouter()
  const [height, setHeight] = useState('100vh')
  const url = `https://www.chiri.pk/${params.slug.join('/')}`

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // Verify the origin for security
      if (event.origin !== 'https://www.chiri.pk') return

      // Handle the message
      console.log('Received message:', event.data)
      if (event.data.type === 'chiri-blogs-button-click') {
        router.push(`/blog`)
      }

      if (event.data.type === 'chiri-home-button-click') {
        router.push(`/`)
      }

      if (event.data.type === 'resize') {
        setHeight(event.data.height)
      }
    }

    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [])

  return (
    <Box as="iframe" w="100%" h={height} src={url} style={{ border: 'none' }} />
  )
}
