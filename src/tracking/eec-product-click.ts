const EecProductClickDataLayer = (packageInfo): void => {
  if (window.dataLayer === undefined) return

  let trip_staylenght = 0
  let trip_route_array = []
  const packageAccomodation = sessionStorage.getItem('accomodation')

  packageInfo?.locations.map((item) => {
    return (trip_staylenght += item.stayLength)
  })

  packageInfo?.locations.map((item) => {
    return trip_route_array.push(item.destinationLocode)
  })

  window.dataLayer?.push({
    event: 'eec_productClick',
    ecommerce: {
      currencyCode: packageInfo?.trip_currency_code,
      products: [
        {
          name: packageInfo?.title,
          id: packageInfo?.id,
          price: packageInfo?.price,
          category: packageInfo?.tags,
          package_opt1: packageInfo?.tags?.[0],
          package_opt2: packageInfo?.tags?.[1],
          package_accomodation: packageAccomodation,
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
        },
      ],
    },
  })
}

export { EecProductClickDataLayer }
