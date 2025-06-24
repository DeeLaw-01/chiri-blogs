import { HStack, Box, BoxProps } from '@chakra-ui/react'

import Text from 'ui/primitives/Text'
import { useEffect, ReactNode, useState } from 'react'
import CircleIconWrapper from './circle-icon-wrapper'
import AddIcon from '@/icons/shared/add-icon.svg'
import MinusIcon from '@/icons/shared/minus-icon.svg'
import theme from 'src/styles/theme'
import Tooltip from 'ui/primitives/Tooltip'

interface IncrementerProps extends BoxProps {
  min?: number
  max?: number
  defaultValue?: number
  callback?: any
  isDisabled?: boolean
}
export default function Incrementer({
  min = 0,
  max = 100,
  defaultValue,
  callback,
  isDisabled,
  ...rest
}: IncrementerProps) {
  const [count, setCount] = useState<number>(defaultValue ?? 0)

  useEffect(() => {
    setCount(defaultValue ?? 0)
  }, [defaultValue])

  const increment = () => {
    if (count < max) {
      let newCount = count + 1
      setCount(newCount)
      callback(newCount)
    }
  }

  const decrement = () => {
    if (count > min) {
      let newCount = count - 1
      setCount(newCount)
      callback(newCount)
    }
  }

  const DecreaseWrapper = ({ children }: { children: ReactNode }) => {
    return count <= min ? (
      <>{children}</>
    ) : (
      <Box
        as="button"
        _hover={{ cursor: count <= min ? 'default' : 'pointer' }}
        onClick={(e) => {
          e.preventDefault()
          decrement()
        }}
      >
        {children}
      </Box>
    )
  }

  const IncreaseWrapper = ({ children }: { children: ReactNode }) => {
    return count >= max || isDisabled ? (
      <>{children}</>
    ) : (
      <Box
        as="button"
        _hover={{ cursor: count >= max ? 'default' : 'pointer' }}
        onClick={(e) => {
          e.preventDefault()
          increment()
        }}
      >
        {children}
      </Box>
    )
  }

  return (
    <Box {...rest}>
      <HStack>
        <Tooltip
          textAlign="center"
          renderPopoverOnDesktop
          label={<Text notag st="common.min.reached" />}
        >
          <DecreaseWrapper>
            <CircleIconWrapper bg={count <= min ? '_lightestgray' : ''}>
              <MinusIcon
                width="20"
                height="20"
                stroke={theme.colors.primary}
                strokeWidth="1.5"
              />
            </CircleIconWrapper>
          </DecreaseWrapper>
        </Tooltip>
        <Text fontWeight="medium" fontSize="lg" minW="4" textAlign="center">
          {count}
        </Text>
        <Tooltip
          textAlign="center"
          renderPopoverOnDesktop
          label={<Text notag st="common.max.reached" />}
        >
          <IncreaseWrapper>
            <CircleIconWrapper
              bg={count >= max || isDisabled ? '_lightestgray' : ''}
            >
              <AddIcon
                width="20"
                height="20"
                stroke={theme.colors.primary}
                strokeWidth="1.5"
              />
            </CircleIconWrapper>
          </IncreaseWrapper>
        </Tooltip>
      </HStack>
    </Box>
  )
}
