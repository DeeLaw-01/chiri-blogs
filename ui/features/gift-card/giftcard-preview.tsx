import { Box, Center } from '@chakra-ui/react'
import { Dispatch, SetStateAction } from 'react'
import { MotionBox } from 'ui/primitives/Motion'
import { GiftType, getCityImageCode } from './utils/shared'
import NextImage from 'next/image'

import LogoIcon from '@/icons/logo.svg'
import { useResponsiveSizes } from 'src/contexts/responsive'

type GiftCardProps = {
  isActive: boolean
  giftType: GiftType
  setGiftType: Dispatch<SetStateAction<GiftType>>
}

export default function GiftcardPreview({
  isActive,
  giftType,
  setGiftType,
}: GiftCardProps): JSX.Element {
  const { isDesktop } = useResponsiveSizes()

  return (
    <MotionBox
      pos="relative"
      boxShadow="md"
      borderRadius="3xl"
      overflow="hidden"
      cursor="pointer"
      h={{ base: '10rem', md: '12rem' }}
      minW={{ base: '19rem', md: '22rem' }}
      onClick={() => setGiftType(giftType)}
      whileHover={isDesktop && { y: -6, transition: { ease: 'easeInOut' } }}
    >
      <Box
        inset={0}
        zIndex={1}
        pos="absolute"
        bg={isActive ? 'blackAlpha.200' : 'whiteAlpha.700'}
      />

      {giftType === 'general' ? (
        <Box pos="absolute" inset={0} bg="primary" />
      ) : (
        <>
          <Box pos="absolute" inset={0} bg="blackAlpha.400" zIndex={1} />
          <NextImage
            fill
            alt="location image"
            src={getCityImageCode(giftType)}
          />
        </>
      )}

      <Box inset={0} pos="absolute" zIndex={2}>
        <Center h="full" color="_white">
          <LogoIcon height="30" />
        </Center>
      </Box>
    </MotionBox>
  )
}
