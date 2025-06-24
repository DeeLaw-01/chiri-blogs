import { Box, BoxProps } from '@chakra-ui/react'
import { MotionBox } from 'ui/primitives/Motion'

type TopLoadingBarProps = {
  isLoading: boolean
  duration?: number
} & BoxProps

export default function TopLoadingBar({
  isLoading,
  duration,
  ...rest
}: TopLoadingBarProps) {
  return (
    <>
      {isLoading && (
        <Box
          w="100vw"
          h="4px"
          position="absolute"
          top="0"
          zIndex="1301" //1301 is 1 above overlay, which is the z-index for mobile filters
          {...rest}
        >
          <MotionBox
            h="2px"
            bg="primary"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: duration ?? 5, ease: 'easeOut' }} // 7 seconds is a bit like the average BE response. Update this accordingly if needed.
          />
        </Box>
      )}
    </>
  )
}
