export default function validateFullName(name: string): boolean {
  const nameParts = name.trim().split(' ')
  const lastName = nameParts.slice(1).join(' ')
  return lastName.length > 0
}
