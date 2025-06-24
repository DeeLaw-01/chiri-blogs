const CheckoutViewItineraryDataLayer = (): void => {
  if (window.dataLayer === undefined) return

  window.dataLayer?.push({
    event: 'eec_checkout_view_itinerary',
    view_itinerary_status: 'Open',
  })
}

export { CheckoutViewItineraryDataLayer }
