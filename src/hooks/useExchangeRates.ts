import { useState, useEffect, useCallback } from 'react'

export interface ExchangeRates {
  rates: { [currency: string]: number }
  user: {
    currency: string
    code: string
    symbol: string
    format: string
  }
}

export interface ExchangeRatesHookReturn {
  exchangeRates: ExchangeRates | null
  isLoading: boolean
  error: string | null
  refetch: () => void
  convertEURToPKR: (eurAmount: number) => number
  formatPKRPrice: (eurAmount: number) => string
}

export const useExchangeRates = (): ExchangeRatesHookReturn => {
  const [exchangeRates, setExchangeRates] = useState<ExchangeRates | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchExchangeRates = useCallback(async () => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch(
        'https://rduu3i7qp8.execute-api.eu-central-1.amazonaws.com/prod/v1/currencies/get_exchange_rates?current_currency=EUR',
        {
          headers: {
            'accept': '*/*',
            'accept-language': 'en',
            'content-type': 'application/json',
            'origin': 'https://chiri.pk',
            'referer': 'https://chiri.pk/',
            'user-id': '54dd51dd-4017-43e0-861b-c4fcda4dcfeb',
            'x-api-key': 'FFzpw3LeUc1Lvi6b0xPov4YFefmUQLsJa6WA1AcE'
          }
        }
      )

      if (!response.ok) {
        throw new Error(`Failed to fetch exchange rates: ${response.status}`)
      }

      const data: ExchangeRates = await response.json()
      setExchangeRates(data)
    } catch (err) {
      console.error('Error fetching exchange rates:', err)
      setError(err instanceof Error ? err.message : 'Failed to fetch exchange rates')
    } finally {
      setIsLoading(false)
    }
  }, [])

  const convertEURToPKR = useCallback((eurAmount: number): number => {
    if (!exchangeRates || !exchangeRates.rates.PKR) {
      return eurAmount // Return original amount if no rates available
    }
    return eurAmount * exchangeRates.rates.PKR
  }, [exchangeRates])

  const formatPKRPrice = useCallback((eurAmount: number): string => {
    const pkrAmount = convertEURToPKR(eurAmount)
    return `₨${Math.round(pkrAmount).toLocaleString()}`
  }, [convertEURToPKR])

  useEffect(() => {
    fetchExchangeRates()
  }, [fetchExchangeRates])

  return {
    exchangeRates,
    isLoading,
    error,
    refetch: fetchExchangeRates,
    convertEURToPKR,
    formatPKRPrice
  }
}
