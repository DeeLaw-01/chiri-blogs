export const addAccommodation = (): void => {
  if (window.dataLayer === undefined) return

  let trip_staylenght = 0
  let trip_route_array = []
  const packageInfo = JSON.parse(sessionStorage.getItem('packageInformation'))
  const packageAccomodation = sessionStorage.getItem('accomodation')
  const transportationModes = JSON.parse(
    sessionStorage.getItem('transportationModes')
  )

  packageInfo?.locations.map((item) => {
    return (trip_staylenght += item.stayLength)
  })

  packageInfo?.locations.map((item) => {
    return trip_route_array.push(item.destinationLocode)
  })

  window.dataLayer.push({
    event: 'addAccommodation',
    name: packageInfo?.title,
    id: packageInfo?.id,
    price: packageInfo?.price,
    package_accomodation: packageAccomodation,
    accomodation_name: null,
    package_reference: packageInfo?.outstanding ? 'Outstanding' : 'Normal',
    trip_departuredate: packageInfo?.startDate,
    trip_returndate: packageInfo?.endDate,
    trip_staylenght: trip_staylenght,
    trip_route: trip_route_array.join(','),
    trip_routenr: packageInfo?.locations?.length,
    adults_nr: packageInfo?.n_adults,
    children_nr: packageInfo?.n_children,
    babies_nr: packageInfo?.n_babies,
    travellers_nr:
      packageInfo?.n_adults + packageInfo?.n_children + packageInfo?.n_babies,
    modes_transportation: transportationModes,
  })
}
