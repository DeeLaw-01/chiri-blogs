'use client'

import { Box, Divider, HStack } from '@chakra-ui/react'
import Heading from 'ui/primitives/Heading'
// import SignUpBanner from './sign-up-banner'
import MenuSections from './menu-sections'
// import SignOutButton from './sign-out-button'
// import ProfileBanner from './profile-banner'
import MenuDrawers from './drawers'
import useAuth from 'src/hooks/useAuth'

export default function Menu() {
  const { isUserLoggedIn } = useAuth()

  return (
    <>
      <Box w="full">
        <HStack w="full" justify="space-between">
          <Heading as="h1" fontSize="3xl" st="common.general.menu" />
        </HStack>
        {/* <Box mt="2">
          {isUserLoggedIn && <ProfileBanner />}
          {!isUserLoggedIn && <SignUpBanner />}
          <Divider my={5} />
        </Box> */}
        <Box w="full" mt="4" mb={'3rem'}>
          <MenuSections />
          <Divider my={5} />
          {/* {isUserLoggedIn && <SignOutButton />} */}
        </Box>
      </Box>
      <MenuDrawers />
    </>
  )
}
