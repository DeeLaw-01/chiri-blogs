export const getTranslatedPassengerType = (type: string): string => {
  if (type !== 'adult' && type !== 'child' && type !== 'infant') return type
  return `checkout-page.type.${type}`
}
