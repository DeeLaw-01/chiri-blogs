const getDepartureTimeIsDifferentFromArrivalDate = (
  departure_time,
  arrival_time
) => {
  let departure = new Date(departure_time)
  let arrival = new Date(arrival_time)
  departure.setHours(0, 0, 0)
  arrival.setHours(0, 0, 0)
  const timeBetween = arrival.getTime() - departure.getTime()
  const daysBetween = timeBetween / (1000 * 3600 * 24)
  if (departure.getDate() != arrival.getDate())
    return ` +${Math.floor(daysBetween)}`
}

export default getDepartureTimeIsDifferentFromArrivalDate
