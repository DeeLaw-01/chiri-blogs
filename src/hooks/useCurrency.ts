import { toNearestOne, toPriceDecimal } from 'src/utils/numberUtils'
import { useSelectedCurrency } from 'src/contexts/currency'

function numberWithCommasOrDots(x, format) {
  if (toNearestOne(x).toString().length < 4) return x
  let number = x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  if (format === 'C') {
    // Workaround to invert the comma with a dot, we need to have a placeholder value "*"
    const newNum = number.replace(',', '*').replace('.', ',').replace('*', '.')
    return newNum
  }
  return number
}

function getCurrencySymbol(currency) {
  return currency?.symbol ?? ''
}

type GetConvertedCurrencyOptions = {
  seperateSymbol?: boolean
  nearestOne?: boolean
  includeCommaValues?: boolean
  prettyPrice?: boolean
  includeCurrencySymbol?: boolean
}

export default function useCurrency() {
  const { selectedCurrency, conversionFactor } = useSelectedCurrency()

  const getPrettyPrice = (
    price,
    includeCommaValues,
    includeCurrencySymbol
  ): string => {
    const currencySymbol = includeCurrencySymbol
      ? getCurrencySymbol(selectedCurrency)
      : ''
    price = includeCommaValues ? toPriceDecimal(price) : toNearestOne(price)

    const prettyPrice = numberWithCommasOrDots(price, selectedCurrency?.format)

    return `${prettyPrice} ${currencySymbol}`
  }

  const getConvertedCurrency = (
    initalPrice,
    options?: GetConvertedCurrencyOptions
  ) => {
    const convertedPrice = initalPrice * conversionFactor

    const nearestOne = options?.nearestOne ?? true
    const includeCommaValues = options?.includeCommaValues ?? false
    const prettyPrice = options?.prettyPrice ?? true
    const includeCurrencySymbol = options?.includeCurrencySymbol ?? true

    const roundedPrice = nearestOne
      ? toNearestOne(convertedPrice)
      : convertedPrice

    if (prettyPrice)
      return getPrettyPrice(
        +roundedPrice,
        includeCommaValues,
        includeCurrencySymbol
      )

    return +roundedPrice
  }

  return { getConvertedCurrency, getPrettyPrice }
}
