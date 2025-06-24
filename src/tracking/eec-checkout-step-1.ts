const EecCheckoutStep1DataLayer = (): void => {
  if (window.dataLayer === undefined) return

  let optional_hotels = JSON.parse(localStorage.getItem('hotels'))
  let optional_hotels_cost = JSON.parse(localStorage.getItem('hotelsCost'))
  let total_hotels = JSON.parse(localStorage.getItem('totalHotelsPrice'))
  let trip_staylenght = 0
  let trip_route_array = []
  const packageInfo = JSON.parse(sessionStorage.getItem('packageInformation'))
  const packageAccomodation = sessionStorage.getItem('accomodation')
  const allHotels = JSON.parse(sessionStorage.getItem('allHotels'))
  const transportationModes = JSON.parse(
    sessionStorage.getItem('transportationModes')
  )
  const protectionDetails = JSON.parse(
    sessionStorage.getItem('protection-details')
  )

  packageInfo?.locations.map((item) => {
    return (trip_staylenght += item.stayLength)
  })

  packageInfo?.locations.map((item) => {
    return trip_route_array.push(item.destinationLocode)
  })

  window.dataLayer?.push({
    event: 'eec_checkout',
    ecommerce: {
      currencyCode: packageInfo?.trip_currency_code,
      checkout: {
        actionField: { step: 3 },
        products: [
          {
            name: packageInfo?.title,
            id: packageInfo?.id,
            price: packageInfo?.price,
            category: packageInfo?.tags,
            package_opt1: packageInfo?.tags?.[0],
            package_opt2: packageInfo?.tags?.[1],
            package_accomodation: packageAccomodation,
            accommodation_name: allHotels,
            package_reference: packageInfo?.outstanding
              ? 'Outstanding'
              : 'Normal',
            modes_transportation: transportationModes,
            protection_type: protectionDetails?.insurances,
            protection_value: protectionDetails?.totalPrice,
            trip_departuredate: packageInfo?.startDate,
            trip_returndate: packageInfo?.endDate,
            trip_staylenght: trip_staylenght,
            trip_route: trip_route_array.join(','),
            trip_routenr: packageInfo?.locations?.length,
            adults_nr: packageInfo?.n_adults,
            children_nr: packageInfo?.n_children,
            babies_nr: packageInfo?.n_babies,
            travellers_nr:
              packageInfo?.n_adults +
              packageInfo?.n_children +
              packageInfo?.n_babies,
            optional_hotels: optional_hotels,
            optional_hotels_cost: optional_hotels_cost,
            total_hotels: total_hotels,
          },
        ],
      },
    },
  })
}

export { EecCheckoutStep1DataLayer }
