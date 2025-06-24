export const viewStayDetails = (hotel): void => {
  if (window.dataLayer === undefined) return

  window.dataLayer.push({
    event: 'detailsAccommodationAlternatives',
    changedAccommodation: hotel?.name,
    priceAccommodation: hotel?.price_hotel,
  })
}
