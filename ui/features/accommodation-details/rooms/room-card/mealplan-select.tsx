import { Box, VStack, RadioGroup } from '@chakra-ui/react'
import Text from 'ui/primitives/Text'
import Radio from 'ui/primitives/Radio'
import useCurrency from 'src/hooks/useCurrency'
import type { RoomInfo } from 'src/shared-types/hotel-details.type'
import { Mealplan } from '../../useAccommodationDetailsAtoms'

type MealPlanSelectProps = {
  room: RoomInfo
  mealplan: Mealplan
  setMealplan: (mealplan: Mealplan) => void
}
export default function MealplanSelect({
  room,
  mealplan,
  setMealplan,
}: MealPlanSelectProps) {
  const { getConvertedCurrency } = useCurrency()

  return (
    <Box>
      <Text fontSize="sm" fontWeight="medium" st="new-hotel-page:meal.plan" />
      <RadioGroup
        size="sm"
        colorScheme="orange"
        value={mealplan}
        onChange={setMealplan}
      >
        <VStack alignItems="flex-start" gap="0.1rem">
          <Radio value="">
            <Text as={'span'} st="new-hotel-page:mealplan.room" />{' '}
            <Text as="span" color="_gray" fontSize="xs">
              (+{getConvertedCurrency(0)})
            </Text>
          </Radio>
          {room.breakfast_included && (
            <MealPlanRadioOption
              type={'BREAKFAST'}
              cost={room.breakfast_cost}
            />
          )}

          {room.half_board && (
            <MealPlanRadioOption
              type={'HALFBOARD'}
              cost={room.half_board_cost}
            />
          )}
          {room.full_board && (
            <MealPlanRadioOption
              type={'FULLBOARD'}
              cost={room.full_board_cost}
            />
          )}
          {room.all_inclusive && (
            <MealPlanRadioOption
              type={'ALLINCLUSIVE'}
              cost={room.all_inclusive_cost}
            />
          )}
        </VStack>
      </RadioGroup>
    </Box>
  )
}

function MealPlanRadioOption({ type, cost }: { type: Mealplan; cost: number }) {
  const { getConvertedCurrency } = useCurrency()
  return (
    <Radio value={type}>
      <Text
        st={`new-hotel-page:mealplan.${type.toLocaleLowerCase()}`}
        as={'span'}
      />{' '}
      <Text as="span" color="_gray" fontSize="xs">
        (+{getConvertedCurrency(cost)})
      </Text>
    </Radio>
  )
}
