import { Box, HStack, StackProps, forwardRef } from '@chakra-ui/react'
import { useState, useEffect, useRef, useLayoutEffect } from 'react'
import Text from './Text'

type SegmentedSwitchItem = {
  label: string
  value: any
}

type SegmentedSwitchProps = {
  options: SegmentedSwitchItem[]
  value: any
  onChange: (value: string) => void
} & StackProps

const SegmentedSwitch = forwardRef<SegmentedSwitchProps, 'div'>(
  ({ options, value, onChange, ...rest }, ref) => {
    const [activeIndex, setActiveIndex] = useState(0)
    const itemRefs = useRef<(HTMLDivElement | null)[]>([])
    const [activeBoxStyle, setActiveBoxStyle] = useState({ left: 0, width: 0 })

    useEffect(() => {
      const index = options.findIndex((option) => option.value === value)
      setActiveIndex(index >= 0 ? index : 0)
    }, [value, options])

    useLayoutEffect(() => {
      const activeItem = itemRefs.current[activeIndex]
      if (activeItem) {
        setActiveBoxStyle({
          left: activeItem.offsetLeft,
          width: activeItem.offsetWidth,
        })
      }
    }, [activeIndex])

    return (
      <Box
        position="relative"
        w="fit-content"
        fontSize={{ base: 'xs', md: 'sm' }}
        ref={ref}
        {...rest}
      >
        <HStack
          justify="space-around"
          w="fit-content"
          py={1}
          px={1.5}
          bg="_lightgray"
          borderRadius="full"
          position="relative"
          zIndex={1}
          boxShadow="sm"
        >
          <Box
            position="absolute"
            top="50%"
            left={`${activeBoxStyle.left}px`}
            width={`${activeBoxStyle.width}px`}
            height="calc(100% - 10px)"
            bg="_white"
            borderRadius="full"
            transition="all 0.3s ease"
            boxShadow="md"
            zIndex={0}
            transform="translateY(-50%)"
            padding="5px"
          />

          {options.map((option, index) => (
            <Box
              key={option.value}
              borderRadius="full"
              py={2}
              px={4}
              color={value === option.value ? '_black' : '_gray'}
              onClick={() => onChange(option.value)}
              cursor="pointer"
              zIndex={1}
              position="relative"
              ref={(el) => (itemRefs.current[index] = el)}
              textAlign="center"
            >
              <Text st={option.label} />
            </Box>
          ))}
        </HStack>
      </Box>
    )
  }
)

export default SegmentedSwitch
