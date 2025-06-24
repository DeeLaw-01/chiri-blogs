import { HStack, VStack, Box } from '@chakra-ui/react'
import { useRef, useEffect } from 'react'
import { MotionVStack } from 'ui/primitives/Motion'
import CityCircleIcon from './city-circle-icon'
import Text from 'ui/primitives/Text'
import Heading from 'ui/primitives/Heading'
import { renderTrimmedString } from 'src/utils/renderUtils'
import { Item } from './city-view-modal'
import VideoImage from 'ui/primitives/VideoImage'

type CityItemProps = {
  item: Item
  title: string
  subtitle: string
  photo: string
  index: number
  currentIndex: number
  start: () => void
  pause: () => void
  isActive: boolean
}

export default function CityItem({
  item,
  title,
  subtitle,
  photo,
  index,
  currentIndex,
  start,
  pause,
  isActive,
}: CityItemProps) {
  const scrollableDivRef = useRef<HTMLDivElement>(null)

  const handleScroll = () => {
    const scrollTop = scrollableDivRef.current.scrollTop
    if (scrollTop === 0) {
      start()
    } else {
      pause()
    }
  }

  useEffect(() => {
    if (currentIndex !== index) {
      scrollableDivRef.current.scrollTop = 0
    }
  }, [currentIndex])

  return (
    <MotionVStack
      initial={false}
      pos={'relative'}
      overflow={'hidden'}
      height={'full'}
      width={'full'}
      borderRadius={{ base: '0', md: 'lg' }}
    >
      <VideoImage
        fill
        sizes="100vw"
        quality={100}
        style={{ objectFit: 'cover' }}
        src={item.media.src}
        placeholder={item.media.placeholder}
        playing={index === currentIndex && isActive}
      />
      <HStack w={'full'} px={2} py={4} pos="absolute" zIndex="1">
        <CityCircleIcon
          name={title}
          photo={photo}
          h={'47px'}
          w={'47px'}
          flexShrink={0}
        />
        <VStack spacing={0} alignItems="flex-start" color="_white" pr="55px">
          <Text fontWeight="medium" userSelect={'none'}>
            {renderTrimmedString(title, 25)}
          </Text>
          <Text fontSize="sm" mt="-0.5 !important" userSelect={'none'}>
            {subtitle}
          </Text>
        </VStack>
      </HStack>
      <VStack
        className="hide-scrollbar"
        position="absolute"
        bottom="0"
        ref={scrollableDivRef}
        onScroll={handleScroll}
        w={'full'}
        alignItems={'flex-start'}
        // maxH={'100px'} // Hardcoded to test scroll
        bgGradient="linear(to-b, transparent 0%, rgba(0,0,0,.6) 80%)"
        overflowY={'scroll'}
      >
        <VStack
          position="relative"
          px={2}
          py={4}
          spacing={0}
          w="full"
          color="_white"
          alignItems={'flex-start'}
          bgGradient="linear(to-b, transparent 30%, black 70%)"
        >
          <Box
            position="absolute"
            top="0"
            left="0"
            w="full"
            h="full"
            zIndex="0"
          />
          <Heading size="lg">{item.name}</Heading>
          <Text>{item.description}</Text>
        </VStack>
      </VStack>
    </MotionVStack>
  )
}
