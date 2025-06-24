import {
  Box,
  HStack,
  IconButton,
  AspectRatio,
  CloseButton,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import Modal from 'ui/primitives/Modal'
import Text from 'ui/primitives/Text'
import useKeypress from 'react-use-keypress'
import { MotionBox } from 'ui/primitives/Motion'
import { useSwipeable } from 'react-swipeable'
import { AnimatePresence, MotionConfig } from 'framer-motion'

import LeftIcon from '@/icons/shared/left-icon.svg'
import RightIcon from '@/icons/shared/right-icon.svg'
import { theme } from 'src/styles/theme'
import VideoImage from 'ui/primitives/VideoImage'

export const range = (start: number, end: number) => {
  let output = []
  if (typeof end === 'undefined') {
    end = start
    start = 0
  }
  for (let i = start; i < end; i += 1) {
    output.push(i)
  }
  return output
}

interface Coordinates {
  x: number
  y: number
}

export default function FullScreenCarousel({
  images,
  isOpen,
  onClose,
  currentImageIndex,
}) {
  const [activeIndex, setActiveIndex] = useState<number>(
    currentImageIndex ? currentImageIndex : 0
  )
  const [isZoomed, setIsZoomed] = useState<boolean>(false)
  const [offset, setOffset] = useState<Coordinates>({ x: 0, y: 0 })

  useEffect(() => {
    if (currentImageIndex) {
      setActiveIndex(currentImageIndex)
    }
  }, [currentImageIndex])

  const bottomBarImages = images?.filter(() =>
    range(activeIndex - 15, activeIndex + 15)
  )

  const changePhotoId = (newVal: number, exact?: boolean) => {
    // going right
    if (newVal > activeIndex) {
      setActiveIndex((currentIndex) => {
        // when clicked on an image
        if (exact) {
          return newVal
        }

        return (currentIndex += 1)
      })
    } else {
      // going left
      setActiveIndex((currentIndex) => {
        // when clicked on an image
        if (exact) {
          return newVal
        }

        return (currentIndex -= 1)
      })
    }
  }

  useKeypress('ArrowRight', () => {
    if (activeIndex + 1 < images.length) {
      changePhotoId(activeIndex + 1)
    }
  })

  useKeypress('ArrowLeft', () => {
    if (activeIndex > 0) {
      changePhotoId(activeIndex - 1)
    }
  })

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (activeIndex < images?.length - 1) {
        changePhotoId(activeIndex + 1)
      }
    },
    onSwipedRight: () => {
      if (activeIndex > 0) {
        changePhotoId(activeIndex - 1)
      }
    },
    trackMouse: true,
  })

  const handleClick = (e) => {
    e.stopPropagation()
    if (!isZoomed) {
      const x = e.clientX - e.target.offsetLeft
      const y = e.clientY - e.target.offsetTop
      setOffset({ x: x, y: y })
    }
    setIsZoomed(!isZoomed)
  }

  return (
    <Modal
      size={{ base: 'full', lg: 'full' }}
      isOpen={isOpen}
      onClose={onClose}
      initialFocusRef={null}
      addCloseButton={false}
      modalContentStyle={{
        bg: 'transparent',
        borderRadius: 'none',
        backdropFilter: 'blur(8px)',
        marginInline: '0 0',
      }}
      modalBodyStyle={{ p: { base: '0.1rem 0rem' } }}
    >
      <Box
        pt={{ base: '4rem', md: '3rem' }}
        px={{ base: 4, md: 32 }}
        onClick={onClose}
      >
        <HStack w="full" justify="space-between" zIndex={1} pos="relative">
          <Text color="_white">
            {activeIndex + 1}/{images.length}
          </Text>

          <CloseButton
            px="2.5"
            color="white"
            w="fit-content"
            onClick={onClose}
            transform="scale(1.3)"
            _focusVisible={{}}
          />
        </HStack>

        <Box inset="0" pos="fixed" onClick={onClose} />

        <MotionConfig
          transition={{
            opacity: { duration: 0.2 },
            x: { type: 'spring', stiffness: 300, damping: 30 },
          }}
        >
          <HStack
            w="full"
            mt="16"
            justify="center"
            pos="relative"
            px={{ base: 2, md: 32 }}
            {...handlers}
          >
            {/* Main image */}
            <AspectRatio
              pos="relative"
              ratio={16 / 9}
              overflow="hidden"
              onClick={handleClick}
              minW={{ base: '100vw', md: '60vw' }}
              borderRadius={{ base: 'none', md: 'lg' }}
              cursor={isZoomed ? 'zoom-out' : 'zoom-in'}
            >
              <VideoImage
                fill
                src={images[activeIndex]}
                style={{
                  transition: 'transform 0.2s',
                  transform: isZoomed && 'scale(1.5)',
                  transformOrigin: `${offset.x}px ${offset.y}px`,
                }}
                sizes="100vw"
              />
            </AspectRatio>

            {/* Buttons */}
            {activeIndex > 0 && (
              <IconButton
                left="0"
                top={{ base: '120%', md: '50%' }}
                size="lg"
                bg="_white"
                _hover={{}}
                _active={{}}
                pos="absolute"
                boxShadow="md"
                borderRadius="full"
                transform="translateY(-50%)"
                aria-label="Left button"
                icon={
                  <LeftIcon
                    width="14"
                    height="14"
                    stroke={theme.colors._black}
                  />
                }
                onClick={(e) => {
                  e.stopPropagation()
                  changePhotoId(activeIndex - 1)
                }}
              />
            )}
            {activeIndex + 1 < images.length && (
              <IconButton
                right="0"
                top={{ base: '120%', md: '50%' }}
                size="lg"
                _hover={{}}
                _active={{}}
                bg="_white"
                boxShadow="md"
                borderRadius="full"
                transform="translateY(-50%)"
                aria-label="Right button"
                pos="absolute"
                icon={
                  <RightIcon
                    width="14"
                    height="14"
                    stroke={theme.colors._black}
                  />
                }
                onClick={(e) => {
                  e.stopPropagation()
                  changePhotoId(activeIndex + 1)
                }}
              />
            )}
          </HStack>
        </MotionConfig>

        {bottomBarImages.length > 1 && (
          <Box pos="fixed" bottom={8} insetX="0">
            <AnimatePresence initial={false}>
              <HStack w="full" spacing={1} overflow="hidden">
                {bottomBarImages.map((imgUrl, index) => (
                  <MotionBox
                    pos="relative"
                    cursor="pointer"
                    minW="fit-content"
                    key={index}
                    initial={{
                      x: `${Math.max(
                        (activeIndex - 1) * -100,
                        images.length * -100
                      )}%`,
                    }}
                    animate={{
                      x: `calc(${Math.max(
                        activeIndex * -100,
                        images.length * -100
                      )}% + 45vw)`,
                    }}
                    transition={{
                      type: 'tween',
                    }}
                    exit={{ width: '0%' }}
                    onClick={(e) => {
                      e.stopPropagation()
                      changePhotoId(index, true)
                    }}
                  >
                    {index !== activeIndex && (
                      <Box
                        inset="0"
                        bg="black"
                        zIndex={1}
                        opacity={0.4}
                        pos="absolute"
                        borderRadius="lg"
                      />
                    )}

                    <Box
                      w="8rem"
                      h="5rem"
                      pos="relative"
                      overflow="hidden"
                      borderRadius="lg"
                    >
                      <VideoImage
                        fill
                        playing={false}
                        src={imgUrl}
                        sizes="10vw"
                        style={{ objectFit: 'cover' }}
                        alt="small photos on the bottom"
                      />
                    </Box>
                  </MotionBox>
                ))}
              </HStack>
            </AnimatePresence>
          </Box>
        )}
      </Box>
    </Modal>
  )
}
