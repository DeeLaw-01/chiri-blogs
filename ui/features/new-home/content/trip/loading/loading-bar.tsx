import { Box } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { MotionBox } from 'ui/primitives/Motion'

function LoadingBar() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setProgress((prevProgress) => {
        const increment = (1 - prevProgress / 100) * 0.05
        const newProgress = prevProgress + increment * 100

        if (newProgress >= 95) {
          clearInterval(id)
          return 95
        }
        return newProgress
      })
    }, 500)

    return () => {
      clearInterval(id)
    }
  }, [])

  return (
    <Box
      w={'full'}
      h={'0.5rem'}
      bg={'secondary'}
      display={'flex'}
      flexDir={'row'}
      borderRadius={'3xl'}
      overflow={'hidden'}
    >
      <MotionBox
        bg={'primary'}
        animate={{ width: `${progress}%`, transition: { type: 'tween' } }}
      />
    </Box>
  )
}

export default LoadingBar
