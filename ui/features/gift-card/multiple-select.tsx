import { Box } from '@chakra-ui/react'
import { Controller } from 'react-hook-form'
import { useEffect, useState } from 'react'

import Button from 'ui/primitives/Button'
import HorizontalSlider from 'ui/shared/horizontal-slider'
import useTranslation from 'src/hooks/useTranslation'

type NameType = 'amount' | 'passengers'

interface RoundButtonProps {
  children: string
  isActive: boolean
  setActiveValue: (data: string) => void
  field
  name: NameType
  uniqueKey: number
  calculateTotalPrice: (name: string, uniqueKey: number) => {}
  setShowCustomPriceInput: (val: boolean) => {}
  setTotalPeople: (data: number) => {}
}

interface MultipleSelectProps {
  name: NameType
  control
  calculateTotalPrice: (name: string, uniqueKey: number) => {}
  setShowCustomPriceInput: (val: boolean) => {}
  objKeys: any[]
  setTotalPeople: (data: number) => {}
}

const RoundButton = ({
  children,
  isActive,
  setActiveValue,
  field,
  name,
  uniqueKey,
  calculateTotalPrice,
  setShowCustomPriceInput,
  setTotalPeople,
}: RoundButtonProps): JSX.Element => {
  const { t } = useTranslation()

  useEffect(() => {
    if (isActive) {
      field.onChange(uniqueKey)
      calculateTotalPrice(name, uniqueKey)
    }
  }, [])

  const getText = (): string => {
    if (name === 'amount') {
      if (children === 'custom') return t('common.general.custom')

      return `${uniqueKey} €`
    }

    if (name === 'passengers') {
      return t('gift-card.giftcard.form.passenger', {
        count: uniqueKey,
      })
    }
  }

  return (
    <Button
      {...field}
      px="8"
      minW="24"
      secondary
      borderRadius="full"
      fontWeight="normal"
      onClick={() => {
        setActiveValue(children)
        field.onChange(uniqueKey)
        setTotalPeople(uniqueKey)
        calculateTotalPrice(name, uniqueKey)
        setShowCustomPriceInput(children === 'custom')
      }}
      border={'1px solid'}
      bg={isActive ? 'secondary' : '_white'}
      color={isActive ? 'primary' : '_black'}
      borderColor={isActive ? 'transparent' : '_lightgray'}
      _hover={{ borderColor: isActive ? 'primary' : 'gray' }}
    >
      {getText()}
    </Button>
  )
}

export default function MultipleSelect({
  name,
  control,
  objKeys,
  calculateTotalPrice,
  setShowCustomPriceInput,
  setTotalPeople,
}: MultipleSelectProps): JSX.Element {
  const [activeValue, setActiveValue] = useState<string>(objKeys[0])

  useEffect(() => {
    if (name === 'amount' && activeValue === 'custom') {
      calculateTotalPrice('amount', 0)
    }
  }, [name, activeValue])

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Box>
          <HorizontalSlider hideButtons pb="4">
            {objKeys.map((str, idx) => (
              <RoundButton
                key={idx}
                field={field}
                name={name}
                uniqueKey={objKeys[idx]}
                calculateTotalPrice={calculateTotalPrice}
                setActiveValue={setActiveValue}
                isActive={activeValue === objKeys[idx]}
                setShowCustomPriceInput={setShowCustomPriceInput}
                setTotalPeople={setTotalPeople}
              >
                {str}
              </RoundButton>
            ))}
          </HorizontalSlider>
        </Box>
      )}
    />
  )
}
