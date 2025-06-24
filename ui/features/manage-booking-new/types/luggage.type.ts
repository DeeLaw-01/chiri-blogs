export type LuggageType = {
  type: LuggageItemType
  dimensions: DimensionType
}

export type AllowedLuggageType = {
  type: LuggageItemType
  dimensions: DimensionType
  price: number
}

export enum LuggageItemType {
  PersonalItem = 'personal_item',
  CabinBag = 'cabin_bag',
  HoldBag = 'hold_bag',
}

export type DimensionType = {
  height: number
  width: number
  length: number
  weight: number
  dimensions_sum: number
}
