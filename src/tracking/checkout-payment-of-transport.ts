function paymentTransportConfirmation(): void {
  if (window.dataLayer === undefined) return

  window.dataLayer?.push({
    event: 'eec_checkout_step1_payment_transport_confirmation',
    eec_checkout_step1_status: 'Completed',
  })
}

export { paymentTransportConfirmation }
