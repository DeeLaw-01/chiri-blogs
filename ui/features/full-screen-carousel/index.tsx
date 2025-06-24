'use client'

import { Box, BoxProps, useDisclosure } from '@chakra-ui/react'
import ArrowFullScreenIcon from '@/icons/shared/arrow-full-screen.svg'

import dynamic from 'next/dynamic'
import { theme } from 'src/styles/theme'
import CircleIconWrapper from 'ui/shared/circle-icon-wrapper'

const DynamicFullImageModal = dynamic(() => {
  return import('./full-image-modal')
})

interface FullScreenCarouselProps extends BoxProps {
  images: string[]
  addIcon?: boolean
  children: React.ReactNode
  currentImageIndex?: number
}

export default function FullScreenCarousel({
  images,
  addIcon,
  children,
  currentImageIndex,
  ...rest
}: FullScreenCarouselProps) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Box
        onClick={onOpen}
        _hover={{ cursor: 'pointer' }}
        w="100%"
        h="100%"
        position={'relative'}
        {...rest}
      >
        {addIcon && (
          <CircleIconWrapper
            top="3"
            right={3}
            onClick={onOpen}
            aria-label="Full screen button"
            zIndex={1}
            bg="_white"
            pos="absolute"
          >
            <ArrowFullScreenIcon
              width="13"
              height="13"
              stroke={theme.colors._black}
            />
          </CircleIconWrapper>
        )}
        {children}
      </Box>
      <DynamicFullImageModal
        isOpen={isOpen}
        images={images}
        onClose={onClose}
        currentImageIndex={currentImageIndex}
      />
    </>
  )
}
