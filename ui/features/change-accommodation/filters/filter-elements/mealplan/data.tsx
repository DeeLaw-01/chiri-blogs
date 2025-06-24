import AnyIcon from '@/icons/accommodation/mealplan/any.svg'
// import StayOnlyIcon from '@/icons/accommodation/mealplan/stay-only.svg'
import BreakfastIcon from '@/icons/accommodation/mealplan/breakfast.svg'
import HalfBoardIcon from '@/icons/accommodation/mealplan/half-board.svg'
import FullBoardIcon from '@/icons/accommodation/mealplan/full-board.svg'
import AllInclusiveIcon from '@/icons/accommodation/mealplan/all-inclusive.svg'
import { MealPlanItemType } from './mealplan-item'
import Text from 'ui/primitives/Text'

export const data = [
  {
    value: '',
    label: <Text st="common.general.any" />,
    icon: AnyIcon,
  },
  // {
  //   value: '0',
  //   label: <Text st="hotel-info:change.hotel.option.stay.only" />,
  //   icon: StayOnlyIcon,
  // },
  {
    value: 'breakfast_included',
    label: <Text st="hotel-info:change.hotel.option.breakfast" />,
    icon: BreakfastIcon,
  },
  {
    value: 'half_board',
    label: <Text st="hotel-info:change.hotel.option.halfboard" />,
    icon: HalfBoardIcon,
  },
  {
    value: 'full_board',
    label: <Text st="hotel-info:change.hotel.option.fullboard" />,
    icon: FullBoardIcon,
  },
  {
    value: 'all_inclusive',
    label: <Text st="hotel-info:change.hotel.option.allinclusive" />,
    icon: AllInclusiveIcon,
  },
] as MealPlanItemType[]
