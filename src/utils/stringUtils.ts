export const replaceChars = (
  str: string,
  charToReplace: string,
  replaceWith: string
): string => {
  if (!str) return
  return str.split(charToReplace).join(replaceWith)
}

export const capitalizeFirstLetter = (text: string): string => {
  return text.charAt(0).toUpperCase() + text.slice(1)
}
