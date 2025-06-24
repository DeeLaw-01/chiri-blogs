import { Box, HStack } from '@chakra-ui/react'
import { useAnimationControls } from 'framer-motion'
import { useEffect } from 'react'
import { MotionBox } from 'ui/primitives/Motion'

type TopLoadingBarProps = {
  length: number
  current: number
  isActive: boolean
  timer: number
}

export default function TopLoadingBar({
  length,
  current,
  isActive,
  timer,
}: TopLoadingBarProps) {
  const controls = useAnimationControls()
  useEffect(() => {
    if (!isActive) controls.stop()
    else {
      // console.log('Aaah, here we go again.')
      controls.start({
        left: 0,
        transition: { duration: timer, ease: 'linear' },
      })
    }
  }, [isActive, current])

  return (
    <Box w="100vw" position="absolute" top="2" zIndex={'overlay'}>
      <HStack px={2} w={'full'} spacing={2}>
        {[...Array(length)].map((_, index) => (
          <Box
            key={index}
            flex="1"
            height="2px"
            bg={index < current ? '_white' : '_gray'}
            position="relative"
            overflow="hidden"
          >
            {index === current && (
              <MotionBox
                key={current}
                pos="absolute"
                width="full"
                h="full"
                animate={controls}
                top="0"
                left="-100%"
                bg={'_white'}
                zIndex={1}
              />
            )}
          </Box>
        ))}
      </HStack>
    </Box>
  )
}
