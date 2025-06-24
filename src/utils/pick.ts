export const pick = <T extends Record<string, any>>(
  obj: T,
  keys: (keyof T)[]
): T => {
  return keys.reduce((result, key) => {
    if (key in obj) {
      result[key] = obj[key]
    }
    return result
  }, {} as T)
}
