export default function generateUUID() {
  const randomValues = crypto.getRandomValues(new Uint8Array(16))
  randomValues[6] = (randomValues[6] & 0x0f) | 0x40 // Set version to 0100
  randomValues[8] = (randomValues[8] & 0x3f) | 0x80 // Set variant to 10

  return [...randomValues]
    .map((b) => ('00' + b.toString(16)).slice(-2))
    .join('')
    .replace(/(.{8})(.{4})(.{4})(.{4})(.{12})/, '$1-$2-$3-$4-$5')
}
