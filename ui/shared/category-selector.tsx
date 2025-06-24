import { Box, HStack, RadioGroup, useRadioGroup } from '@chakra-ui/react'
import { useEffect } from 'react'

import Text from 'ui/primitives/Text'
import Tooltip from 'ui/primitives/Tooltip'
import RadioCard from 'ui/shared/radio-card'

import CrossIcon from '@/icons/shared/cross-icon.svg'
import { theme } from 'src/styles/theme'
import CircleIconWrapper from './circle-icon-wrapper'

type CategoryOption = {
  label: string
  tooltip?: string
  value: string | number | null
  selectable?: boolean
}

type CategorySelectorProps = {
  // should have a reset button
  resetButton?: boolean
  // rounded corners
  isRounded?: boolean
  // value for the selector
  val?: string
  // function to set value of selector
  setRadioValue: <T>(prevState: T) => void
  // options
  options: CategoryOption[]
  // no translation
  noTranslate?: boolean
}

export default function CategorySelector({
  resetButton,
  isRounded,
  val,
  setRadioValue,
  options,
  noTranslate,
}: CategorySelectorProps) {
  const { getRadioProps, setValue, value } = useRadioGroup({
    onChange: (e) => setRadioValue(e),
  })

  useEffect((): void => {
    setValue(val ?? '')
  }, [val])

  return (
    <RadioGroup>
      <HStack spacing={1} overflowX="visible">
        {resetButton && value && (
          <Tooltip label={<Text notag st="common.general.clear" />}>
            <Box as="span">
              <CircleIconWrapper
                aria-label="Clear"
                mr="2"
                p={2.5}
                onClick={() => {
                  setRadioValue(null)
                  setValue(null)
                }}
                cursor={'pointer'}
                textColor={theme.colors._gray}
              >
                <CrossIcon width="13" height="13" strokeWidth="2" />
              </CircleIconWrapper>
            </Box>
          </Tooltip>
        )}

        {options.map((option) => {
          let value = option.value
          const radio = getRadioProps({ value })

          return (
            <RadioCard
              key={value}
              {...radio}
              tooltip={option.tooltip}
              isRounded={isRounded}
            >
              {noTranslate ? (
                <Text
                  whiteSpace="nowrap"
                  minW="max-content"
                  fontSize={{ base: 'sm', md: 'md' }}
                >
                  {option.label}
                </Text>
              ) : (
                <Text
                  whiteSpace="nowrap"
                  minW="max-content"
                  st={option.label}
                  fontSize={{ base: 'sm', md: 'md' }}
                />
              )}
            </RadioCard>
          )
        })}
      </HStack>
    </RadioGroup>
  )
}
