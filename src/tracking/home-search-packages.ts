export const searchPackages = (
  dateRange,
  adults,
  babies,
  children,
  totalTravelers
): void => {
  if (window.dataLayer === undefined) return

  const tripStyle = sessionStorage.getItem('tripStyle')

  window.dataLayer.push({
    event: 'searchPackages',
    trip_departuredate: dateRange,
    trip_returndate: dateRange,
    adults_nr: adults,
    children_nr: children,
    babies_nr: babies,
    travellers_nr: totalTravelers,
    trip_style: tripStyle,
  })
}
