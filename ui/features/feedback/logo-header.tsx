import LogoIcon from '@/icons/logo.svg'
import { Box, Center, Flex } from '@chakra-ui/react'
import { RateData, RateValue } from './rate/data'
import LottiePlayer from 'ui/shared/lottie-player'

type LogoHeaderProps = {
  value?: RateValue
}

export default function LogoHeader({ value }: LogoHeaderProps) {
  const item = RateData.find((x) => x.value === value)

  return (
    <Center>
      <Flex
        bg="_lightestgray"
        borderRadius="full"
        height="7.5rem"
        width="7.5rem"
        mb="6"
        position="relative"
        alignItems={'center'}
        justify={'center'}
      >
        <LogoIcon height="25" />
        {item && (
          <Box position="absolute" bottom={-4} right={0}>
            <LottiePlayer
              loop={false}
              play={true}
              animationData={item.icon}
              style={{
                width: '3rem',
                height: '3rem',
              }}
            />
          </Box>
        )}
      </Flex>
    </Center>
  )
}
