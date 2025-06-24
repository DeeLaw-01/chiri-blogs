'use client'

import { VStack } from '@chakra-ui/react'
import { useResponsiveSizes } from 'src/contexts/responsive'
import useAuth from 'src/hooks/useAuth'
import InviteBanner from 'ui/features/gamification/invite-banner'
import CamelBackground from 'ui/features/profile/camel-background'
import MobileLogin from 'ui/features/profile/mobile-login'
import ProfileBookmarks from 'ui/features/profile/profile-bookmarks'

export default function ProfileView() {
  const { currentUser, isUserLoggedIn } = useAuth()
  const { isMobile } = useResponsiveSizes()

  if (isUserLoggedIn === false || !currentUser) {
    if (isMobile) return <MobileLogin />
    return <CamelBackground />
  }

  return (
    <VStack
      w="full"
      align={'flex-start'}
      spacing={{ base: 4, md: 8 }}
      p={{ base: 0, md: 5 }}
    >
      <InviteBanner />
      <ProfileBookmarks />
    </VStack>
  )
}
