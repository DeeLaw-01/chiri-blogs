import { VStack, HStack } from '@chakra-ui/react'
import CityItem from './city-item'
import { MotionBox } from 'ui/primitives/Motion'
import { useTripDetailsAtoms } from '../useTripDetailsAtoms'

import { Content } from './city-view-modal'
import { useEffect } from 'react'
const ACTIVE_WIDTH = 420
const INACTIVE_WIDTH = 320

type CityViewDesktopProps = {
  index: number
  handleChangeImage: (n: -1 | 1) => void
  content: Content
  start: () => void
  pause: () => void
  isActive: boolean
}

export default function CityViewDesktop({
  index,
  handleChangeImage,
  content,
  start,
  pause,
  isActive,
}: CityViewDesktopProps) {
  const { setShowCityView } = useTripDetailsAtoms()

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'ArrowLeft') {
        handleChangeImage(-1)
      } else if (event.key === 'ArrowRight') {
        handleChangeImage(1)
      }
    }
    document.addEventListener('keydown', handleKeyPress)

    return () => {
      document.removeEventListener('keydown', handleKeyPress)
    }
  }, [index])

  const handleOnClick = (idx: number) => {
    if (idx === index) return
    else if (idx > index) handleChangeImage(1)
    else if (idx < index) handleChangeImage(-1)
  }

  return (
    <VStack overflow="hidden" onClick={() => setShowCityView({})}>
      <HStack
        marginLeft={'auto !important'}
        alignItems={'center'}
        width={'50%'}
        h="full"
        spacing={0}
        gap={10}
        position={'relative'}
      >
        {content.items.map((item, idx) => {
          return (
            <VStack
              key={idx}
              width={ACTIVE_WIDTH}
              height="90vh"
              justify="space-around"
            >
              <MotionBox
                py="75"
                initial={false}
                position={'relative'}
                animate={{
                  height: idx === index ? '100%' : '75%',
                  left: -INACTIVE_WIDTH * index - 40 * index - ACTIVE_WIDTH / 2,
                  width: idx === index ? ACTIVE_WIDTH : INACTIVE_WIDTH,
                }}
                filter={idx !== index ? 'blur(2px) brightness(0.5)' : 'none'}
                _hover={idx !== index ? { cursor: 'pointer' } : {}}
                onClick={(e) => {
                  e.stopPropagation()
                  handleOnClick(idx)
                }}
              >
                <CityItem
                  index={idx}
                  currentIndex={index}
                  start={start}
                  pause={pause}
                  item={item}
                  title={content.title}
                  subtitle={content.subtitle}
                  photo={content.photo}
                  isActive={isActive}
                />
              </MotionBox>
            </VStack>
          )
        })}
      </HStack>
    </VStack>
  )
}
