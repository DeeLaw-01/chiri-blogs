import { useState, useEffect, useContext, createContext } from 'react'
import useLocalStorage from 'src/hooks/useLocalStorage'
import { Currency, DEFAULT_CURRENCY } from 'src/shared-types/currency'
import getCurrencyQuery from 'src/api/queries/get/currencyQuery'
import { useFetch } from 'src/api/useFetch'
import { CurrencyResponse } from 'src/api/queries/get/currencyQuery/currency.type'
import { CurrencyContextType, CurrencyProviderProps } from './currency.type'

const CurrencyContext = createContext<CurrencyContextType | null>(null)

export default function CurrencyProvider({ children }: CurrencyProviderProps) {
  const [selectedCurrency, setSelectedCurrency] =
    useLocalStorage<Currency>('currency')
  const [conversionFactor, setConversionFactor] = useState<number>(1)
  const { data, error } = useFetch<CurrencyResponse>(getCurrencyQuery())

  useEffect(() => {
    if (!data || error) return

    // Use stored currency, fallback to PKR default, then API user currency
    const current = selectedCurrency ?? DEFAULT_CURRENCY
    const code = data.rates[current.code]

    setConversionFactor(code ?? 1)
    if (!selectedCurrency) setSelectedCurrency(current)
  }, [data, error, selectedCurrency, setSelectedCurrency])

  return (
    <CurrencyContext.Provider
      value={{ selectedCurrency, conversionFactor, setSelectedCurrency }}
    >
      {children}
    </CurrencyContext.Provider>
  )
}

export function useSelectedCurrency() {
  const context = useContext(CurrencyContext)
  if (!context) throw new Error('No CurrencyProvider found')

  return context
}
