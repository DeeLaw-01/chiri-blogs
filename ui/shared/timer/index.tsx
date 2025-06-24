import { useDisclosure, HStack, Box } from '@chakra-ui/react'
import { useEffect } from 'react'
import Text from 'ui/primitives/Text'
import TimerIcon from '@/icons/new/timer.svg'
import dynamic from 'next/dynamic'
import useSessionStorage from 'src/hooks/useSessionStorage'
import useTimer, { countdown } from 'src/hooks/useTimer'

const DynamicTimeoutModal = dynamic(() => import('./modal'))

interface TimerProps {
  timerId: string
  countdownTime: countdown
  showTimer?: boolean
}

export default function Timer({
  timerId,
  countdownTime,
  showTimer = true,
}: TimerProps) {
  const { isOpen, onOpen } = useDisclosure()
  const [sessionTimer, setSessionTimer] = useSessionStorage<countdown>(timerId)

  const { countdown, start, isTimeout } = useTimer(
    sessionTimer ? sessionTimer : countdownTime
  )

  useEffect(() => {
    if (sessionTimer) {
      start(
        sessionTimer.hours * 3600 +
          sessionTimer.mins * 60 +
          Number(sessionTimer.secs)
      )
    }
  }, [])

  useEffect(() => {
    if (isTimeout) return

    if (countdown) {
      setSessionTimer(countdown)
    }
  }, [countdown])

  useEffect(() => {
    if (isTimeout) {
      onOpen()
    }

    return () => {
      setSessionTimer(null)
    }
  }, [isTimeout])

  const derviedCountdown = sessionTimer === null ? countdown : sessionTimer

  return (
    <>
      {showTimer && !isTimeout && (
        <HStack
          px={4}
          py={2}
          borderRadius={'full'}
          color={'_darkgray'}
          bg={'_white'}
          spacing={3}
          justify={{ base: 'center' }}
          w={{ base: 'full', md: 'fit-content' }}
        >
          <Box color={'_darkgray'}>
            <TimerIcon height="20px" strokeWidth={1.5} />
          </Box>
          <Text
            minW={'6.5rem'}
            fontWeight={'medium'}
            fontSize={{ base: 'lg', md: 'xl' }}
            whiteSpace={'nowrap'}
          >
            {`${derviedCountdown?.mins} m : ${derviedCountdown?.secs} s`}
          </Text>
        </HStack>
      )}
      <DynamicTimeoutModal isOpen={isOpen} id={timerId} />
    </>
  )
}
