export const getTotalTravellers = (
  adults: string | number = 1,
  children: string | number = 0,
  babies: string | number = 0
): number => {
  const totalAdults = parseInt(adults.toString()) || 1
  const totalChildren = parseInt(children.toString()) || 0
  const totalBabies = parseInt(babies.toString()) || 0

  const totalTravellers = totalAdults + totalChildren + totalBabies

  return totalTravellers
}
