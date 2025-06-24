export default function validateName(name: string): boolean {
  const regex = /^\D*$/ // Matches strings that do not contain any numbers
  return regex.test(name)
}
