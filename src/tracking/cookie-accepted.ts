function cookieBannerAcceptedDataLayer(): void {
  if (window.dataLayer === undefined) return

  window.dataLayer?.push({
    event: 'cookie_banner_accepted',
    cookie_status: 'Accepted',
    cookie_code: '1',
  })
}

export { cookieBannerAcceptedDataLayer }
