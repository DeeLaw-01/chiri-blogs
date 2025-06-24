export type InsuranceTypeStrings = 'flex' | 'disruption' | 'comprehensive'
export type InsuranceTypes = Array<InsuranceTypeStrings>
export type InsuranceOption = {
  price?: number
}
export type InsuranceType = InsuranceTypeStrings | 'NONE' | undefined
