import { Box, HStack, VStack } from '@chakra-ui/react'
import Card from 'ui/primitives/Card'
import Text from 'ui/primitives/Text'
import Button from 'ui/primitives/Button'
import PalmLottie from './palm-lottie.json'
import { useResponsiveSizes } from 'src/contexts/responsive'
import LottiePlayer from 'ui/shared/lottie-player'
import { useRouter } from 'src/i18n/router'
import { useGlobalAtoms } from 'src/hooks/useGlobalAtoms'

export default function SignUpBanner() {
  const router = useRouter()
  const { isMobile } = useResponsiveSizes()
  const { setShowAuth } = useGlobalAtoms()

  const handleClick = () => {
    if (isMobile) router.push('/profile')
    else setShowAuth(true)
  }

  return (
    <Card
      mt="4"
      p={5}
      py={3}
      onClick={handleClick}
      bg="_lightblue"
      boxShadow="none"
    >
      <HStack justify="space-between">
        <Box minW="70%">
          <VStack align="flex-start" gap="0.2rem">
            <Text fontWeight="medium" st="common.menu.sign.up.banner.heading" />
            <Text secondary st="common.menu.sign.up.banner.description" />

            <Button
              id="sign-up-menu"
              asLink
              fontSize={{ base: 'xs', md: 'sm' }}
            >
              <Text st="common.menu.sign.up.banner.button.text" />
            </Button>
          </VStack>
        </Box>
        <Box w="full">
          <LottiePlayer
            loop
            play
            animationData={PalmLottie}
            style={{ width: 100, height: 100 }}
          />
        </Box>
      </HStack>
    </Card>
  )
}
