function tripChangesDataLayer(tripChanges): void {
  if (window.dataLayer === undefined) return

  const packageInfo = JSON.parse(sessionStorage.getItem('packageInformation'))

  window.dataLayer?.push({
    event: 'alert_price_changed',
    description: `Price has changed from ${tripChanges?.last_seen_price} to ${tripChanges?.after?.price_flights}`,
    origin_price: parseInt(tripChanges?.last_seen_price),
    changed_price: tripChanges?.after?.price_flights,
    diff_price: Math.abs(
      tripChanges?.after?.price_flights - tripChanges?.last_seen_price
    ),
    currency: packageInfo?.trip_currency_code,
  })
}

export { tripChangesDataLayer }
