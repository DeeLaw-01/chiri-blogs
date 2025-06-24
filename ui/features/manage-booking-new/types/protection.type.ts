import { InsuranceTypeStrings } from 'src/shared-types/insurance.type'

export type ProtectionType = {
  product: InsuranceTypeStrings
  expiration_date: string
  is_expired: boolean
  max_compensation: number
  type: any
}
