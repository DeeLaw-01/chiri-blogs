import { LuggageItemType } from 'ui/features/manage-booking-new/types/luggage.type'

type LuggageDimension = {
  weight: string
  height: string
  width: string
  length: string
}

export type LuggageInfo = {
  price: number
  name: string
  dimensions: LuggageDimension
  type: LuggageItemType
}
