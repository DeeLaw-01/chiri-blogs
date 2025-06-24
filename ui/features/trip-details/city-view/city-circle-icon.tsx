import { Box, BoxProps, keyframes } from '@chakra-ui/react'
import Image from 'ui/primitives/Image'
import theme from 'src/styles/theme'

const spin = keyframes`
  0% {
    transform : rotate(0deg);
    border-top : 1px dashed #fff;
  }
  20% {
    transform : rotate(72deg);
    border-left : 1px dashed #fff;
  }
  30% {
    transform : rotate(144deg);
    border-bottom : 2px dashed #fff;
  }
  40% {
    transform : rotate(216deg);
    border : 2px dashed #fff;
  }
  50% {
    transform : rotate(288deg);
    border : 3px dashed #fff;
  }
  60% {
    transform : rotate(360deg);
    border : 2px dashed #fff;
  }
  70% {
    transform : rotate(288deg);
    border : 2px dashed #fff;
  }
  80% {
    transform : rotate(216deg);
    border : 1px dashed #fff;
  }
  
  100% {
    transform : rotate(0deg);
    border-top : 1px dashed #fff;
  }
  
`

type CityCircleIconProps = {
  photo: string
  name: string
  visited?: boolean
  animate?: boolean
} & BoxProps

export default function CityCircleIcon({
  photo,
  name,
  visited,
  animate,
  ...rest
}: CityCircleIconProps) {
  const animation = `${spin} 3s ease-in infinite`
  return (
    <Box
      padding="2px"
      borderRadius="full"
      w="55px"
      h="55px"
      pos={'relative'}
      _before={{
        content: '""',
        position: 'absolute',
        inset: 0,
        borderRadius: 'full',
        animation: animate && animation,
        backgroundColor: visited && theme.colors._lightgray,
        bgGradient:
          !visited && 'linear(to-br, purple.500, red.400, yellow.300)',
      }}
      {...rest}
    >
      <Box
        w="full"
        h="full"
        overflow="hidden"
        position="relative"
        borderRadius="full"
        border="2px solid white"
      >
        <Image
          src={photo}
          style={{ objectPosition: 'center', objectFit: 'cover' }}
          fill
          alt={name}
          sizes="70px"
        />
      </Box>
    </Box>
  )
}
