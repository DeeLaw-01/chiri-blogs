function openPromoboxDataLayer(): void {
  if (window.dataLayer === undefined) return

  window.dataLayer?.push({
    event: 'open_coupon',
    event_status: 'Open',
    page_coupon: '/checkout',
  })
}

export { openPromoboxDataLayer }
