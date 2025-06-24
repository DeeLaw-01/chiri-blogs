import { Box, Button, HStack } from '@chakra-ui/react'

import Text from 'ui/primitives/Text'
import Heading from 'ui/primitives/Heading'
import Container from 'ui/primitives/Container'

import { theme } from 'src/styles/theme'
import { useRouter } from 'app/router'
import { useAuthData } from '../manage-booking/atoms/useAuthDataAtom'

import LeftArrowIcon from '@/icons/shared/left-icon.svg'

import DecorativeSVG from '@/icons/marketplace/header/decorative.svg'

export default function MarketPlacePageBanner() {
  const router = useRouter()
  const { authData } = useAuthData()

  return (
    <Box
      mt="3rem"
      zIndex="1"
      top="-1px"
      w="100vw"
      pos="relative"
      overflow="hidden"
      mb={{ base: 4, md: 12 }}
      borderBottomRadius={{ base: '2xl', md: 'none' }}
    >
      <Box
        w="full"
        h="full"
        right="0"
        left="0"
        zIndex={1}
        pos="absolute"
        mixBlendMode="overlay"
        backgroundImage={'url(/static/home-page/newnoise.png)'}
      />

      <Box
        w="full"
        bg="_darkgray"
        px={{ base: '1rem', md: '0' }}
        h={{ base: '10rem', md: '12rem' }}
      >
        <Box>
          <Container pos="relative">
            <Button
              px="0"
              top={6}
              _hover={{}}
              _active={{}}
              pos="absolute"
              zIndex={'docked'}
              bg="transparent"
              left={{ base: -2, md: 'auto' }}
              aria-label="Go to manage booking"
              onClick={() =>
                router.push({
                  pathname: '/manage-booking',
                  query: {
                    bid: authData.booking_id,
                    email: authData.booking_email,
                    ...(router.query.sessionId && {
                      sessionId: router.query.sessionId,
                    }),
                  },
                })
              }
            >
              <HStack>
                <LeftArrowIcon
                  width="12"
                  height="12"
                  stroke={theme.colors._white}
                />
                <Text color="_white" st="common.general.back" />
              </HStack>
            </Button>
          </Container>

          <Box
            left="0"
            bottom="0"
            pos="absolute"
            display={{ base: 'none', md: 'block' }}
          >
            <DecorativeSVG />
          </Box>

          <Box
            w="full"
            zIndex={2}
            color="white"
            pos="absolute"
            alignContent={'middle'}
            bottom={{ base: 12, md: 16 }}
          >
            <Heading
              textAlign="center"
              fontSize={{ base: '2xl', md: '4xl' }}
              st="manage-booking-page.marketplace.header"
            />
            <Text
              textAlign="center"
              fontSize={{ base: 'md', md: '2xl' }}
              st="manage-booking-page.marketplace.subheader"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
