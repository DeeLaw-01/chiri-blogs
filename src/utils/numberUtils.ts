export const getAverage = (average: number, base: number): number => {
  let perc = Math.round(((average - base) / average) * 100)
  return perc
}

export const toNearestOne = (num: number): number => {
  return Math.ceil(num)
}

export const toPriceDecimal = (num: number): string => {
  if (isNaN(Number(num))) return ''
  return Number(num).toFixed(2)
}

export const toFixedOneSingleDigit = (num: number): string => {
  if (isNaN(Number(num))) return ''
  return num >= 10 ? num.toString() : Number(num).toFixed(1)
}

export const withLeadingZero = (num: number): string => {
  if (num < 10) return '0' + num
  else return '' + num
}

export const withoutLeadingZero = (value: string | number): number => {
  return parseInt(value.toString(), 10)
}
