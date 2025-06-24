import { StackProps, VStack } from '@chakra-ui/react'
import { useRef, useState } from 'react'
import { RateDataItem } from '../data'
import Text from 'ui/primitives/Text'
import { MotionBox } from 'ui/primitives/Motion'
import { RateItem } from '../../animation-variants'
import LottiePlayer from 'ui/shared/lottie-player'

type HoverLottieProps = {
  data: RateDataItem
} & StackProps

export default function RateLottieItem({ data, ...rest }: HoverLottieProps) {
  const [play, setPlay] = useState<boolean>(false)
  const lottieRef = useRef<any>(null)

  return (
    <MotionBox key={data.value} variants={RateItem}>
      <VStack
        onMouseEnter={() => setPlay(true)}
        _hover={{ transform: 'scale(1.05)', cursor: 'pointer' }}
        transition="all .2s"
        {...rest}
      >
        <LottiePlayer
          ref={lottieRef}
          loop={play}
          play={play}
          onLoopComplete={() => setPlay(false)}
          animationData={data.icon}
          style={{
            width: 'min(12vw, 75px)',
            height: 'min(12vw, 75px)',
          }}
        />
        <Text fontSize={{ base: 'xs', md: 'sm' }} st={data.label} />
      </VStack>
    </MotionBox>
  )
}
