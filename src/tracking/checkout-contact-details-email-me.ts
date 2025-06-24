function contactDetailsEmailMeDataLayer(): void {
  if (window.dataLayer === undefined) return

  window.dataLayer?.push({
    event: 'eec_checkout_step1_click_email_me',
    eec_checkout_step1_email_me_status: 'Click',
  })
}

export { contactDetailsEmailMeDataLayer }
