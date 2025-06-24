import { HStack, Box, CloseButton } from '@chakra-ui/react'
import PlayIcon from '@/icons/video/play.svg'
import PauseIcon from '@/icons/video/pause.svg'

type ControlsProps = {
  isActive: boolean
  pause: () => void
  start: (duration?: number) => void
  onClose: () => void
}
export default function Controls({
  isActive,
  pause,
  start,
  onClose,
}: ControlsProps) {
  return (
    <HStack
      position="absolute"
      right={{ base: '0.75rem', md: '1rem' }}
      top={{ base: 3, md: 5 }}
      pt="4px"
      zIndex={'overlay'}
      marginRight={{ md: '1rem', base: '0rem' }}
      _hover={{ cursor: 'pointer' }}
      gap="0"
    >
      {isActive && (
        <Box onClick={() => pause()}>
          <PauseIcon height="22" width="22" fill="white" />
        </Box>
      )}
      {!isActive && (
        <Box onClick={() => start()}>
          <PlayIcon height="24" width="24" fill="white" />
        </Box>
      )}
      <CloseButton
        w="fit-content"
        mx="2"
        onClick={() => onClose()}
        color="white"
        transform="scale(1.3)"
      />
    </HStack>
  )
}
