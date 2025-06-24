function EmailMeSubmittedDataLayer(): void {
  if (window.dataLayer === undefined) return

  window.dataLayer?.push({
    event: 'eec_checkout_step1_complete_email_me',
  })
}

export { EmailMeSubmittedDataLayer }
