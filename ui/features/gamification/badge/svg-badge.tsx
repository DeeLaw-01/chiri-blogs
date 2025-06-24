import { Box, VStack } from '@chakra-ui/react'
import Text from 'ui/primitives/Text'

import { useResponsiveSizes } from 'src/contexts/responsive'

export default function SVGBadge({
  noHover,
  icon,
  startColor,
  endColor,
  type,
  title,
}: {
  noHover?: boolean
  icon: JSX.Element
  startColor: string
  endColor: string
  type: string
  title: string
}) {
  const { isMobile } = useResponsiveSizes()

  return (
    <VStack
      w="8rem"
      h="7rem"
      pos="relative"
      role="group"
      cursor={!noHover && 'pointer'}
    >
      <Box
        transition={!noHover && !isMobile && 'transform 0.2s ease-in-out'}
        _groupHover={
          !noHover &&
          !isMobile && {
            transform: 'translateY(-10px)',
          }
        }
      >
        <Box w="full" h="full" pos="relative">
          <Box
            pos="absolute"
            zIndex={1}
            left="50%"
            top="50%"
            transform="translateX(-50%) translateY(-50%)"
          >
            {icon}
          </Box>

          <svg
            id={type}
            width={73}
            height={81}
            viewBox="0 0 73 81"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeWidth="4.30769"
              fill={`url(#${type}-paint0_linear_953_2596)`}
              stroke={`url(#${type}-paint1_linear_953_2596)`}
              d="M7.77982 16.5079L32.6084 3.26599C35.2639 1.84975 38.4504 1.84975 41.1059 3.26599L65.9344 16.5079C68.8765 18.077 70.7143 21.1399 70.7143 24.4743V54.5738C70.7143 57.7452 69.0503 60.6841 66.3309 62.3158L41.5023 77.2129C38.6431 78.9284 35.0712 78.9284 32.212 77.2129L7.38341 62.3158C4.66395 60.6841 3 57.7452 3 54.5738V24.4743C3 21.1399 4.83774 18.077 7.77982 16.5079Z"
            />
            <defs>
              <linearGradient
                x1="37.3963"
                y1="33.3077"
                x2="36.8571"
                y2="80"
                gradientUnits="userSpaceOnUse"
                id={`${type}-paint0_linear_953_2596`}
              >
                <stop stopColor={endColor} />
                <stop offset="1" stopColor={startColor} />
              </linearGradient>
              <linearGradient
                x1="36.3194"
                y1="1"
                x2="37.9348"
                y2="50"
                gradientUnits="userSpaceOnUse"
                id={`${type}-paint1_linear_953_2596`}
              >
                <stop stopColor={startColor} />
                <stop offset="1" stopColor={endColor} />
              </linearGradient>
            </defs>
          </svg>
        </Box>
      </Box>

      <Text mt="2" align="center" fontSize="sm">
        {title}
      </Text>
    </VStack>
  )
}
