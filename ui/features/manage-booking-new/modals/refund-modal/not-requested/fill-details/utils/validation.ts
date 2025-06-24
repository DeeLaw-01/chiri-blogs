import { CODE_LENGTHS } from './IBAN-codes'

const isValidBIC = (bic: string): boolean => {
  const bicRegex = /^([a-zA-Z]){6}([0-9a-zA-Z]){2}([0-9a-zA-Z]{3})?$/
  return bicRegex.test(bic)
}

const isValidIBANNumber = (input: string): boolean => {
  // Return false if input contains non alphanumeric characters
  if (/[^A-Za-z0-9\s]/.test(input)) {
    return false
  }

  let iban = String(input)
      .toUpperCase()
      .replace(/[^A-Z0-9]/g, ''), // keep only alphanumeric characters
    code = iban.match(/^([A-Z]{2})(\d{2})([A-Z\d]+)$/), // match and capture (1) the country code, (2) the check digits, and (3) the rest
    digits
  // check syntax and length
  if (!code || iban.length !== CODE_LENGTHS[code[1]]) {
    return false
  }
  // rearrange country code and check digits, and convert chars to ints
  digits = (code[3] + code[1] + code[2]).replace(/[A-Z]/g, function (letter) {
    return (letter.charCodeAt(0) - 55).toString()
  })
  // final check
  return mod97(digits) === 1
}

const mod97 = (string: string): number => {
  let checksum, fragment
  checksum = string.slice(0, 2)
  for (let offset = 2; offset < string.length; offset += 7) {
    fragment = String(checksum) + string.substring(offset, offset + 7)
    checksum = parseInt(fragment, 10) % 97
  }
  return checksum
}

export { isValidBIC, isValidIBANNumber }
