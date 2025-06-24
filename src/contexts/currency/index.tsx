import { useState, useEffect, useContext, createContext } from 'react'
import useLocalStorage from 'src/hooks/useLocalStorage'
import { Currency } from 'src/shared-types/currency'
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

    const current = selectedCurrency ?? data.user
    const code = data.rates[current.code]

    setConversionFactor(code)
    if (!selectedCurrency || !code) setSelectedCurrency(current)
  }, [data, selectedCurrency])

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
