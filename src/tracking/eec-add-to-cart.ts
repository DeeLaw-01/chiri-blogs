const EecAddToCartDataLayer = (): void => {
  if (window.dataLayer === undefined) return

  let trip_staylenght = 0
  let trip_route_array = []
  const packageInfo = JSON.parse(sessionStorage.getItem('packageInformation'))
  const packageAccomodation = sessionStorage.getItem('accomodation')
  const allHotels = JSON.parse(sessionStorage.getItem('allHotels'))
  const transportationModes = JSON.parse(
    sessionStorage.getItem('transportationModes')
  )

  packageInfo?.locations.map((item) => {
    return (trip_staylenght += item.stayLength)
  })

  packageInfo?.locations.map((item) => {
    return trip_route_array.push(item.destinationLocode)
  })

  window.dataLayer?.push({
    event: 'eec_addToCart',
    ecommerce: {
      currencyCode: packageInfo?.trip_currency_code,
      add: {
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
            modes_transportation: transportationModes,
          },
        ],
      },
    },
  })
}

export { EecAddToCartDataLayer }
