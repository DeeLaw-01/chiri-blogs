import { Box, HStack, Spacer, Stack, VStack } from '@chakra-ui/react'
import Text from 'ui/primitives/Text'
import Timer from 'ui/shared/timer'
import Image from 'ui/primitives/Image'
import { useResponsiveSizes } from 'src/contexts/responsive'
import { useCheckoutAtoms } from '../../useCheckoutAtoms'

const timer = {
  hours: 0,
  mins: '20',
  secs: '00',
}

export default function TimerCard() {
  const { trip, session } = useCheckoutAtoms()
  const { isMobile } = useResponsiveSizes()

  return (
    <Box w="full" h="10rem" pos="relative" overflow="hidden" borderRadius="xl">
      <Stack
        direction={{ base: 'column', md: 'row' }}
        align={{ md: 'center' }}
        zIndex="2"
        color="_white"
        pos="absolute"
        px={8}
        py={6}
        w="full"
        spacing={{ base: 3, md: 'initial' }}
      >
        <HStack align={'flex-start'}>
          <VStack
            w="full"
            align={{ base: 'center', md: 'flex-start' }}
            spacing={0}
            maxW={{ md: '18rem', base: 'initial' }}
          >
            <Text
              fontWeight={'medium'}
              fontSize={{ base: 'lg', md: 'xl' }}
              whiteSpace={'nowrap'}
              st="checkout-page.itinerary.banner.text.one"
            />
            <Text
              fontWeight={'medium'}
              whiteSpace={'nowrap'}
              fontSize={{ base: 'xs', md: 'md' }}
              st="checkout-page.itinerary.banner.text.two"
            />
            {!isMobile && (
              <Text
                pt={2}
                fontWeight={'medium'}
                fontSize={{ base: 'md', md: 'sm' }}
                st="checkout-page.itinerary.banner.text.three"
              />
            )}
          </VStack>
        </HStack>
        <Spacer display={{ base: 'none', md: 'block' }} />
        <Timer timerId={session} countdownTime={timer} />
      </Stack>

      <Box
        inset="0"
        zIndex="1"
        bg="_black"
        opacity="0.5"
        pos="absolute"
        borderRadius="lg"
      />

      <Image
        fill
        priority={true}
        style={{ objectFit: 'cover', objectPosition: 'center' }}
        alt="itinerary-photo"
        sizes="(max-width: 750px, max-height: 10rem) 100vw"
        src={`${trip.itinerary[0].content.photo}375160.png`}
      />
    </Box>
  )
}
