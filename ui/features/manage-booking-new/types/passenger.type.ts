import { AllowedLuggageType, LuggageType } from './luggage.type'

export type PassengerType = {
  category: PassengerCategoryType
  title: string
  name: string
  surname: string
  nationality: string
  gender: GenderType
  birthday: string
  identification: string
  expiration_date: string
  luggage: LuggageType[]
  allowed_luggage: AllowedLuggageType[]
  missing_fields: string[]
  id: string
}

export type GenderType = 'Male' | 'Female'

export type PassengerCategoryType = 'adult' | 'child' | 'infant'
