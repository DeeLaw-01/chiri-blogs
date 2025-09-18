export type Currency = {
  currency: string
  code: string
  symbol: string
  format: string
}

// Default PKR currency
export const DEFAULT_CURRENCY: Currency = {
  currency: 'Pakistan Rupee',
  code: 'PKR',
  symbol: '₨',
  format: 'D',
}
