'use client'

import {
  Box,
  StackProps,
  HStack,
  IconButton as ChakraIconButton,
} from '@chakra-ui/react'

import Button from 'ui/primitives/Button'
import Text from 'ui/primitives/Text'

import { ReactNode, useEffect, useRef, useState } from 'react'
import { theme } from 'src/styles/theme'

import LeftIcon from '@/icons/shared/left-icon.svg'
import RightIcon from '@/icons/shared/right-icon.svg'

interface HorizontalSliderProps extends StackProps {
  children: ReactNode[]
  hideButtons?: boolean
  heading?: ReactNode
  seeAll?: Function
}

const isOverflowing = (element: HTMLElement) => {
  return element.scrollWidth > element.offsetWidth
}

const IconButton = ({ children, ...rest }: { children: ReactNode }) => {
  return (
    <ChakraIconButton
      {...rest}
      p={2}
      size="sm"
      bg="transparent"
      borderRadius="full"
      border="1px solid"
      borderColor="_lightgray"
      aria-label="Slide to left"
      _hover={{ cursor: 'pointer', bg: '_lightestgray' }}
    >
      {children}
    </ChakraIconButton>
  )
}

const HorizontalSlider = ({
  children,
  heading,
  hideButtons,
  seeAll,
  ...rest
}: HorizontalSliderProps): JSX.Element => {
  const ref = useRef<HTMLDivElement | null>(null)
  const [showScrollArrows, setShowScrollArrows] = useState<boolean>()
  const [disabledButtons, setDisabledButtons] = useState({
    left: false,
    right: false,
  })

  useEffect(() => {
    // Initialize with correct value.
    setShowScrollArrows(isOverflowing(ref.current))

    // Initialize with correct disbaled state
    setDisabledStates()
  })

  useEffect(() => {
    // Update show scroll arrows value on resize window as it is not forced automatically
    window.addEventListener('resize', getSetScrollArrowsValue)
    return () => window.removeEventListener('resize', getSetScrollArrowsValue)
  }, [])

  const getSetScrollArrowsValue = () => {
    setShowScrollArrows(isOverflowing(ref.current))
  }

  const scroll = (direction: 'LEFT' | 'RIGHT'): void => {
    const singleItemWidth = ref.current.scrollWidth / children?.length - 1
    if (direction === 'LEFT') ref.current.scrollLeft -= singleItemWidth
    else ref.current.scrollLeft += singleItemWidth

    setDisabledStates()
  }

  const setDisabledStates = () => {
    setTimeout(() => {
      if (ref.current) {
        const singleItemWidth = ref.current.scrollWidth / children?.length - 1
        const amountToScroll = singleItemWidth * (children?.length - 2)

        setDisabledButtons({
          left: ref.current.scrollLeft === 0,
          right: ref.current.scrollLeft > amountToScroll,
        })
      }
    }, 500)
  }

  return (
    <>
      <HStack w="full" justifyContent={'space-between'} mb={2}>
        <Box>{heading}</Box>

        {showScrollArrows && (
          <HStack display={hideButtons ? 'none' : 'flex'}>
            {seeAll && (
              <Button
                asLink
                fontWeight="normal"
                onClick={() => seeAll()}
                _hover={{ textDecoration: 'underline', cursor: 'pointer' }}
              >
                <Text st="common.see.all" notag />
              </Button>
            )}
            <IconButton
              aria-label="Slide to left"
              onClick={() => scroll('LEFT')}
              isDisabled={disabledButtons.left}
            >
              <LeftIcon width="12" height="12" stroke={theme.colors._black} />
            </IconButton>
            <IconButton
              aria-label="Slide to right"
              onClick={() => scroll('RIGHT')}
              isDisabled={disabledButtons.right}
            >
              <RightIcon width="12" height="12" stroke={theme.colors._black} />
            </IconButton>
          </HStack>
        )}
      </HStack>
      <HStack
        ref={ref}
        maxW="100%"
        overflowY="hidden"
        scrollBehavior={'smooth'}
        style={{ scrollbarWidth: 'none' }}
        overflowX={{ base: 'auto', md: 'hidden' }}
        {...rest}
      >
        {children}
      </HStack>
    </>
  )
}

export default HorizontalSlider
