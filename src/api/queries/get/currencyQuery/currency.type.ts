import { Currency } from 'src/shared-types/currency'

export type CurrencyResponse = {
  rates: CurrencyRate
  user: Currency
}

export type CurrencyRate = Record<string, number>
