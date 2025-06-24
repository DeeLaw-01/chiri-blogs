import { ReactNode } from 'react'
import { Currency } from 'src/shared-types/currency'

export type CurrencyContextType = {
  selectedCurrency: Currency
  conversionFactor: number
  setSelectedCurrency: (value: Currency) => void
}

export type CurrencyProviderProps = {
  children: ReactNode
}
