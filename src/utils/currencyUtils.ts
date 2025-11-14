import { ExchangeRates } from "@/src/hooks/useExchangeRates";

/**
 * Convert EUR amount to PKR using exchange rates
 */
export const convertEURToPKR = (
  eurAmount: number,
  exchangeRates: ExchangeRates | null
): number => {
  if (!exchangeRates || !exchangeRates.rates.PKR) {
    return eurAmount; // Return original amount if no rates available
  }
  return eurAmount * exchangeRates.rates.PKR;
};

/**
 * Format PKR price with currency symbol
 */
export const formatPKRPrice = (
  eurAmount: number,
  exchangeRates: ExchangeRates | null
): string => {
  const pkrAmount = convertEURToPKR(eurAmount, exchangeRates);
  return `PKR ${Math.round(pkrAmount).toLocaleString()}`;
};

/**
 * Format PKR amount directly (when amount is already in PKR)
 */
export const formatPKRAmount = (pkrAmount: number): string => {
  return `PKR ${Math.round(pkrAmount).toLocaleString()}`;
};

/**
 * Extract numeric price from string formats like "€123", "$123", "123", etc.
 */
export const extractNumericPrice = (priceString: string): number => {
  // Remove currency symbols and non-numeric characters except dots and commas
  const cleanPrice = priceString.replace(/[^\d.,]/g, "");

  // Handle different decimal separators
  const normalizedPrice = cleanPrice.replace(/,/g, ".");

  return parseFloat(normalizedPrice) || 0;
};

/**
 * Convert any price string to PKR format
 */
export const convertPriceToPKR = (
  priceString: string,
  exchangeRates: ExchangeRates | null
): string => {
  const numericPrice = extractNumericPrice(priceString);
  return formatPKRPrice(numericPrice, exchangeRates);
};

/**
 * Check if exchange rates are available
 */
export const hasExchangeRates = (
  exchangeRates: ExchangeRates | null
): boolean => {
  return exchangeRates !== null && exchangeRates.rates.PKR !== undefined;
};
