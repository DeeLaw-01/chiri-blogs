function cookieBannerDeniedDataLayer(): void {
  if (window.dataLayer === undefined) return

  window.dataLayer?.push({
    event: 'cookie_banner_denied',
    cookie_status: 'Denied',
    cookie_code: '0',
  })
}

export { cookieBannerDeniedDataLayer }
