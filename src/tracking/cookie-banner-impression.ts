function cookieBannerDataLayer(): void {
  if (window.dataLayer === undefined) return

  window.dataLayer?.push({
    event: 'cookie_banner_impression',
    cookie_status: 'Viewed',
    cookie_code: '2',
  })
}

export { cookieBannerDataLayer }
