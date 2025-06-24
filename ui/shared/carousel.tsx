import { useEffect, useRef, useState } from 'react'
import { Box, HStack, BoxProps } from '@chakra-ui/react'
import { theme } from 'src/styles/theme'
import Image from 'ui/primitives/Image'

import LeftIcon from '@/icons/shared/left-icon.svg'
import RightIcon from '@/icons/shared/right-icon.svg'
import CircleIconWrapper from './circle-icon-wrapper'
import FullScreenCarousel from 'ui/features/full-screen-carousel'
import { MotionBox, MotionFlex } from 'ui/primitives/Motion'
import { useMotionValue, useSpring } from 'framer-motion'

interface ICarousel extends BoxProps {
  /** Array of images to show within the carousel */
  images: string[]
  /** Alt text all images */
  altText: string
  /** Callback function for clicking on an image */
  onImageClick?: () => void
  /** Nextjs sizes prop for image optimization */
  sizes?: string
  /** Add icon to the full screen viewer */
  addFullScreenIcon?: boolean
  /** Enable full screen view on image click */
  fullScreenView?: boolean
  maxDots?: number
  sendCurrentIndex?: (index: number) => void
}

/**
 * Carousel component to show images in a slider
 */
export default function Carousel({
  images,
  altText = '',
  onImageClick,
  fullScreenView,
  addFullScreenIcon = false,
  sizes,
  maxDots = 3,
  sendCurrentIndex,
  ...rest
}: ICarousel): JSX.Element {
  const [index, setIndex] = useState<number>(0)

  const sliderRef = useRef<HTMLDivElement | null>(null)
  const dotRefs = useRef<Array<HTMLDivElement | null>>([])

  const scrollX = useMotionValue(0)
  const scrollSmoothX = useSpring(scrollX, { bounce: 0, mass: 0.1 })

  const paginate = (direction: 'left' | 'right') => {
    if (index === 0 && direction === 'left') return
    if (index === images.length - 1 && direction === 'right') return

    setIndex((index) => {
      const newIndex = direction === 'left' ? index - 1 : index + 1

      scrollX.set(-sliderRef.current?.offsetWidth * newIndex)
      return newIndex
    })
  }

  // passing the image index
  useEffect(() => {
    sendCurrentIndex && sendCurrentIndex(index)
  }, [index, sendCurrentIndex])

  if (!images || images.length === 0) return null

  return (
    <Box
      w="full"
      h="full"
      role="group"
      pos="relative"
      bg="_lightgray"
      overflow="hidden"
      {...rest}
    >
      <MotionFlex
        ref={sliderRef}
        w="100%"
        h="100%"
        as="section"
        bg="_lightgray"
        style={{
          x: scrollSmoothX,
        }}
      >
        {images.map((img, idx) => {
          // Don't prerender all images that can not be jumped to
          if (idx > index + 2) return

          return (
            <MotionBox
              key={idx}
              h="full"
              minW="full"
              display="block"
              position="relative"
              sx={{
                touchAction: 'pan-y',
              }}
              onPanEnd={(e, info) => {
                paginate(info.offset.x > 50 ? 'left' : 'right')
              }}
            >
              {fullScreenView ? (
                <FullScreenCarousel addIcon={addFullScreenIcon} images={images}>
                  <Image
                    src={img}
                    alt={altText}
                    priority
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes={sizes || '100%'}
                  />
                </FullScreenCarousel>
              ) : (
                <Image
                  fill
                  src={img}
                  alt={altText}
                  onClick={onImageClick}
                  priority={index <= idx}
                  sizes={sizes || '100%'}
                  style={{ objectFit: 'cover' }}
                />
              )}
            </MotionBox>
          )
        })}
      </MotionFlex>

      {index !== 0 && (
        <CircleIconWrapper
          top="50%"
          left="4"
          zIndex={1}
          bg="_white"
          pos="absolute"
          display={{ base: 'none', md: 'flex' }}
          opacity={{ base: 1, md: 0 }}
          _groupHover={{ opacity: 1 }}
          onClick={(e) => {
            e.stopPropagation()
            e.preventDefault()
            paginate('left')
          }}
          transform="translateY(-50%) scale(0.9)"
          aria-label="Left button"
          as="button"
        >
          <LeftIcon width="10" height="10" stroke={theme.colors._black} />
        </CircleIconWrapper>
      )}

      {index !== images.length - 1 && (
        <CircleIconWrapper
          top="50%"
          right="4"
          zIndex={1}
          bg="_white"
          pos="absolute"
          display={{ base: 'none', md: 'flex' }}
          opacity={{ base: 1, md: 0 }}
          _groupHover={{ opacity: 1 }}
          onClick={(e) => {
            e.stopPropagation()
            e.preventDefault()
            paginate('right')
          }}
          transform="translateY(-50%) scale(0.9)"
          aria-label="Right button"
          as="button"
        >
          <RightIcon width="10" height="10" stroke={theme.colors._black} />
        </CircleIconWrapper>
      )}

      <HStack w="full" bottom={4} pos="absolute" justify="center">
        <Box w={`${maxDots * 2 + 2 * (maxDots - 1)}`} overflow="hidden">
          {images.length > 1 && (
            <HStack
              w="full"
              ml="1rem"
              justify="flex-start"
              transition={`transform 0.2s ease-in-out`}
              transform={`translateX(-${index * 1}rem)`}
            >
              {Array.from(Array(images.length).keys()).map((idx) => (
                <Box
                  ref={(el) => (dotRefs.current[idx] = el)}
                  flexShrink={0}
                  h="2"
                  w="2"
                  key={idx}
                  boxShadow="md"
                  borderRadius="full"
                  bg={idx === index ? '_white' : '_lightgray'}
                  opacity={idx === index ? '1' : '0.8'}
                  onClick={(e) => {
                    e.preventDefault()
                    setIndex(idx)
                  }}
                  _hover={{ cursor: 'pointer' }}
                />
              ))}
            </HStack>
          )}
        </Box>
      </HStack>
    </Box>
  )
}
