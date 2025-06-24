import { Box } from '@chakra-ui/react'
import LottiePlayer from 'ui/shared/lottie-player'
import ConfettiLottie from './confetti-lottie.json'
import { useEffect, useState } from 'react'

export default function ConfettiLayer() {
  const [showConfetti, setShowConfetti] = useState<boolean>(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(true)
    }, 2500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <Box
      pos="fixed"
      top="0"
      width="100%"
      display="flex"
      justifyContent="center"
      pointerEvents="none"
      zIndex="1999"
    >
      <LottiePlayer
        loop={false}
        play={showConfetti}
        animationData={ConfettiLottie}
        style={{
          width: 'auto',
          minHeight: '100vh',
          objectFit: 'cover',
          aspectRatio: 1 / 1,
        }}
      />
    </Box>
  )
}
