import { Box, BoxProps } from '@chakra-ui/react'

type CornerBannerProps = {
  bannerPosition: 'left' | 'right'
} & BoxProps

export default function CornerBanner({
  children,
  bannerPosition,
  ...rest
}: CornerBannerProps) {
  const positionStyles =
    bannerPosition === 'left' ? { left: '-45px' } : { right: '-45px' }

  return (
    <Box
      position="absolute"
      transform="rotate(45deg)"
      bg="blue.500"
      fontSize="xs"
      h="1.5rem"
      pt="1"
      color="white"
      boxShadow="sm"
      display={'flex'}
      justifyContent={'center'}
      {...positionStyles}
      {...rest}
    >
      {children}
    </Box>
  )
}
