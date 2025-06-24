import { Icon, VStack } from '@chakra-ui/react'
import { useChangeAccommodationAtoms } from 'ui/features/change-accommodation/useChangeAccommodationAtoms'
import Text from 'ui/primitives/Text'

export type MealPlanItemType = {
  value: any
  icon: 'svg'
  label: any
  count: number
}

type MealPlanItemProps = {
  item: MealPlanItemType
  isSelected: boolean
}

export const MealPlanItem = ({ item, isSelected }: MealPlanItemProps) => {
  const { setFilters } = useChangeAccommodationAtoms()
  const isDisabled = !item.count || item.count < 1

  const handleSelect = () => {
    if (isDisabled) return
    setFilters((prev) => ({ ...prev, mealplan: item.value }))
  }
  return (
    <VStack
      textAlign="center"
      role="group"
      minH="5.5rem"
      opacity={isDisabled ? '0.5' : 1}
    >
      <VStack
        borderRadius="full"
        bg={isSelected ? 'secondary' : '_white'}
        border={isSelected ? '1px solid' : '1px solid'}
        maxW="fit-content"
        minW="12"
        minH="12"
        justify="space-around"
        borderColor={isSelected ? 'primary' : '_lightgray'}
        onClick={handleSelect}
        _hover={{
          borderColor: isDisabled
            ? '_lightgray !important'
            : 'primary !important',
          cursor: isDisabled ? 'not-allowed' : 'pointer',
          border: '1px solid',
        }}
      >
        <Icon
          as={item.icon}
          width="1.2rem"
          height="1.2rem"
          stroke={isSelected ? 'primary' : '_darkgray'}
          _groupHover={{ stroke: isDisabled ? '_darkgray' : 'primary' }}
        />
      </VStack>
      <VStack w="full" onClick={handleSelect}>
        <Text fontSize="xs" noOfLines={1}>
          {item.label}
        </Text>
        {item.count && (
          <Text as="span" fontSize="0.6rem" color="_gray" mt="-2">
            ({item.count})
          </Text>
        )}
      </VStack>
    </VStack>
  )
}
