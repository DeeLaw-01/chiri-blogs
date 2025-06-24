import { Box, HStack, Stack, VStack } from '@chakra-ui/react'

import Heading from 'ui/primitives/Heading'
import Button from 'ui/primitives/Button'
import NextLink from 'next/link'

import GamificationBadge from 'ui/features/gamification/badge'
import { useResponsiveSizes } from 'src/contexts/responsive'
import Text from 'ui/primitives/Text'

export default function InviteBanner() {
  const { isMobile } = useResponsiveSizes()

  return (
    <NextLink
      href="/profile/rewards"
      style={{
        width: '100%',
      }}
    >
      <Box bg="_lightestgray" borderRadius="lg" overflow="hidden" w="full">
        <Stack w="full" direction={{ base: 'column', md: 'row' }}>
          <Box pl="4" py={{ base: 4, md: 8 }} w="full">
            <Heading
              maxW="24rem"
              fontWeight="normal"
              textTransform="capitalize"
              fontSize={{ base: 'xl', md: '3xl' }}
              st="gamification.invite.banner.heading"
            />

            <Button
              pl="2"
              asLink
              id="get-badges-mobile"
              fontWeight="normal"
              display={{ base: 'inline-flex', md: 'none' }}
              arrow
            >
              <Text st="gamification.invite.button.text" />
            </Button>

            <Button
              pt="2"
              asLink
              id="get-badges-desktop"
              fontWeight="normal"
              display={{ base: 'none', md: 'inline-flex' }}
              arrow
            >
              <Text st="gamification.invite.button.text" />
            </Button>
          </Box>

          {isMobile ? (
            <HStack w="full" pb="4" mt="4">
              <GamificationBadge
                type="sustainable"
                title="Nature Lover"
                noHover
              />
              <VStack transform="translateY(-1rem)">
                <GamificationBadge type="beginner" title="Beginner" noHover />
              </VStack>
              <GamificationBadge
                type="social-butterfly"
                title="Ambassador"
                noHover
              />
            </HStack>
          ) : (
            <HStack
              w="full"
              spacing={0}
              maxH="14.5rem"
              overflow="hidden"
              justify="flex-end"
            >
              <VStack transform="translateY(2rem)">
                <GamificationBadge
                  type="sustainable"
                  title="StayCation"
                  noHover
                />
                <GamificationBadge
                  type="advanced-explorer"
                  title="7 Wonders"
                  noHover
                />
                <GamificationBadge
                  type="luxury"
                  title="Villa Virtuoso"
                  noHover
                />
              </VStack>
              <VStack>
                <GamificationBadge type="beginner" title="Beginner" noHover />
                <GamificationBadge
                  type="social-butterfly"
                  title="#ForTheGram"
                  noHover
                />
              </VStack>
              <VStack transform="translateY(2rem)">
                <GamificationBadge
                  type="luxury"
                  title="Villa Virtuoso"
                  noHover
                />
                <GamificationBadge
                  type="sustainable"
                  title="Sustainable"
                  noHover
                />
                <GamificationBadge
                  type="advanced-explorer"
                  title="7 Wonders"
                  noHover
                />
              </VStack>
            </HStack>
          )}
        </Stack>
      </Box>
    </NextLink>
  )
}
