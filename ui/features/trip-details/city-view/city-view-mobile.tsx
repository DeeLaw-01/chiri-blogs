import { Box, VStack } from '@chakra-ui/react'
import CityItem from './city-item'
import { Content } from './city-view-modal'

type CityViewMobileProps = {
  index: number
  content: Content
  handleChangeImage: (n: -1 | 1) => void
  start: () => void
  pause: () => void
  isActive: boolean
}

const CityViewMobile = ({
  index,
  content,
  handleChangeImage,
  start,
  pause,
  isActive,
}: CityViewMobileProps) => {
  return (
    <VStack position="relative" h="100dvh" maxH="100vh" overflow="hidden">
      <CityItem
        index={index}
        currentIndex={index}
        start={start}
        pause={pause}
        item={content.items[index]}
        title={content.title}
        subtitle={content.subtitle}
        photo={content.photo}
        isActive={isActive}
      />
      {/* Invisible click listeners to trigger next/previous image */}
      <Box
        width={'full'}
        height={'calc(100% - 60px)'}
        top={'60px'}
        position={'absolute'}
      >
        <Box
          height={'full'}
          onClick={() => handleChangeImage(1)}
          cursor="pointer"
          width={'50%'}
          position={'absolute'}
          right={0}
          top={0}
        />

        <Box
          height={'full'}
          onClick={() => handleChangeImage(-1)}
          cursor="pointer"
          width={'50%'}
          position={'absolute'}
          left={0}
          top={0}
        />
      </Box>
    </VStack>
  )
}

export default CityViewMobile
