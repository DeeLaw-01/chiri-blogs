function paymentSubmitDataLayer(): void {
  if (window.dataLayer === undefined) return

  const packageInfo = JSON.parse(sessionStorage.getItem('packageInformation'))

  window.dataLayer?.push({
    event: 'eec_checkout_step1_payment',
    eec_checkout_step1_payment: 'Submitted',
    eec_checkout_step1_price: packageInfo?.price,
    eec_checkout_step1_paymentmethod: 'Card',
  })
}

export { paymentSubmitDataLayer }
