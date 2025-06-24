'use client'

import 'intl-pluralrules'
import { ChakraProvider } from '@chakra-ui/react'
// import { useEffect } from 'react'
import theme from 'src/styles/theme'
// import configCognitoOAuth from 'src/data/configCognitoOAuth'
import GlobalAppContexts from 'src/contexts'
import GlobalCSS from 'src/styles/globals'
import { LazyMotion, domAnimation } from 'framer-motion'
import { Location } from 'src/api/queries/get/locationQuery/location.type'

export default function RootProvider({
  children,
  location,
}: {
  children: JSX.Element
  location: Location
}) {
  // useEffect(() => {
  //   configCognitoOAuth()
  // }, [])

  return (
    <ChakraProvider theme={theme}>
      <GlobalCSS />
      <GlobalAppContexts location={location}>
        <LazyMotion features={domAnimation}>{children}</LazyMotion>
      </GlobalAppContexts>
    </ChakraProvider>
  )
}
