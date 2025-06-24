'use client'

import { Spinner, Center, Box } from '@chakra-ui/react'
import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { redirect } from 'src/i18n/router'

export default function Auth(): JSX.Element {
  const searchParams = useSearchParams()
  const code = searchParams.get('code')

  useEffect(() => {
    if (code) return
    let href = sessionStorage.getItem('routeTo')

    if (!href || href.includes('auth') || href.includes('profile')) href = '/'

    redirect({ href: href, locale: '' })
  }, [code])

  return (
    <>
      <Box h="100vh" alignItems="center" display="flex">
        <Center w="full">
          <Spinner size="lg" />
        </Center>
      </Box>
    </>
  )
}
