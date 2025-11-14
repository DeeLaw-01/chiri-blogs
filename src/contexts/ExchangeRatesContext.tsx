'use client'

import React, { createContext, useContext, ReactNode } from 'react'
import { useExchangeRates, ExchangeRatesHookReturn } from '@/src/hooks/useExchangeRates'

interface ExchangeRatesContextType extends ExchangeRatesHookReturn { }

const ExchangeRatesContext = createContext<ExchangeRatesContextType | undefined>(undefined)

export const useExchangeRatesContext = () => {
  const context = useContext(ExchangeRatesContext)
  if (context === undefined) {
    throw new Error('useExchangeRatesContext must be used within an ExchangeRatesProvider')
  }
  return context
}

interface ExchangeRatesProviderProps {
  children: ReactNode
}

export const ExchangeRatesProvider: React.FC<ExchangeRatesProviderProps> = ({ children }) => {
  const exchangeRatesData = useExchangeRates()

  return (
    <ExchangeRatesContext.Provider value={exchangeRatesData}>
      {children}
    </ExchangeRatesContext.Provider>
  )
}
